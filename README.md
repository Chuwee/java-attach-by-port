# Java: Attach by Debug Port

Attach VS Code’s Java debugger to an already running JVM using a JDWP port — without `launch.json` and without restarting your application.

This extension provides an IntelliJ-style “remote attach” workflow, but fully integrated with VS Code’s native Java debugging (breakpoints, variables, threads, etc.).

---

## Features

- Attach to a running Java process by JDWP port
- Uses VS Code’s **native Java debugger**
- Full breakpoint support (including conditional breakpoints)
- No `launch.json` required
- Works with any Java launcher or framework
- Localhost-only (safe by default)

---

## Requirements

- VS Code **Java Extension Pack**
- A running JVM with JDWP enabled

Example JVM startup:

```bash
java \
  -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=127.0.0.1:5005 \
  -jar app.jar
