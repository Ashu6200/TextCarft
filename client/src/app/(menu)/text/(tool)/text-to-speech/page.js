"use client";
import React, { useEffect, useRef, useState } from "react";

const Page = () => {
	const [text, setText] = useState("");
	const [isPaused, setIsPaused] = useState(false);
	const [utterance, setUtterance] = useState(null);

	useEffect(() => {
		const synth = window.speechSynthesis;
		const u = new SpeechSynthesisUtterance(text);

		setUtterance(u);

		return () => {
			synth.cancel();
		};
	}, [text]);

	const handlePlay = () => {
		const synth = window.speechSynthesis;

		if (isPaused) {
			synth.resume();
		}

		synth.speak(utterance);

		setIsPaused(false);
	};

	const handlePause = () => {
		const synth = window.speechSynthesis;

		synth.pause();

		setIsPaused(true);
	};

	const handleStop = () => {
		const synth = window.speechSynthesis;
		synth.cancel();
		setIsPaused(false);
	};

	const textareaRef = useRef(null);
	useEffect(() => {
		const adjustTextareaHeight = () => {
			if (textareaRef.current) {
				textareaRef.current.style.height = "auto";
				textareaRef.current.style.height = `${Math.min(
					textareaRef.current.scrollHeight,
					400,
				)}px`;
			}
		};
		adjustTextareaHeight();
	}, []);
	return (
		<section className="w-full h-auto">
			<div className="px-40 py-16 flex justify-between gap-10">
				<div className="w-[60%]">
					<h1 className=" text-[20px] font-[600] text-[#6126DD]">
						Text to Speech
					</h1>
					<p className=" text-[14px] font-[600]">
						A text-to-speech (TTS) methodology is devised with the objective of
						accurately vocalizing textual content.
					</p>
					<form className="mt-8">
						<textarea
							ref={textareaRef}
							rows={10}
							onChange={(e) => setText(e.target.value)}
							className="w-full border outline-none rounded-lg p-3 text-[14px]"
						/>
					</form>
				</div>
				<div className="w-[40%]">
					<h1 className="text-[#6126DD] text-[20px] font-[600]">Controllers</h1>
					<div className="flex flex-col items-center gap-3 mt-8">
						<button
							type="button"
							className=" w-full bg-[green]  text-black font-[600] py-2 px-4 rounded-full min-w-20"
							onClick={handlePlay}
						>
							{isPaused ? "Resume" : "Play"}
						</button>
						<button
							type="button"
							onClick={handlePause}
							className=" w-full bg-[yellow]  text-black font-[600] py-2 px-4 rounded-full min-w-20"
						>
							Pause
						</button>

						<button
							type="button"
							onClick={handleStop}
							className=" w-full bg-[red]  text-black font-[600] py-2 px-4 rounded-full min-w-20"
						>
							Stop
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Page;
