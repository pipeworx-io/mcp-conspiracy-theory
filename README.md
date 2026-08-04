# mcp-conspiracy-theory

conspiracy-theory MCP — wraps StupidAPIs (requires X-API-Key)

Part of [Pipeworx](https://pipeworx.io) — an MCP gateway connecting AI agents to 1394+ live data sources.

## Tools

| Tool | Description |
|------|-------------|
| `conspiracy_theory_generate` | Generate a conspiracy theory in one of three modes: 'connect' (link thing_one + thing_two), 'investigate' (explore an event), or 'complete' (extend an "I have noticed that..." prompt). Control depth (surface/deep/full_tinfoil) and confidence level. |

## Quick Start

Add to your MCP client (Claude Desktop, Cursor, Windsurf, etc.):

```json
{
  "mcpServers": {
    "conspiracy-theory": {
      "url": "https://gateway.pipeworx.io/conspiracy-theory/mcp"
    }
  }
}
```

Or connect to the full Pipeworx gateway for access to all 1394+ data sources:

```json
{
  "mcpServers": {
    "pipeworx": {
      "url": "https://gateway.pipeworx.io/mcp"
    }
  }
}
```

## Using with ask_pipeworx

Instead of calling tools directly, you can ask questions in plain English:

```
ask_pipeworx({ question: "your question about Conspiracy Theory data" })
```

The gateway picks the right tool and fills the arguments automatically.

## More

- [Docs and guides](https://pipeworx.io/docs)
- [pipeworx.io](https://pipeworx.io)

## License

MIT
