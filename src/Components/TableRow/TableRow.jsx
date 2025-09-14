const TableRow = ({ myOrder, handleDeleteBtn, handleStatus }) => {
  const {
    serviceTitle,
    serviceCharge,
    serviceDate,
    serviceImg,
    serviceStatus,
    customerEmail,
    _id,
  } = myOrder;

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      {/* Delete button */}
      <td className="px-4 py-2">
        <button
          onClick={() => handleDeleteBtn(_id)}
          className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-3 py-2 rounded cursor-pointer"
        >
          X
        </button>
      </td>

      {/* Service */}
      <td className="px-4 py-2">
        <div className="flex items-center gap-4">
          <img
            src={serviceImg}
            alt={serviceTitle}
            className="w-12 h-12 rounded-md object-cover"
          />
          <p className="font-medium text-gray-900">{serviceTitle}</p>
        </div>
      </td>

      {/* Price */}
      <td className="px-4 py-2 text-gray-800 font-medium">$ {serviceCharge}</td>

      {/* Customer Email */}
      <td className="px-4 py-2 text-gray-700">{customerEmail}</td>

      {/* Service Date */}
      <td className="px-4 py-2 text-gray-700">{serviceDate}</td>

      {/* Status Dropdown */}
      <td className="px-4 py-2">
        <select
          defaultValue={serviceStatus}
          onChange={(e) => handleStatus(_id, e.target.value)}
          className={`select border px-2 py-1 w-full ${
            serviceStatus === "confirm"
              ? "bg-green-100 text-green-700 border-green-400"
              : "bg-red-100 text-red-700 border-red-400"
          }`}
        >
          <option value="pending">Pending</option>
          <option value="confirm">Confirm</option>
        </select>
      </td>
    </tr>
  );
};

export default TableRow;
