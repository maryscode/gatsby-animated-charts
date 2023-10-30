import React from 'react';

const PullQuote = ({attribution, children}) => {
  return (
    <div className="w-full sm:w-[577px] text-center mx-auto mb-10">
      <span className="flex justify-center">
      <img src="/images/disease-overview/quotation-mark-graphic.svg" alt='Quotation mark graphic' className='w-[34px] h-[27px] mx-auto mb-3'/>
      </span>
      <span className="text-[24px] leading-[27px] text-blazing-rose block mb-2 font-nunito"><strong>{children}</strong></span>
      <span className="text-[16px] block">—{attribution}</span>
    </div>
  );
}

export default PullQuote;
