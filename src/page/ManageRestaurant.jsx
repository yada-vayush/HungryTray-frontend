import axios from "axios";
import ManageRestaurantForm from "../form/manage-restaurant-form/ManageRestaurantForm";
import { ToastContainer, toast } from "react-toastify";
import { useGetMyRestaurant } from "../api/MyRestaurant";

const ManageRestaurant = () => {
  const createMyRestaurant = async (formData) => {
    try {
      console.log(formData);
      const response = await axios.post(
        "http://localhost:3001/api/v1/restaurant",
        formData,
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      );
      if (response.status === 201) {
        toast.success("User restaurant created");
      } else {
        toast.error("Failed to create user restaurant");
      }
      return response;
    } catch (error) {
      console.log("====================================");
      console.log("Error while creating restaurant:", error);
      if (error.response) {
        // Display error message from server response
        toast.error(error.response.data.message);
      } else if (error.request) {
        // Handle network errors
        toast.error("Network error occurred. Please try again later.");
      } else {
        // Handle other errors
        toast.error("An error occurred. Please try again later.");
      }
    }
  };
  const update = async (formData) => {
    const accessToken = localStorage.getItem("token");

    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/restaurant",
        formData,
        {
          headers: {
            "x-access-token": accessToken,
          },
        }
      );

      if (response.status === 201) {
        toast.success("User restaurant upated");
      } else {
        toast.error("Failed to upate user restaurant");
      }
      return response;
    } catch (error) {
      console.log("====================================");
      console.log("Error while upating restaurant:", error);
      if (error.response) {
        // Display error message from server response
        toast.error(error.response.data.message);
      } else if (error.request) {
        // Handle network errors
        toast.error("Network error occurred. Please try again later.");
      } else {
        // Handle other errors
        toast.error("An error occurred. Please try again later.");
      }
    }
  };
  const { restaurant } = useGetMyRestaurant();
  const isEditing = !!restaurant;
  return (
    <div>
      <ManageRestaurantForm
        restaurant={restaurant}
        onSave={isEditing ? update : createMyRestaurant}
      />
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
  );
};

export default ManageRestaurant;
