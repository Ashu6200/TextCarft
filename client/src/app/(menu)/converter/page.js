import { ConversionTools } from "@/assets/Index";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Page = () => {
	return (
		<section className="w-full h-auto">
			<div className="px-40 py-16">
				<h1 className="text-[38px] font-[600] mt-4 text-[#6126DD]">
					Unlock the potential to convert various file formats and data types
					swiftly and at no cost with our rapid conversion tools.
				</h1>
				<p className="mt-4 text-[14px] font-[500]">
					Bid farewell to the hassle of navigating between multiple conversion
					platforms. Our all-inclusive suite of tools offers seamless and
					efficient file conversions, eliminating the need for constant
					switching. Experience the simplicity of quick and comprehensive file
					transformations all in one place.
				</p>
				<div className="my-20 mx-10">
					<h1 className="text-center text-[26px] font-[600]">
						Convertor Tools
					</h1>
					<p className="text-center text-[14px] font-[500] mb-5">
						Find your specific Convertor tool, like convertig file.
					</p>
					<div className="grid grid-cols-2 gap-8">
						{ConversionTools.map((item, key) => {
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
								What type of converter do you need?
							</h1>
							<p className="text-[14px] font-[500] text-justify mt-2">
								There are many different types of converters available online,
								including:
							</p>
							<ul className="list-disc list-outside mb-3 ml-4">
								<li className="text-[14px] font-[500] text-justify mt-2">
									File converters: These tools can be used to convert files
									between different formats, such as PDF, Word, and Excel.
								</li>
								<li className="text-[14px] font-[500] text-justify mt-2">
									Image converters: These tools can be used to convert images
									between different formats, such as JPEG, PNG, and GIF.
								</li>
								<li className="text-[14px] font-[500] text-justify mt-2">
									Video converters: These tools can be used to convert videos
									between different formats, such as MP4, AVI, and MOV.
								</li>
								<li className="text-[14px] font-[500] text-justify mt-2">
									Audio converters: These tools can be used to convert audio
									files between different formats, such as MP3, WAV, and FLAC.
								</li>
								<li className="text-[14px] font-[500] text-justify mt-2">
									Text converters: These tools can be used to add a style to
									your text.
								</li>
							</ul>
						</div>
						<div className="flex items-center justify-center">
							<Image
								src={"/images/cicons1.png"}
								alt=""
								width={250}
								height={250}
								className="w-auto h-auto object-cover"
							/>
						</div>
						<div className="flex items-center justify-center">
							<Image
								src={"/images/cicon.png"}
								alt=""
								width={250}
								height={250}
								className="w-auto h-auto"
							/>
						</div>
						<div className="text-justify">
							<h1 className="font-[600] text-[26px]  mb-3 text-[#6126DD]">
								Online converters vs. apps or software
							</h1>
							<p className="text-[14px] font-[500] text-justify mt-2">
								There are pros and cons to using both online converters and apps
								or software. Online converters are typically free to use, but
								they may not be as powerful or versatile as apps or software.
								Apps or software can be more expensive, but they offer more
								features and functionality.
								<br />
								<br />
								In short, use online converters if you quickly need to convert a
								file. However, if you need to edit, save and manage multiple
								files at once, then consider using an app or software that
								supports converting files.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Page;
