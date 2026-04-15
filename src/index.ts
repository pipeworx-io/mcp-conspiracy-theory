interface McpToolDefinition {
  name: string;
  description: string;
  inputSchema: {
    type: 'object';
    properties: Record<string, unknown>;
    required?: string[];
  };
}

interface McpToolExport {
  tools: McpToolDefinition[];
  callTool: (name: string, args: Record<string, unknown>) => Promise<unknown>;
}

/**
 * conspiracy-theory MCP — wraps StupidAPIs (requires X-API-Key)
 *
 * Generate conspiracy theories. Three modes: connect (link two things), investigat
 */


const API_KEY = '6e0ddbe88486dc354370290979829dc892b0386bd789ae5a';

const tools: McpToolExport['tools'] = [
  {
    name: 'conspiracy_theory_generate',
    description: 'Generate conspiracy theories. Three modes: connect (link two things), investigate (three theories about one event), complete (escalate an observation).',
    inputSchema: {
      type: 'object' as const,
      properties: {"mode": {"type": "string", "enum": ["connect", "investigate", "complete"]}, "thing_one": {"type": "string", "description": "First thing to connect (connect mode)"}, "thing_two": {"type": "string", "description": "Second thing to connect (connect mode)"}, "event": {"type": "string", "description": "Event to investigate (investigate mode)"}, "prompt": {"type": "string", "description": "\"I have noticed that...\" (complete mode)"}, "depth": {"type": "string", "enum": ["surface", "deep", "full_tinfoil"]}, "confidence": {"type": "string", "enum": ["low", "medium", "high", "suspiciously_high"]}},
      required: ["mode"],
    },
  },
];

async function callApi(url: string, args: Record<string, unknown>): Promise<unknown> {
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries(args)) {
    if (v !== undefined && v !== null && v !== '') {
      params.set(k, String(v));
    }
  }
  const fullUrl = params.toString() ? url + '?' + params.toString() : url;
  const res = await fetch(fullUrl, {
    headers: { 'X-API-Key': API_KEY },
  });
  if (!res.ok) throw new Error('conspiracy-theory API error: ' + res.status);
  return res.json();
}

async function callTool(name: string, args: Record<string, unknown>): Promise<unknown> {
  switch (name) {
    case 'conspiracy_theory_generate':
      return callApi('https://api.stupidapis.com/conspiracy-theory/generate', args);
    default:
      throw new Error('Unknown tool: ' + name);
  }
}

export default { tools, callTool } satisfies McpToolExport;
