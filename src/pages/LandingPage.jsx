import React from 'react'

export default function LandingPage() {
  return (
    <div className='bg-[#0a0908] h-[100vh]'>
      <div className='h-[5rem]'>

      </div>
      <div className='text-center'>
        <div className='py-48'>
          <h2 className='text-[#FFF2E1] px-10 py-1 text-8xl font-bold'>ChunkMonk</h2>
          <h2 className='text-[#F2613F] px-10 py-1 text-6xl font-semibold'>Simplifying RAG Process</h2>
          <p className='text-[white] px-[24rem] py-2 text-lg'>Explore how ChunkMonk revolutionizes Retrieval-Augmented Generation through intelligent document chunking and effective vector database integration for enhanced data handling.</p>
        </div>
      </div>

      <div id='split-banner-1' className=' bg-[#]'>
        <h2 className='text-center text-[black] font-mono italic font-thin text-4xl py-8'>Exploring Intelligent Document Management</h2>
      </div>

      <div className='px-2'>
        <div class="grid grid-rows-2 grid-flow-col gap-2 ">
          <div class="row-span-2 bg-[#FFF0DC] h-[36rem]">01</div>
          <div class="col-span-1 bg-[#F2613F] ">02</div>
          <div class="row-span-1 bg-[#9B3922]  col-span-1">03</div>
          <div class="row-span-1 bg-[#481E14]  col-span-1">04</div>
          <div class="row-span-1 bg-[#d8d8d8]  col-span-1">05</div>
        </div>
      </div>

      <div id='split-banner-2' className='px-10 py-8 bg-[#]'>
        <h2 className='text-[black] text-4xl font-mono italic font-thin'>Exploring Streamlining Document Processing Goals</h2>
        <p className='font-mono italic font-thin text-lg'>Enhancing document processing for developers</p>
      </div>
    </div>
  )
}
