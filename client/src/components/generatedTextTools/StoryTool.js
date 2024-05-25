"use client";
import { toneOptions } from "@/assets/Index";
import React, { useState } from "react";
import Select from "react-tailwindcss-select";

const StoryTool = () => {
	const [tone, setTone] = useState(null);
	const handleToneChange = (value) => {
		console.log("value:", value);
		setTone(value);
	};
	return (
		<div className="w-full">
			<h1 className=" text-[18px] font-[600] text-[#6126DD]">
				Story Generator
			</h1>
			<form className="w-full mt-5">
				<div className="flex flex-col gap-2 mb-5 w-full">
					<label className="font-[600] text-[14px]">
						Describe the topic of your Story.
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

export default StoryTool;
