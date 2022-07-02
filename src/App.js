import React, { useEffect, useState } from "react";

// components/
import Title from "./components/Title";
import data from "./data/data";
import ListData from "./components/ListData";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center my-8">
        <Title />
      </div>

      <div className="flex items-center justify-center flex-col mx-[10%] my-8">
        <ListData items={items} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;
