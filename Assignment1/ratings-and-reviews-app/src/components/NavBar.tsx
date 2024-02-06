import { useState } from "react";

// Navigation Bar Component of the webpage.
export function NavBar() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <nav className="bg-sky-700">
      <div className="mx-auto max-w-screen px-1 sm:px-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileNavActive(!mobileNavActive)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {/*
              Icon when menu is closed.

              Menu open: "hidden", Menu closed: "block"
            */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/*
              Icon when menu is open.

              Menu open: "block", Menu closed: "hidden"
            */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/5/57/Electric_car_icon.png"
                alt="ParkFlex"
              />
              <div className="text-white px-3 py-2 font-semibold text-2xl">
                ParkFlex
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white hover:bg-white hover:text-sky-900 rounded-md px-3 py-2 text-sm font-medium"
                >
                  Blogs
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-white hover:text-sky-900 rounded-md px-3 py-2 text-sm font-medium"
                >
                  Gift Cards
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-white hover:text-sky-900 rounded-md px-3 py-2 text-sm font-medium"
                >
                  Bookings
                </a>
                <div className="relative ml-3">
                  <button>
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src={require("../assets/images/men-profile.jpg")}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={mobileNavActive ? "block sm:hidden" : "hidden sm:hidden"}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a
            href="#"
            className="text-white hover:bg-white hover:text-sky-900 block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Blogs
          </a>
          <a
            href="#"
            className="text-white hover:bg-white hover:text-sky-900 block rounded-md px-3 py-2 text-base font-medium"
          >
            Gift Cards
          </a>
          <a
            href="#"
            className="text-white hover:bg-white hover:text-sky-900 block rounded-md px-3 py-2 text-base font-medium"
          >
            Bookings
          </a>
          <a
            href="#"
            className="text-white hover:bg-white hover:text-sky-900 block rounded-md px-3 py-2 text-base font-medium"
          >
            Profile
          </a>
        </div>
      </div>
    </nav>
  );
}
