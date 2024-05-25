"use client";
import { AiWriterGeentredText } from "@/assets/Index";
import ArticleTool from "@/components/generatedTextTools/ArticleTool";
import EmailTool from "@/components/generatedTextTools/EmailTool";
import EssayTool from "@/components/generatedTextTools/EssayTool";
import KeywordsTool from "@/components/generatedTextTools/KeywordsTool";
import OutlineTool from "@/components/generatedTextTools/OutlineTool";
import ParagraphTool from "@/components/generatedTextTools/ParagraphTool";
import StoryTool from "@/components/generatedTextTools/StoryTool";
import TranslationsTool from "@/components/generatedTextTools/TranslationsTool";
import { ThemeSwitcher } from "@/utils/ThemeSwitcher";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [activeTool, setActiveTool] = useState(AiWriterGeentredText[0].name);
  return (
    <main className='w-full h-[97vh]'>
      <div className='h-full w-full flex'>
        <div className='w-[15%] h-full glass py-[30px] px-6 relative'>
          <Link href={"/ai-writer"}>{"<-"}</Link>
          <div className='flex items-center gap-2 flex-wrap'>
            <ThemeSwitcher size={20} />
            <h1 className=' text-[18px] font-[600] text-[#6126DD]'>
              Generate Text
            </h1>
            <p className=' text-[18px] font-[600] text-[#6126DD]'>Tools</p>
          </div>
          <div className=' flex flex-col items-start gap-3 mt-6'>
            {AiWriterGeentredText.map(text => {
              return (
                <p
                  key={text.name}
                  className={` text-[12px] font-[600] p-[2px] px-[5px] rounded cursor-pointer text-black dark:text-white hover:bg-[#6126DD] hover:text-black w-full ${activeTool === text.name && "bg-[#6126DD] text-black"
                    }`}
                  onClick={() => setActiveTool(text.name)}
                >
                  {text.name}
                </p>
              );
            })}
          </div>
        </div>
        <div className='w-[55%] p-[50px] h-full overflow-y-scroll'>
          {activeTool === AiWriterGeentredText[0].name && <ArticleTool />}
          {activeTool === AiWriterGeentredText[1].name && <EmailTool />}
          {activeTool === AiWriterGeentredText[2].name && <EssayTool />}
          {activeTool === AiWriterGeentredText[3].name && <KeywordsTool />}
          {activeTool === AiWriterGeentredText[4].name && <OutlineTool />}
          {activeTool === AiWriterGeentredText[5].name && <ParagraphTool />}
          {activeTool === AiWriterGeentredText[6].name && <StoryTool />}
          {activeTool === AiWriterGeentredText[7].name && <TranslationsTool />}
        </div>
        <div className='w-[40%]'>Editor</div>
      </div>
    </main>
  );
};

export default Page;
