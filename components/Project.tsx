"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { projectCards } from "./projectCards";

type Props = {
  showAll?: boolean;
  limit?: number;
};

export default function Project({ showAll = false, limit = 4 }: Props) {
  const projects = showAll ? projectCards : projectCards.slice(0, limit);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-10">
        <h2 className="text-3xl md:text-5xl font-medium mb-4">Projects</h2>
        <p className="text-md md:text-xl mb-8 max-w-3xl">
          A curated selection of imagery — clean, cinematic compositions that showcase automation, control and robotics.
        </p>
      </div>

      {/* Static card grid (no animations) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-[#151515]">
        {projects.map((p, idx) => (
          <figure
            key={p.src + idx}
            className="relative overflow-hidden rounded-xs"
            aria-label={p.role}
          >
            <img
              src={p.src}
              alt={p.role}
              className="object-cover w-full h-54 md:h-64 block brightness-70"
              loading={idx < 3 ? "eager" : "lazy"}
            />

            <figcaption className="p-3 bg-white">
              <div className="text-sm uppercase tracking-wide text-gray-500">{p.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* View more projects link */}
      {!showAll && (
        <div className="mt-8 text-center">
          <Link href="/" className="inline-block px-6 py-3 bg-[#222222] text-white rounded-md shadow hover:brightness-110 transition uppercase tracking-wider font-light text-xs">
            View more projects
          </Link>
        </div>
      )}
    </section>
  );
}