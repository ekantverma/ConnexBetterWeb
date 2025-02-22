import { CommonHeading } from "../CommonComponent/CommonHeading";
import { Card } from "./Card";
import { memo } from "react";
const Boxcontainer= memo(({ heading, para, carddata })=>{
  return (
    <div className="flex flex-col">
      <CommonHeading h={heading} p={para}></CommonHeading>
      <div
  className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
>
  {carddata.map((ele) => (
    <Card key={ele.id} ele={ele}></Card>
  ))}
</div>

    </div>
  );
})

export default Boxcontainer;

