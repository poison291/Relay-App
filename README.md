Relay
====

A local-first AI desktop app for Windows that runs language models directly on your machine.

Overview
--------

Relay is a clean, fast desktop interface for local LLMs built without relying on cloud APIs, browser limitations, or heavyweight tooling. Most existing options either feel over-engineered, locked behind services, or aren't really designed for daily use.

Relay combines a Go-based backend with a React UI, packaged as a native Windows desktop application using Tauri. The backend handles model communication and streaming responses, while the frontend focuses on being minimal, fast, and usable.

Everything runs locally. No telemetry. No external inference.

Philosophy
----------

This project is still evolving. The goal isn't to compete with large platforms, but to build something practical and understandable that does one thing well: give you control over your local AI setup.

Relay is opinionated by design:

*   **Local execution over remote APIs** – Your data stays on your machine. No cloud dependencies, no network requests for inference.
    
*   **Native desktop behavior instead of browser-only UX** – Built as a proper desktop application with OS-level integration using Tauri, not a web app pretending to be native.
    
*   **Simple architecture over complex abstractions** – Straightforward codebase that you can actually read and understand. No unnecessary layers or magic.
    

Why Relay?
---------

### Privacy by Default

Since everything runs locally, your conversations, prompts, and data never leave your machine. No logging, no tracking, no "improving our services."

### Fast and Lightweight

Built with performance in mind. Go handles the heavy lifting efficiently, Tauri provides a minimal native wrapper, and React keeps the UI responsive without bloat.

### Transparent and Hackable

The architecture is intentionally simple. If you want to modify how it works, you can. If something breaks, you can debug it.

### Own Your Tools

You're not renting access to someone else's infrastructure. You're running your own models, on your own hardware, with full control.

Architecture
------------

*   **Backend:** Go service that manages model loading, inference requests, and response streaming
    
*   **Frontend:** React-based UI focused on clarity and speed
    
*   **Packaging:** Tauri-based native Windows desktop application
    
*   **Communication:** Clean API layer between frontend and backend with real-time streaming support
    

Current State
-------------

Expect rough edges, iteration, and changes as the project grows. This is a tool built from use, not a product pitch.

**Current Platform:** Windows only (Tauri)

**Features Currently Supported:**

*   Model management and switching
    
*   Real-time streaming responses
    
*   Conversation history
    
*   Minimal, distraction-free interface
    

Who This Is For
---------------

If you care about owning your tools and understanding how they work, Relay is for you.

This project is for people who:

*   Value privacy and local-first software
    
*   Want to run AI models without cloud dependencies
    
*   Prefer simple, understandable tools over feature-packed platforms
    
*   Care about performance and resource efficiency
    
*   Believe software should be transparent and modifiable
    

Getting Started
---------------

### System Requirements

*   Windows 10/11
    
*   Sufficient RAM for your chosen models (typically 8GB minimum, 16GB+ recommended)
    
*   Storage space for model files

Contributing
------------

Relay is open to contributions, feedback, and ideas. Since this is an evolving project built from real use cases, practical improvements and bug reports are especially valuable.

Roadmap
-------

*   **Current Focus:** Stabilizing Windows support
    
*   **Future Considerations:** macOS and Linux builds
