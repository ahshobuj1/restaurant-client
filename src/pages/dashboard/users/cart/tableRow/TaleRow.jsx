import {FaTrashAlt} from 'react-icons/fa';

const TaleRow = ({cart, idx, handleDelete}) => {
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={cart?.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{cart?.name}</td>
      <td>{cart?.price}</td>
      <td>
        <button
          onClick={() => handleDelete(cart._id)}
          className="btn btn-sm text-red-600 text-2xl hover:text-blue-600 ">
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );
};

export default TaleRow;
