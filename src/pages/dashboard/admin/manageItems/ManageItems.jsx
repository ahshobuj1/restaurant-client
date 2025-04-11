import useMenu from '../../../../hooks/useMenu';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import TableRow from './TableRow';

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();

  if (loading) {
    return (
      <div className="flex my-5 mx-auto w-52 flex-col gap-4">
        <p>Please wait, Items is loading...</p>
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }

  return (
    <div className="m-5">
      <SectionTitle heading="Manage all Items" subHeading="All Items Here" />

      <div>
        <h1 className="text-3xl font-bold mb-5">Total Items : {menu.length}</h1>

        <div className="overflow-x-auto rounded-t-lg">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, idx) => (
                <TableRow
                  key={item._id}
                  item={item}
                  idx={idx}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
