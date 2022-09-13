import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      setServices(data.servicesData);
    };
    fetchServices();
  }, []);

  return (
    <section className="services-container">
      <div className="services-wrapper">
        <h4 className="highlight-2 text-center">Our Services</h4>
        <h2 className="text-center">Services For Your Health</h2>
        <div className="services">
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
