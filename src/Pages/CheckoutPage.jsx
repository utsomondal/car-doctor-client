import { useLoaderData } from "react-router";
import useAuth from "../Hooks/useAuth";

const CheckoutPage = () => {
  const service = useLoaderData();
  const { user, loading } = useAuth();
  const { title, price, _id, img } = service;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-364px)]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const handleOrderConfirmation = (event) => {
    event.preventDefault();
    const form = event.target;

    const fullName = form.fullname.value;
    const date = form.date.value;
    const phoneNumber = form.phone.value;
    const email = user?.email;

    const order = {
      customerName: fullName,
      customerEmail: email,
      customerPhone: phoneNumber,
      serviceId: _id,
      serviceDate: date,
      serviceTitle: title,
      serviceCharge: price,
      serviceImg: img,
      serviceStatus: "pending",
    };

    fetch("https://car-doctor-server-murex-gamma.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order Successfully Placed");
          form.reset();
        }
      });
  };

  return (
    <form
      onSubmit={handleOrderConfirmation}
      className="p-6 bg-white shadow-md rounded-xl border mb-5 grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <h2 className="text-3xl font-bold mb-4 text-center uppercase col-span-2">
        Check Out
      </h2>

      {/* Full Name */}
      <div className="flex flex-col">
        <label className="block mb-2">Full Name</label>
        <input
          name="fullname"
          type="text"
          placeholder="Your full name"
          defaultValue={user?.displayName}
          className="input input-bordered w-full"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          defaultValue={user?.email}
          readOnly
          className="input input-bordered w-full"
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col">
        <label className="block mb-2">Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Your phone number"
          className="input input-bordered w-full"
        />
      </div>

      {/* Date */}
      <div className="flex flex-col">
        <label className="block mb-2">Select Date</label>
        <input
          type="date"
          name="date"
          className="input input-bordered w-full"
        />
      </div>

      {/* Service Name */}
      <div className="flex flex-col">
        <label className="block mb-2">Service Name</label>
        <input
          type="text"
          defaultValue={title}
          readOnly
          className="input input-bordered w-full"
        />
      </div>

      {/* Price */}
      <div className="flex flex-col">
        <label className="block mb-2">Price</label>
        <input
          type="text"
          defaultValue={`$ ${price}`}
          readOnly
          className="input input-bordered w-full"
        />
      </div>

      {/* Submit button (full width) */}
      <div className="col-span-2">
        <button type="submit" className="btn btn-neutral w-full">
          Confirm Order
        </button>
      </div>
    </form>
  );
};

export default CheckoutPage;
