import React, { useState } from "react";
import Card from "./Card";
import { animate, scroll } from "motion"

const Foreground = () => {
  const data = [
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },

      
  ];
  return (
    <div className="w-full h-full fixed  z-[3] top-0 left-0 flex gap-10 flex-wrap p-5">
      {data.map((item, index)=>(
        <Card data={item}/>
      )) }

      
    </div>
  );
};

export default Foreground;
