import React, { use } from "react";
import Marquee from "react-fast-marquee";

const  promiseData = fetch("/news.json").then(res =>  res.json);
const LetasNews = () => {

  const data = use(promiseData);
  console.log(data);
  
  return (
    <div className="flex items-center gap-5 bg-base-300 p-3 rounded-md my-5">
      <p className="text-base-100 bg-secondary px-3 py-2 ">Latest</p>
      <Marquee
        className="flex gap-5 items-center cursor-pointer "
        pauseOnHover={true}
        speed={70}
      >
        <p className="font-semibold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p className="font-semibold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p className="font-semibold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default LetasNews;
