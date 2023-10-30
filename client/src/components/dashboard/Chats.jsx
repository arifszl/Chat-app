import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Avatar from "@mui/material/Avatar";

const people = [
  {
    name: "John Doe",
    status: "Online",
    img: "/static/images/avatar/1.jpg",
  },
  {
    name: "Jane Smith",
    status: "Offline",
    img: "/static/images/avatar/2.jpg",
  },
  {
    name: "Bob Johnson",
    status: "Available",
    img: "/static/images/avatar/3.jpg",
  },
  {
    name: "John Doe",
    status: "Online",
    img: "/static/images/avatar/1.jpg",
  },
  {
    name: "Jane Smith",
    status: "Offline",
    img: "/static/images/avatar/2.jpg",
  },
  {
    name: "Bob Johnson",
    status: "Available",
    img: "/static/images/avatar/3.jpg",
  },
];

const Chat = () => {
  return (
    <div className=" text-black flex flex-col">
      <div className="flex-1 overflow-y-auto  ">
        {people.map(({ name, status, img }) => {
          return (
            <div
              key={name}
              className="flex items-center p-4 hover:bg-[#1a171707] cursor-pointer shadow-sm border-b border-b-gray-300"
            >
              <Avatar
                alt={name}
                src={img}
                sx={{ width: 48, height: 48, mr: 4 }}
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-medium">{name}</h2>
                <p className="text-gray-400">{status}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chat;
