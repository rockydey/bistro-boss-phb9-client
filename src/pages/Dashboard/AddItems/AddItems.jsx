import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxoisPublic from "../../../hooks/useAxoisPublic";
import useAxoisSecure from "../../../hooks/useAxoisSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxoisPublic();
  const axiosSecure = useAxoisSecure();

  const handleAddItem = async (data) => {
    console.log(data);

    // upload image to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.details,
        price: parseInt(data.price),
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Item added successfully!",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
    console.log(res.data);
  };

  return (
    <div>
      <SectionTitle heading='Add an Item' subHeading="What's new" />
      <div className='max-w-screen-md mx-auto'>
        <form onSubmit={handleSubmit(handleAddItem)} className='space-y-5'>
          <div>
            <label
              className='block mb-2 text-xl font-semibold text-color5'
              htmlFor='name'>
              Recipe name<sup>*</sup>
            </label>
            <input
              type='text'
              className='w-full bg-color10 rounded-lg py-4 pl-5'
              id='name'
              placeholder='Recipe name'
              {...register("name", { required: true })}
            />
          </div>
          <div className='flex gap-6'>
            <div className='w-1/2'>
              <label
                className='block mb-2 text-xl font-semibold text-color5'
                htmlFor='category'>
                Category<sup>*</sup>
              </label>
              <select
                defaultValue='category'
                className='w-full bg-color10 rounded-lg py-4 pl-5'
                id='category'
                {...register("category", { required: true })}>
                <option className='' value='category' disabled>
                  Category
                </option>
                <option value='salad'>Salad</option>
                <option value='pizza'>Pizza</option>
                <option value='soup'>Soup</option>
                <option value='dessert'>Dessert</option>
                <option value='drinks'>Drinks</option>
              </select>
            </div>
            <div className='w-1/2'>
              <label
                className='block mb-2 text-xl font-semibold text-color5'
                htmlFor='price'>
                Price<sup>*</sup>
              </label>
              <input
                type='number'
                className='w-full bg-color10 rounded-lg py-4 pl-5'
                id='price'
                placeholder='Price'
                {...register("price", { required: true })}
              />
            </div>
          </div>
          <div>
            <label
              className='block mb-2 text-xl font-semibold text-color5'
              htmlFor='details'>
              Recipe details<sup>*</sup>
            </label>
            <textarea
              rows='5'
              className='w-full bg-color10 rounded-lg py-4 pl-5'
              id='details'
              placeholder='Recipe details'
              {...register("details", { required: true })}
            />
          </div>
          <div>
            <input type='file' {...register("image", { required: true })} />
          </div>
          <div>
            <input
              type='submit'
              className='px-4 py-3 bg-gradient-to-r from-[#835D23] to-[#B58130] text-color4 uppercase font-semibold text-lg cursor-pointer'
              value='Add Item'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
