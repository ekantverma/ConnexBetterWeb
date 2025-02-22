import { Button } from "./Button"
import { memo } from "react"
export const Blogcontainer=memo(({title,content,img,buttonname,buttlink,date})=>
 {
    return( <div className="flex flex-col gap-5 ">
        <img src={img} alt="blog image" loading="lazy"></img>
        <div className="flex flex-col gap-4">
   
        <Button name={buttonname} link={buttlink}></Button>
      
            <h3 className="text-xl font-medium">{title}</h3>
            <p className="text-base text-paracolor">{content}</p>
            <p>{date}</p>
        </div>
        </div>)
 })           
        
     
    
