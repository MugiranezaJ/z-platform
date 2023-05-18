import React from "react";

function Footer() {
  return (
    <footer className="bg-white border text-black py-4">
      <div className="container mx-auto">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Company Z. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
