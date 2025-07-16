import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warranty",
};

export default function Warranty() {
  return (
    <main className="flex flex-col bg-gray-50">
      <section className="max-w-screen-xl px-5 md:px-10 mx-auto py-10">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">
            Warranty
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Worry-Free Smiles, Guaranteed for Life
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-6 text-gray-700">
          <p>
            At Dental & Aesthetic Care Centre, we don’t just restore smiles — we
            stand behind them. We’re proud to be the only clinic in Delhi NCR to
            offer a lifetime warranty on our restorative treatments.
          </p>

          <p>
            Why? Because we believe in the quality of our work — and we want you
            to feel that same confidence every time you smile.
          </p>

          <p>
            <strong>If it breaks, we fix it.</strong> No stress. No surprises. Just our
            promise — because it’s the right thing to do.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              How Our Warranty Works
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>✅ Applies to all restorative dental treatments</li>
              <li>✅ Stay covered by visiting us every 6 months for routine cleanings and checkups</li>
              <li>✅ If something goes wrong, simply reach out — we’ll take care of it</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mt-8 mb-4">Warranty Coverage</h2>

            {/* Fillings */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800">Dental Fillings</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Warranty:</strong> 8 Years</li>
                <li><strong>Covers:</strong> Breakage, misfit, leakage</li>
                <li><strong>Our Promise:</strong> Free repair or replacement</li>
                <li><strong>Conditions:</strong> Bi-annual check-ups and cleanings</li>
              </ul>
            </div>

            {/* Crowns & Bridges */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800">Crowns & Bridges</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Warranty:</strong> 15 Years</li>
                <li><strong>Covers:</strong> Breakage, misfit, leakage</li>
                <li><strong>Our Promise:</strong> Free repair or replacement</li>
                <li><strong>Conditions:</strong> Bi-annual check-ups, plus correction of any bite (occlusal) issues</li>
              </ul>
            </div>

            {/* Root Canal */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800">Root Canal Treatment</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Warranty:</strong> 10 Years</li>
                <li><strong>Covers:</strong> Failed root canal</li>
                <li><strong>Our Promise:</strong> Free re-treatment</li>
                <li><strong>Conditions:</strong> Bi-annual check-ups, plus correction of any bite (occlusal) issues</li>
              </ul>
            </div>

            {/* Dental Implants */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800">Dental Implants</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Warranty:</strong> Lifetime on the implant fixture, 10 years on the crown</li>
                <li><strong>Covers:</strong> Implant failure (biological or mechanical), crown breakage or loosening</li>
                <li><strong>Our Promise:</strong> Free replacement of implant or prosthetic parts</li>
                <li><strong>Conditions:</strong> Regular oral hygiene maintenance, 6-month cleanings, correction of any bite (occlusal) issues and non-smoking status</li>
              </ul>
            </div>

            {/* Invisalign */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800">Invisalign® / Braces</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Warranty:</strong> 15 Years</li>
                <li><strong>Covers:</strong> Relapse or shifting of teeth post-treatment</li>
                <li><strong>Our Promise:</strong> Free refinement aligners or retainer replacements within the warranty period</li>
                <li><strong>Conditions:</strong> Must complete full treatment plan, wear retainers as advised, and attend scheduled follow-ups every 6 months</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mt-10 mb-2">Your Responsibility, Our Commitment</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Attend a check-up and cleaning every 6 months</li>
              <li>Follow all post-treatment care instructions</li>
              <li>Address any oral health concerns or misalignments as advised</li>
            </ul>
          </section>

          <p className="mt-6 font-medium italic text-blue-800">
            ✨ A great smile should come with peace of mind. At Dental & Aesthetic Care Centre, that’s exactly what we deliver — artistry backed by accountability. Let your smile be worry-free. For life.
          </p>

          <p className="text-gray-500 mt-4">Last Updated: April 16, 2025</p>
        </div>
      </section>
    </main>
  );
}
