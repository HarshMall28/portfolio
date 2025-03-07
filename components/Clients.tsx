import React from "react";
import { InfiniteMovingCards } from "./ui/Infinite-moving-cards";
import { testimonials } from "@/data";
// import Image from "next/image";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Testimonials from <span className="text-purple">Peers</span>{" "}
        &amp;{" "}
        <span className="text-purple">Project Collaborators</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
        <div
          className="flex flex-wrap items-center justify-center 
        gap-4 md:gap-16 max-lg:mt-10"
        >
          {/* {companies.map(({ id, img, name, nameImg }) => {
            return (
              <div
                key={id}
                className="flex md:max-w-120 max-w-64 gap-1"
              >
                <Image
                  src={img}
                  width={1080}
                  height={720}
                  alt={name}
                  className="md:w-80 w-40"
                />
                <Image
                  src={nameImg}
                  alt={name}
                  width={30}
                  height={30}
                  className="md:w-24 w-20"
                />
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Clients;
