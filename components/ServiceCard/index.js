import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ icon, name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 cursor-pointer`}
    >
      <div className="flex text-4xl mr-2">
        <i className={`${icon}`} />
        <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      </div>
      <ul className="mt-5 opacity-60 text-xl">
        {description.length > 0 ? (
          description.map((des, i) => <li key={i}>{des}</li>)
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default ServiceCard;
