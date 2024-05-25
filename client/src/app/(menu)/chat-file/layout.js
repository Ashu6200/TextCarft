import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }) => {
	return (
		<>
			<main className="w-full relative">
				<Navbar />
				{children}
				<Footer />
			</main>
		</>
	);
};

export default layout;
