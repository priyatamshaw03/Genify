import { ArrowRight, CircleX, PlayCircle, Rocket, X } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();
  const [openDemo, setOpenDemo] = useState(false);

  return (
    <div className="bg-[url('/bg.png')] bg-cover bg-no-repeat min-h-screen px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full items-center justify-center pt-36 pb-14">
      <p className="text-sm border px-4 text-primary py-2 rounded-full mt-4 text-center">
        <Rocket className="w-5 h-5 inline mx-1 text-center" /> Your All-in-One
        AI Platform.
      </p>

      <h1 className="text-4xl md:text-6xl lg:text-7xl text-center font-semibold max-w-4xl mt-3">
        Create amazing content with{" "}
        <span className="text-primary">AI tools.</span>
      </h1>
      <p className="text-slate-500 md:text-lg lg:text-xl max-md:px-2 text-center max-w-2xl mt-3">
        All-in-one creative suite powered by AI - write articles, generate
        stunning images, remove objects, edit backgrounds, and more. Everything
        you need, in one place.
      </p>

      <div className="flex items-center justify-center gap-3 mt-8 text-sm">
        <button
          onClick={() => navigate("/ai")}
          className="flex items-center gap-2 px-6 py-3 cursor-pointer bg-primary hover:bg-indigo-700 text-white transition rounded-lg"
        >
          Get Started
          <ArrowRight className="w-4 h-4 mt-0.5" />
        </button>
        <button
          onClick={() => setOpenDemo(true)}
          className="cursor-pointer text-primary border border-primary rounded-lg px-6 flex gap-2 py-3"
        >
          <PlayCircle className="w-5 h-5 text-center justify-center" /> Watch
          Demo
        </button>
      </div>

      <div className="flex items-center gap-4 mt-14 mx-auto text-gray-500">
        <img src={assets.user_group} alt="" className="h-8" />
        Trusted by 100+ people
      </div>

      <div className="flex mt-14 mx-auto">
        <img
          src="/demo.png"
          alt="image"
          className="w-4xl rounded-2xl border border-primary shadow-xl"
        />
      </div>

      {/* Modal Popup */}
      {openDemo && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-4xl">
            <button
              onClick={() => setOpenDemo(false)}
              className="absolute -top-5 -right-5 text-white hover:text-gray-300"
            >
              <CircleX className="w-6 h-6" />
            </button>
            <video
              src="/demo.mp4"
              controls
              autoPlay
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
