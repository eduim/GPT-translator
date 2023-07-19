import {
  SUPPORTED_LANGUAGES,
  AUTO_LANGUAGE,
} from "../constants/supportedLanguages";

export type State = {
  languageFrom: FromLanguage;
  languageTo: Languages;
  textFrom: string;
  result: string;
  traductionFormal: boolean;
  loading: boolean;
};

export type DropdownProps =
  | {
      type: "from";
      value: FromLanguage;
      setLanguage: (payload: FromLanguage) => void;
    }
  | {
      type: "to";
      value: Languages;
      setLanguage: (payload: Languages) => void;
    };

export type LargeTextInputProps = {
  text: string;
  setText: (text: string) => void;
};

export type LargeTextProps = {
  text: string;
  loading: boolean;
};

export type ToggleButtonProps = {
  type: boolean;
  setTypeTraduction: () => void;
};

export type Languages = keyof typeof SUPPORTED_LANGUAGES;

export type AutoLanguage = typeof AUTO_LANGUAGE;

export type FromLanguage = Languages | AutoLanguage;

export type Action =
  | { type: "INTERCHANGE_LANGUAGE" }
  | { type: "SET_LANGUAGE_FROM"; payload: FromLanguage }
  | { type: "SET_LANGUAGE_TO"; payload: Languages }
  | { type: "SET_TEXT_FROM"; payload: string }
  | { type: "SET_RESULT"; payload: string }
  | { type: "SET_TYPE_TRADUCTION" };
