import { LargeTextInputProps } from "../types/types";

const LargeTextInput = ({ text, setText }: LargeTextInputProps) => {
  console.log("text", text);
  return (
    <div className="max-w-md mt-2 m-auto">
      <label
        htmlFor="comment"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        From
      </label>
      <div className="mt-2">
        <textarea
          rows={4}
          name="comment"
          id="comment"
          onChange={(e) => setText(e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={text}
          value={text}
        />
      </div>
    </div>
  );
};

export default LargeTextInput;
