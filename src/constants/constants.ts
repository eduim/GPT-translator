if (!process.env.OPENAI_API_KEY) {
  throw new Error("missing OPENAI_API_KEY");
}

export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
