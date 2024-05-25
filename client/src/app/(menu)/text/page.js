import { TextTools } from "@/assets/Index";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Page = () => {
	return (
		<section className="w-full h-auto">
			<div className="px-40 py-16">
				<h1 className="text-[38px] font-[600] mt-4 text-[#6126DD]">
					Enhance the visibility and aesthetic appeal of textual content through
					the utilization of premier online text editing tools.
				</h1>
				<p className="mt-4 text-[14px] font-[500]">
					Whether you are engaged in website development, social media content
					creation, or presentation design, our suite of text manipulation
					utilities ensures that your message commands attention and leaves a
					lasting impression.
				</p>
				<div className="my-20 mx-10">
					<h1 className="text-center text-[26px] font-[600]">Text Tools</h1>
					<p className="text-center text-[14px] font-[500] mb-5">
						Find your specific text tool, like text to speech, image to text etc
					</p>
					<div className="grid grid-cols-2 gap-8">
						{TextTools.map((item, key) => {
							const { title, description, link } = item;
							return (
								<div key={key} className="glass p-6  h-full w-full">
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
						<div className="flex items-center justify-center">
							<Image
								src={"/images/editIcon.jpg"}
								alt=""
								width={250}
								height={250}
								className="w-auto h-auto"
							/>
						</div>
						<div>
							<h1 className="font-[600] text-[26px]  mb-3 text-[#6126DD]">
								Make your text stand out with our free text tools!
							</h1>
							<p className="text-[14px] font-[500] text-justify mt-2">
								Our text tools are perfect for anyone who wants to enhance their
								text, messages, and any text-related work. With our tools, you
								can:
							</p>
							<ul className="list-disc list-outside mb-3 ml-4">
								<li className="text-[14px] font-[500] text-justify mt-2">
									Count the number of words, characters, and sentences of your
									blog posts, articles, metadata, or else
								</li>
								<li className="text-[14px] font-[500] text-justify mt-2">
									We believe in access. Everyone should have access to the tools
									they need to create, regardless of their environment or
									situation.
								</li>
								<li className="text-[14px] font-[500] text-justify mt-2">
									And much more! 😍.
								</li>
							</ul>
							<p className="text-[14px] font-[500] text-justify mt-2">
								Our tools are easy to use and completely free. So what are you
								waiting for? Start using our text tools today!
							</p>
						</div>
						<div className="text-justify">
							<h1 className="font-[600] text-[26px]  mb-3 text-[#6126DD]">
								AI-powered text tools that are growing rapidly{" "}
							</h1>
							<p className="text-[14px] font-[500] text-justify mt-2">
								Our AI-powered text tools are constantly being updated with new
								features and capabilities. So if you're looking for a powerful
								and versatile tool to help you with your text-related tasks, our
								AI Writer suite is the perfect choice for you.
							</p>
							<ul className="list-disc list-outside mb-3 ml-4">
								<li className="text-[14px] font-[500] text-justify mt-2">
									Count the number of words, characters, and sentences of your
									blog posts, articles, metadata, or else
								</li>
								<li className="text-[14px] font-[500] text-justify mt-2">
									We believe in access. Everyone should have access to the tools
									they need to create, regardless of their environment or
									situation.
								</li>
								<li className="text-[14px] font-[500] text-justify mt-2">
									And much more! 😍.
								</li>
							</ul>
							<p className="text-[14px] font-[500] text-justify mt-2">
								And these are just a few of the many ways you can use our AI
								text tools. With so many possibilities, there's no limit to what
								you can create! 🚀
							</p>
							<p className="text-[14px] font-[500] text-justify mt-2">
								So what are you waiting for? Start using our text tools today!
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
					</div>
				</div>
			</div>
		</section>
	);
};

export default Page;
