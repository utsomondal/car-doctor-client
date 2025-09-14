const SkeletonCard = () => {
  return (
    <div className="w-64 rounded-lg bg-white p-4 shadow animate-pulse">
      {/* image placeholder */}
      <div className="h-36 w-full rounded-md bg-gray-300 mb-4"></div>

      {/* title placeholder */}
      <div className="h-4 w-32 rounded bg-gray-300 mb-2"></div>

      {/* subtitle/description lines */}
      <div className="h-3 w-full rounded bg-gray-200 mb-1"></div>
      <div className="h-3 w-5/6 rounded bg-gray-200 mb-1"></div>

      {/* button placeholder */}
      <div className="h-8 w-24 rounded bg-gray-300 mt-3"></div>
    </div>
  );
};

export default SkeletonCard;
