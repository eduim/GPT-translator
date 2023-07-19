"use client";
import useLanguage from "../customHooks/useLanguage";
import { Languages } from "../types/types";
import {
  SUPPORTED_LANGUAGES,
  AUTO_LANGUAGE,
} from "../constants/supportedLanguages";

import DropDown from "../components/dropdown";
import ArrowIcon from "../components/arrowicon";
import LargeText from "../components/largetext";
import LargeTextInput from "../components/largetextinput";
import ToggleButton from "@/components/togglebutton";
import { useEffect } from "react";
import { useDebounce } from "../customHooks/useDebounce";

function App() {
  const {
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
  } = useLanguage();

  const debounceTextFrom = useDebounce(textFrom);

  useEffect(() => {
    if (textFrom === "") return;

    fetch("api/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        languageFrom,
        languageTo,
        traductionFormal,
        text: debounceTextFrom,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setResult(data);
      })
      .catch((err) => {
        setResult("Error, repeat again");
      });
  }, [debounceTextFrom, languageFrom, languageTo, traductionFormal]);

  return (
    <>
      <h1 className="flex justify-center my-4 text-3xl font-bold">
        GPT translator
      </h1>
      <div className="flex gap-6 justify-between max-w-md m-auto py-1 content-center">
        <span className="w-20 flex items-center	 justify-start">
          {SUPPORTED_LANGUAGES[languageFrom as Languages] || AUTO_LANGUAGE}
        </span>
        <button
          className="border rounded-md p-3"
          onClick={switchLanguage}
          disabled={languageFrom === AUTO_LANGUAGE}
        >
          <ArrowIcon />
        </button>
        <span className="w-20 flex items-center	justify-end">
          {SUPPORTED_LANGUAGES[languageTo as Languages]}
        </span>
      </div>
      <div className="flex gap-6 justify-between max-w-md m-auto py-1 content-center">
        <span className="w-20 flex items-center	 justify-start">Informal</span>
        <ToggleButton
          type={traductionFormal}
          setTypeTraduction={setTypeTraduction}
        />
        <span className="w-20 flex items-center	 justify-end">Formal</span>
      </div>
      <div className="flex max-w-md m-auto items-center">
        <div className="grow">
          <DropDown
            type="from"
            value={languageFrom}
            setLanguage={setLanguageFrom}
          />
          <DropDown type="to" value={languageTo} setLanguage={setLanguageTo} />
        </div>
      </div>
      <div>
        <LargeTextInput text={textFrom} setText={setTextFrom} />
        <LargeText text={result} loading={loading} />
      </div>
    </>
  );
}

export default App;
