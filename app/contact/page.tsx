import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Phone,
  Mail,
  MapPin,
  Link,
  Clock,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as motion from "motion/react-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="container text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-white/90">
              We&apos;re here to answer your questions and schedule your
              appointment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 light-mode-background-services">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-screen-2xl px-5 md:px-10 mx-auto"
        >
          <div className="mx-auto overflow-hidden rounded-2xl shadow-lg lg:max-w-6xl">
            <div className="grid md:grid-cols-2">
              <div className="bg-[#1a2e4c] p-8 text-white">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl">
                  Get In Touch
                </h2>
                <p className="mb-8 text-gray-200 text-lg">
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
                      <p
                        className="mt-1 block  text-gray-200"
                      >
                        (+91) 7978779649
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-3 text-green-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p
                        className="mt-1 block  text-gray-200"
                      >
                        Support@dentalspecialitycentre.in
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-teal-100 p-3 text-teal-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Location</h3>
                      <address className="mt-1 not-italic  text-gray-200">
                      E-792 Chittaranjan Park, New Delhi
                    
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
                          <span className="font-medium pl-2"> 11.00 AM – 8.00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span className="font-medium pl-4">On prior appointment basis only</span>
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
              <div className=" p-8 md:p-12">
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-lg">
                        First Name <span className="text-blue-600">*</span>
                      </Label>
                      <Input
                        id="first-name"
                        required
                        className="border-gray-300 h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-lg">
                        Last Name
                      </Label>
                      <Input id="last-name" className="border-gray-300 h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg">
                      Email <span className="text-blue-600">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="border-gray-300 h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-lg">
                      Phone Number <span className="text-blue-600">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      className="border-gray-300 h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-lg">
                      Message <span className="text-blue-600">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Write your message..."
                      className="min-h-[120px] border-gray-300 h-12"
                    />
                  </div>
                  {/* <Link href="/contact"> */}
                  <Button
                    type="submit"
                    className="bg-gradient-to-br from-blue-800 to-blue-950 hover:bg-gray-100 text-white px-10 py-7 text-lg font-semibold rounded-full cursor-pointer"
                  >
                    Send Message
                  </Button>
                  {/* </Link> */}
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="py-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-screen-2xl px-5 md:px-10 mx-auto"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12687.789096595514!2d77.24136680579437!3d28.536237761475945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce34dd43276f9%3A0xbfa418ad9a1d0a49!2sDr.%20Priyanka%20Goswami%20-%20Dental%20%26%20Aesthetic%20Care%20Centre!5e1!3m2!1sen!2sin!4v1746008120704!5m2!1sen!2sin"
            className="w-full h-[500px] rounded-2xl"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Embed"
          ></iframe>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-screen-2xl px-5 md:px-10 mx-auto"
        >
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
        </motion.div>
      </section>

      {/* Floating Call Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      >
        <div className="hidden rounded-full bg-[#1a2e4c] px-6 py-3 text-white shadow-lg md:block">
          <span className="text-lg font-medium">(+91) 7978779649</span>
        </div>
        <a
          href="tel:7978779649"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a2e4c] text-white shadow-lg transition-transform hover:scale-105"
        >
          <Phone className="h-6 w-6" />
        </a>
      </motion.div>
    </main>
  );
}

const faqs = [
  {
    question: "What services does your dental clinic offer?",
    answer:
      "We offer a wide range of dental services, including preventive care for children and adults, cosmetic dentistry, restorative treatments, orthodontics, and oral surgery.",
  },
  {
    question: "How often should I visit the dentist for check-ups?",
    answer:
      "It's generally recommended to visit the dentist every six months for regular check-ups and cleanings. However, this may vary based on individual oral health needs.",
  },
  {
    question: "What age should children start seeing a dentist?",
    answer:
      "Children should start seeing a dentist around their first birthday or when their first tooth erupts. Early dental visits help establish good oral health habits and prevent dental problems.",
  },
  {
    question: "What payment options are available for dental treatments?",
    answer:
      "We accept various payment options, including cash, credit cards, and flexible financing plans. Our goal is to make dental care accessible and affordable for everyone.",
  },
  {
    question: "Do you use 3D scanning technology for dental treatments?",
    answer:
      "Yes, we utilize state-of-the-art 3D scanning technology for various dental procedures, such as consultations, creating digital impressions for crowns, bridges, and Invisalign aligners. This technology enhances precision, comfort, and efficiency in treatment planning and delivery.",
  },
  {
    question: "Can you help with dental emergencies?",
    answer:
      "Yes, we provide emergency dental care for issues like severe toothaches, broken teeth, and other urgent dental problems. Contact us immediately if you have a dental emergency.",
  },
  {
    question: "What should I do if I have a dental emergency after hours?",
    answer:
      "If you experience a dental emergency outside of regular business hours, please call our emergency contact number for instructions and immediate assistance.",
  },
  {
    question: "What should I do if I have dental anxiety?",
    answer:
      "Our clinic is experienced in helping patients with dental anxiety feel comfortable and relaxed during their visits. We offer sedation options and a compassionate approach to care.",
  },
  {
    question: "How can I improve my oral hygiene at home?",
    answer:
      "We provide personalized oral hygiene instructions and tips to help you maintain a healthy smile between visits. Proper brushing, flossing, and regular dental check-ups are essential.",
  },
  {
    question: "Do you offer teeth whitening services?",
    answer:
      "Yes, we offer professional teeth whitening treatments to enhance the brightness of your smile. Schedule a consultation to discuss your options for a whiter, brighter smile.",
  },
  {
    question: "Can you replace missing teeth?",
    answer:
      "Yes, we offer several options for replacing missing teeth, including dental implants, bridges, and dentures. Our team will assess your needs and recommend the best solution for you.",
  },
  {
    question: "How long does a dental implant procedure take?",
    answer:
      "The duration of a dental implant procedure can vary depending on the individual case. Generally, it involves multiple appointments over several months to complete the process successfully. However, our clinic also offers single-day implant procedures.",
  },
  {
    question: "Do you offer orthodontic treatments like braces or Invisalign?",
    answer:
      "Yes, we provide orthodontic treatments, including traditional braces and Invisalign clear aligners, to straighten teeth and correct bite issues for both children and adults. Schedule a consultation to discuss your orthodontic needs.",
  },
  {
    question: "Can you help with TMJ (Temporomandibular Joint) disorders?",
    answer:
      "Yes, we offer diagnosis and treatment for TMJ disorders, including custom mouthguards, lifestyle recommendations, and therapeutic options to alleviate pain and improve jaw function.",
  },
  {
    question: "Can you help with snoring and sleep apnoea?",
    answer:
      "Yes, we provide oral appliance therapy for snoring and mild to moderate sleep apnoea. These custom devices can help improve breathing and quality of sleep for patients with these conditions.",
  },
  {
    question: "How can I schedule an appointment with your clinic?",
    answer:
      "Scheduling an appointment is easy! You can call our office during business hours, use our online appointment request form on the website, or visit us in person to schedule your visit.",
  },
  {
    question: "Do you offer free consultations for certain treatments?",
    answer:
      "Yes, we offer free consultations on OPEN DAY EVENTS for specific treatments such as cosmetic dentistry, orthodontics, and dental implants. During the consultation, we'll discuss your goals and treatment options.",
  },
  {
    question: "What safety measures do you have in place during the COVID-19 pandemic?",
    answer:
      "We prioritize the safety of our patients and staff. We adhere to strict infection control protocols, sanitize our facilities regularly, screen patients for symptoms, and follow guidelines from health authorities to ensure a safe environment for dental care.",
  },
];