import { useEffect, useState } from "react";
import ServiceCard from "../Components/Cards/serviceCard";

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mb-10 px-1 sm:px-2 md:px-3">
      <h1 className="uppercase text-center mb-5 font-semibold">all services: {services.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.service_id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
