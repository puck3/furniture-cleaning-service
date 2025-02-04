"use client";

import React from "react";
import { formatPhoneNumberIntl } from "react-phone-number-input";

interface PhoneLinkProps {
  phoneNumber: string;
  className?: string;
}

const PhoneLink: React.FC<PhoneLinkProps> = ({
  phoneNumber,
  className = "",
}) => {
  const formattedPhoneNumber = formatPhoneNumberIntl(phoneNumber);

  return (
    <a href={`tel:${phoneNumber}`} className={className}>
      {formattedPhoneNumber}
    </a>
  );
};

export default PhoneLink;
