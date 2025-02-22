import React from "react";
import { Button } from "./Button";
import { memo } from "react";

const CallToAction = memo(({heading,content}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-center p-8 bg-gray-50 rounded-2xl">
      <h2 className="text-3xl font-bold text-blue-600">{heading}</h2>
      <p className="text-gray-600 mt-2">
      {content}
      </p>
    <Button name="Contact us" link="/Contact"></Button>
    </div>
  );
});

export default CallToAction;