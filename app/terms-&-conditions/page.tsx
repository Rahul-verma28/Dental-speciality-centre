"use client";

import React from "react";

export default function TermsAndConditions() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <section className="max-w-screen-2xl px-5 md:px-10 mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">
            Terms and Conditions
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Welcome to Dental Speciality Centre. Please read these terms and
            conditions carefully before using our website or services.
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-10">
          {/* Agreement Section */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">
              Agreement
            </h2>
            <p className="text-gray-700">
              By accessing or using our website and services, you agree to be
              bound by these Terms and Conditions, along with our Privacy
              Policy. If you do not agree to these terms, please refrain from
              using our services.
            </p>
          </section>

          {/* Definitions Section */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">
              Definitions
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>
                <strong>"You" or "User":</strong> Refers to the individual using
                our website or services.
              </li>
              <li>
                <strong>"Dental Speciality Centre":</strong> Refers to our
                clinic and its affiliates.
              </li>
              <li>
                <strong>"Services":</strong> Refers to the dental care,
                consultations, and other offerings provided by our clinic.
              </li>
              <li>
                <strong>"Content":</strong> Refers to all materials, services,
                and information available on our website.
              </li>
            </ul>
          </section>

          {/* Use of Services */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">
              Use of Services
            </h2>
            <p className="text-gray-700">
              Our services are intended for personal and non-commercial use. You
              agree not to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
              <li>Modify, copy, or distribute any content from our website.</li>
              <li>
                Use our services for any unlawful or unauthorized purposes.
              </li>
              <li>
                Interfere with the proper functioning of our website or
                services.
              </li>
            </ul>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">
              Payment Terms
            </h2>
            <p className="text-gray-700">
              If you book a service that requires payment, you agree to provide
              accurate billing information. Payments can be made via credit
              card, debit card, or other accepted methods. All payments are
              subject to the terms and conditions of the payment provider.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">
              Limitation of Liability
            </h2>
            <p className="text-gray-700">
              Dental Speciality Centre is not liable for any indirect,
              incidental, or consequential damages arising from the use of our
              website or services. Our liability is limited to the amount paid
              by you for the specific service in question.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">
              Termination
            </h2>
            <p className="text-gray-700">
              We reserve the right to terminate or suspend your access to our
              services at any time, without notice, if we determine that you
              have violated these Terms and Conditions.
            </p>
          </section>

          {/* Privacy Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">
              Privacy Policy
            </h2>
            <p className="text-gray-700">
              Your use of our services is also governed by our{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 underline"
              >
                Privacy Policy
              </a>
              . Please review it to understand how we collect, use, and protect
              your personal information.
            </p>
          </section>

          {/* Indemnity */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">
              Indemnity
            </h2>
            <p className="text-gray-700">
              You agree to indemnify and hold Dental Speciality Centre harmless
              from any claims, damages, or expenses arising from your use of our
              website or services, or your violation of these Terms and
              Conditions.
            </p>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">
              Updates to These Terms
            </h2>
            <p className="text-gray-700">
              We may update these Terms and Conditions from time to time. We
              encourage you to review this page periodically to stay informed
              about any changes.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: April 16, 2025
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}