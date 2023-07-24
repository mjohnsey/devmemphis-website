import React from "react";
import { useTheme } from "@skagami/gatsby-plugin-dark-mode";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
export const ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme();

  // Don't render anything at compile time. Deferring rendering until we
  // know which theme to use on the client avoids incorrect initial
  // state being displayed.
  if (theme === null) {
    return null;
  }

  const handleThemeChange = () =>
    toggleTheme(theme === "light" ? "dark" : "light");

  return (
    <button
      className="text-san-juan-800 dark:text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none d"
      onClick={handleThemeChange}
    >
      {theme === "dark" ? (
        <MoonIcon className={"h-6 w-6"} />
      ) : (
        <SunIcon className={"h-6 w-6"} />
      )}
    </button>
  );
};
