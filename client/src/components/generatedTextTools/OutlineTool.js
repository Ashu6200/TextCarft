"use client";
import { toneOptions } from "@/assets/Index";
import React, { useState } from "react";
import Select from "react-tailwindcss-select";

const OutlineTool = () => {
	const [tone, setTone] = useState(null);
	const handleToneChange = (value) => {
		console.log("value:", value);
		setTone(value);
	};
	return (
		<div className="w-full">
			<h1 className=" text-[18px] font-[600] text-[#6126DD]">
				Outline Generator
			</h1>
			<form className="w-full mt-5">
				<div className="flex flex-col gap-2 mb-5 w-full">
					<label className="font-[600] text-[14px]">
						Describe yout outline topic
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
						Include the following idea or subtopics
					</label>
					<textarea
						rows={6}
						type="text"
						required
						placeholder="E.g, the outline or topic and etails you want to include in the article"
						className="rounded p-2 text-[12px] outline-none bg-slate-200 dark:bg-neutral-900 focus:border-[#6126DD] focus:border-2 resize-y dark:placeholder:text-white placeholder:text-black focus:p-[6px]"
					/>
				</div>
				<div className="flex flex-col gap-2 mb-5 w-full">
					<label className="font-[600] text-[14px]">
						Describe the outline's purpose
					</label>
					<input
						type="text"
						required
						placeholder="E.g, India Economy"
						className="rounded h-[40px] p-2 text-[12px] outline-none bg-slate-200 dark:bg-neutral-900 focus:border-[#6126DD] focus:border-2 dark:placeholder:text-white placeholder:text-black focus:p-[6px]"
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
					/>
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

export default OutlineTool;
