"use client";
import { toneOptions } from "@/assets/Index";
import React, { useRef, useState } from "react";
import Select from "react-tailwindcss-select";

const ParagraphTool = () => {
	const [tone, setTone] = useState(null);
	const handleToneChange = (value) => {
		console.log("value:", value);
		setTone(value);
	};
	const paragrapghBody = [
		"All",
		"Introduction",
		"Body",
		"Hightlight",
		"KeyPoint",
		"Conculsion",
	];
	const [typeOfParagraph, setTypeOfParagraph] = useState(null);
	const itemRefs = useRef({});

	const handleKeyDown = (e, key) => {
		const index = paragrapghBody.findIndex(p => p === key);
		if (e.key === 'Enter' || e.key === ' ') {
			setTypeOfParagraph(paragrapghBody[index]);
		} else if (e.key === 'ArrowRight') {
			if (index < paragrapghBody.length - 1) {
				const nextKey = paragrapghBody[index + 1];
				itemRefs.current[nextKey].focus();
			}
		} else if (e.key === 'ArrowLeft') {
			if (index > 0) {
				const prevKey = paragrapghBody[index - 1];
				itemRefs.current[prevKey].focus();
			}
		}
	};

	const setItemRef = (key, element) => {
		itemRefs.current[key] = element;
	};
	return (
		<div className="w-full">
			<h1 className=" text-[18px] font-[600] text-[#6126DD]">
				Paragrapgh Generator
			</h1>
			<form className="w-full mt-5">
				<div className="flex flex-col gap-2 mb-5 w-full">
					<label className="font-[600] text-[14px]">
						Generate Paragrapgh for
					</label>
					<div className="flex gap-2 flex-wrap">
						{paragrapghBody.map((p) => (
							<div
								className={`w-max py-2 px-5 rounded text-[12px] border-2 ${typeOfParagraph === p ? "bg-[#6126DD]" : ""}`}
								key={p}
								onClick={() => setTypeOfParagraph(p)}
								tabIndex={0}
								onKeyDown={(e) => handleKeyDown(e, p)}
								role="button"
								ref={(el) => setItemRef(p, el)}
							>
								{p}
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-2 mb-5 w-full">
					<label className="font-[600] text-[14px]">
						Describe the topic of your Paragrapgh.
					</label>
					<input
						type="text"
						required
						placeholder="E.g, India Economy"
						className="rounded h-[40px] p-2 text-[12px] outline-none bg-slate-200 dark:bg-neutral-900 focus:border-[#6126DD] focus:border-2 dark:placeholder:text-white placeholder:text-black focus:p-[6px]"
					/>
				</div>
				<div className="flex flex-col gap-2 mb-5 w-full">
					<label className="font-[600] text-[14px]">
						Include the following details
					</label>
					<input
						type="text"
						required
						placeholder="E.g, India Economy"
						className="rounded h-[40px] p-2 text-[12px] outline-none bg-slate-200 dark:bg-neutral-900 focus:border-[#6126DD] focus:border-2 dark:placeholder:text-white placeholder:text-black focus:p-[6px]"
					/>
				</div>
				<div className="flex gap-2 w-full">
					<div className="flex flex-col gap-2 mb-5 w-full">
						<label className="font-[600] text-[14px]">Choose a Length</label>
						<Select
							isClearable={true}
							isSearchable={true}
							options={toneOptions}
							value={tone}
							onChange={handleToneChange}
							placeholder={"Choose tone for email"}
						/>
					</div>
					<div className="flex flex-col gap-2 mb-5 w-full">
						<label className="font-[600] text-[14px]">Choose a tone</label>
						<Select
							isClearable={true}
							isSearchable={true}
							options={toneOptions}
							value={tone}
							onChange={handleToneChange}
							placeholder={"Choose tone for email"}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-2 mb-5 w-full">
					<button type="button" className="bg-[#6126DD] p-2 rounded font-[500] text-[14px] text-white w-full text-center">
						Generate
					</button>
				</div>
			</form>
		</div>
	);
};

export default ParagraphTool;
