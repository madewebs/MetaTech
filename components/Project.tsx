"use client";
import React from "react";
import Link from "next/link";
import { projectCards } from "./projectCards";

type Props = {
  showAll?: boolean;
  limit?: number;
};

export default function Project({ showAll = false, limit = 3 }: Props) {
  const projects = showAll ? projectCards : projectCards.slice(0, limit);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-medium mb-4">Projects</h2>
        <p className="text-md md:text-xl mb-8 max-w-3xl">
          A curated selection of imagery — clean, cinematic compositions that showcase automation, control and robotics.
        </p>
      </div>

      {/* Static card grid (no animations) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <figure
            key={p.src + idx}
            className="relative overflow-hidden rounded-sm bg-gray-50 shadow-sm border border-gray-200"
            aria-label={p.title}
          >
            <img
              src={p.src}
              alt={p.title}
              className="object-cover w-full h-64 md:h-72 block"
              loading={idx < 2 ? "eager" : "lazy"}
            />

            <figcaption className="p-4 bg-white">
              <div className="text-xs uppercase tracking-wide text-gray-500">{p.tag}</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">{p.title}</div>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* View more projects link */}
      {!showAll && (
        <div className="mt-8 text-center">
          <Link href="/projects" className="inline-block px-6 py-3 bg-[#363636] text-white rounded-md shadow hover:brightness-110 transition">
            View more projects
          </Link>
        </div>
      )}
    </section>
  );
}