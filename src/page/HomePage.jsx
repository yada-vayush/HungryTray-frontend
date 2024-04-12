import deli from "../assets/deli.svg";
import google from "../assets/goog.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeway today
        </h1>
        <span className="text-xl text-orange-400">
          Food is just a click away
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={deli} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl -tracking-tighter">
            Order takeway even faster!
          </span>
          <span>Download the App for fast ordering ...</span>
          <img src={google} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
