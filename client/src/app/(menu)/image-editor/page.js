import { ImageTools } from "@/assets/Index";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Page = () => {
	return (
		<section className="w-full h-auto">
			<div className="px-40 py-16">
				<h1 className="text-[38px] font-[600] mt-4 text-[#6126DD]">
					Discover the pinnacle of image enhancement tools, designed to elevate
					your visuals to breathtaking levels of sophistication and allure.
				</h1>
				<p className="mt-4 text-[14px] font-[500]">
					Empower yourself with these cutting-edge image manipulation tools,
					effortlessly transforming your visuals into professional-grade
					masterpieces that captivate and impress. Elevate your productivity and
					ascend to new heights in the realm of image creation and enhancement.
				</p>
				<div className="my-20 mx-10">
					<h1 className="text-center text-[26px] font-[600]">
						Image Editor Tools
					</h1>
					<p className="text-center text-[14px] font-[500] mb-5">
						Find your specific Image Editor tool, like Imaeg Compressure,
						Reszie, crop etc
					</p>
					<div className="grid grid-cols-2 gap-8">
						{ImageTools.map((item) => {
							const { title, description, link, id } = item;
							return (
								<div key={id} className="glass p-6  h-full w-full">
									<div className="flex items-center gap-5">
										<Image
											src={"/images/icon1.png"}
											alt={"icon1"}
											width={40}
											height={40}
											className="w-full h-full max-w-[40px] max-h-[40px]"
										/>
										<h1 className="text-[26px] font-[600]">{title}</h1>
										<Link
											href={link}
											className="p-[10px]  rounded-full bg-[#6126DD] w-max"
										>
											<FaExternalLinkAlt size={15} />
										</Link>
									</div>
									<p className="text-[14px] font-[500] text-justify mt-2">
										{description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
				<div className="mt-10">
					<div className="grid grid-cols-2 gap-8">
						<div>
							<h1 className="font-[600] text-[26px]  mb-3 text-[#6126DD]">
								Online image tools vs. desktop apps & software
							</h1>
							<p className="text-[14px] font-[500] text-justify mt-2">
								There are several benefits to using online image tools over
								mobile and desktop apps. Firstly, online tools are often more
								and quickly accessible, as they can be used from any device with
								an internet connection. They are also typically more affordable
								or even free, as they don't require installation or the purchase
								of a license. Quicktools is 100% free and doesn’t require a
								sign-up.
								<br />
								<br />
								Finally, online tools can be updated and improved more quickly
								than desktop apps, meaning users have access to the latest
								features and functionality without the need for manual updates.
							</p>
						</div>
						<div className="flex items-center justify-center">
							<Image
								src={"/images/aiicon1.png"}
								alt=""
								width={250}
								height={250}
								className="w-auto h-auto max-w-[50px] max-h-[50px]"
							/>
						</div>
						<div className="flex items-center justify-center">
							<Image
								src={"/images/editIcon2.jpg"}
								alt=""
								width={250}
								height={250}
								className="w-auto h-auto max-w-[250px] max-h-[250px]"
							/>
						</div>
						<div className="text-justify">
							<h1 className="font-[600] text-[26px]  mb-3 text-[#6126DD]">
								Quick, easy, and free for everyone.
							</h1>
							<p className="text-[14px] font-[500] text-justify mt-2">
								Quicktools was born to provide quick solutions to people
								searching online. When searching for "resize image", you want to
								quickly resize your image, right?!
								<br />
								<br />
								In addition, there are many outdated tools that are not that
								very user-friendly, but our image tools are modern-looking and
								really easy-to-use.
								<br />
								<br />
								Since we are part of Picsart, we can offer these tools for free,
								but remember to check out the many other amazing tools and
								products Picsart has to offer.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Page;
