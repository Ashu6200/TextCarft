"use client";
import React, { useEffect, useRef, useState } from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";

const Page = () => {
	const {
		transcript,
		setTranscript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition();
	const [isListening, setIsListening] = useState(false);
	const [text, setText] = useState(transcript);

	const handleListing = () => {
		setIsListening(true);
		SpeechRecognition.startListening({
			continuous: true,
		});
	};
	const stopHandle = () => {
		setIsListening(false);
		SpeechRecognition.stopListening();
	};
	const handleReset = () => {
		stopHandle();
		resetTranscript();
	};
	const textareaRef = useRef(null);
	useEffect(() => {
		setText(transcript);
	}, [transcript]);

	useEffect(() => {
		adjustTextareaHeight();
	}, []);
	const handleTextareaChange = (e) => {
		const newText = e.target.value;
		setText(newText);
		setTranscript(newText);
		adjustTextareaHeight();
	};

	const adjustTextareaHeight = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${Math.min(
				textareaRef.current.scrollHeight,
				400,
			)}px`;
		}
	};

	if (!browserSupportsSpeechRecognition) {
		return (
			<section className="w-full h-auto">
				<div className="px-40 py-16 flex justify-between gap-10">
					<span>Browser doesn't support speech recognition.</span>
				</div>
			</section>
		);
	}
	return (
		<section className="w-full h-auto">
			<div className="px-40 py-16 flex justify-between gap-10 relative">
				<div className="w-[60%]">
					<h1 className=" text-[20px] font-[600] text-[#6126DD]">
						Speech to Text
					</h1>
					<p className=" text-[14px] font-[600]">
						A speech recognition methodology designed to accurately transcribe
						spoken language into textual format is proposed.
					</p>
					<form className="mt-8">
						<textarea
							ref={textareaRef}
							rows={10}
							value={text}
							onChange={handleTextareaChange}
							className="w-full border outline-none rounded-lg p-3 text-[14px]"
						/>
					</form>
				</div>
				<aside className="w-[40%] sticky top-16">
					<h1 className="text-[#6126DD] text-[20px] font-[600]">Controllers</h1>
					<p className="text-[14px] font-[600]">
						Microphone:{" "}
						{isListening ? "Listening........." : "Click to start Listening"}
					</p>
					<div className="flex flex-col items-center gap-3 mt-8">
						<button
							type="button"
							className=" w-full bg-[green]  text-white font-[600] py-2 px-4 rounded-full min-w-20"
							onClick={handleListing}
						>
							Start
						</button>
						{isListening && (
							<button
								type="button"
								onClick={stopHandle}
								className=" w-full bg-[red]  text-white font-[600] py-2 px-4 rounded-full min-w-20"
							>
								Stop
							</button>
						)}
						<button
							type="button"
							onClick={handleReset}
							className=" w-full bg-[#6126DD]  text-white font-[600] py-2 px-4 rounded-full min-w-20"
						>
							Reset
						</button>
					</div>
				</aside>
			</div>
		</section>
	);
};

export default Page;
