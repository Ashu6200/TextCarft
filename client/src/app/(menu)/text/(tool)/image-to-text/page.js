"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { createWorker } from "tesseract.js";

const Page = () => {
	const [ocr, setOcr] = useState("");
	const [imageData, setImageData] = useState(null);
	const [dragging, setDragging] = useState(false);
	const [progress, setProgress] = useState(0);

	const handleFileChange = (e) => {
		e.preventDefault();
		const file = e.target.files[0];
		if (file) {
			const fileReader = new FileReader();
			fileReader.onload = () => {
				if (fileReader.readyState === 2) {
					setImageData(fileReader.result);
				}
			};
			fileReader.readAsDataURL(file);
		}
	};
	const handleDragOver = (e) => {
		e.preventDefault();
		setDragging(true);
	};
	const handleDragLeave = (e) => {
		e.preventDefault();
		setDragging(false);
	};
	const handleDrop = (e) => {
		e.preventDefault();
		setDragging(false);
		const file = e.dataTransfer.file?.[0];
		if (file) {
			const fileReader = new FileReader();
			fileReader.onload = () => {
				if (fileReader.readyState === 2) {
					setImageData(fileReader.result);
				}
			};
			fileReader.readAsDataURL(file);
		}
	};
	const removeImageData = (e) => {
		e.preventDefault();
		setImageData(null);
		setOcr("");
	};

	useEffect(() => {
		const convertImageToText = async () => {
			if (!imageData) {
				return;
			}
			const worker = await createWorker("eng", 1, {
				logger: (m) => {
					setProgress(Number.parseInt(m.progress * 100));
				},
			});
			await worker.load();
			await worker.loadLanguage("eng");
			const {
				data: { text },
			} = await worker.recognize(imageData);
			setOcr(text);
			await worker.terminate();
		};
		convertImageToText();
	}, [imageData]);
	return (
		<section className="w-full h-auto">
			<div className="px-40 py-16 flex justify-between gap-10">
				<div className="w-[60%]">
					<h1 className=" text-[20px] font-[600] text-[#6126DD]">
						Text Extactor from image
					</h1>
					<p className=" text-[14px] font-[600]">
						A proposed methodology is designed to accurately extract text from
						images and convert it into a textual format.
					</p>
					<form className="mt-8">
						<div className="w-full">
							<input
								type="file"
								accept="image/*"
								id="file"
								className="hidden"
								onChange={handleFileChange}
							/>
							<div
								className="w-full min-h-[30vh] border dark:border-[#755BB4] flex flex-col items-center p-3 justify-center rounded-[5px]"
							>
								{imageData ? (
									<>
										<Image
											src={imageData}
											alt=""
											width={100}
											height={100}
											className="max-h-full w-full object-contain"
										/>
										<button
											type="button"
											className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#755BB4] text-center text-[#fff] rounded mt-8"
											onClick={removeImageData}
										>
											Remove Image
										</button>
									</>
								) : (
									<label
										htmlFor="file"
										className={`w-full min-h-[30vh]  flex flex-col items-center justify-center rounded-[5px]  ${dragging ? "bg-blue-500" : "bg-transparent"
											}`}
										onDrag={handleDragOver}
										onDragLeave={handleDragLeave}
										onDrop={handleDrop}
									>
										<span className="text-black dark:text-white">
											Drag and drop your Image here click to browse
										</span>
									</label>
								)}
							</div>
						</div>
					</form>
				</div>
				<div className="w-[40%]">
					<h1 className="text-[#6126DD] text-[20px] font-[600]">
						Extracted Text from Image
					</h1>
					<div className="flex flex-col gap-3 mt-8">
						<div className=" text-[14px] font-[600] my-2">
							<LoadingBar
								color="#6126DD"
								progress={progress}
								onLoaderFinished={() => setProgress(0)}
							/>
							{progress === 0 && ocr}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Page;
