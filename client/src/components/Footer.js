import { socialIcons } from "@/assets/Index";
import Link from "next/link";
import React from "react";
import SuggestionForm from "./landingpage/SuggestionForm";

const Footer = () => {
	return (
		<footer className="w-full h-auto">
			<div className="px-40 pt-16 w-full glass">
				<div className="flex justify-between py-10 gap-10">
					<div className="w-[60%]">
						<h1 className="text-[#6126DD] text-[24px] font-[600] mb-4">
							Have a Great Day Today !
						</h1>
						<p className="text-[14px] dark:text-white text-black font-[500]">
							{`Thank you for your pressence! If you ever need assistance or have  more questions in the future, don't hesitate to reach out. Have a wonderful day, and goodbye for now!`}
						</p>
						<div className="flex gap-6 cursor-pointer mt-6">
							{socialIcons.map((item) => (
								<div key={item.id}>
									<Link href={item.link} target="_blank">
										{item.icon}
									</Link>
								</div>
							))}
						</div>
					</div>
					<div className="w-[40%] flex flex-col">
						<h1 className="text-[#6126DD] text-[24px] font-[600] mb-4 text-start">
							Give Some Suggesstion
						</h1>
						<SuggestionForm />
					</div>
				</div>
				<div className="text-center">
					<p className="text-[14px] dark:text-white text-black font-[500]">
						@copyright
						<span className="text-[#6126DD]"> ashutoshkewat1@gmail.com </span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
