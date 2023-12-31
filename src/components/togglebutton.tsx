import { Switch } from "@headlessui/react";
import { classNames } from "@/lib/className";
import { ToggleButtonProps } from "../types/types";
export default function ToggleButton({
  type,
  setTypeTraduction,
}: ToggleButtonProps) {
  return (
    <Switch
      checked={type}
      onChange={() => {
        setTypeTraduction();
      }}
      className={classNames(
        type ? "bg-gray-400" : "bg-gray-200",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          type ? "translate-x-5" : "translate-x-0",
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        )}
      />
    </Switch>
  );
}
