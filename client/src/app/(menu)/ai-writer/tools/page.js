'use client';
import { ThemeSwitcher } from '@/utils/ThemeSwitcher';
import { toolsList } from '@/assets/Index';
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
  const [activeTool, setActiveTool] = useState();
  const filteredTool = toolsList
    .flatMap((tool) => tool.sectionItems)
    .find((item) => item.name === activeTool);
  return (
    <main className='w-full h-[97vh] flex'>
      <section className='w-[16%] glass p-4 relative h-full overflow-y-scroll'>
        <aside className='flex items-center gap-2'>
          <Link href={'/ai-writer'}>{'<-'}</Link>
          <h1 className=' text-base font-semibold text-[#6126DD]'>
            AiWriter Tools
          </h1>
          <ThemeSwitcher size={20} />
        </aside>
        <div className='grid gap-3 mt-2'>
          {toolsList.map((tools, key) => {
            return (
              <div key={key}>
                <h1 className='text-sm font-semibold text-[#6126DD]'>
                  {tools.sectionName}
                </h1>
                <div className='grid gap-1 ml-4'>
                  {tools.sectionItems.map((text) => {
                    return (
                      <p
                        key={text.name}
                        className={` text-xs font-semibold p-1 rounded cursor-pointer text-black dark:text-white hover:bg-[#6126DD] hover:text-black w-full ${
                          activeTool === text.name && 'bg-[#6126DD] text-black'
                        }`}
                        onClick={() => setActiveTool(text.name)}
                      >
                        {text.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className='w-[45%] p-[50px] h-full overflow-y-scroll'>
        {filteredTool && filteredTool.component ? (
          filteredTool.component
        ) : (
          <p>No component available</p>
        )}
      </div>
      <div className='w-[40%]'>Editor</div>
    </main>
  );
};

export default Page;
