import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/utils/ThemeProvider";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-Poppins",
});
export const metadata = {
	title: "TextCraft",
	description: "AI Powered text and Converting tool",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${poppins.className} bg-white bg bg-no-repeat dark:bg-[#0C0C0C] duration-300 p-2`}
			>
				<ThemeProvider attribute='class' defaultTheme='dark'>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
