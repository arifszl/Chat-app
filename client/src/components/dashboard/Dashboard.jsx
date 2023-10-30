import User from "./User";
import Chats from "./Chats";
import { Avatar } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CallIcon from "@mui/icons-material/Call";

const Dashboard = () => {
  return (
    <div className="w-screen flex ">
      <div className="w-[25%] h-screen border border-black ">
        <div className="sticky top-0 bg-white z-10">
          <User />
        </div>

        <hr />
        <Chats />
      </div>
      <div className="w-[50%] h-screen border border-black">
        <div className="flex items-center sticky top-0 h-[55px] shadow-xl z-10 rounded-full">
          <div className="ml-5 flex flex-row items-center">
            <Avatar />
            <h2 className="ml-5 text-lg font-semibold">Arif</h2>
          </div>
          <div className="ml-[500px]">
            <VideoCallIcon />

            <CallIcon />
          </div>
        </div>
      </div>
      <div className="w-[25%] h-screen border border-black "></div>
    </div>
  );
};

export default Dashboard;
