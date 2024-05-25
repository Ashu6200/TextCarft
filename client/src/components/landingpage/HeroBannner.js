import Image from "next/image";
import React from "react";

const HeroBannner = () => {
	return (
		<section className="w-full h-auto">
			<div className="px-40 flex items-center justify-between py-16">
				<div className="w-[60%]">
					<h1 className=" text-[14px] font-[500]">
						Welcome to <span className="text-[#6126DD]"> TEXTCRAFT</span>
						<br /> Your Ultimate Content Creation Hub!
					</h1>
					<h1 className="text-[38px] font-[600] mt-4">
						Easily generate and transform text and images using
						<span className="text-[#6126DD]"> TEXTCRAFT</span> Tools, completely
						free of charge.
					</h1>
					<p className="mt-4 text-[14px] font-[500]">
						I'm{" "}
						<a
							href="https://my-profolio-five.vercel.app/"
							target="blank"
							className="text-[#6126DD]"
						>
							{" "}
							Ashutosh Kewat{" "}
						</a>
						, and I founded
						<span className="text-[#6126DD]"> TEXTCRAFT </span>to make online
						tools more accessible to everyone. We leverage cutting-edge AI
						technologies to produce simple and efficient tools.
					</p>
					<ul className="mt-8 list-disc ml-5">
						<li>
							<p className="text-[14px] font-[500]">
								50+ TEXTCRAFT tools - (AI) Text, AI Writer, Image, and
								Converter.
							</p>
						</li>
						<li>
							<p className="text-[14px] font-[500]">
								Personalized and effective user experience
							</p>
						</li>
						<li>
							<p className="text-[14px] font-[500]">
								Every AI tool is simple to use.
							</p>
						</li>
					</ul>
					<p className="mt-16 text-[14px] font-[500]">
						Let’s create something beautiful today! 💜
					</p>
				</div>
				<div className="w-[40%] flex items-center justify-center">
					<Image
						src={"/images/hero.png"}
						alt="textcarfthero"
						width={200}
						height={200}
						className="w-auto h-auto"
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroBannner;
