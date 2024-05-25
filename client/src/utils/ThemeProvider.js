"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

export const ThemeProvider = ({ children, ...props }) => {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
