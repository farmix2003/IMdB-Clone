"use client";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
const DarkModeSwitcher = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          className="text-2xl hover:text-amber-500 transition-color cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdDarkMode
          className="text-2xl hover:text-amber-500 transition-color cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default DarkModeSwitcher;
