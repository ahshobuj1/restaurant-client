import {useForm} from 'react-hook-form';
import {useLoaderData} from 'react-router';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import Swal from 'sweetalert2';

const UpdateItems = () => {
  const singleItem = useLoaderData();
  const {_id, name, category, recipe, price} = singleItem;
  const axiosSecure = useAxiosSecure();

  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to update this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/menu/${_id}`, data)
          .then((res) => {
            if (res?.data?.modifiedCount > 0) {
              Swal.fire({
                title: 'Updated!',
                text: 'Your file has been Updated.',
                icon: 'success',
              });
            }
          })
          .catch((err) => console.log(err));
      }
    });

    console.log(data);
  };

  return (
    <div>
      <SectionTitle heading="Update Item" subHeading="Update Your Item" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-[#F3F3F3] p-4 md:p-12">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-medium">Name*</span>
          </div>
          <input
            type="text"
            defaultValue={name}
            {...register('name', {required: true})}
            required
            placeholder="Recipe Name"
            className="input input-bordered w-full"
          />
        </label>
        <div className="flex gap-6">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-medium">Category!</span>
            </div>
            <select
              defaultValue={category}
              required
              {...register('category', {required: true})}
              className="select select-bordered w-full ">
              <option disabled value="">
                Select Category?
              </option>
              <option value="salad">Salad</option>
              <option value="dessert">Dessert</option>
              <option value="soup">Soup</option>
              <option value="pizza">Pizza</option>
              <option value="drinks">Drinks</option>
              <option value="popular">Popular</option>
            </select>
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-medium">$ Price*</span>
            </div>
            <input
              type="Number"
              {...register('price')}
              defaultValue={price}
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-medium">Recipe Details*</span>
          </div>
          <textarea
            defaultValue={recipe}
            {...register('recipe')}
            placeholder="Recipe Details"
            required
            className="textarea textarea-bordered textarea-md w-full h-40"></textarea>
        </label>

        <button
          type="submit"
          className="btn btn-outline w-full px-6 text-white bg-gradient-to-r from-[#835D23] to-[#B58130]">
          Update Item
        </button>
      </form>
    </div>
  );
};

export default UpdateItems;
