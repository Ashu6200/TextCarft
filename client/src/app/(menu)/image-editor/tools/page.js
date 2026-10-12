'use client'
import { ImageTools } from "@/assets/Index";
import { ThemeSwitcher } from "@/utils/ThemeSwitcher";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
    const [activeTool, setActiveTool] = useState();
    return (
        <main className='w-full h-[97vh] flex'>
            <section className='w-[16%] glass p-4 relative h-full overflow-y-scroll'>
                <aside className='flex items-center gap-2'>
                    <Link href={"/image-editor"}>{"<-"}</Link>
                    <h1 className=' text-base font-semibold text-[#6126DD]'>
                        Image Editor Tools
                    </h1>
                    <ThemeSwitcher size={20} />
                </aside>
                <div className='grid gap-3 mt-2'>
                    {ImageTools.map((tools, key) => {
                        return (
                            <div key={key} className='grid gap-1'>
                                <p className={` text-xs font-semibold p-1 rounded cursor-pointer text-black dark:text-white hover:bg-[#6126DD] hover:text-black w-full ${activeTool === tools.title && "bg-[#6126DD] text-black"}`}
                                    onClick={() => setActiveTool(tools.title)}
                                >
                                    {tools.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
            <div className='w-[45%] p-[50px] h-full overflow-y-scroll'>
                {/* {filteredTool && filteredTool.component ? (
                    filteredTool.component
                ) : (
                    <p>No component available</p>
                )} */}
            </div>
            <div className='w-[40%]'>Editor</div>
        </main>
    );
};

export default Page;
