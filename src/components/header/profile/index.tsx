/* eslint-disable @next/next/no-img-element*/

import React from "react";
const prefix = process.env.NEXT_PUBLIC_BASE_PATH;
const Profile = () => {
  return (
    <div
      className="
    h-8 w-8
    md:h-12 md:w-12 border-2 border-transparent rounded-full hover:border-pri-100 "
    >
      <img src={`${prefix}/images/image-avatar.png`} alt="avatar" />
    </div>
  );
};

export { Profile };
