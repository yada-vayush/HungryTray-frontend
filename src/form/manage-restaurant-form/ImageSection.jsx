import { Controller, useFormContext } from "react-hook-form";

function ImageSection() {
  const { control, formState, watch } = useFormContext();
  const existingImageUrl = watch("imageUrl");
  const { errors } = formState;
  return (
    <div className="space-y-2">
      <div className="my-2">
        <h2 className="text-2xl font-bold mb-2">Image</h2>
        <p className="text-md font-serif text-gray-500 ">
          Add image that will be dislayed on your restaurant listing
        </p>
      </div>
      <div className="flex flex-col gap-8 md:w-[50%]">
        {existingImageUrl && (
          <img
            src={existingImageUrl}
            className="rounded-md object-cover h-full w-full aspect-w-16 aspect-h-9"
          />
        )}
        <Controller
          control={control}
          name="imageFile"
          render={({ field }) => (
            <div>
              <div>
                <input
                  className="bg-white"
                  type="file"
                  accept=".jpg ,.jpeg, .png"
                  onChange={(e) =>
                    field.onChange(e.target.files ? e.target.files[0] : null)
                  }
                />
              </div>
              <p className="text-sm text-red-500 font-sans">
                {errors.imageFile?.message}
              </p>
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default ImageSection;
