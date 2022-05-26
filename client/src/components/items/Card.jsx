import React from "react";
import shirt from "../../assets/shirt.jpg";

export default function Card({ props, isHome }) {
  return props.deleted_at != null && isHome ? (
    ""
  ) : (
    <div className="flex-col text-center align-middle w-full rounded-lg px-4 py-2 border-none text-white hover:bg-white hover:text-gray-900 duration-300">
      <img src={shirt} alt="img" />
      <p>{props.title}</p>
      <p>{props.unit_price}$</p>
    </div>
  );
}
