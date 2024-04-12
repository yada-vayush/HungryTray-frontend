import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
const UserProfileForm = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState, setValue } = form;
  const [update, setUpdate] = useState("loading");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/v1/getByToken",
          {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
          }
        );

        // Assuming your API response has some data you want to set as default values
        const responseData = response.data.data;

        setUpdate("loaded");
        // Set default values using setValue from react-hook-form
        Object.keys(responseData).forEach((key) => {
          setValue(key, responseData[key]);
        });
      } catch (error) {
        setUpdate("notloading");
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setValue]);
  const { errors } = formState;
  const onSubmit = (data) => {
    const response = axios.put("http://localhost:3001/api/v1/update", data, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    if (response) toast.success("User profile updated!");
    else toast.error("User not updated");
    return response;
  };
  return (
    <>
      <div className=" bg-gray-50 rounded-lg md:p-10  ">
        <div className="flex flex-col gap-1">
          {" "}
          <h2 className="text-2xl font-bold text-center">User Profile form</h2>
          <span className="text-lg font-semibold text-center">
            View and change your profile information
          </span>
        </div>
        {update === "notloading" ? (
          <span>No user found</span>
        ) : (
          <>
            {" "}
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="">
              {" "}
              <div className="mt-5 p-4 flex flex-col gap-10 justify-between  ">
                <div className="flex justify-between">
                  <div className=" flex flex-col gap-2 flex-1 mx-4">
                    <label className="text-base font-serif text-gray-900 ">
                      Email
                    </label>
                    <div className="w-full">
                      <input
                        type="email"
                        placeholder="email"
                        disabled
                        {...register("email")}
                        className="w-full  text-black py-3  bg-transparent   focus:shadow-lg outline-none"
                      ></input>
                    </div>
                    <p className="text-sm text-red-500 font-sans">
                      {errors.email?.message}
                    </p>
                  </div>
                  <div className=" flex flex-col gap-2 flex-1 mx-4">
                    <label className="text-base font-serif text-gray-900 ">
                      Phone Number
                    </label>
                    <div className="w-full">
                      <input
                        type="number"
                        placeholder="Phone Number"
                        {...register("phoneNumber", {
                          required: "Phone Number is required",
                        })}
                        className="w-full  text-black py-3  bg-transparent   focus:shadow-lg outline-none"
                      ></input>
                    </div>
                    <p className="text-sm text-red-500 font-sans">
                      {errors.phoneNumber?.message}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className=" flex flex-col gap-2 flex-1 mx-4">
                    <label className="text-base font-serif text-gray-900 ">
                      First Name
                    </label>
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder="firstName"
                        {...register("firstName", {
                          required: "First Name is required",
                        })}
                        className="w-full  text-black py-3  bg-transparent   focus:shadow-lg outline-none"
                      ></input>
                    </div>
                    <p className="text-sm text-red-500 font-sans">
                      {errors.firstName?.message}
                    </p>
                  </div>
                  <div className=" flex flex-col gap-2 flex-1 mx-4">
                    <label className="text-base font-serif text-gray-900 ">
                      Last Name
                    </label>
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder="lastName"
                        {...register("lastName", {
                          required: "Last Name is required",
                        })}
                        className="w-full  text-black py-3  bg-transparent   focus:shadow-lg outline-none"
                      ></input>
                    </div>
                    <p className="text-sm text-red-500 font-sans">
                      {errors.lastName?.message}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between ">
                  {" "}
                  <div className=" flex flex-col gap-2 flex-1 mx-4">
                    <label className="text-base font-serif text-gray-900 ">
                      Address
                    </label>
                    <div className="w-full">
                      <input
                        type="email"
                        placeholder="Address"
                        {...register("address", {
                          required: "Address is required",
                        })}
                        className="w-full  text-black py-3  bg-transparent   focus:shadow-lg outline-none"
                      ></input>
                    </div>
                    <p className="text-sm text-red-500 font-sans">
                      {errors.address?.message}
                    </p>
                  </div>
                  <div className=" flex flex-col gap-2 flex-1 mx-4">
                    <label className="text-base font-serif text-gray-900 ">
                      City
                    </label>
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder="Lucknow"
                        {...register("city", {
                          required: "City is required",
                        })}
                        className="w-full  text-black py-3  bg-transparent   focus:shadow-lg outline-none"
                      ></input>
                    </div>
                    <p className="text-sm text-red-500 font-sans">
                      {errors.city?.message}
                    </p>
                  </div>
                  <div className=" flex flex-col gap-2 flex-1 mx-4">
                    <label className="text-base font-serif text-gray-900 ">
                      Country
                    </label>
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder="India"
                        {...register("country", {
                          required: "Country is required",
                        })}
                        className="w-full  text-black py-3  bg-transparent   focus:shadow-lg outline-none"
                      ></input>
                    </div>
                    <p className="text-sm text-red-500 font-sans">
                      {errors.city?.message}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className=" w-1/4 my-2 text-black bg-slate-300 border border-black font-sans rounded-md p-4  text-center items-center justify-center hover:shadow-lg hover:bg-slate-500">
                    Submit
                  </button>
                  <ToastContainer
                    position="top-right"
                    autoClose={500}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition:Bounce
                  />
                </div>
              </div>
            </form>
            <DevTool control={control} />
          </>
        )}
      </div>
    </>
  );
};

export default UserProfileForm;
