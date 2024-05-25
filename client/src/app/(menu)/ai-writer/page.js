import { AIwriterTools } from "@/assets/Index";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Page = () => {
  return (
    <>
      <main className='w-full relative'>
        <Navbar />
        <section className='w-full h-auto'>
          <div className='px-40 py-16'>
            <h1 className='text-[38px] font-[600] mt-4 text-[#6126DD]'>
              AI Writer streamlines the process of generating textual content,
              allowing for swift creation without sacrificing quality or
              efficacy.
            </h1>
            <p className='mt-4 text-[14px] font-[500]'>
              AI Writer alleviates the challenges associated with generating
              content for various online platforms including social media,
              websites, documents, advertisements, and more. Our mission is to
              democratize access to AI-driven text creation by offering a
              user-friendly and cost-free platform, enabling everyone to harness
              the power of AI for their textual needs effortlessly.
            </p>
            <div className='my-20 mx-10'>
              <h1 className='text-center text-[26px] font-[600]'>
                AI-Writer Tools
              </h1>
              <p className='text-center text-[14px] font-[500] mb-5'>
                Find your specific AI text tool, like generating a cool
                Instagram caption, a new Social Media Bio, or a fun story.
              </p>
              <div className='grid grid-cols-2 gap-8'>
                {AIwriterTools.map((item, key) => {
                  const { title, description, link } = item;
                  return (
                    <div key={key} className='glass p-6  h-full w-full'>
                      <div className='flex items-center gap-5'>
                        <Image
                          src={"/images/icon1.png"}
                          alt={"icon1"}
                          width={40}
                          height={40}
                          className='w-full h-full max-w-[40px] max-h-[40px]'
                        />
                        <h1 className='text-[26px] font-[600]'>{title}</h1>
                        <Link
                          href={link}
                          className='p-[10px]  rounded-full bg-[#6126DD] w-max'
                        >
                          <FaExternalLinkAlt size={15} />
                        </Link>
                      </div>
                      <p className='text-[14px] font-[500] text-justify mt-2'>
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='mt-10'>
              <div className='grid grid-cols-2 gap-8'>
                <div>
                  <h1 className='font-[600] text-[26px]  mb-3  text-[#6126DD]'>
                    What is an AI Writer and what does it do?
                  </h1>
                  <p className='text-[14px] font-[500] text-justify mt-2'>
                    An AI Writer consists of single or multiple tools powered by
                    artificial intelligence (AI) that generate or edit text for
                    you (Writer). The text is often used for content on social
                    media, websites, blogs, landing pages, advertisements, and
                    much more.
                    <br />
                    <br />
                    Quicktools by Picsart offers a variety of AI writer tools,
                    including text tools that generate social media bios,
                    slogans, ad copy, and more. There is no need to create all
                    your content entirely from scratch when an AI text generator
                    can support or do the work for you at a fraction of the time
                    and cost.
                  </p>
                </div>
                <div className='flex items-center justify-center'>
                  <Image
                    src={"/images/aiicon1.png"}
                    alt=''
                    width={250}
                    height={250}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <Image
                    src={"/images/editIcon2.jpg"}
                    alt=''
                    width={250}
                    height={250}
                    className='w-auto h-auto'
                  />
                </div>
                <div className='text-justify'>
                  <h1 className='font-[600] text-[26px]  mb-3 text-[#6126DD]'>
                    Benefits of using AI tools for writing
                  </h1>
                  <p className='text-[14px] font-[500] text-justify mt-2'>
                    People use AI text generators for many different things -
                    professionally or personally- because of many benefits.
                    <br />
                    <br />
                    Before, people used to take hours, days, or weeks to create
                    content; AI can reduce this to minutes or even seconds. The
                    magic sits in providing the right prompt and input values
                    like tone-of-voice and character limit to get the right
                    result. After that, you can rephrase or edit the text to
                    copy the result and paste it into another platform,
                    document, or message.
                    <br />
                    <br />
                    AI Writer Tools make everyone a high-quality writer. You can
                    write for blogs, websites, social media, documents, etc.
                    Therefore, you don't have to hire a specialist like a
                    copywriter to write content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Page;
