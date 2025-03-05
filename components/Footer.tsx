import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Interested in my work? Download my{" "}
          <span className="text-purple">resume</span> and Let&apos;s
          connect!
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how can I help
          you achieve your goal?{" "}
        </p>
        <a href="./HarshMallResume.pdf" download>
          <MagicButton
            title="Download CV"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-small mg:font-normal font-light">
          Copyright © 2024 Harsh
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => {
            return (
              <div
                key={profile.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={profile.img}
                    alt={profile.id.toString()}
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
