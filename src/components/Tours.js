import Title from "./Title";
import { tourData } from "../data";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {tourData.map((item, index) => {
          return <Tour {...item} key={item.id} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
