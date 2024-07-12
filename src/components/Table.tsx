import React, { useState, useEffect } from "react";
import ItemTable from "./ItemTable";
import Char from "./Char";

const Table = () => {
  type CharType = {
    name: string;
    img: string;
  };
  let tier: string[] = ["S", "A", "B", "C", "D"];
  let char: CharType[] = [
    {
      name: "Acheron",
      img: "acheron.png",
    },
    {
      name: "Aventurine",
      img: "aventurine.png",
    },
    {
      name: "Firefly",
      img: "firefly.png",
    },
  ];
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", e.currentTarget.id);
  };
  let [dragChar, setDragChar] = useState(['example']);
  let checkChar: boolean = false;
  // const [stateCheck, setStateCheck] = useState(false);
  const [checkCharState, setCheckCharState] = useState(false);
  //   useEffect(() => {
  //     if(lastData !== ""){
  //         alert('wibu');
  //         setDragChar2([...dragChar2, lastData]);
  //     }else{
  //         const newDragChar2 = dragChar2.filter((item) => item.includes(lastData) == false);
  //         setDragChar2(newDragChar2);

  //     }
  //   },[checkCharState, lastData])
  console.log(checkChar);
  const [lastData, setLastData] = useState('');
  let lengthDrag; 
useEffect(() => {
    lengthDrag = dragChar.length;
}, [dragChar])
  return (
    <div className="w-full px-40 mt-[40px] bg-white">
      <div className="table w-full">
        {tier.map((tierList, index) => {
          return (
            <ItemTable
              key={index}
              checkCharState={checkCharState}
              setCheckCharState={setCheckCharState}
              lastData={lastData}
              setLastData = {setLastData}
              dragChar={dragChar}
              setDragChar={setDragChar}
              tier={tierList}
            />
          );
        })}
      </div>
      <div className="flex flex-row">
        {char.map((charList, index) => {
            
          return (
            <Char
              key={index}
              onDragStart={handleDragStart}
              char={charList.name}
              img={charList.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Table;
