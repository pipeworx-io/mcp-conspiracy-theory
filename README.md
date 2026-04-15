# mcp-conspiracy-theory

conspiracy-theory MCP — wraps StupidAPIs (requires X-API-Key)

Part of the [Pipeworx](https://pipeworx.io) open MCP gateway.

## Tools

| Tool | Description |
|------|-------------|
| `conspiracy_theory_generate` | Generate conspiracy theories. Three modes: connect (link two things), investigate (three theories about one event), complete (escalate an observation). |

## Quick Start

Add to your MCP client config:

```json
{
  "mcpServers": {
    "conspiracy-theory": {
      "url": "https://gateway.pipeworx.io/conspiracy-theory/mcp"
    }
  }
}
```

Or use the CLI:

```bash
npx pipeworx use conspiracy-theory
```

## License

MIT
