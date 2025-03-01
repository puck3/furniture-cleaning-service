import Service from "@/types/Service";

const services: Service[] = [
  {
    title: "Химчистка диванов",
    cleaningTime: "20-90 мин.",
    price: "от 1000р",
    imageSrc: "/cards/sofa.png",
    formFields: [
      { label: "Материал", type: "text" },
      {
        label: "Количество посадочных мест",
        type: "text",
        extraPrice: "от 1000р за посадочное место",
      },
    ],
  },
  {
    title: "Химчистка кресел",
    cleaningTime: "25-45 мин.",
    price: "от 1500р",
    imageSrc: "/cards/armchair.png",
    formFields: [
      { label: "Материал", type: "text" },
      { label: "Количество кресел", type: "text" },
    ],
  },
  {
    title: "Химчистка стульев",
    cleaningTime: "15-35 мин.",
    price: "от 600р",
    imageSrc: "/cards/chair.png",
    formFields: [
      { label: "Материал", type: "text" },
      { label: "Количество стульев", type: "text" },
    ],
  },
  {
    title: "Химчистка ковров",
    cleaningTime: "55-90 мин.",
    price: "от 250р/м2",
    imageSrc: "/cards/carpet.png",
    formFields: [
      { label: "Материал", type: "text" },
      { label: "Размер ковра", type: "text" },
    ],
  },
  {
    title: "Химчистка матрасов",
    cleaningTime: "45-65 мин.",
    price: "от 1500р",
    imageSrc: "/cards/mattress.png",
    formFields: [{ label: "Размер матраса", type: "text" }],
  },
  {
    title: "Химчистка подушек и мягких игрушек",
    cleaningTime: "10-20 мин.",
    price: "от 200р",
    imageSrc: "/cards/pillow.png",
    formFields: [
      { label: "Материал", type: "text" },
      { label: "Количество", type: "text" },
    ],
  },
  {
    title: "Химчистка бильярдных столов",
    cleaningTime: "30-60 мин.",
    price: "от 2500р",
    imageSrc: "/cards/billiard-table.png",
    formFields: [{ label: "Количество столов", type: "text" }],
  },
  {
    title: "Химчистка автомобилей",
    cleaningTime: "60-90 мин.",
    price: "от 1500р",
    imageSrc: "/cards/car.png",
    formFields: [
      {
        label: "Материал",
        type: "text",
      },
      {
        label: "Модель и марка авто",
        type: "text",
      },
      {
        label: "Чистка сидений",
        type: "checkbox",
        extraPrice: "от 2000р",
      },
      {
        label: "Чистка потолка",
        type: "checkbox",
        extraPrice: "от 1500р",
      },
      {
        label: "Чистка ковролина",
        type: "checkbox",
        extraPrice: "от 1500р",
      },
      {
        label: "Чистка багажника",
        type: "checkbox",
        extraPrice: "от 1000р",
      },
      {
        label: "Чистка пластика",
        type: "checkbox",
        extraPrice: "от 500р",
      },
      {
        label: "Чистка ковриков",
        type: "checkbox",
        extraPrice: "от 200р",
      },
      {
        label: "Чистка дверных карт",
        type: "checkbox",
        extraPrice: "от 200р",
      },
      {
        label: "Чистка подлокотников",
        type: "checkbox",
        extraPrice: "от 200р",
      },
    ],
  },
];

export default services;
