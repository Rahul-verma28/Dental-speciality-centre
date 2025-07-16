import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions",
};

export default function TermsAndConditions() {
  return (
    <main className="flex flex-col bg-gray-50">
      <section className="max-w-screen-xl px-5 md:px-10 mx-auto py-10">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            At Dental & Aesthetic Care Centre, we are committed to protecting
            your privacy and ensuring the security of your personal information.
          </p>
        </div>

        {/* Content Section */}
        <div className="">
          <p className="mb-6">
            This Terms & Conditions describes how Dental & Aesthetic Care Centre
            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses,
            and discloses information, including personal information, that we
            may obtain through our website{" "}
            <Link
              className="text-md font-semibold hover:text-blue-500 hover:underline"
              href=" https://www.dentalspecialitycentre.in"
            >
              [Dental & Aesthetic Care Centre]
            </Link>{" "}
            and any related services (collectively, the &quot;Services&quot;).
          </p>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">
              1. Information We Collect
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Personal Information:</strong> Information that can be
                used to identify you, such as your name, contact information,
                date of birth, and medical history.
              </li>
              <li>
                <strong>Health Information:</strong> Information related to your
                dental health, treatments, and services received.
              </li>
              <li>
                <strong>Device Information:</strong> Information about your
                device, such as IP address, browser type, and operating system.
              </li>
              <li>
                <strong>Usage Information:</strong> Information about how you
                interact with our website and Services, such as pages visited
                and actions taken.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">
              2. How We Use Your Information
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Providing and improving our Services.</li>
              <li>
                Communicating with you about appointments, treatments, and other
                matters.
              </li>
              <li>
                Personalizing your experience and delivering relevant content.
              </li>
              <li>
                Analyzing trends and statistics to enhance our website and
                Services.
              </li>
              <li>
                Complying with legal obligations and protecting our rights.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">
              3. Information Sharing
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>With your consent.</li>
              <li>
                With our service providers who assist us in operating our
                website and providing our Services.
              </li>
              <li>
                To comply with legal requirements or respond to legal requests.
              </li>
              <li>
                In connection with a merger, acquisition, or other business
                transaction.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">4. Data Security</h3>
            <p>
              We take reasonable measures to protect the security of your
              information, but please be aware that no method of transmission
              over the internet or electronic storage is completely secure.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">5. Your Choices</h3>
            <p>
              You have certain choices regarding the collection and use of your
              information, including opting out of certain communications and
              cookies. Please refer to our Cookie Policy for more information.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">
              6. Children&apos;s Privacy
            </h3>
            <p>
              Our website and Services are not directed to children under the
              age of 13, and we do not knowingly collect personal information
              from children.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">
              7. Changes to This Terms & Conditions
            </h3>
            <p>
              We may update this Terms & Conditions from time to time, and any
              changes will be effective when posted. We encourage you to review
              this page periodically for the latest information.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">8. Contact Us</h3>
            <p>
              If you have any questions or concerns about our Terms & Conditions,
              please contact us at [contact email or phone number].
            </p>
          </section>
          <h2 className="mt-8 text-2xl font-bold">Updates to This Policy</h2>
          <p className="py-4 text-gray-700">
            We may update this Terms & Conditions from time to time to reflect
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
