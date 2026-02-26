import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const msg = await anthropic.messages.create({
  model: "claude-3-opus-20240229",
  max_tokens: 100,
  messages: [{ role: "user", content: "Hello!" }],
});

console.log(msg.content);
