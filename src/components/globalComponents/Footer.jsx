import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white shadow-md border-t border-gray-200 px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
      {/* Left side */}
      <p className="mb-2 md:mb-0">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <a href="/privacy-policy" className="hover:text-blue-600 transition">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:text-blue-600 transition">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
