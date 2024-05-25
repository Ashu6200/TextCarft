import React from "react";

const Shorten = () => {
  return (
    <section className='w-full'>
      <h1 className=' text-[18px] font-[600] text-[#6126DD]'>Shorten</h1>
      <form className='w-full mt-5'>
        <div className='flex flex-col gap-2 mb-5 w-full'>
          <label className='font-[600] text-[14px]'>
            Past or write the text you want to shorten.
          </label>
          <textarea
            rows={15}
            type='text'
            required
            placeholder='E.g, the outline or topic and etails you want to include in the article'
            className='rounded p-2 text-[12px] outline-none bg-slate-200 dark:bg-neutral-900 focus:border-[#6126DD] focus:border-2 resize-y dark:placeholder:text-white placeholder:text-black focus:p-[6px]'
          />
        </div>
        <div className='flex flex-col gap-2 mb-5 w-full'>
          <button
            type='button'
            className='bg-[#6126DD] p-2 rounded font-[500] text-[14px] text-white w-full text-center'
          >
            Generate
          </button>
        </div>
      </form>
    </section>
  );
};

export default Shorten;
