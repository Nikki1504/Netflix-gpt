import React from "react";
import { Heart, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-neutral-400 border-t border-neutral-800">
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 py-10 flex flex-col items-center gap-6">
        <p className="text-sm text-neutral-300 flex items-center">
          Made with
          <Heart className="w-4 h-4 text-red-500 fill-red-500 mx-1" />
          by{" "}
          <span className="font-semibold text-white ml-1">Nikita Thakur</span>
        </p>

        <div className="flex gap-6 text-neutral-400">
          <a
            href="https://github.com/Nikki1504"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/nikita-thakur-5bb192158/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
