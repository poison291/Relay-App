package main

import (
	"bufio"
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strings"
)

type Message struct{ Role, Content string }
type Request struct {
	Model    string
	Messages []Message
	Stream   bool
}
type Response struct{ Message Message }

func main() {
	history := []Message{{Role: "system", Content: "You are LLama, a helpful AI assistant."}}
	reader := bufio.NewReader(os.Stdin)
	fmt.Println("=== Mill Chat CLI ===\nType 'exit' to quit.")
	for {
		fmt.Print("\nYou: ")
		input, _ := reader.ReadString('\n')
		input = strings.TrimSpace(input)
		if input == "exit" {
			fmt.Println("Exiting...")
			break
		}
		history = append(history, Message{"user", input})
		aiText, err := ask(history)
		if err != nil {
			fmt.Println("Error:", err)
			continue
		}
		history = append(history, Message{"assistant", aiText})
		
	}
}

func ask(history []Message) (string, error) {
	req := Request{
		Model:    "llama3.2:1b",
		Messages: history,
		Stream:   true,
	}

	js, _ := json.Marshal(req)
	resp, err := http.Post(
		"http://localhost:11434/api/chat",
		"application/json",
		bytes.NewReader(js),
	)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	reader := bufio.NewReader(resp.Body)
	var fullResponse strings.Builder

	for {
		line, err := reader.ReadBytes('\n')
		if err != nil {
			break
		}

		var chunk struct {
			Message struct {
				Content string `json:"content"`
			} `json:"message"`
			Done bool `json:"done"`
		}

		if err := json.Unmarshal(line, &chunk); err != nil {
			continue
		}

		if chunk.Message.Content != "" {
			fmt.Print(chunk.Message.Content)
			fullResponse.WriteString(chunk.Message.Content)
		}

		if chunk.Done {
			fmt.Println()
			break
		}
	}

	return fullResponse.String(), nil
}
