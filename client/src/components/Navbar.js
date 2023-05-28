import { Link } from "react-router-dom";
import { useAuthenticationStatus, useUserAvatarUrl } from "@nhost/react";

const Navbar = () => {
  const { isAuthenticated } = useAuthenticationStatus();
  const avatarURL = useUserAvatarUrl();
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2919/2919963.png"
            className="h-8 mr-3"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            BreatheLog
          </span>
        </Link>

        <div className="flex items-center">
          <Link to="/settings">
            {isAuthenticated ? (
              <img
                class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src={avatarURL}
                alt="Bordered avatar"
              />
            ) : (
              <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  class="absolute w-12 h-12 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
