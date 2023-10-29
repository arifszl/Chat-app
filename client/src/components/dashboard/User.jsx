import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

const User = () => {
  return (
    <>
      <div className="flex justify-between mt-5 ml-3">
        <Avatar
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
        />
        <h3 className="text-black text-xl mr-3">Arifszl</h3>
        <div className="mr-4 order-last">
          <MoreVertIcon />
        </div>
      </div>
      <div className="flex items-center p-4">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <SearchIcon size={16} />
          </span>
          <input
            type="text"
            className="  shadow-2xl rounded-full py-2 pl-10 pr-4 w-full focus:outline-none"
            placeholder="Search chats"
          />
        </div>
      </div>
    </>
  );
};

export default User;
