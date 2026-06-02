# mcp-conspiracy-theory

conspiracy-theory MCP — wraps StupidAPIs (requires X-API-Key)

Part of [Pipeworx](https://pipeworx.io) — an MCP gateway connecting AI agents to 673+ live data sources.

## Tools

| Tool | Description |
|------|-------------|
| `conspiracy_theory_generate` | Generate conspiracy theories by connecting unrelated concepts, investigating events with multiple theories, or escalating observations into narratives. Returns theory text with supporting connections. Modes: \'connect\' (link two things), \'investigate\' (explore event), \'escalate\' (build narrative from observation). |

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

Or connect to the full Pipeworx gateway for access to all 673+ data sources:

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

- [All tools and guides](https://github.com/pipeworx-io/examples)
- [pipeworx.io](https://pipeworx.io)

## License

MIT
