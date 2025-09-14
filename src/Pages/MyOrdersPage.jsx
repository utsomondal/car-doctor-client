import { useEffect, useState } from "react";
import { useAuth } from "../Context/useAuth";
import { useNavigate } from "react-router";
import TableRow from "../Components/TableRow/TableRow";

const MyOrdersPage = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    const URL = `http://localhost:3000/my-orders?email=${user.email}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user, navigate]);

  const handleDeleteBtn = (id) => {
    const proceed = confirm("Are you sure to delete your order?");
    if (proceed) {
      fetch(`http://localhost:3000/my-orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Your order deleted successfully.");
          }
          const updatedMyOrders = myOrders.filter(
            (myOrder) => myOrder._id !== id
          );
          setMyOrders(updatedMyOrders);
        });
    }
  };

  const handleStatus = (id, newStatus) => {
    const proceed = confirm("Are you sure to update order status?");
    if (proceed) {
      fetch(`http://localhost:3000/my-orders/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceStatus: newStatus }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Your order status updated successfully.");
          }
          const updatedMyOrders = myOrders.map((myOrder) =>
            myOrder._id === id
              ? { ...myOrder, serviceStatus: newStatus }
              : myOrder
          );
          setMyOrders(updatedMyOrders);
        });
    }
  };

  return (
    <>
      <div className="px-1 sm:px-2 md:px-3 mb-5">
        {/* Heading */}
        <h1 className="text-center text-4xl font-bold uppercase mb-6 text-gray-900">
          My Orders
        </h1>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700"></th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Service
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Price
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Customer Email
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Service Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {myOrders.map((myOrder) => (
                <TableRow
                  key={myOrder._id}
                  myOrder={myOrder}
                  handleDeleteBtn={handleDeleteBtn}
                  handleStatus={handleStatus}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyOrdersPage;
