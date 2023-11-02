import User from "./User";
import Chats from "./Chats";
import { Avatar } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CallIcon from "@mui/icons-material/Call";

const Dashboard = () => {
  return (
    <div className="w-screen flex overflow-hidden  ">
      <div className="w-[30%]  h-screen   overflow-y-scroll">
        <div className="sticky rounded-lg shadow-lg top-1 bg-white z-10">
          <User />
        </div>
        <hr />
        <Chats />
      </div>
      <div className="w-[70%]  h-screen overflow-y-auto">
        <div className="flex items-center sticky top-0 h-[55px] shadow-xl   rounded-full z-10">
          <div className="ml-5 flex flex-row items-center">
            <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
            <h2 className="ml-5 text-lg font-semibold">Arif</h2>
          </div>
          <div className="ml-[800px]">
            <CallIcon />
          </div>
        </div>
        <div className="chat-text border w-full   ">
          <div className=" h-[1000px] px-10 py-14">
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Hey! How are you?
            </div>
            <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl p-4 ml-auto text-white mb-6">
              I am fine! What about you?
            </div>
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Hey! How are you?
            </div>
            <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl p-4 ml-auto text-white mb-6">
              I am fine! What about you?
            </div>
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Hey! How are you?
            </div>
            <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl p-4 ml-auto text-white mb-6">
              I am fine! What about you?
            </div>
          </div>
          <div className="input-box w-[70%]   absolute bottom-0 h-14 bg-white border-t border-gray-300 rounded-full shadow-xl flex items-center px-4">
            <input
              type="text"
              placeholder="Type your message here"
              className="w-full h-full outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
