import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Button from "../Button";
import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
// Local Data
import data from "../../data/portfolio.json";
import Image from "next/image";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <Popover className="block tablet:hidden">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <Image
                alt="Logo"
                onClick={() => router.push("/")}
                // className="w-52"
                width="255px"
                height="155px"
                src={"/images/sinkron.png"}
              />
              <div className="flex items-center">
                <Button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <Image
                    alt="Change Theme"
                    className="h-6"
                    // layout="fill"
                    width="45px"
                    height="25px"
                    src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  ></Image>
                </Button>
                <Popover.Button>
                  <Image
                    alt=""
                    className="h-5"
                    width="40px"
                    height="25px"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></Image>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              style={{ zIndex: "999" }}
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Services</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {data.showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  <Button onClick={() => window.open("mailto:info@sinkron.co")}>
                    Contact
                  </Button>
                </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={` hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <Image
          alt="Logo"
          onClick={() => router.push("/")}
          width="300px"
          height="182px"
          src={"/images/sinkron.png"}
        />
        <div className="flex">
          <Button onClick={handleWorkScroll}>Work</Button>
          <Button onClick={handleAboutScroll}>About</Button>
          <Button onClick={() => window.open("mailto:info@sinkron.co")}>
            Contact
          </Button>
          {mounted && theme && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Image
                alt=""
                width="40px"
                height="25px"
                className="h-6"
                src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
              ></Image>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
