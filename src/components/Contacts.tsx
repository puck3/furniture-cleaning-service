"use client";

import { PHONE_NUMBER } from "@/data/constants";
import PhoneLink from "./PhoneLink";
import SocialsIcon from "./SocialsIcon";

const Contacts = () => {
  return (
    <div
      id="contacts"
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-5 text-sm text-center"
    >
      <div className="mx-auto">
        <h3 className="mb-1">Контактный номер:</h3>
        <PhoneLink phoneNumber={PHONE_NUMBER} className="text-xl" />
      </div>

      <div className="mx-auto">
        <h3 className="mb-1">Время работы:</h3>
        <p className="text-xl">С 10:00 до 20:00</p>
      </div>

      <div className="mx-auto flex flex-col items-center">
        <h3 className="mb-1">Мессенджеры:</h3>
        <div className="flex items-center gap-4">
          <SocialsIcon
            src="/icons/socials/telegram_white.svg"
            alt="Telegram"
            href={`https://t.me/${PHONE_NUMBER}`}
            className="w-7"
          />
          <SocialsIcon
            src="/icons/socials/whatsapp_white.svg"
            alt="WhatsApp"
            href={`https://wa.me/${PHONE_NUMBER}`}
            className="w-7"
          />
        </div>
      </div>

      <div className="mx-auto flex flex-col items-center">
        <h3 className="mb-1">Мы в соц сетях:</h3>
        <div className="flex items-center gap-4">
          <SocialsIcon
            src="/icons/socials/telegram_white.svg"
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
