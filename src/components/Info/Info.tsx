import AdvantageCard from "./AdvantageCard";
import advantages from "@/data/advantages";

import "@/styles/Info.scss";

const ServiceInfo = () => {
  return (
    <section>
      <h2 className="hidden-header">Наши преимущества</h2>
      <div className="advantage-cards-wrap">
        {advantages.map(({ src, title, text }) => (
          <AdvantageCard key={title} src={src} title={title} text={text} />
        ))}
      </div>
    </section>
  );
};

export default ServiceInfo;
