"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export const ThemeSwitcher = ({ size = 25 }) => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	return (
		<div className="flex items-center justify-center mx-1">
			{theme === "light" ? (
				<BiMoon
					className="cursor-pointer"
					fill="block"
					size={size}
					onClick={(e) => setTheme("dark")}
				/>
			) : (
				<BiSun
					className="cursor-pointer"
					size={size}
					onClick={(e) => setTheme("light")}
				/>
			)}
		</div>
	);
};
