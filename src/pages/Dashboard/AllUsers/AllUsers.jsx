import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxoisSecure from "../../../hooks/useAxoisSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

const AllUsers = () => {
  const axiosSecure = useAxoisSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/users/${user._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.name} is an Admin now!`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Dashboard | All Users</title>
      </Helmet>
      <SectionTitle heading={"MANAGE ALL USERS"} subHeading={"How Many"} />
      <div>
        <h2 className='text-3xl mb-5 font-bold text-color3 font-cinzel'>
          Total users: {users.length}
        </h2>
      </div>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead className=''>
            <tr className='uppercase rounded bg-[#D1A054] text-color4 font-semibold'>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <p className='text-base uppercase font-semibold text-color3'>
                      Admin
                    </p>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className='bg-[#D1A054] text-color4 p-2 rounded-md'>
                      <FaUsers />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className='bg-[#B91C1C] text-color4 p-2 rounded-md'>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster />
    </div>
  );
};

export default AllUsers;
