"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <section className="max-w-screen-2xl px-5 md:px-10 mx-auto pt-20">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            At Dental Speciality Centre, we are committed to protecting your
            privacy and ensuring the security of your personal information.
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="mb-4 text-2xl font-semibold text-blue-800">
            Information We Collect
          </h2>
          <p className="mb-6 text-gray-700">
            You can browse our website without providing any personal
            information. However, to book an appointment, request more
            information about our services, or contact us, we may collect the
            following details:
          </p>
          <ul className="mb-6 list-disc pl-6 text-gray-700">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your phone number</li>
            <li>Any additional information you provide in your message</li>
          </ul>
          <p className="mb-6 text-gray-700">
            We ensure that your personal information is used solely for the
            purpose of providing you with the best dental care and services.
          </p>

          <h2 className="mb-4 text-2xl font-semibold text-blue-800">
            How We Use Your Information
          </h2>
          <p className="mb-6 text-gray-700">
            The information you provide is used to:
          </p>
          <ul className="mb-6 list-disc pl-6 text-gray-700">
            <li>Respond to your inquiries or appointment requests</li>
            <li>Improve our services and website experience</li>
            <li>Send you updates about our services, if you opt-in</li>
          </ul>

          <h2 className="mb-4 text-2xl font-semibold text-blue-800">
            Third-Party Services
          </h2>
          <p className="mb-6 text-gray-700">
            We use third-party services like Google Analytics to understand how
            visitors interact with our website. This helps us improve our
            website and services. Google Analytics may collect information such
            as your IP address, browser type, and pages visited. This data is
            anonymized and used solely for analytical purposes.
          </p>
          <p className="mb-6 text-gray-700">
            We do not share your personal information with any third-party
            services for marketing purposes.
          </p>

          <h2 className="mb-4 text-2xl font-semibold text-blue-800">
            Your Privacy Rights
          </h2>
          <p className="mb-6 text-gray-700">
            You have the right to:
          </p>
          <ul className="mb-6 list-disc pl-6 text-gray-700">
            <li>Request access to the personal information we hold about you</li>
            <li>Request corrections to any inaccurate or incomplete information</li>
            <li>Request the deletion of your personal information</li>
          </ul>
          <p className="mb-6 text-gray-700">
            To exercise these rights, please contact us at{" "}
            <a
              href="mailto:privacy@dentalspecialitycentre.com"
              className="text-blue-600 underline"
            >
              privacy@dentalspecialitycentre.com
            </a>
            .
          </p>

          <h2 className="mb-4 text-2xl font-semibold text-blue-800">
            Privacy Complaints
          </h2>
          <p className="mb-6 text-gray-700">
            If you have any concerns or grievances related to your privacy,
            please reach out to us at{" "}
            <a
              href="mailto:privacy@dentalspecialitycentre.com"
              className="text-blue-600 underline"
            >
              privacy@dentalspecialitycentre.com
            </a>
            . We are committed to addressing your concerns promptly and
            effectively.
          </p>

          <h2 className="mb-4 text-2xl font-semibold text-blue-800">
            Updates to This Policy
          </h2>
          <p className="mb-6 text-gray-700">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We encourage you to
            review this page periodically to stay informed about how we protect
            your information.
          </p>

          <p className="text-gray-500">Last Updated: April 16, 2025</p>
        </div>
      </section>
    </main>
  );
}