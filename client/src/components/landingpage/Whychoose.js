import Image from "next/image";
import React from "react";

const Whychoose = () => {
	return (
		<section className="w-full h-auto">
			<div className="w-full px-40 py-16">
				<h1 className="text-center text-[38px] font-[500]">
					Why <span className="text-[#6126DD]">Choose us?</span>{" "}
				</h1>
				<p className="text-center text-[14px] font-[500] mt-2">
					Ready to transform your ideas and text into something else? Online
					text tools (AI) can help you improve your writing or style your text.
					Some tools can even generate new ideas for you.
				</p>
				<div className="grid grid-cols-3 mt-16 gap-10">
					<div className="flex items-center justify-center">
						<Image
							src={"/images/editIcon.jpg"}
							alt=""
							width={250}
							height={250}
							className="w-auto h-auto"
						/>
					</div>
					<div className="col-span-2">
						<h1 className="font-[600] text-[26px]  mb-3 text-[#6126DD]">
							3 reasons why TEXTCRAFT TOOL
						</h1>
						<ol className="list-decimal list-outside mb-3 ml-4">
							<li className="text-[14px] font-[500] text-justify mt-2">
								Creativity is for everyone. Everyone has the potential to be
								creative, and we want to make it easy for everyone to express
								themselves.
							</li>
							<li className="text-[14px] font-[500] text-justify mt-2">
								We believe in access. Everyone should have access to the tools
								they need to create, regardless of their environment or
								situation.
							</li>
							<li className="text-[14px] font-[500] text-justify mt-2">
								Let’s make the world a more creative place. Creativity is a
								powerful force for good, and we want to help people use it to
								make the world a better place.
							</li>
						</ol>
						<p>
							Therefore, we offer our tools for free and without sign-up. We
							hope many people discover our tools, and empower the creative
							world.
						</p>
					</div>
					<div className="col-span-3">
						<h1 className="font-[600] text-[26px] mb-3 text-[#6126DD]">You can trust us </h1>

						<p className="text-[14px] font-[500] text-justify mt-2">
							Regarding trust, we do our best to provide you with the best
							safety, privacy, and security practices and guidelines. We hope
							this wins your trust with us, and that you will continue to use
							our tools to create and express yourself.
						</p>
					</div>
					<div className="flex items-center justify-center">
						<Image
							src={"/images/editIcon2.jpg"}
							alt=""
							width={250}
							height={250}
							className="w-auto h-auto"
						/>
					</div>
					<div className="col-span-2">
						<h1 className="font-[600] text-[26px]  mb-3 text-[#6126DD]">
							World-class tools with a stellar team
						</h1>
						<p className="text-[14px] font-[500] text-justify mt-2">
							When starting Quicktools, we noticed that other online tool
							providers needed to be more user-friendly, updated, and intuitive
							with new updates and enhancements. Our team wanted to change that.
							<br />
							<br />
							Since then, we have built 50+ tools with user-friendly experiences
							(not our words), modern looks, and up-to-date technologies. We
							always aim to develop world-class tools with the best user
							experience.
							<br />
							<br />
							Therefore, if you have any ideas, feedback, or annoying bugs,
							please reach out.
							<br />
							<br />
							Check out our About Us page to read more about our mission and
							team. See you around!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Whychoose;
