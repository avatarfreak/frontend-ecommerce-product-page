import React from "react";
import Image from "next/image";
import Avatar from "../../../../public/images/image-avatar.png";

const Profile = () => {
  return (
    <div
      className="
    h-8 w-8
    md:h-12 md:w-12 border-2 border-transparent rounded-full hover:border-pri-100 "
    >
      <Image src={Avatar} alt="avatar" />
    </div>
  );
};

export { Profile };
