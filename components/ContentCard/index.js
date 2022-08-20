import React from "react";
import { useTheme } from "next-themes";

const Content = ({ title, content }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState();
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 cursor-pointer laptop:w-1/3 laptop:px-4 xl:px-6 mt-8 laptop:mt-0 text-center `}
    >
      <span className="w-20 border-t-2 border-solid border-amber-600 inline-block mb-3"></span>

      <h5 className="text-2xl font-medium uppercase mb-4">{title}</h5>

      <p className=" mt-5 opacity-60 text-xl">{content}</p>
    </div>
    // </div>
  );
};

export default Content;
