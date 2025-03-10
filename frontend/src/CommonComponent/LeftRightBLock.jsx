import { Button } from "./Button";
import { memo } from "react";
const LeftRightBLock= memo(({data})=> {
    return (<>
       <div className="hidden md:block">
      {
        data.map((ele,ind)=>{
   
       return(
        ele.contentOnLeft?<div key={ind} className=" grid md:grid-cols-2 justify-center items-center gap-8 mb-5">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-medium">{ele.title}</h2>
          <p>{ele.content}</p>
          <Button name="Get Demo" link="/ScheduleDemo"></Button>
        </div>
        <div className="flex justify-end">
        <img src={ele.img} alt="sms images" height={300} width={400}></img>
        </div>
       </div>:
        <div key={ind} className="grid md:grid-cols-2 justify-center items-center gap-8 mb-5">
        <div className="flex justify-start">
        <img src={ele.img} alt="sms images" height={300} width={400}></img>
        </div>
        <div className="flex flex-col gap-5 ">
          <h2 className="text-3xl font-medium">{ele.title}</h2>
          <p>{ele.content}</p>
          <Button name="Get Demo" link="/ScheduleDemo"></Button>
        </div>
</div>)})
      }
       </div>
<div className=" md:hidden">
      {
        data.map((ele,ind)=>{
   
       return(
        <div key={ind} className=" grid md:grid-cols-2 justify-center items-center gap-5 mb-7">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-medium">{ele.title}</h2>
          <p>{ele.content}</p>
          <Button name="Get Demo" link="/ScheduleDemo"></Button>
        </div>
        <div className="flex items-center justify-center">
        <img src={ele.img} alt="sms images" height={300} width={400}></img>
        </div>
       </div>)})
      }
       </div>
    </>
     
  )});
   

export default LeftRightBLock;
