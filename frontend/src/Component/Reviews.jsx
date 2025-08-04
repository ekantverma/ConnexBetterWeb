import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    title: "Valuable tool in identifying areas where staff may need additional support",
    content:
      "It helps me support managers with pinpointing employees who may be at risk of not meeting their probation or bonus targets. This visibility allows me to provide timely encouragement and support to ensure they stay on track.",
    link: "https://www.g2.com/",
    name: "Milinda H.",
    role: "HR Business Partner",
    initials: "MH",
  },
  {
    id: 2,
    title: "Excellent support and insights",
    content:
      "This tool makes it easy to manage employee progress and give timely feedback. It’s become an essential part of our workflow.",
    link: "https://www.g2.com/",
    name: "John D.",
    role: "Team Lead",
    initials: "JD",
  },
  {
    id: 3,
    title: "Great visibility across teams",
    content:
      "Helps track performance transparently and align with goals. It helps motivate and manage proactively.",
    link: "https://www.g2.com/",
    name: "Priya S.",
    role: "People Ops",
    initials: "PS",
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);
  const cardsPerPage = 2;

  const next = () => {
    setCurrent((prev) => (prev + cardsPerPage) % reviews.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      (prev - cardsPerPage + reviews.length) % reviews.length
    );
  };

  const visibleReviews = [
    reviews[current],
    reviews[(current + 1) % reviews.length],
  ];

  return (
    <div className="bg-[#421C92] py-16 px-6 md:px-20 text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Section */}
        <div className="lg:w-1/3">
          <h2 className="text-6xl font-semibold leading-snug mb-4">
            What our <br /> customers say <br /> about us
          </h2>
          <p className="text-2xl text-gray-200">
            Don’t just take our word for it – hear from those who’ve
            experienced the Appraisd difference.
          </p>

          {/* Dots & Arrows */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 bg-white text-[#421C92] rounded-full"
            >
              <FaArrowLeft />
            </button>
            {reviews.map((_, idx) => (
              <span
                key={idx}
                className={`h-3 w-3 rounded-full ${
                  idx === current ? "bg-white" : "bg-gray-400"
                }`}
              ></span>
            ))}
            <button
              onClick={next}
              className="p-3 bg-white text-[#421C92] rounded-full"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white text-gray-900 rounded-2xl p-8 shadow-md flex flex-col justify-between h-full"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 mb-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-3">{review.title}</h3>

                {/* Content */}
                <p className="text-gray-700 text-lg mb-4">{review.content}</p>

                {/* Link */}
                <a
                  href={review.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  See G2 review ↗
                </a>
              </div>

              {/* Author Info at Bottom */}
              <div className="flex items-center gap-3 mt-6">
                <div className="h-12 w-12 rounded-full bg-purple-800 text-white flex items-center justify-center text-lg font-bold">
                  {review.initials}
                </div>
                <div className="text-base">
                  <p className="font-medium text-gray-900">{review.name}</p>
                  <p className="text-gray-600">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
