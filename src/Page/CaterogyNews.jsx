import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewesCard from "../Components/NewesCard";

const CaterogyNews = () => {
  const [storsNews, setStorsNews] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    if (id == "0") {
      setStorsNews(data);
      return;
    } else if (id == "1") {
      const filterdatasa = data.filter(
        (newes) => newes.others.is_today_pick == true
      );
      setStorsNews(filterdatasa);
    } else {
      const filterdata = data.filter((newes) => newes.category_id == id);
      setStorsNews(filterdata);
    }
  }, [data, id]);

  return <div>
    Total {storsNews.length} News Found
    <div>
       {
        storsNews.map((card, index) => <NewesCard key={index} card={card}></NewesCard>)
       }
    </div>
    </div>;
};

export default CaterogyNews;
