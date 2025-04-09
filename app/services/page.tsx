import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Smile, ArrowRight, Baby, SmileIcon as Tooth, Zap, ShieldCheck } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <Image
          src="/service-images/services-hero.jpg"
          alt="Dental treatment"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="max-w-screen-2xl px-5 md:px-10 mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Our Services</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Comprehensive dental care for patients of all ages
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Comprehensive Dental Care</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              At Bright Smile Dental, we offer a wide range of services to meet all your dental needs
            </p>
          </div>

          <div className="grid gap-12">
            {services.map((service, index) => (
              <div key={index} className="grid gap-8 md:grid-cols-2" id={service.id}>
                <div className={`relative h-[300px] overflow-hidden rounded-lg ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-4 w-fit rounded-full bg-blue-100 p-3 text-blue-600">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-teal-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Find answers to common questions about our dental services
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Insurance & Payment Options</h2>
              <p className="mb-6 text-gray-600">
                We accept most major dental insurance plans and offer flexible payment options to make dental care
                accessible to everyone. Our team will work with you to maximize your benefits and minimize out-of-pocket
                expenses.
              </p>
              <div className="mb-6 space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-teal-500" />
                  <span>We accept most major insurance plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-teal-500" />
                  <span>Flexible payment plans available</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-teal-500" />
                  <span>We&apos;ll help you understand your coverage</span>
                </div>
              </div>
              <Button asChild className="w-fit">
                <Link href="/contact">Contact Us For Details</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {insurances.map((insurance, index) => (
                <div key={index} className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                  <div className="relative h-12 w-32">
                    <Image
                      src={insurance.logo || "/placeholder.svg"}
                      alt={insurance.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 py-16 text-white">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Schedule Your Visit?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            Contact us today to book an appointment for any of our dental services
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

const services = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    description:
      "Our general dentistry services focus on preventing dental issues and maintaining optimal oral health through regular check-ups and cleanings.",
    features: [
      "Comprehensive dental exams",
      "Professional teeth cleaning",
      "Dental fillings and restorations",
      "Gum disease treatment",
      "Oral cancer screenings",
    ],
    image: "/service-images/general-dentistry.jpg",
    icon: Tooth,
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with our range of cosmetic dental procedures designed to enhance the appearance of your teeth and overall smile.",
    features: [
      "Professional teeth whitening",
      "Porcelain veneers",
      "Dental bonding",
      "Smile makeovers",
      "Gum contouring",
    ],
    image: "/service-images/cosmetic-dentistry.jpg",
    icon: Sparkles,
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    description:
      "Achieve a straighter, more aligned smile with our modern orthodontic treatments suitable for patients of all ages.",
    features: [
      "Traditional braces",
      "Clear aligners",
      "Retainers",
      "Early intervention orthodontics",
      "Bite correction",
    ],
    image: "/service-images/orthodontics.jpg",
    icon: Smile,
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    description:
      "We provide gentle, child-friendly dental care to help your little ones develop healthy oral habits from an early age.",
    features: [
      "Child-friendly dental exams",
      "Preventive treatments",
      "Dental sealants",
      "Fluoride treatments",
      "Education on proper oral hygiene",
    ],
    image: "/service-images/pediatric-dentistry.jpg",
    icon: Baby,
  },
  {
    id: "emergency-care",
    title: "Emergency Dental Care",
    description:
      "When dental emergencies strike, our team is ready to provide prompt, effective treatment to relieve pain and address urgent issues.",
    features: [
      "Same-day emergency appointments",
      "Treatment for severe toothaches",
      "Repair of broken or chipped teeth",
      "Treatment for dental infections",
      "Management of dental trauma",
    ],
    image: "/service-images/emergency-dental.jpg",
    icon: Zap,
  },
]

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
]

const insurances = [
  {
    name: "Delta Dental",
    logo: "/service-images/delta-dental.png",
  },
  {
    name: "Cigna",
    logo: "/service-images/cigna.png",
  },
  {
    name: "Aetna",
    logo: "/service-images/aetna.png",
  },
  {
    name: "MetLife",
    logo: "/service-images/metlife.png",
  },
]
