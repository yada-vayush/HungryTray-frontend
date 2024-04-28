import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";

const MenuSection = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold ">Menu</h2>
        <p className="text-md font-serif text-gray-500 pt-2 ">
          Create your menu and give each Item a name and a price
        </p>
      </div>
      <div className="container pt-5 m-2">
        <Controller
          control={control}
          name="menuItems"
          render={() => (
            <div className="flex flex-col gap-6 ">
              {console.log(fields)}

              {fields.map((field, index) => (
                // eslint-disable-next-line react/jsx-key
                <MenuItemInput
                  key={field.id}
                  index={index}
                  id={field.id}
                  removeMenuItem={() => {
                    return remove(index);
                  }}
                />
              ))}
            </div>
          )}
        />
        <button
          type="button"
          onClick={() => append({ name: "", price: "" })}
          className="bg-zinc-500 max-h-fit max-w-fit font-medium items-center   border border-black rounded-md  hover:shadow-lg text-center mt-5 pt-2 p-4 "
        >
          Add Menu Item
        </button>
      </div>
    </div>
  );
};

export default MenuSection;
