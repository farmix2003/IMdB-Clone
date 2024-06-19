"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
interface ThemeProviderProps {
  children: any;
}
const Provider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-800 min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Provider;
