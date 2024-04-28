/* eslint-disable react/prop-types */
import { Controller, useFormContext } from "react-hook-form";

const MenuItemInput = ({ index, removeMenuItem, id }) => {
  const { control, formState } = useFormContext();
  const { errors } = formState;
  return (
    <div className="flex flex-row items-end space-x-10 gap-2">
      <Controller
        control={control}
        name={`menuItems[${index}].name`}
        render={({ field }) => (
          <div key={id}>
            <label className="flex items-center gap-1 text-base  font-serif text-gray-900 mb-2">
              Name {/*error message*/}
              <p />
            </label>
            <input
              {...field}
              placeholder="'Pizza"
              className="w-full  text-black  bg-transparent   py-3   shadow-lg px-2 rounded-lg"
            />
            <p className="text-sm text-red-500 font-sans">
              {errors?.menuItems?.[index]?.name?.message}
            </p>
          </div>
        )}
      />
      <Controller
        control={control}
        name={`menuItems[${index}].price`}
        render={({ field }) => (
          <div>
            <label className="flex items-center gap-1 text-base font-serif text-gray-900 mb-2">
              Price (₹) {/*error message*/}
            </label>{" "}
            <input
              {...field}
              placeholder="8.00"
              className="w-full  text-black py-3  bg-transparent   shadow-lg p-1 rounded-lg"
            />
            <p className="text-sm text-red-500 font-sans">
              {" "}
              {errors?.menuItems?.[index]?.price?.message}
            </p>
          </div>
        )}
      />
      <button
        type="button"
        onClick={removeMenuItem}
        className="bg-red-500 max-h-fit font-medium items-center   border border-black rounded-md py-3 px-5 hover:shadow-lg text-center "
      >
        Remove
      </button>
    </div>
  );
};

export default MenuItemInput;
