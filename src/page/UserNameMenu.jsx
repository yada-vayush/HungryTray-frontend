/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import DropdownProfile from "../components/DropdownProfile";
import profile from "../assets/profile.svg";
import DropDown from "../components/DropDown";
const UserNameMenu = (props) => {
  const [drop, setdrop] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setdrop(false);
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [dropdownRef]);
  // eslint-disable-next-line react/prop-types
  return (
    <div ref={dropdownRef}>
      <div
        className="cursor-pointer flex justify-between gap-2 "
        onClick={() => setdrop((e) => !e)}
      >
        <img src={profile} className="w-8 h-8 rounded-lg bg-slate-400 "></img>
        <span className="text-lg mt-1 text-orange-950 font-semibold">
          {props.name}
        </span>
      </div>
      {props.type === "main" ? (
        drop && <DropdownProfile show={props.show} />
      ) : (
        <DropDown show={props.show} />
      )}
    </div>
  );
};

export default UserNameMenu;
