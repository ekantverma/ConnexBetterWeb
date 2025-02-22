import React from 'react'
import { memo } from 'react'
import { Button } from './Button'
const LeftImageRightContent = memo(function LeftImageRightContent({ heading, para, img }) {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center p-5 bg-tertiary rounded-2xl">
      <div className="bg-secondary p-3">
        <img src={img} alt="image" loading="lazy" height={200} width={300} />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl">{heading}</h2>
        <p className="text-base">{para}</p>
        <Button name="Contact us" link="/Contact" />
      </div>
    </div>
  );
});
export default LeftImageRightContent;
