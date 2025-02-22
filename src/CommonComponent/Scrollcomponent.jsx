import { memo } from "react";
const Scrollcomponent =memo( ({data}) => {
  return (
    <div
      className="overflow-y-auto h-80 scrollbar-thin scrollbar-thumb-primery scrollbar-track-white scrollbar-corner-white"
      style={{ direction: "rtl" }} // Moves scrollbar to the left
    >
      <div style={{ direction: "ltr" }}> {/* Restores normal text alignment */}
        {data.map((ele, ind) => (
          <div key={ind} className="mb-8 ml-8">
            <h2 className="text-xl font-bold mb-2">{ele.title}</h2>
            <p className="text-base text-para">{ele.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Scrollcomponent;
