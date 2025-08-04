import { memo } from "react";

export const Blogcontainer = memo(
  ({ title, content, img, buttonname, buttlink, date }) => {
    return (
      <div className="rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] flex flex-col">
        <img
          src={img}
          alt="blog"
          loading="lazy"
          className="w-full h-60 object-cover rounded-t-2xl"
        />
        <div className="p-5 flex flex-col justify-between flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm flex-1 overflow-y-auto max-h-32 scrollbar-thin scrollbar-thumb-gray-300">
            {content}
          </p>
          <p className="text-sm text-gray-400 mt-3">{date}</p>
          <a href={buttlink} target="_blank" rel="noopener noreferrer">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full transition-all">
              {buttonname || "Read More"}
            </button>
          </a>
        </div>
      </div>
    );
  }
);

