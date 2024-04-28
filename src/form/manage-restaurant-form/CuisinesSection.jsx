import { Controller, useFormContext } from "react-hook-form";
import { cuisineList } from "../../config/restaurant-config";
import CuisineCheckBox from "./CuisineCheckBox";

const CuisinesSection = () => {
  const { control, formState } = useFormContext;
  const errors = formState ? formState.errors : {};
  return (
    <div className="space-y-2">
      <div className="my-2">
        <h2 className="text-2xl font-bold mb-2"> Cuisines</h2>
        <p className="text-md font-serif text-gray-500 ">
          Select the cuisines that your restaurane serves
        </p>{" "}
      </div>
      <div className="container mt-3">
        <Controller
          control={control}
          name="cuisines"
          render={({ field }) => (
            <>
              {" "}
              <div className="grid md:grid-cols-5 gap-1 grid-cols-2">
                {cuisineList.map((current) => (
                  // eslint-disable-next-line react/jsx-key

                  <CuisineCheckBox
                    key={current}
                    cuisine={current}
                    field={field}
                  />
                ))}
              </div>
              <p className="text-sm text-red-500 font-sans">
                {console.log(errors)}
              </p>
            </>
          )}
        />
      </div>
    </div>
  );
};

export default CuisinesSection;
