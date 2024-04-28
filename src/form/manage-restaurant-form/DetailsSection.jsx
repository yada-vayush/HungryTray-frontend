import { Controller, useFormContext } from "react-hook-form";

const DetailsSection = () => {
  const { control, formState } = useFormContext();
  const { errors } = formState;
  return (
    <div className="space-y-5">
      <div className="my-2">
        <h2 className="text-2xl font-bold mb-2">Details</h2>
        <p className="text-md font-serif text-gray-500 ">
          Enter the details about your restaurant
        </p>
      </div>
      <div className="container mt-3">
        <Controller
          control={control}
          name="restaurantName"
          render={({ field }) => (
            <div className="flex flex-col gap-1 justify-between ">
              <label className="text-base font-serif text-gray-900">Name</label>
              <input
                {...field}
                className="w-full  text-black py-3  bg-transparent   shadow-lg p-1 rounded-lg"
              />
              <p className="text-sm text-red-500 font-sans">
                {errors.restaurantName?.message}
              </p>
            </div>
          )}
        />
      </div>
      <div className="flex gap-4 ">
        <div className="container mt-3">
          <Controller
            control={control}
            name="city"
            render={({ field }) => (
              <div className="flex flex-col gap-1 justify-between ">
                <label className="text-base font-serif text-gray-900">
                  City
                </label>
                <input
                  {...field}
                  className="w-full  text-black py-3  bg-transparent   shadow-lg p-1 rounded-lg"
                />
                <p className="text-sm text-red-500 font-sans">
                  {errors.city?.message}
                </p>
              </div>
            )}
          />
        </div>
        <div className="container mt-3">
          <Controller
            control={control}
            name="country"
            render={({ field }) => (
              <div className="flex flex-col gap-1 justify-between ">
                <label className="text-base font-serif text-gray-900">
                  Country
                </label>
                <input
                  {...field}
                  className="w-full  text-black py-3  bg-transparent   shadow-lg p-1 rounded-lg"
                />
                <p className="text-sm text-red-500 font-sans">
                  {errors.country?.message}
                </p>
              </div>
            )}
          />
        </div>
      </div>
      <div className="container mt-3">
        <Controller
          control={control}
          name="deliveryPrice"
          render={({ field }) => (
            <div className="flex flex-col gap-1 justify-between max-w-[25%] ">
              <label className="text-base font-serif text-gray-900">
                DeliveryPrice (₹)
              </label>
              <input
                {...field}
                placeholder="1.06"
                className="w-full  text-black py-3  bg-transparent   shadow-lg rounded-lg p-1 "
              />
              <p className="text-sm text-red-500 font-sans">
                {errors.deliveryPrice?.message}
              </p>
            </div>
          )}
        />
      </div>
      <div className="container mt-3">
        <Controller
          control={control}
          name="estimatedDeliveryTime"
          render={({ field }) => (
            <div className="flex flex-col gap-1 justify-between max-w-[25%] ">
              <label className="text-base font-serif text-gray-900">
                Estimated Delivery Time (minutes)
              </label>
              <input
                {...field}
                placeholder="30"
                className="w-max-[]  text-black py-3  bg-transparent   shadow-lg p-1 rounded-lg"
              />
              <p className="text-sm text-red-500 font-sans">
                {errors.estimatedDeliveryTime?.message}
              </p>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default DetailsSection;
