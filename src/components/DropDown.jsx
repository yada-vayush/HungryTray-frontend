import { Link } from "react-router-dom";

const DropDown = (props) => {
  return (
    <div className="py-5 px--5 mx-7 flex flex-col gap-2 w-full">
      <Link
        to="/user-profile"
        className="text-center font-semibold text-teal-800 tracking-normal text-lg  "
      >
        User Profile
      </Link>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          // eslint-disable-next-line react/prop-types

          // eslint-disable-next-line react/prop-types
          props.show();
        }}
        className=" w-full my-2 text-white bg-green-400 rounded-md p-2 text-center font-semibold flex items-center justify-center"
      >
        Logout
      </button>
    </div>
  );
};

export default DropDown;
