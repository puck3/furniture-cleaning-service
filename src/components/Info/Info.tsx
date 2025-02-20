import AdvantageCard from "./AdvantageCard";
import advantages from "@/data/advantages";

import "@/styles/Info.scss";

const ServiceInfo = () => {
  return (
    <section id="info">
      <h1>Профессиональная химчистка мебели</h1>
      <h3>Чистая мебель — залог здоровья и комфорта!</h3>
      <div className="advantage-cards-wrap">
        {advantages.map(({ src, title, text }) => (
          <AdvantageCard key={title} src={src} title={title} text={text} />
        ))}
      </div>
    </section>
  );
};

export default ServiceInfo;
