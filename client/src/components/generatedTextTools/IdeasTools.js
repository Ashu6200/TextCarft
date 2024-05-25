import React from "react";

const IdeasTools = () => {
	return (
		<div className="w-full">
			<h1 className=" text-[18px] font-[600] text-[#6126DD]">Articel Writer</h1>
			<form className="w-full mt-5">
				<div className="flex flex-col gap-2 mb-5 w-full">
					<label className="font-[600] text-[14px]">
						Describe the topic of the articel
					</label>
					<input
						type="text"
						required
						placeholder="E.g, India Economy"
						className="rounded h-[40px] p-2 text-[12px] outline-none bg-slate-200 dark:bg-neutral-900 focus:border-[#6126DD] focus:border-2focus:p-[6px]"
					/>
				</div>
				<div className="flex flex-col gap-2 mb-5 w-full">
					<label className="font-[600] text-[14px]">Add more details</label>
					<input
						type="text"
						required
						placeholder="E.g, the outline or topic and etails you want to include in the article"
						className="rounded h-[40px] p-2 text-[12px] outline-none bg-slate-200 dark:bg-neutral-900 focus:border-[#6126DD] focus:border-2focus:p-[6px]"
					/>
				</div>
				<div className="flex items-center  gap-2 mb-5 w-full">
					<input
						type="checkbox"
						required
						className="rounded h-[40px] p-2 text-[12px] outline-none bg-slate-200 dark:bg-neutral-900 focus:p-[6px] "
					/>
					<label className="font-[600] text-[14px]">Optimize the SEO</label>
				</div>
				<div className="flex flex-col gap-2 mb-5 w-full">
					<button type="button" className="bg-[#6126DD] p-2 rounded font-[500] text-[14px] text-white w-full text-center">
						Generate
					</button>
				</div>
			</form >
		</div >
	);
};

export default IdeasTools;
