"use client";
import React, { useState } from "react";

const SuggestionForm = () => {
	const [loading, setLoading] = useState(false);
	const [email, setmail] = useState("");
	const [suggestionMessage, setsuggestionMessage] = useState("");
	const submitHandler = async (e) => {
		e.preventDefault();
		setsuggestionMessage("");
	};
	return (
		<form className="w-full max-[480px]:w-full">
			<div className="grid mb-3">
				<label htmlFor="name" className="font-[600] text-[14px]">
					Name
				</label>
				<input
					type="text"
					name=""
					id="name"
					readOnly
					value={email}
					className="rounded h-[40px] p-2 text-[12px] outline-none bg-slate-200 dark:bg-neutral-900 focus:border-[#6126DD] focus:border-2 resize-y dark:placeholder:text-white placeholder:text-black focus:p-[6px]"
				/>
			</div>
			<div className="grid mb-3">
				<label htmlFor="Suggestion" className="font-[600] text-[14px]">
					Suggestion
				</label>
				<textarea
					name="Suggestion"
					id=""
					cols="40"
					rows="6"
					value={suggestionMessage}
					className="rounded p-2 text-[12px] outline-none bg-slate-200 dark:bg-neutral-900 focus:border-[#6126DD] focus:border-2 resize-y dark:placeholder:text-white placeholder:text-black focus:p-[6px]"
					onChange={(e) => setsuggestionMessage(e.target.value)}
				/>
			</div>
			<button
				type="button"
				disabled={loading}
				className="bg-[#6126DD] p-2 rounded font-[500] text-[14px] text-white dark:placeholder:text-white placeholder:text-black"
				onClick={submitHandler}
			>
				Send Suggestion to Ashutosh
			</button>
		</form>
	);
};

export default SuggestionForm;
