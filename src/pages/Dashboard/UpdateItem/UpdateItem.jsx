import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxoisSecure from "../../../hooks/useAxoisSecure";
import Swal from "sweetalert2";

const UpdateItem = () => {
  const { register, handleSubmit } = useForm();
  const item = useLoaderData();
  const axiosSecure = useAxoisSecure();

  const handleUpdateItem = async (data) => {
    // console.log(data);

    const menuItem = {
      name: data.name,
      category: data.category,
      recipe: data.details,
      price: parseInt(data.price),
    };

    const updateRes = await axiosSecure.patch(`/menu/${item._id}`, menuItem);
    console.log(updateRes.data);
    if (updateRes.data.modifiedCount > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Item added successfully!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  return (
    <div>
      <SectionTitle heading='Update Item' subHeading='Hurry up!' />
      <div className='max-w-screen-md mx-auto'>
        <form onSubmit={handleSubmit(handleUpdateItem)} className='space-y-5'>
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
              defaultValue={item.name}
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
                defaultValue={item.category}
                className='w-full bg-color10 rounded-lg py-4 pl-5'
                id='category'
                {...register("category", { required: true })}>
                <option className='' value={item.category} disabled>
                  {item.category}
                </option>
                <option value='salad'>salad</option>
                <option value='pizza'>pizza</option>
                <option value='soup'>soup</option>
                <option value='dessert'>dessert</option>
                <option value='drinks'>drinks</option>
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
                defaultValue={item.price}
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
              defaultValue={item.recipe}
              {...register("details", { required: true })}
            />
          </div>
          <div className='text-center'>
            <input
              type='submit'
              className='px-4 py-3 bg-gradient-to-r from-[#835D23] to-[#B58130] text-color4 font-semibold text-lg cursor-pointer'
              value='Update Recipe Details'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
