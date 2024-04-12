import { Link } from "react-router-dom";
import MobileView from "./MobileView";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-amber-700 py-2 bg-orange-200">
      <div className="container flex justify-between items-cente mx-auto">
        <Link
          to={"/"}
          className="text-3xl font-bold tracking-tighter text-orange-700 "
        >
          HungryTray.com
        </Link>
        <div className="md:hidden">
          <MobileView />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
