"use client";

import { PHONE_NUMBER } from "@/data/constants";
import PhoneLink from "../PhoneLink";
import SocialsIcon from "../SocialsIcon";

const Contacts = () => {
  return (
    <section id="contacts" className="contacts-wrap">
      <div className="contact-block">
        <h3>Контактный номер:</h3>
        <PhoneLink phoneNumber={PHONE_NUMBER} className="text" />
      </div>

      <div className="contact-block">
        <h3>Время работы:</h3>
        <p className="text">Круглосуточно</p>
      </div>

      <div className="contact-block">
        <h3>Мессенджеры:</h3>
        <div className="socials-wrap">
          <SocialsIcon
            src="/icons/socials/telegram_white.svg"
            alt="Telegram"
            href={`https://t.me/${PHONE_NUMBER}`}
            className="socials-icon"
          />
          <SocialsIcon
            src="/icons/socials/whatsapp_white.svg"
            alt="WhatsApp"
            href={`https://wa.me/${PHONE_NUMBER}`}
            className="socials-icon"
          />
        </div>
      </div>

      <div className="contact-block">
        <h3>Мы в соц сетях:</h3>
        <div className="socials-wrap">
          <SocialsIcon
            src="/icons/socials/telegram_white.svg"
            alt="Telegram channel"
            href="https://t.me/FreshWave26"
            className="socials-icon"
          />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
