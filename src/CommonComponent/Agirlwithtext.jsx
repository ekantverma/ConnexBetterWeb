import girlimage from "../assets/SMSImage/IMAGE/girlimage.svg";
import { Button } from "./Button";
export default function Agirlwithtext() {
  return (
    <div className="grid place-content-center rounded-2xl p-5 bg-secondary md:grid-cols-2 gap-5   ">
    <div className="flex flex-col items-start justify-center gap-3">
    <p>Our Pricing</p>
    <p className="text-[#0052cc] text-2xl">Connect with us to discuss about the plans that fits your needs</p>
      <Button name="Contact Us" link="/Contact"></Button>
    </div>
    <div className="grid place-content-center"><img src={girlimage} loading="lazy" width={200}></img></div>
    
    </div>
  )
}
