import {FaRegEdit, FaTrash} from 'react-icons/fa';
import {Link} from 'react-router';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const TableRow = ({item, idx, refetch}) => {
  const {_id, name, image, price} = item;
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/menu/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res?.data?.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });

              refetch();
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <tr>
      <th>{idx + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} alt={name + 'image'} />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>

      <td>${price}</td>

      <td>
        <Link to={`/dashboard/updateItem/${_id}`}>
          <button className="btn btn-sm rounded-full bg-green-500 text-white btn-ghost">
            <FaRegEdit></FaRegEdit>
          </button>
        </Link>
      </td>
      <th>
        <button
          onClick={() => handleDeleteItem(_id)}
          className="btn btn-ghost btn-sm bg-red-600 text-white rounded-full">
          <FaTrash></FaTrash>
        </button>
      </th>
    </tr>
  );
};

export default TableRow;
