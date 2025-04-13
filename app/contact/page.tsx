import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Phone, Mail, MapPin, Link, Clock, Twitter, Instagram, Facebook } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[450px] w-full overflow-hidden">
        <Image
          src="/images/contact-hero.png"
          alt="Dental clinic reception"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="container text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              We&apos;re here to answer your questions and schedule your
              appointment
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="mx-auto overflow-hidden rounded-2xl shadow-lg lg:max-w-6xl">
            <div className="grid md:grid-cols-2">
              {/* Left Panel - Contact Information */}
              {/* <div className="bg-[#1a2e4c] p-8 text-white md:p-12">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
                      Contact Our
                      <br />
                      Dental Office
                    </h2>

                    <div className="mt-12 flex flex-col items-center space-y-10">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-3 rounded-full border-2 border-white/20 p-3">
                          <Phone className="h-6 w-6" />
                        </div>
                        <p className="text-lg">(555) 123-4567</p>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <div className="mb-3 rounded-full border-2 border-white/20 p-3">
                          <Mail className="h-6 w-6" />
                        </div>
                        <p className="text-lg">info@brightsmile.com</p>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <div className="mb-3 rounded-full border-2 border-white/20 p-3">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <p className="max-w-xs text-center text-lg">
                          123 Smile Street, Dental District
                          <br />
                          Cityville, State 12345
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="bg-[#1a2e4c] p-8 text-white">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Get In Touch
                </h2>
                <p className="mb-8 text-gray-200">
                  Whether you&apos;re a new patient or a returning one,
                  we&apos;re here to help you with any questions or concerns.
                  Feel free to reach out to us using any of the methods below.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                      <Phone className="h-6 w-6" /> 
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <a
                        href="tel:+15551234567"
                        className="mt-1 block  text-gray-200"
                      >
                        (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-3 text-green-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <a
                        href="mailto:info@brightsmile.com"
                        className="mt-1 block  text-gray-200"
                      >
                        info@brightsmile.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-teal-100 p-3 text-teal-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Location</h3>
                      <address className="mt-1 not-italic  text-gray-200">
                        123 Smile Street, Dental District
                        <br />
                        Cityville, State 12345
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-purple-100 p-3 text-purple-600">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Office Hours</h3>
                      <div className="mt-2 space-y-1 text-gray-200">
                        <div className="flex justify-between">
                          <span>Monday - Saturday:</span>
                          <span className="font-medium">8:00 AM - 9:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span className="font-medium">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="mb-4 font-medium">Connect With Us</h3>
                  <div className="flex gap-4">
                    <Link
                      href="https://facebook.com"
                      target="_blank"
                      className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-blue-100 hover:text-blue-600"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://instagram.com"
                      target="_blank"
                      className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-pink-100 hover:text-pink-600"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://twitter.com"
                      target="_blank"
                      className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-blue-100 hover:text-blue-400"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Panel - Contact Form */}
              <div className="bg-white p-8 md:p-12">
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-base">
                        First Name <span className="text-blue-600">*</span>
                      </Label>
                      <Input
                        id="first-name"
                        required
                        className="border-gray-300"
                      />
                      {/* <p className="text-xs text-gray-500">
                        This field is required.
                      </p> */}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-base">
                        Last Name
                      </Label>
                      <Input id="last-name" className="border-gray-300" />
                      {/* <p className="text-xs text-gray-500">
                        This field is required.
                      </p> */}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">
                      Email <span className="text-blue-600">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="border-gray-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base">
                      Phone Number <span className="text-blue-600">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      className="border-gray-300"
                    />
                  </div>

                  {/* <div className="space-y-3">
                    <Label className="text-base">
                      Select Subject? <span className="text-blue-600">*</span>
                    </Label>
                    <RadioGroup defaultValue="general" className="flex flex-wrap gap-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="doctor" id="doctor" />
                        <Label htmlFor="doctor" className="font-normal">
                          Doctor Inquiry
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="appointment" id="appointment" />
                        <Label htmlFor="appointment" className="font-normal">
                          Appointment Inquiry
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="treatment" id="treatment" />
                        <Label htmlFor="treatment" className="font-normal">
                          Treatment Inquiry
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general" id="general" />
                        <Label htmlFor="general" className="font-normal">
                          General Inquiry
                        </Label>
                      </div>
                    </RadioGroup>
                  </div> */}

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base">
                      Message <span className="text-blue-600">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Write your message..."
                      className="min-h-[120px] border-gray-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#1a2e4c] px-8 py-3 text-base hover:bg-[#2a3e5c]"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 w-full">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.44405290353!2d76.89712797304075!3d28.527297841148833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1744469573508!5m2!1sen!2sin"
            className="w-full h-[500px] rounded-2xl"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Embed"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 text-lg">
              Find answers to common questions about our dental services
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-xl">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Floating Call Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div className="hidden rounded-full bg-[#1a2e4c] px-6 py-3 text-white shadow-lg md:block">
          <span className="text-lg font-medium">+1 (555) 123-4567</span>
        </div>
        <a
          href="tel:+15551234567"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a2e4c] text-white shadow-lg transition-transform hover:scale-105"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </main>
  );
}

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "We recommend visiting the dentist every six months for regular check-ups and cleanings. However, some patients may need more frequent visits depending on their oral health needs.",
  },
  {
    question: "What should I do in case of a dental emergency?",
    answer:
      "If you experience a dental emergency, call our office immediately. We offer same-day emergency appointments whenever possible. For after-hours emergencies, our answering service will direct you to the on-call dentist who can provide guidance until you can be seen in our office.",
  },
  {
    question: "How long does teeth whitening last?",
    answer:
      "Professional teeth whitening results can last anywhere from 6 months to 2 years, depending on your habits. Consuming staining foods and beverages, smoking, and poor oral hygiene can shorten the lifespan of your whitening treatment.",
  },
  {
    question: "Are dental X-rays safe?",
    answer:
      "Yes, dental X-rays are safe. Modern digital X-rays use very low doses of radiation. We also use protective equipment like lead aprons to minimize exposure. The benefits of detecting dental problems early through X-rays far outweigh the minimal risks.",
  },
  {
    question: "How can I prevent cavities?",
    answer:
      "Prevent cavities by brushing twice daily with fluoride toothpaste, flossing daily, limiting sugary foods and drinks, getting regular dental check-ups, and considering preventive treatments like dental sealants and fluoride applications.",
  },
];
