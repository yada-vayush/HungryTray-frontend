import axios from "axios";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserNameMenu from "../page/UserNameMenu";

const MobileView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

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
        console.log(res.data);
        setUser("@" + res.data.email);

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
    <div className="max-w-40 ">
      <Menu className="w-10 h-10" onClick={openDialog} />
      {isOpen && (
        <div className="fixed inset-0 flex justify-end items-center bg-white bg-opacity-75 z-50 transition-opacity">
          <div className="w-2/5 h-full bg-slate-500 transform transition-transform">
            <div className="p-8 ">
              <div className="flex justify-between space-y-3">
                <h3 className="text-lg font-semibold mb-4">
                  Welcome to <br />
                  Hungry Tray
                </h3>
                <Menu onClick={closeDialog} className="h-10 w-10" />
              </div>
              <div className="border-b-2 border-orange-400"></div>
              <div className="p-2 flex">
                {show && localStorage.getItem("token") != null ? (
                  <UserNameMenu name={user} show={Switch} />
                ) : (
                  <Link to="/login" className="w-full">
                    <button className="rounded-md  p-2  flex  items-center justify-center font-bold bg-lime-300  w-full">
                      Log In
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileView;
