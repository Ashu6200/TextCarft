"use client";
import { NavItems } from "@/assets/Index";
import { ThemeSwitcher } from "@/utils/ThemeSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
	const pathname = usePathname();
	const login = false;
	return (
		<nav className="w-full sticky top-0 z-10">
			<div className="w-full flex items-center justify-between px-40 py-4 glass">
				<div className="flex items-center  gap-6">
					<div className="w-[100px] object-contain">
						<Link href={"/"}>
							<p className="text-[#6126DD] text-[20px] font-[600]">TextCraft</p>
						</Link>
					</div>
					<div className="flex items-center gap-8">
						{NavItems.map((nav) => {
							return (
								<Link key={nav.id} href={nav.link}>
									<span
										className={`text-[14px] font-[600] cursor-pointer link ${pathname === nav.link
											? "dark:text-[#6126DD] text-[#6126DD]"
											: "text-black dark:text-white"
											}`}
									>
										{nav.name}
									</span>
								</Link>
							);
						})}
					</div>
				</div>
				<div className="flex items-center justify-center gap-2">
					<ThemeSwitcher />
					{login ? (
						<></>
					) : (
						<button type="button" className="min-w-[100px] p-2 text-center  bg-[#6126DD] rounded text-white">
							Login
						</button>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
