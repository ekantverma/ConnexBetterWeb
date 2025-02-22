import React from "react";
import Lottie from "lottie-react";
import { Button } from "./Button";

    const ContentImageBlock=React.memo(({ subheading, heading,secheading, content,lottie,img })=> {
        return (
          <div className="grid md:grid-cols-2 gap-5 items-center place-content-center ">
            <div className="flex flex-col justify-center gap-3">
              <h1 className="text-4xl font-semibold text-primery">{subheading}</h1>
              <div className="text-3xl">{heading}</div>
              <h2 className="text-2xl  text-primery font-medium">{secheading}</h2>
              <p className=" ">{content}</p>
              <Button name="Try for free" link="/contact"></Button>
            </div>
            <div className="flex items-center justify-center">
            {lottie=="use"?<Lottie animationData={img}></Lottie>:<img src={img} alt="image" loading="lazy" height={200} width={500}></img>}
            
            </div>
          </div>
        );
      })

export default ContentImageBlock;