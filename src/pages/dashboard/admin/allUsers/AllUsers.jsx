import {useQuery} from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import {FaTrashAlt, FaUser, FaUsers} from 'react-icons/fa';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {data: users = [], refetch} = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure('user');
      return res.data;
    },
  });

  const handleDelete = (id) => {
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
          .delete(`/user/${id}`)
          .then((res) => {
            if (res?.data?.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: `User has been deleted.`,
                icon: 'success',
              });

              refetch();
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want make him Admin!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Make Admin!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/user/${id}`)
          .then((res) => {
            if (res?.data?.modifiedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: `User has been Admin from now.`,
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
    <section className="p-10">
      <SectionTitle heading={'Manage all users'} subHeading={'how many'} />
      <div className="bg-base-200 p-2 rounded-xl">
        <div className="mb-8">
          <h2 className="text-2xl uppercase">Total Users : {users?.length} </h2>
        </div>

        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Image</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, idx) => (
                  <tr>
                    <td>{idx + 1}</td>

                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={user?.photoURL}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{user?.email}</td>
                    <td>
                      {user?.role === 'admin' ? (
                        'admin'
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user._id)}
                          className="btn btn-sm text-white bg-orange-300 text-2xl hover:text-blue-600 ">
                          <FaUsers />
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="btn btn-sm text-red-600 text-2xl hover:text-blue-600 ">
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllUsers;
