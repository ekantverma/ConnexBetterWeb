import { Accordian } from "./Accordian";
import { Button } from "./Button";
import { CommonHeading } from "./CommonHeading";
import { memo } from "react";
export const FAQ =memo(({data}) => {
    return (
        <>
        <div className=" grid md:grid-cols-2 gap-3">
        <div className=" "> <CommonHeading h="FAQ" p="Find quick answers to your questions about our API services, integration, and support."></CommonHeading>
        <div className="flex flex-col gap-3">
        <p className="text-black">Any questions left unanswered?</p>
        <Button name="Contact us" link="/Contact"></Button>
        </div>
   
        </div>
        <div>
        {data.map((val,id) => (
            <div className="mb-1" key={id}>
            <Accordian val={val}/>
            </div>
               
            ))}
        </div> </div>
       </>
    );
});
export default FAQ;