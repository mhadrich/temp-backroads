import Title from "./Title";
import { serviceData } from "../data";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {serviceData.map((item, index) => {
          return <Service {...item} key={item.id} />;
        })}
      </div>
    </section>
  );
};
export default Services;
