/* eslint-disable react/prop-types */
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import DetailsSection from "./DetailsSection";
import CuisinesSection from "./CuisinesSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import { useEffect } from "react";

const schema = z.object({
  restaurantName: z.string({
    required_error: "Restaurant name is requied",
  }),
  city: z.string({
    required_error: "City is requied",
  }),
  country: z.string({
    required_error: "Country is requied",
  }),
  deliveryPrice: z.coerce.number({
    required_error: "Delivery price is required",
    invalid_type_error: "Must be a valid number",
  }),
  estimatedDeliveryTime: z.coerce.number({
    required_error: "Estimated delivery time  is required",
    invalid_type_error: "Must be a valid number",
  }),
  cuisines: z.array(z.string()).nonempty({
    message: "Please select at least one item",
  }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "Name is required"),
      price: z.coerce.number().min(1, "Price is required"),
    })
  ),
  imageFile: z.instanceof(File, { message: "Image is required" }),
});
// eslint-disable-next-line react/prop-types
const ManageRestaurantForm = ({ onSave, isLoading, restaurant }) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });
  useEffect(() => {
    if (!restaurant) return;
    // eslint-disable-next-line react/prop-types
    const deliveryPrice = parseInt(restaurant.deliveryPrice);
    const menuItems = restaurant.menuItems.map((item) => ({
      ...item,
      price: parseInt(item.price),
    }));
    const updatedRestaurant = {
      ...restaurant,
      deliveryPrice,
      menuItems,
    };
    form.reset(updatedRestaurant);
  }, [form, restaurant]);
  const onSubmit = (formDataJson) => {
    //todo convert data to a new formData object
    const formData = new FormData();
    console.log(formDataJson);
    formData.append("restaurantName", formDataJson.restaurantName);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("deliveryPrice", formDataJson.deliveryPrice.toString());
    formData.append(
      "estimatedDeliveryTime",
      formDataJson.estimatedDeliveryTime.toString()
    );
    formDataJson.cuisines.forEach((e, index) => {
      formData.append(`cuisines[${index}]`, e);
    });
    formDataJson.menuItems.forEach((menuItem, index) => {
      formData.append(`menuItems[${index}][name]`, menuItem.name);
      formData.append(`menuItems[${index}][price]`, menuItem.price.toString());
    });

    formData.append("imageFile", formDataJson.imageFile);
    onSave(formData);
  };
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10  rounded-lg"
      >
        <DetailsSection />
        <div className="h-1 bg-slate-200 w-full"></div>
        <CuisinesSection />
        <div className="h-1 bg-slate-200 w-full"></div>
        <MenuSection />
        <div className="h-1 bg-slate-200 w-full"></div>
        <ImageSection />
        {isLoading ? (
          <button className="bg-gray-500 max-h-fit font-medium items-center   border border-black rounded-md py-3 px-5 hover:shadow-lg text-center ">
            Loading
          </button>
        ) : (
          <button
            className="bg-gray-400 max-h-fit font-medium items-center   border border-black rounded-md py-3 px-5 hover:shadow-lg text-center "
            type="submit"
          >
            Submit
          </button>
        )}
      </form>
    </FormProvider>
  );
};

export default ManageRestaurantForm;
