import User from "./User";
import Chats from "./Chats";
const Dashboard = () => {
  return (
    <div className="w-screen flex ">
      <div className="w-[25%] h-screen border border-black ">
        <User />
        <hr />
        <Chats />
      </div>
      <div className="w-[50%] h-screen border border-black"></div>
      <div className="w-[25%] h-screen border border-black "></div>
    </div>
  );
};

export default Dashboard;
