"use client";
import { useReducer } from "react";
import { State, Action, Languages, FromLanguage } from "../types/types";
import {
  SUPPORTED_LANGUAGES,
  AUTO_LANGUAGE,
} from "../constants/supportedLanguages";

const initialState: State = {
  languageFrom: "Auto",
  languageTo: "en",
  textFrom: "",
  result: "",
  traductionFormal: false,
  loading: false,
};

function reducer(state: State, action: Action) {
  const { type } = action;

  if (type === "INTERCHANGE_LANGUAGE") {
    if (state.languageFrom === AUTO_LANGUAGE) return state;

    const loading = state.textFrom !== "";

    return {
      ...state,
      loading,
      result: "",
      languageFrom: state.languageTo,
      languageTo: state.languageFrom,
    };
  }

  if (type === "SET_LANGUAGE_FROM") {
    if (state.languageFrom === action.payload) return state;

    const loading = state.textFrom !== "";

    return {
      ...state,
      languageFrom: action.payload,
      result: "",
      loading,
    };
  }

  if (type === "SET_LANGUAGE_TO") {
    if (state.languageTo === action.payload) return state;
    const loading = state.textFrom !== "";

    return {
      ...state,
      languageTo: action.payload,
      result: "",
      loading,
    };
  }

  if (type === "SET_TEXT_FROM") {
    const loading = action.payload !== "";

    return {
      ...state,
      loading: loading,
      textFrom: action.payload,
      result: "",
    };
  }

  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: action.payload,
    };
  }

  if (type === "SET_TYPE_TRADUCTION") {
    return {
      ...state,
      formal: !state.traductionFormal,
    };
  }

  return state;
}

function useLanguage() {
  const [
    { languageFrom, languageTo, textFrom, result, loading, traductionFormal },
    dispatch,
  ] = useReducer(reducer, initialState);

  const switchLanguage = () => {
    dispatch({ type: "INTERCHANGE_LANGUAGE" });
  };

  const setLanguageFrom = (payload: FromLanguage) => {
    dispatch({ type: "SET_LANGUAGE_FROM", payload });
  };

  const setLanguageTo = (payload: Languages) => {
    dispatch({ type: "SET_LANGUAGE_TO", payload });
  };

  const setTextFrom = (payload: string) => {
    dispatch({ type: "SET_TEXT_FROM", payload });
  };

  const setResult = (payload: string) => {
    dispatch({ type: "SET_RESULT", payload });
  };

  const setTypeTraduction = () => {
    dispatch({ type: "SET_TYPE_TRADUCTION" });
  };

  return {
    languageFrom,
    languageTo,
    textFrom,
    result,
    loading,
    traductionFormal,
    switchLanguage,
    setLanguageFrom,
    setLanguageTo,
    setTextFrom,
    setResult,
    setTypeTraduction,
  };
}

export default useLanguage;
