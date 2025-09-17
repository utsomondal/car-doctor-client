import { useEffect, useState } from "react";
import ServiceCard from "../Components/Cards/serviceCard";
import SkeletonCard from "../Components/Cards/SkeletonCard.jsx";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://car-doctor-server-murex-gamma.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mb-10 px-1 sm:px-2 md:px-3">
      <h1 className="uppercase text-center mb-5 font-semibold text-3xl">
        Our services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {loading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))
          : services.map((service) => (
              <ServiceCard key={service.service_id} service={service} />
            ))}
      </div>
    </div>
  );
};

export default ServicesPage;
