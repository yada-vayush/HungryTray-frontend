/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const CuisineCheckBox = ({ cuisine, field }) => {
  return (
    <div
      key={cuisine}
      className="flex items-center  hover:shadow-lg p-3 rounded-lg m-1"
    >
      <input
        type="checkbox"
        id={cuisine}
        // eslint-disable-next-line react/prop-types
        checked={field.value.includes(cuisine)}
        onChange={(event) =>
          // eslint-disable-next-line react/prop-types
          {
            {
              console.log(field);
            }
            const { checked } = event.target;

            if (checked) {
              // eslint-disable-next-line react/prop-types
              field.onChange([...field.value, cuisine]);
            } // eslint-disable-next-line react/prop-types
            // eslint-disable-next-line react/prop-types
            // eslint-disable-next-line react/prop-types
            else
              field.onChange(field.value.filter((value) => value != cuisine));
          }
        }
        className=" border border-gray-300 rounded checked:bg-green-600 checked:border-transparent  shadow-xl h-4 w-4 p-1"
      />
      <label
        htmlFor={cuisine}
        className="ml-2 cursor-pointer select-none text-center"
      >
        {cuisine}
      </label>
    </div>
  );
};

export default CuisineCheckBox;
