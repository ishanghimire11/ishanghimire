"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, SunDim } from "lucide-react";

import { Switch } from "@/components/ui/switch";

export const ThemeToggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      if (localTheme === "dark") {
        setIsToggled(true);
        return setTheme("dark");
      }
      if (theme === "light") {
        setIsToggled(false);
        return setTheme("light");
      }
    }
    setIsToggled(false);
    return setTheme("light");
  }, []);

  const handleThemeChange = () => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      setIsToggled((prev) => !prev);
      return setTheme("light");
    }
    if (theme === "light") {
      localStorage.setItem("theme", "light");
      setIsToggled((prev) => !prev);
      return setTheme("dark");
    }
  };

  return (
    <div className="flex gap-x-2">
      <SunDim />
      <Switch
        id="theme-toggle"
        checked={isToggled}
        onCheckedChange={handleThemeChange}
      />
      <Moon />
    </div>
  );
};

export default ThemeToggle;
