import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Appointment() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[450px] w-full overflow-hidden">
        <Image
          src="/images/book-appointment.jpg"
          alt="Dental clinic reception"
          fill
          className="object-cover brightness-[0.95]"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          {/* <div className="max-w-screen-2xl px-5 md:px-10 mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl text-shadow-lg">Book Your Oppointment</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Experience top-notch dental care with our expert team. Schedule your appointment today and take the first step towards a healthier smile.
            </p>
          </div> */}
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            {/* <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Get In Touch
              </h2>
              <p className="mb-8 text-gray-600">
                Whether you&apos;re a new patient or a returning one, we&apos;re
                here to help you with any questions or concerns. Feel free to
                reach out to us using any of the methods below.
              </p>

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
            </div> */}

            <div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold">Book an Appointment</h2>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select>
                        <SelectTrigger id="time">
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">
                            Morning (8AM - 12PM)
                          </SelectItem>
                          <SelectItem value="afternoon">
                            Afternoon (12PM - 4PM)
                          </SelectItem>
                          <SelectItem value="evening">
                            Evening (4PM - 6PM)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="terms"
                        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link
                          href="/terms"
                          className="text-blue-600 hover:underline"
                        >
                          terms and conditions
                        </Link>
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Book Appointment
                  </Button>
                </form>
              </div>
            </div>
          </div>
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
    </main>
  );
}

const faqs = [
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling our office, using our online booking form on this page, or sending us an email. We'll respond promptly to confirm your appointment time.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring your ID, insurance information, completed new patient forms (available on our website), and a list of any medications you're currently taking. Arriving 15 minutes early helps us process your information.",
  },
  {
    question: "Do you accept dental insurance?",
    answer:
      "Yes, we accept most major dental insurance plans. Please contact our office with your insurance information, and we'll verify your coverage before your appointment.",
  },
  {
    question: "What payment options do you offer?",
    answer:
      "We accept cash, credit cards, and offer flexible payment plans. We also work with CareCredit to provide financing options for larger treatments.",
  },
  {
    question: "How early should I arrive for my appointment?",
    answer:
      "We recommend arriving 15 minutes before your scheduled appointment time to complete any necessary paperwork and ensure a smooth check-in process.",
  },
  {
    question: "What if I need to cancel my appointment?",
    answer:
      "We understand that schedules change. We appreciate at least 24 hours' notice for cancellations so we can offer the time slot to another patient in need.",
  },
];
