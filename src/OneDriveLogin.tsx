import React, { useState } from "react";

const OneDriveLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showInfoBar, setShowInfoBar] = useState(true);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col items-center justify-center">
      {showInfoBar && (
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center bg-blue-50 text-gray-900 px-4 py-3 sm:rounded-t-lg gap-2 sm:gap-4 text-sm sm:text-base">
          <span className="inline-flex items-center justify-center bg-blue-100 text-blue-700 rounded-full w-6 h-6 font-bold mr-2">
            ⓘ
          </span>
          <span className="flex-1">
            This application was created by a Google Apps Script user
          </span>
          <span className="flex flex-row items-center gap-3 ml-auto">
            <a href="#report" className="text-blue-700 hover:underline">
              Report abuse
            </a>
            <a href="#learn" className="text-blue-700 hover:underline">
              Learn more
            </a>
            <button
              className="text-gray-500 text-xl ml-2 hover:text-gray-700 focus:outline-none"
              onClick={() => setShowInfoBar(false)}
              aria-label="Close"
              type="button"
            >
              ✕
            </button>
          </span>
        </div>
      )}
      <div className="w-full max-w-sm bg-white rounded-lg shadow-none mt-8 px-6 py-8 flex flex-col items-center">
        <img src="/onedrive-logo.jpeg" alt="OneDrive" className="w-20 mb-3" />
        <h1 className="text-2xl font-semibold mb-7 text-center text-gray-900 tracking-wide">
          Sign In
        </h1>
        <form className="w-full flex flex-col gap-4">
          <input
            type="email"
            placeholder="School Email"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-base bg-gray-50"
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-base bg-gray-50"
            required
          />
          <div className="flex items-center text-sm gap-2">
            <input
              id="show-password"
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword((v) => !v)}
              className="mr-1 accent-blue-600"
            />
            <label
              htmlFor="show-password"
              className="select-none cursor-pointer"
            >
              Show Password
            </label>
          </div>
          <div className="flex items-center text-sm gap-2">
            <input
              id="remember-me"
              type="checkbox"
              className="mr-1 accent-blue-600"
            />
            <label htmlFor="remember-me" className="select-none cursor-pointer">
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded py-3 mt-2 transition-colors text-base"
          >
            Login
          </button>
        </form>
        <div className="mt-5 text-xs text-gray-600 text-center">
          By logging in, you accept our{" "}
          <a href="#terms" className="text-blue-700 hover:underline">
            End User Terms of Use
          </a>
          <br />
          <a href="#forgot" className="text-blue-700 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default OneDriveLogin;
