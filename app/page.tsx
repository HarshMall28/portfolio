"use client";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import { Suspense } from "react";

// Lazy load components
const Grid = dynamic(() => import("../components/Grid"), {
  ssr: false,
});
const RecentProjects = dynamic(
  () => import("@/components/RecentProjects"),
  {
    loading: () => <p>Loading Recent Projects...</p>,
  }
);
const Clients = dynamic(() => import("@/components/Clients"), {
  loading: () => <p>Loading Clients...</p>,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <p>Loading Experience...</p>,
});
const Approach = dynamic(() => import("@/components/Approach"), {
  loading: () => <p>Loading Approach...</p>,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <p>Loading Footer...</p>,
});

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center 
    items-center flex-col mx-auto sm:px-10 px-5 overflow-clip"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Suspense fallback={<div>Loading Grid...</div>}>
          <Grid />
        </Suspense>
        <Suspense fallback={<div>Loading Recent Projects...</div>}>
          <RecentProjects />
        </Suspense>
        <Suspense fallback={<div>Loading Clients...</div>}>
          <Clients />
        </Suspense>
        <Suspense fallback={<div>Loading Experience...</div>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div>Loading Approach...</div>}>
          <Approach />
        </Suspense>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}
