import { openAIclient } from "./gptClient";
import { FromLanguage, Languages } from "../types/types";

import {
  AUTO_LANGUAGE,
  SUPPORTED_LANGUAGES,
} from "@/constants/supportedLanguages";

const getTranslatedText = async (
  text: string,
  languageFrom: FromLanguage,
  languageTo: Languages,
  traductionFormal: boolean
) => {
  let translateFrom = `from ${languageFrom}`;
  let traductionType = "informal";

  if (languageFrom === AUTO_LANGUAGE) {
    translateFrom = "";
  }

  if (traductionFormal) {
    traductionType = "formal";
  }

  return await openAIclient.createCompletion({
    model: "text-davinci-003",
    prompt: `Translate the following in ${traductionType} language sentence from ${translateFrom} to ${SUPPORTED_LANGUAGES[languageTo]}: ${text}`,
    temperature: 0,
    max_tokens: 140,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
};

export default getTranslatedText;
