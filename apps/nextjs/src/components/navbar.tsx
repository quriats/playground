"use client";

import clsx from "clsx";

import { usePathname } from "next/navigation";

import { Fragment } from "react";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const pathnameSlices = pathname.split("/");

  return (
    <header className="fixed top-0 left-0 right-0 mx-auto w-full max-w-5xl flex justify-center">
      <nav className="px-4 py-3 w-full shadow-lg border border-[#333] rounded-3xl mt-3 mx-3 md:mt-4 md:mx-4 lg:mt-5 lg:mx-5 bg-background/50 backdrop-blur-sm bg-opacity-80">
        <div className="flex justify-between items-center">
          <div className="flex space-x-1 sm:space-x-2">
            <Link
              href="/"
              className={clsx(
                "md:text-lg tracking-wide text-[#F4F0E6] cursor-pointer transition-colors",
                pathname === "/"
                  ? "font-bold"
                  : "font-normal hover:text-[#F4F0E6]/80",
              )}
            >
              <span className="ml-1 md:text-lg tracking-wide">
                quria-playground
              </span>
            </Link>
            {pathname !== "/" &&
              pathnameSlices.map((slice, index) => {
                // Skip the first slice (empty string)
                if (index === 0) return null;

                // Get the path for the current slice
                const path = `/${pathnameSlices.slice(1, index + 1).join("/")}`;

                return (
                  <Fragment key={path}>
                    <span className="text-[#F4F0E6] ml-1 md:text-lg tracking-wide">
                      /
                    </span>
                    <Link
                      href={path}
                      className={clsx(
                        "md:text-lg tracking-wide text-[#F4F0E6] cursor-pointer transition-colors",
                        pathname === path
                          ? "font-bold"
                          : "font-normal hover:text-[#F4F0E6]/80",
                      )}
                    >
                      {slice}
                    </Link>
                  </Fragment>
                );
              })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
