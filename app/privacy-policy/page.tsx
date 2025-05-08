import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <section className="max-w-screen-xl px-5 md:px-10 mx-auto py-10">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            At Dental & Aesthetic Care Centre, we are committed to protecting your
            privacy and ensuring the security of your personal information.
          </p>
        </div>

        {/* Content Section */}
        <div className="">
          <p className="mb-6">
            This Privacy Policy describes how Dental & Aesthetic Care Centre
            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and discloses information,
            including personal information, that we may obtain through our
            website ([website URL]) and any related services (collectively, the
            &quot;Services&quot;).
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
              7. Changes to This Privacy Policy
            </h3>
            <p>
              We may update this Privacy Policy from time to time, and any
              changes will be effective when posted. We encourage you to review
              this page periodically for the latest information.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">8. Contact Us</h3>
            <p>
              If you have any questions or concerns about our Privacy Policy,
              please contact us at [contact email or phone number].
            </p>
          </section>
          {/* <h2 className="mb-4 text-2xl font-semibold text-blue-800">
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

          */}
          <h2 className="mt-8 text-2xl font-bold">
            Updates to This Policy
          </h2>
          <p className="py-4 text-gray-700">
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

// import React from "react";

// const PrivacyPolicy = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
//       <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
//       <h2 className="text-xl font-semibold mb-4">
//         Privacy Policy for Dental & Aesthetic Care Centre
//       </h2>
//       <p className="mb-6">
//         This Privacy Policy describes how Dental & Aesthetic Care Centre
//         ("we," "us," or "our") collects, uses, and discloses information,
//         including personal information, that we may obtain through our website
//         ([website URL]) and any related services (collectively, the "Services").
//       </p>

//       <section className="mb-6">
//         <h3 className="text-lg font-semibold mb-2">1. Information We Collect</h3>
//         <ul className="list-disc pl-5 space-y-1">
//           <li><strong>Personal Information:</strong> Information that can be used to identify you, such as your name, contact information, date of birth, and medical history.</li>
//           <li><strong>Health Information:</strong> Information related to your dental health, treatments, and services received.</li>
//           <li><strong>Device Information:</strong> Information about your device, such as IP address, browser type, and operating system.</li>
//           <li><strong>Usage Information:</strong> Information about how you interact with our website and Services, such as pages visited and actions taken.</li>
//         </ul>
//       </section>

//       <section className="mb-6">
//         <h3 className="text-lg font-semibold mb-2">2. How We Use Your Information</h3>
//         <ul className="list-disc pl-5 space-y-1">
//           <li>Providing and improving our Services.</li>
//           <li>Communicating with you about appointments, treatments, and other matters.</li>
//           <li>Personalizing your experience and delivering relevant content.</li>
//           <li>Analyzing trends and statistics to enhance our website and Services.</li>
//           <li>Complying with legal obligations and protecting our rights.</li>
//         </ul>
//       </section>

//       <section className="mb-6">
//         <h3 className="text-lg font-semibold mb-2">3. Information Sharing</h3>
//         <ul className="list-disc pl-5 space-y-1">
//           <li>With your consent.</li>
//           <li>With our service providers who assist us in operating our website and providing our Services.</li>
//           <li>To comply with legal requirements or respond to legal requests.</li>
//           <li>In connection with a merger, acquisition, or other business transaction.</li>
//         </ul>
//       </section>

//       <section className="mb-6">
//         <h3 className="text-lg font-semibold mb-2">4. Data Security</h3>
//         <p>
//           We take reasonable measures to protect the security of your information, but please be aware that no method of transmission over the internet or electronic storage is completely secure.
//         </p>
//       </section>

//       <section className="mb-6">
//         <h3 className="text-lg font-semibold mb-2">5. Your Choices</h3>
//         <p>
//           You have certain choices regarding the collection and use of your information, including opting out of certain communications and cookies. Please refer to our Cookie Policy for more information.
//         </p>
//       </section>

//       <section className="mb-6">
//         <h3 className="text-lg font-semibold mb-2">6. Children's Privacy</h3>
//         <p>
//           Our website and Services are not directed to children under the age of 13, and we do not knowingly collect personal information from children.
//         </p>
//       </section>

//       <section className="mb-6">
//         <h3 className="text-lg font-semibold mb-2">7. Changes to This Privacy Policy</h3>
//         <p>
//           We may update this Privacy Policy from time to time, and any changes will be effective when posted. We encourage you to review this page periodically for the latest information.
//         </p>
//       </section>

//       <section>
//         <h3 className="text-lg font-semibold mb-2">8. Contact Us</h3>
//         <p>
//           If you have any questions or concerns about our Privacy Policy, please contact us at [contact email or phone number].
//         </p>
//       </section>
//     </div>
//   );
// };

// export default PrivacyPolicy;
