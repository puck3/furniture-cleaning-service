"use client";

interface OrderFromProps {
  serviceName: string;
}

const OrderForm: React.FC<OrderFromProps> = ({ serviceName }) => {
  return (
    <form className="flex flex-col gap-4 p-4 border rounded-md" id="order">
      <h2 className="text-xl font-semibold">Заявка на {serviceName}</h2>
      <input type="text" placeholder="Имя" className="border p-2" />
      <input type="tel" placeholder="Телефон" className="border p-2" />
      <textarea
        placeholder="Дополнительная информация"
        className="border p-2"
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Отправить
      </button>
    </form>
  );
};
