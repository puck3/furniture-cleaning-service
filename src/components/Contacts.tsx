"use client";

import { PHONE_NUMBER } from "@/data/constants";
import PhoneLink from "./PhoneLink";
import SocialsIcon from "./SocialsIcon";

const Contacts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* <div className="flex flex-col items-center text-center"> */}
      <div>
        <h3 className="text-lg font-semibold mb-1">Контактный номер:</h3>
        <PhoneLink
          phoneNumber={PHONE_NUMBER}
          className="text-gray-700 text-lg font-medium"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-1">Время работы:</h3>
        <p className="text-gray-700 text-lg">С 10:00 до 20:00</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-1">Мессенджеры:</h3>
        <div className="flex items-center gap-4">
          <SocialsIcon
            src="/images/icons/telegram_black.svg"
            alt="Telegram"
            href={`https://t.me/${PHONE_NUMBER}`}
            className="w-7"
          />
          <SocialsIcon
            src="/images/icons/whatsapp_black.svg"
            alt="WhatsApp"
            href={`https://wa.me/${PHONE_NUMBER}`}
            className="w-7"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-1">Мы в соц сетях:</h3>
        <div className="flex items-center gap-4">
          <SocialsIcon
            src="/images/icons/telegram_black.svg"
            alt="Telegram"
            href="https://t.me/FreshWave26"
            className="w-7"
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
