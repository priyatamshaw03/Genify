import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import { useUser, useClerk, UserButton } from "@clerk/clerk-react";

const Navbar = () => {

  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <nav className="fixed w-full px-4 py-3 backdrop-blur-2xl md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-5 transition-all">
      <img
        src={assets.logo}
        alt=""
        className="cursor-pointer h-9"
        onClick={() => navigate("/")}
      />

      {user ? (
        <UserButton />
      ) : (
        <button onClick={openSignIn}
          type="button"
          className="bg-primary text-white md:inline text-sm hover:bg-indigo-700 active:scale-95 transition-all w-20 h-9 rounded-lg cursor-pointer"
        >
          SignIn
        </button>
      )}
    </nav>
  );
};

export default Navbar;
