import React, { useState } from "react";

const ListData = ({ items, deleteItem }) => {
  const [more, setMore] = useState(false);

  return (
    <div className="w-full h-full">
      {items.map((item) => (
        <div className="bg-white dark:bg-black rounded-2xl my-12 overflow-hidden">
          <img
            className="w-full h-auto bg-center bg-cover cursor-pointer duration-300 hover:scale-105"
            src={item.image}
            alt=""
          />
          <h1 className="text-black dark:text-white text-xl my-2 mt-4 px-3">{item.name}</h1>
          <p className="text-black dark:text-white my-4 text-[14px] px-3 pb-4 text-justify">
            {more ? item.description : `${item.description.substring(0, 200)}`}
          </p>
          <div className="flex items-center justify-between lg:flex-col lg:items-start">
            <h3
              className="w-fit text-white font-semibold px-4 py-2 mb-4 mx-3 border-2 border-white cursor-pointer duration-300 hover:bg-white hover:text-black"
              onClick={() => setMore(!more)}
            >
              {more ? "Show Less" : "Show More"}
            </h3>
            <h3
              className="w-fit text-white bg-red-500 font-semibold px-4 py-2 mb-4 mx-3 border-2 border-red-500 cursor-pointer duration-300 hover:bg-white hover:text-red-500"
              onClick={() => deleteItem(item.id)}
            >
              Delete
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListData;
