import { Configuration, OpenAIApi } from "openai";
import { OPENAI_API_KEY } from "../constants/constants";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

export const openAIclient = new OpenAIApi(configuration);
