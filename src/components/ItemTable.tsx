import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
type ItemTableProps = {
  tier: string;
  dragChar: string[];
  setDragChar: Dispatch<SetStateAction<string[]>>;
  checkCharState: boolean;
  setCheckCharState: Dispatch<SetStateAction<boolean>>;
  lastData: string;
  setLastData: Dispatch<SetStateAction<string>>;
};
export const ItemTable = ({
  tier,
  dragChar,
  setDragChar,
  checkCharState,
  setCheckCharState,
  lastData,
  setLastData,
}: ItemTableProps) => {
  const [dragChar2, setDragChar2] = useState<string[]>([]);
  const [localLast, setLocalLast] = useState("");
  const [loopCheck, setLoopCheck] = useState(false);

  const handleDragOver2 = (e: any) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (lastData) {
      // setDragChar([...dragChar, lastData]);
    }
    console.log(dragChar);
  }, [loopCheck]);

  useEffect(() => {}, [dragChar2]);

  useEffect(() => {
    if (checkCharState) {
      let tempData = dragChar2.filter(
        (data) => data.includes(lastData) == false
      );
      setDragChar2(tempData);
      let tempData2 = dragChar.filter(
        (data) => data.includes(lastData) == false
      );
      setDragChar2([...tempData])
      if(localLast == lastData){
        setDragChar2([...tempData, localLast])
        alert(localLast);
      }
      setDragChar([...tempData2]);
    }
    setCheckCharState(false);
  }, [checkCharState, loopCheck]);

  const handleDrop2 = (e: any) => {
    e.preventDefault();
    let checkChar;

    const data = e.dataTransfer.getData("text");
    if (dragChar.includes(data)) {
      setCheckCharState(true);
    }
    if (data) {
      setDragChar([...dragChar, data]);
      setLocalLast(data);
      setDragChar2([...dragChar2, data]);
    }
    setLoopCheck(!loopCheck);
    setLastData(data);
    setLocalLast("");
  };
  return (
    <div
      onDragOver={handleDragOver2}
      onDrop={handleDrop2}
      draggable
      className="border-b-2 flex"
    >
      <div className="flex w-full">
        <div className="w-[100px] h-full bg-red-500 text-center">{tier}</div>
        <div className="grid grid-cols-12">
          {dragChar2.map((drag, index) => {
            return (
              <div className="w-[70px]">
                {" "}
                <img
                  key={index}
                  className="w-[70px] h-[100px] bg-[#deff22]"
                  src={drag}
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <div className="bg-[#fff] h-[100px]"></div>
      </div>
    </div>
  );
};

export default ItemTable;
