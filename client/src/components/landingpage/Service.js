import { ServiceItems } from "@/assets/Index";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Service = () => {
	return (
		<section className="w-full h-auto">
			<div className="px-40 py-16 w-full">
				<h1 className="text-center text-[38px] font-[500]">
					Our <span className="text-[#6126DD]">Service</span>{" "}
				</h1>
				<div className="grid grid-cols-2 gap-7 mt-8">
					{ServiceItems.map((item) => {
						const { link, title, description, id } = item;
						return (
							<Link key={id} href={link}>
								<div className="glass p-[18px] h-full w-full">
									<div className="flex items-center gap-5">
										<Image
											src={"/images/icon1.png"}
											alt={"icon1"}
											width={40}
											height={40}
											className="w-full h-full max-w-[40px] max-h-[40px]"
										/>
										<h1 className="text-[26px] font-[600]">{title}</h1>
									</div>
									<p className="text-[14px] font-[500] text-justify mt-2">
										{description}
									</p>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Service;
