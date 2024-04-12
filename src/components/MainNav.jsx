import axios from "axios";
import { Link } from "react-router-dom";
import UserNameMenu from "../page/UserNameMenu";
import { useEffect, useState } from "react";

const MainNav = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    isAuthenticated();
  }, []);
  const isAuthenticated = async () => {
    try {
      if (localStorage.getItem("token") != null) {
        const url = "http://localhost:3001/api/v1/isAuthenticated";
        const { data: res } = await axios.get(url, {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        });
        console.log("====================================");
        console.log(res);
        console.log("====================================");
        setUser(res.data.email);

        setShow(true);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      )
        return false;
    }
  };
  const Switch = () => {
    setShow(false);
    console.log(show);
  };
  return (
    <>
      <span className="flex space-x-2 items-center">
        {show && localStorage.getItem("token") != null ? (
          <UserNameMenu name={user} show={Switch} type="main" />
        ) : (
          <Link to={"/login"}>
            <button className=" text-2xl px-2 font-bold  text-green-500 hover:text-orange-500 hover:bg-inherit">
              Log in
            </button>
          </Link>
        )}
      </span>
    </>
  );
};

export default MainNav;
