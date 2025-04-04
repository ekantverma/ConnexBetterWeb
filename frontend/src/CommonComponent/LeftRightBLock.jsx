import { Button } from "./Button";
import { memo } from "react";

const LeftRightBLock = memo(({ data }) => {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:block">
        {data.map((ele, ind) =>
          ele.contentOnLeft ? (
            <div
              key={ind}
              className="grid md:grid-cols-2 items-center gap-12 py-8 max-w-screen-xl mx-auto"
            >
              {/* Text Left */}
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-semibold text-gray-800">{ele.title}</h2>
                <p className="text-lg text-gray-600">{ele.content}</p>
                <Button name="Get Demo" link="/ScheduleDemo" />
              </div>
              {/* Image Right */}
              <div className="flex justify-end">
                <img
                  src={ele.img}
                  alt="block"
                  className="w-full max-w-md object-contain rounded-xl"
                />
              </div>
            </div>
          ) : (
            <div
              key={ind}
              className="grid md:grid-cols-2 items-center gap-12 py-8 max-w-screen-xl mx-auto"
            >
              {/* Image Left */}
              <div className="flex justify-start">
                <img
                  src={ele.img}
                  alt="block"
                  className="w-full max-w-md object-contain rounded-xl"
                />
              </div>
              {/* Text Right */}
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-semibold text-gray-800">{ele.title}</h2>
                <p className="text-lg text-gray-600">{ele.content}</p>
                <Button name="Get Demo" link="/ScheduleDemo" />
              </div>
            </div>
          )
        )}
      </div>

      {/* Mobile View */}
      <div className="md:hidden px-4">
        {data.map((ele, ind) => (
          <div
            key={ind}
            className="flex flex-col gap-6 py-6 max-w-screen-sm mx-auto"
          >
            {/* Text */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-gray-800">{ele.title}</h2>
              <p className="text-base text-gray-600">{ele.content}</p>
              <Button name="Get Demo" link="/ScheduleDemo" />
            </div>
            {/* Image */}
            <div className="flex items-center justify-center">
              <img
                src={ele.img}
                alt="block"
                className="w-full max-w-xs object-contain rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
});

export default LeftRightBLock;
