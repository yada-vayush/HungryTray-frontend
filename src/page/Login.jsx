/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/login.png";
import google from "../assets/google.svg";
import axios from "axios";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const [error, setError] = useState("");
  //const navigate = useNavigate();
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/api/v1/signin";
      const { data: res } = await axios.post(url, formData);
      localStorage.setItem("token", res.data);

      console.log("====================================");
      console.log(res.data);
      console.log("====================================");
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      )
        setError(error.response.data.message);
      console.log(error.response.data.err);
    }
  };
  return (
    <div className="p-10 w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[40%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-cyan-500 font-bold my-4">
            Order your food to your doorsteps
          </h1>
          <p className="text-2xl text-cyan-500 font-normal">
            Start ordering today...
          </p>
        </div>
        <img src={image} className="w-full h-full object-cover"></img>
      </div>
      <div className="h-full w-1/2 px-20 py-8 flex flex-col bg-slate-200 justify-between">
        <form onSubmit={onSubmit}>
          <h1 className="text-3xl font-bold text-amber-600  text-center">
            Hungry tray
          </h1>
          <div className="w-full flex flex-col max-w-[550px]">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-2xl font-semibold mb-1">Login</h3>

              <p className="text-sm mb-2">
                {" "}
                Welcome Back! Please enter your details
              </p>
            </div>

            <div className="w-full flex flex-col">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onChange}
                required
                className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              ></input>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={onChange}
                required
                value={password}
                className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              ></input>
            </div>
            {error && (
              <div className="w-full text-red-500 text-sm">{error}</div>
            )}
            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <p className="text-sm">Remember for 30 days</p>
              </div>
              <Link to="/forgot-password">
                {" "}
                <button className="text-sm  whitespace-nowrap font-medium cursor-pointer underline underline-offset-2">
                  Forgot Password ?
                </button>
              </Link>
            </div>
            <div className="w-full flex flex-col my-4">
              <button
                type="submit"
                className="w-full my-2 text-white bg-black rounded-md p-4 text-center font-semibold flex items-center justify-center"
              >
                Login
              </button>

              <Link
                to="/signup"
                className="w-full my-2 text-black bg-white border border-black  font-serif rounded-md p-4 cursor-pointer text-center flex items-center justify-center"
              >
                Register
              </Link>
            </div>
            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-lg absolute text-black/50 bg-slate-200">or</p>
            </div>
            <div className="w-full my-2 text-black bg-white border border-black cursor-pointer font-serif rounded-md p-4 text-center flex items-center justify-center">
              <img src={google} alt="google" className="h-6 mr-2"></img> Sign in
              with Google
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <p className=" text-sm font-normal text-black">
              {" "}
              Don't have a account?{" "}
              <Link
                to="/signup"
                className="font-semibold underline underline-offset-2 cursor-pointer"
              >
                Sign Up for free
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

/* <div className="container mt-5">
      <h1>Sign In</h1>
      <p>Sign into your account</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          ></input>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            required
            minLength="6"
          ></input>
        </div>
        <button className="" type="submit">
          Login
        </button>
      </form>
      <p className="mt-3 ">
        Don't have an account ?<Link to="/signup">Sign Up</Link>
      </p>
      <p className="mt-3 ">
        Forgot your password?<Link to="/reset-password"> Reset Password</Link>
      </p>
    </div>
 */
export default Login;
