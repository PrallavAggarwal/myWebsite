"use client";
import { useTheme } from "next-themes";
import { Moon } from "../../public/moon";
import { Sun } from "../../public/sun";
import { useEffect, useState } from "react";

export function ModeToggle({ className }: { className: string }) {
  const { theme, setTheme } = useTheme();

  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    console.log(mediaQuery);
    console.log(systemTheme);

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light");
    };
    setTheme(systemTheme);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [systemTheme]);

  const switchTheme = () => {
    switch (theme) {
      case "light": {
        setTheme("dark");
        return;
      }
      case "dark": {
        setTheme("light");
        return;
      }
      case "system": {
        setTheme(systemTheme === "dark" ? "light" : "dark");
        return;
      }
    }
  };

  return (
    <div
      onClick={switchTheme}
      className={`relative h-full w-full ${className} cursor-pointer`}
    >
      <div className="absolute mx-auto h-full w-auto cursor-pointer">
        <Sun className="absolute inset-0 left-0.5 my-auto shrink-0 scale-0 rotate-45 transition duration-500 dark:scale-100 dark:rotate-0 dark:cursor-pointer dark:text-neutral-50" />
      </div>
      <div className="relative h-full w-auto">
        <Moon className="absolute inset-0 left-0.5 my-auto shrink-0 scale-100 rotate-0 cursor-pointer transition duration-500 dark:scale-0 dark:rotate-45 dark:text-neutral-800" />
      </div>
    </div>
  );
}
