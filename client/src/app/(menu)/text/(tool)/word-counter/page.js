"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
	const [value, setValue] = useState(null);
	const [words, setWords] = useState(0);
	const [characters, setCharacters] = useState(0);
	const [charactersWithoutWords, setCharactersWithoutWords] = useState(0);
	useEffect(() => {
		const counter = (value) => {
			if (value !== null) {
				const wordArray = value.trim().split(" ");
				const wordCount = wordArray.length;
				setWords(wordCount >= 1 ? wordCount - 1 : 0);
				const characterCount = value.length;
				setCharacters(characterCount);
				const characterWithoutSpaceCount = value.replace(/\s/g, "").length;
				setCharactersWithoutWords(characterWithoutSpaceCount);
			}
		};

		counter(value);
	}, [value]);

	return (
		<section className="w-full h-auto">
			<div className="px-40 py-16 flex justify-between gap-10">
				<div className="w-[60%]">
					<h1 className=" text-[20px] font-[600] text-[#6126DD]">
						Super Simple Word & Character Counter
					</h1>
					<p className=" text-[14px] font-[600]">
						A word counter and character counter all in one spot, perfect for
						measuring your text length for any purpose.
					</p>
					<form className="mt-8">
						<textarea
							rows={10}
							onChange={(e) => setValue(e.target.value)}
							className="w-full border outline-none rounded-lg p-3 text-[14px]"
						/>
					</form>
				</div>
				<div className="w-[40%]">
					<h1 className="text-[#6126DD] text-[20px] font-[600]">
						Counter Results
					</h1>
					<p className=" text-[14px] font-[600] my-2">Words: {words}</p>
					<p className=" text-[14px] font-[600] my-2">
						Characters: {characters}
					</p>
					<p className=" text-[14px] font-[600] my-2">
						Characters (without spaces): {charactersWithoutWords}
					</p>
				</div>
			</div>
		</section>
	);
};

export default Page;
