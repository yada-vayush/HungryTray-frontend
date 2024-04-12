import { Link } from "react-router-dom";

const DropdownProfile = (props) => {
  return (
    <div className="flex flex-col dropdown-profile">
      <div className="flex flex-col gap-1">
        <Link to="/user-profile">User Profile</Link>
        <div className=" bg-slate-400 h-1"></div>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            // eslint-disable-next-line react/prop-types
            window.location = "/";
            // eslint-disable-next-line react/prop-types
            props.show();
          }}
          className=" w-full my-2 text-white bg-green-400 rounded-md p-2 text-center font-semibold flex items-center justify-center"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DropdownProfile;
