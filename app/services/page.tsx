import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Smile,
  ArrowRight,
  Baby,
  SmileIcon as Tooth,
  Zap,
  ShieldCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as motion from "motion/react-client";
import GeneralDentistry from "@/components/GeneralDentistry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
}

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[450px] w-full overflow-hidden">
        <Image
          src="/service-images/services-hero.jpg"
          alt="Dental treatment"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-screen-2xl px-5 md:px-10 mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Comprehensive dental care for patients of all ages
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-screen-2xl px-5 md:px-10 mx-auto"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-5xl text-[#1a2e4c]">
              Comprehensive Dental Care
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 text-xl mt-5">
              At Bright Smile Dental, we offer a wide range of services to meet
              all your dental needs
            </p>
          </div>

          <div className="grid gap-12">
            {services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                key={index}
                className="grid gap-8 md:grid-cols-2"
                id={service.id}
              >
                <div
                  className={`relative h-[400px] overflow-hidden rounded-lg ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-3 flex items-center gap-3">
                    <div className=" w-fit rounded-full bg-blue-100 p-3 text-blue-600">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className=" text-4xl font-bold">{service.title}</h3>
                  </div>
                  <p className="mb-4 text-gray-600 text-lg">
                    {service.description}
                  </p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-lg">
                        <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-teal-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* General Dentistry */}
      <GeneralDentistry />

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-screen-2xl px-5 md:px-10 mx-auto"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-5xl text-[#1a2e4c]">
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
                  <AccordionTrigger className="text-left text-xl cursor-pointer font-semibold text-gray-800 hover:text-blue-600">
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

      {/* Insurance Section */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-screen-2xl px-5 md:px-10 mx-auto"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl text-[#1a2e4c]">
                Insurance & Payment Options
              </h2>
              <p className="mb-6 text-gray-600 text-lg">
                We accept most major dental insurance plans and offer flexible
                payment options to make dental care accessible to everyone. Our
                team will work with you to maximize your benefits and minimize
                out-of-pocket expenses.
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
                <Button className="mt-8 bg-gradient-to-br from-blue-800 to-blue-950 hover:bg-gray-100 text-white  px-10 py-7 text-lg font-semibold rounded-full cursor-pointer">
                  <Link href="/contact">Contact Us For Details</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/service-images/insurance.png"
                alt="Insurance options"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
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
];

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


// const general = [
//   {
//     imgSrc: "/images/denatials01.png",
//     title: "General Dentistry",
//     description: "Cosmetic treatment to enhance the whiteness of teeth",
//   },
//   {
//     imgSrc: "/images/denatials02.png",
//     title: "Oral Surgery",
//     description:
//       "Surgical procedures, including extractios and dental implants",
//   },
//   {
//     imgSrc: "/images/denatials03.png",
//     title: "Crown and Bridges",
//     description: "Restoration options for damaged or missing teeth",
//   },
//   {
//     imgSrc: "/images/denatials04.png",
//     title: "Periodontal Care",
//     description:
//       "Services for gum health, including scaling and root canal treatment",
//   },
// ];




// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import {
//   Shield,
//   Smile,
//   Sparkles,
//   Star,
//   Zap,
//   Search,
//   SmileIcon as Tooth,
//   Clock,
//   HeartPulse,
//   Baby,
//   Crown,
//   Scissors,
//   Moon,
//   Activity,
// } from "lucide-react"
// import ServiceCard from "@/components/service-card"
// import ServiceFeature from "@/components/ServiceComponents/service-feature"
// import FeaturedService from "@/components/featured-service"
// import ProblemCard from "@/components/problem-card"

// export default function ServicesPage() {
//   return (
//     <main className="flex min-h-screen flex-col">
//       {/* Hero Section */}
//       <section className="relative h-[500px] w-full overflow-hidden">
//         <Image
//           src="/images/services-hero.jpg"
//           alt="Dental services"
//           fill
//           className="object-cover brightness-[0.85]"
//           priority
//         />
//         <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/60 to-black/40">
//           <div className="container text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Our Services</h1>
//             <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
//               Comprehensive dental care for patients of all ages
//             </p>
//             <Button size="lg" className="mt-8 bg-white text-[#1a2e4c] hover:bg-gray-100">
//               <Link href="#service-categories">Explore Our Services</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Introduction Section */}
//       <section className="bg-white py-16">
//         <div className="container">
//           <div className="mx-auto max-w-3xl text-center">
//             <div className="mb-6 inline-flex rounded-full bg-blue-100 p-2 text-blue-600">
//               <Smile className="h-6 w-6" />
//             </div>
//             <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-4xl">
//               Comprehensive Dental Care
//             </h2>
//             <p className="mb-8 text-lg text-gray-600">
//               At our dental clinic, we offer a wide range of services to meet all your dental needs. From routine
//               check-ups to advanced cosmetic procedures, our experienced team is dedicated to providing exceptional care
//               in a comfortable environment.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <Button asChild className="bg-[#1a2e4c] hover:bg-[#2a3e5c]">
//                 <Link href="/contact">Book an Appointment</Link>
//               </Button>
//               <Button variant="outline" asChild>
//                 <Link href="/about">Meet Our Team</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Service Categories */}
//       <section id="service-categories" className="bg-gray-50 py-16">
//         <div className="container">
//           <div className="mb-12 text-center">
//             <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-4xl">
//               Our Service Categories
//             </h2>
//             <p className="mx-auto max-w-2xl text-gray-600">
//               Explore our comprehensive range of dental services designed to address all your oral health needs
//             </p>
//           </div>

//           <Tabs defaultValue="general" className="w-full">
//             <div className="mb-8 flex justify-center">
//               <TabsList className="grid w-full max-w-3xl grid-cols-2 md:grid-cols-4">
//                 <TabsTrigger value="general">General</TabsTrigger>
//                 <TabsTrigger value="cosmetic">Cosmetic</TabsTrigger>
//                 <TabsTrigger value="surgical">Surgical</TabsTrigger>
//                 <TabsTrigger value="problems">Problems We Treat</TabsTrigger>
//               </TabsList>
//             </div>

//             <TabsContent value="general" className="mt-0">
//               <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                 <ServiceCard
//                   icon={<Search className="h-6 w-6" />}
//                   title="Full Mouth Examination & 3D Scanning"
//                   description="Comprehensive screening and advanced 3D imaging for precise diagnostics and treatment planning."
//                   duration="45-60 minutes"
//                   link="/services/full-mouth-examination"
//                 />
//                 <ServiceCard
//                   icon={<Shield className="h-6 w-6" />}
//                   title="Oral Cancer Screening"
//                   description="Early detection screening to identify potential issues before they become serious concerns."
//                   duration="Few minutes"
//                   link="/services/oral-cancer-screening"
//                 />
//                 <ServiceCard
//                   icon={<Tooth className="h-6 w-6" />}
//                   title="Tooth-Coloured Fillings"
//                   description="Natural-looking fillings that blend seamlessly with your teeth for discreet cavity repair."
//                   duration="15-20 minutes per tooth"
//                   link="/services/tooth-coloured-fillings"
//                 />
//                 <ServiceCard
//                   icon={<Shield className="h-6 w-6" />}
//                   title="Dental Sealants"
//                   description="Protective coatings for molars and premolars to shield teeth from decay and bacteria."
//                   duration="Few minutes per tooth"
//                   link="/services/dental-sealants"
//                 />
//                 <ServiceCard
//                   icon={<Baby className="h-6 w-6" />}
//                   title="Topical Fluoride Therapy"
//                   description="Specialized treatment for children aged 6-14 to strengthen developing teeth against decay."
//                   duration="10 minutes"
//                   link="/services/fluoride-therapy"
//                 />
//                 <ServiceCard
//                   icon={<Zap className="h-6 w-6" />}
//                   title="Dental Emergencies"
//                   description="Prompt care for dental emergencies including toothaches, broken teeth, and more."
//                   duration="Same-day appointments"
//                   link="/services/dental-emergencies"
//                 />
//                 <ServiceCard
//                   icon={<HeartPulse className="h-6 w-6" />}
//                   title="Gum Treatment"
//                   description="Comprehensive periodontal therapy to address gum disease and improve oral health."
//                   duration="Varies by condition"
//                   link="/services/gum-treatment"
//                 />
//                 <ServiceCard
//                   icon={<Activity className="h-6 w-6" />}
//                   title="Root Canal Treatment"
//                   description="Precise endodontic therapy to remove infection, alleviate pain, and save natural teeth."
//                   duration="60-90 minutes"
//                   link="/services/root-canal"
//                 />
//                 <ServiceCard
//                   icon={<Crown className="h-6 w-6" />}
//                   title="Crown & Bridge Solutions"
//                   description="Custom restorations to repair damaged teeth and replace missing teeth with natural-looking results."
//                   duration="Two visits, 20-30 minutes each"
//                   link="/services/crown-bridge"
//                 />
//               </div>
//             </TabsContent>

//             <TabsContent value="cosmetic" className="mt-0">
//               <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                 <ServiceCard
//                   icon={<Sparkles className="h-6 w-6" />}
//                   title="Teeth Whitening"
//                   description="Professional whitening treatments to remove stains and brighten your smile dramatically."
//                   duration="30-45 minutes"
//                   link="/services/teeth-whitening"
//                 />
//                 <ServiceCard
//                   icon={<Star className="h-6 w-6" />}
//                   title="Veneers & Laminates"
//                   description="Custom-made shells to cover the front surface of teeth, correcting imperfections for a flawless smile."
//                   duration="Multiple appointments"
//                   link="/services/veneers"
//                 />
//                 <ServiceCard
//                   icon={<Smile className="h-6 w-6" />}
//                   title="Digital Smile Makeovers"
//                   description="Virtual smile design to preview your ideal smile before treatment begins."
//                   duration="Consultation required"
//                   link="/services/digital-smile-makeover"
//                 />
//                 <ServiceCard
//                   icon={<Smile className="h-6 w-6" />}
//                   title="Braces"
//                   description="Traditional orthodontic treatment to correct misaligned teeth and bite issues."
//                   duration="18-24 months"
//                   link="/services/braces"
//                 />
//                 <ServiceCard
//                   icon={<Smile className="h-6 w-6" />}
//                   title="Dental Aligners"
//                   description="Clear, removable aligners for discreet teeth straightening and bite correction."
//                   duration="6-18 months"
//                   link="/services/dental-aligners"
//                 />
//                 <ServiceCard
//                   icon={<Scissors className="h-6 w-6" />}
//                   title="Gummy Smile Reduction"
//                   description="Reshaping the gumline to create a more balanced, aesthetically pleasing smile."
//                   duration="Varies by case"
//                   link="/services/gummy-smile-reduction"
//                 />
//               </div>
//             </TabsContent>

//             <TabsContent value="surgical" className="mt-0">
//               <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                 <ServiceCard
//                   icon={<Tooth className="h-6 w-6" />}
//                   title="Dental Implants"
//                   description="Permanent tooth replacement solution that looks, feels, and functions like natural teeth."
//                   duration="3-6 months total process"
//                   link="/services/dental-implants"
//                 />
//                 <ServiceCard
//                   icon={<Tooth className="h-6 w-6" />}
//                   title="All-on-Four Implants"
//                   description="Full-arch restoration with just four strategically placed implants."
//                   duration="Consultation required"
//                   link="/services/all-on-four"
//                 />
//                 <ServiceCard
//                   icon={<Zap className="h-6 w-6" />}
//                   title="Same Day Implants"
//                   description="Immediate implant placement and restoration in a single visit for suitable candidates."
//                   duration="Single day procedure"
//                   link="/services/same-day-implants"
//                 />
//                 <ServiceCard
//                   icon={<Tooth className="h-6 w-6" />}
//                   title="Cortical Implants"
//                   description="Advanced implants placed in dense jawbone for exceptional stability in full mouth rehabilitation."
//                   duration="2-4 weeks"
//                   link="/services/cortical-implants"
//                 />
//                 <ServiceCard
//                   icon={<Scissors className="h-6 w-6" />}
//                   title="Surgical Extractions"
//                   description="Advanced procedures for removing problematic teeth that require surgical intervention."
//                   duration="Varies by complexity"
//                   link="/services/surgical-extractions"
//                 />
//                 <ServiceCard
//                   icon={<Shield className="h-6 w-6" />}
//                   title="Bone Grafts"
//                   description="Procedures to restore bone volume and density for implant placement and facial aesthetics."
//                   duration="3-6 months healing"
//                   link="/services/bone-grafts"
//                 />
//               </div>
//             </TabsContent>

//             <TabsContent value="problems" className="mt-0">
//               <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                 <ProblemCard
//                   title="Dental Anxiety & Phobia"
//                   description="We offer gentle care and sedation options for patients with dental fear."
//                 />
//                 <ProblemCard
//                   title="Chipped or Cracked Teeth"
//                   description="Restorative solutions to repair damaged teeth and restore function."
//                 />
//                 <ProblemCard
//                   title="Dental Trauma"
//                   description="Emergency care and treatment for injuries to teeth and surrounding tissues."
//                 />
//                 <ProblemCard
//                   title="Wisdom Tooth Pain"
//                   description="Evaluation and extraction of problematic wisdom teeth causing discomfort."
//                 />
//                 <ProblemCard
//                   title="Tooth Pain & Sensitivity"
//                   description="Diagnosis and treatment of various causes of dental pain and sensitivity."
//                 />
//                 <ProblemCard
//                   title="Missing Teeth"
//                   description="Multiple solutions including implants, bridges, and dentures to replace missing teeth."
//                 />
//                 <ProblemCard
//                   title="Teeth Grinding"
//                   description="Custom night guards and treatments to address bruxism and its effects."
//                 />
//                 <ProblemCard
//                   title="Bleeding Gums"
//                   description="Periodontal treatments to address gum disease and restore gum health."
//                 />
//                 <ProblemCard
//                   title="Sleep Apnoea & Snoring"
//                   description="Custom oral appliances to improve airflow and reduce sleep-disordered breathing."
//                 />
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>

//       {/* Featured Services */}
//       <section className="py-16">
//         <div className="container">
//           <div className="mb-12 text-center">
//             <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-4xl">Featured Services</h2>
//             <p className="mx-auto max-w-2xl text-gray-600">
//               Discover our most popular treatments that can transform your smile and oral health
//             </p>
//           </div>

//           <div className="space-y-16">
//             <FeaturedService
//               title="Invisalign Clear Aligners"
//               description="Transform your smile discreetly and comfortably with Invisalign, the clear alternative to traditional braces. Enjoy the benefits of straight teeth without the hassle of metal brackets and wires."
//               image="/images/invisalign-treatment.jpg"
//               features={[
//                 "Discreet appearance with virtually invisible aligners",
//                 "Removable for eating, brushing, and special occasions",
//                 "Comfortable with no metal brackets or wires",
//                 "Effective for a wide range of orthodontic issues",
//               ]}
//               duration="6-18 months depending on individual needs"
//               reverse={false}
//             />

//             <FeaturedService
//               title="Full Mouth Rehabilitation"
//               description="Rediscover the joy of a fully functional, beautiful smile with our comprehensive full mouth rehabilitation services. This transformative treatment addresses multiple dental issues for optimal oral health and aesthetics."
//               image="/images/full-mouth-rehab.jpg"
//               features={[
//                 "Comprehensive care addressing multiple dental concerns",
//                 "Restored ability to eat, speak, and smile confidently",
//                 "Customized treatment plan for your unique needs",
//                 "Improved overall oral health and function",
//               ]}
//               duration="Varies based on case complexity"
//               reverse={true}
//             />

//             <FeaturedService
//               title="Dental Implants"
//               description="Regain the functionality and aesthetics of natural teeth with our advanced dental implant solutions. Whether you're missing one tooth or several, dental implants offer a permanent and lifelike replacement."
//               image="/images/dental-implants.jpg"
//               features={[
//                 "Permanent solution that integrates with your jawbone",
//                 "Natural look and feel that mimics real teeth",
//                 "Preserves jawbone health and facial structure",
//                 "Options for single tooth or full arch restoration",
//               ]}
//               duration="3-6 months total process, immediate options available"
//               reverse={false}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Specialized Care */}
//       <section className="bg-gray-50 py-16">
//         <div className="container">
//           <div className="mb-12 text-center">
//             <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-4xl">Specialized Care</h2>
//             <p className="mx-auto max-w-2xl text-gray-600">
//               We offer specialized treatments for unique dental needs and conditions
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2">
//             <Card className="overflow-hidden">
//               <div className="relative h-64">
//                 <Image src="/images/family-dentistry.jpg" alt="Family Dentistry" fill className="object-cover" />
//               </div>
//               <CardContent className="p-6">
//                 <div className="mb-4 flex items-center justify-between">
//                   <h3 className="text-2xl font-bold text-[#1a2e4c]">Family Dentistry</h3>
//                   <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">All Ages</Badge>
//                 </div>
//                 <p className="mb-4 text-gray-600">
//                   Comprehensive dental care for your entire family, from children to seniors. Our family-friendly
//                   practice provides preventive, restorative, and cosmetic treatments tailored to each individual's
//                   needs.
//                 </p>
//                 <div className="mb-6 space-y-2">
//                   <ServiceFeature text="One-stop dental care for the whole family" />
//                   <ServiceFeature text="Consistent, personalized care and thorough understanding of your family's oral health history" />
//                   <ServiceFeature text="Patient education on proper oral hygiene habits" />
//                 </div>
//                 <Button asChild className="w-full bg-[#1a2e4c] hover:bg-[#2a3e5c]">
//                   <Link href="/services/family-dentistry">Learn More</Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="overflow-hidden">
//               <div className="relative h-64">
//                 <Image src="/images/sleep-apnea.jpg" alt="Sleep Apnoea & TMJ Treatment" fill className="object-cover" />
//               </div>
//               <CardContent className="p-6">
//                 <div className="mb-4 flex items-center justify-between">
//                   <h3 className="text-2xl font-bold text-[#1a2e4c]">Sleep Apnoea & TMJ Treatment</h3>
//                   <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Specialized</Badge>
//                 </div>
//                 <p className="mb-4 text-gray-600">
//                   Experience relief and improved quality of life with effective treatments for TMJ disorders and sleep
//                   apnoea. Our comprehensive approach addresses the underlying causes of these conditions.
//                 </p>
//                 <div className="mb-6 space-y-2">
//                   <ServiceFeature text="Thorough assessment of jaw function and sleep patterns" />
//                   <ServiceFeature text="Customized oral appliances for TMJ and sleep apnoea" />
//                   <ServiceFeature text="Lifestyle modifications and ongoing support" />
//                 </div>
//                 <Button asChild className="w-full bg-[#1a2e4c] hover:bg-[#2a3e5c]">
//                   <Link href="/services/sleep-tmj">Learn More</Link>
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Preventive Care */}
//       <section className="bg-[#1a2e4c] py-16 text-white">
//         <div className="container">
//           <div className="grid gap-12 md:grid-cols-2">
//             <div className="flex flex-col justify-center">
//               <div className="mb-4 inline-flex rounded-full bg-white/10 p-2 text-white">
//                 <Shield className="h-6 w-6" />
//               </div>
//               <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Preventive Dental Care</h2>
//               <p className="mb-6 text-lg text-white/90">
//                 Prevention is the foundation of excellent oral health. Our comprehensive preventive services help you
//                 maintain a healthy smile and avoid more complex dental issues down the road.
//               </p>
//               <div className="mb-8 space-y-4">
//                 <div className="flex items-start gap-3">
//                   <div className="rounded-full bg-white/10 p-1">
//                     <Clock className="h-4 w-4" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium">Regular Check-ups</h3>
//                     <p className="text-white/80">Recommended every six months to catch issues early</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <div className="rounded-full bg-white/10 p-1">
//                     <Tooth className="h-4 w-4" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium">Professional Cleanings</h3>
//                     <p className="text-white/80">Remove plaque and tartar that regular brushing can't reach</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <div className="rounded-full bg-white/10 p-1">
//                     <Search className="h-4 w-4" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium">Diagnostic Imaging</h3>
//                     <p className="text-white/80">Advanced 3D scanning to detect hidden issues</p>
//                   </div>
//                 </div>
//               </div>
//               <Button variant="secondary" asChild>
//                 <Link href="/contact">Schedule Your Check-up</Link>
//               </Button>
//             </div>
//             <div className="relative h-[400px] overflow-hidden rounded-lg md:h-auto">
//               <Image src="/images/preventive-care.jpg" alt="Preventive dental care" fill className="object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Custom Guards */}
//       <section className="py-16">
//         <div className="container">
//           <div className="mb-12 text-center">
//             <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-4xl">Custom Protection</h2>
//             <p className="mx-auto max-w-2xl text-gray-600">
//               Protect your smile with our custom-made guards for various needs
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2">
//             <Card className="overflow-hidden">
//               <CardContent className="p-6">
//                 <div className="mb-4 flex items-center gap-3">
//                   <div className="rounded-full bg-blue-100 p-2 text-blue-600">
//                     <Moon className="h-5 w-5" />
//                   </div>
//                   <h3 className="text-xl font-bold text-[#1a2e4c]">Night Guards</h3>
//                 </div>
//                 <p className="mb-4 text-gray-600">
//                   Custom-designed night guards to protect your teeth from grinding and clenching during sleep. Our night
//                   guards are precisely crafted for optimal comfort and effectiveness.
//                 </p>
//                 <div className="mb-6 space-y-2">
//                   <ServiceFeature text="Comfortable fit tailored to your teeth and jaw" />
//                   <ServiceFeature text="Prevents wear and tear, reduces jaw pain and headaches" />
//                   <ServiceFeature text="Improves sleep quality by minimizing teeth grinding" />
//                 </div>
//                 <Button asChild variant="outline" className="w-full">
//                   <Link href="/services/night-guards">Learn More</Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="overflow-hidden">
//               <CardContent className="p-6">
//                 <div className="mb-4 flex items-center gap-3">
//                   <div className="rounded-full bg-green-100 p-2 text-green-600">
//                     <Shield className="h-5 w-5" />
//                   </div>
//                   <h3 className="text-xl font-bold text-[#1a2e4c]">Sports Guards</h3>
//                 </div>
//                 <p className="mb-4 text-gray-600">
//                   Protect your smile during athletic activities with our custom sports guards. Designed for maximum
//                   comfort, durability, and impact protection during sports and physical activities.
//                 </p>
//                 <div className="mb-6 space-y-2">
//                   <ServiceFeature text="Superior protection compared to generic options" />
//                   <ServiceFeature text="Comfortable fit with minimal interference with speech" />
//                   <ServiceFeature text="Enhanced performance by protecting teeth and jaw" />
//                 </div>
//                 <Button asChild variant="outline" className="w-full">
//                   <Link href="/services/sports-guards">Learn More</Link>
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-teal-500 py-16 text-white">
//         <div className="container text-center">
//           <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Smile?</h2>
//           <p className="mx-auto mb-8 max-w-2xl text-white/90">
//             Schedule your consultation today and discover how our comprehensive dental services can enhance your oral
//             health and confidence.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Button size="lg" variant="secondary" asChild>
//               <Link href="/contact">Book Your Appointment</Link>
//             </Button>
//             <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
//               <Link href="/contact#contact-form">Contact Us</Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }









// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import {
//   Shield,
//   Smile,
//   Sparkles,
//   Zap,
//   Clock,
//   HeartPulse,
//   Baby,
//   Crown,
//   Scissors,
//   Moon,
//   Activity,
//   Droplet,
//   Bone,
//   Microscope,
//   Wind,
//   Thermometer,
//   Scan,
//   Hammer,
//   Repeat,
//   Trash2,
//   Smartphone,
//   Users,
//   Palette,
//   AlertCircle,
 
// } from "lucide-react"
// import ServiceCard from "@/components/service-card"
// import ServiceFeature from "@/components/service-feature"
// import ProblemCard from "@/components/ServiceComponents/problem-card"
// import ServiceCategory from "@/components/ServiceComponents/service-category"
// import DetailedService from "@/components/ServiceComponents/detailed-service"
// import EmergencyCard from "@/components/ServiceComponents/emergency-card"

// export default function ServicesPage() {
//   return (
//     <main className="flex min-h-screen flex-col">
//       {/* Hero Section */}
//       <section className="relative h-[500px] w-full overflow-hidden">
//         <Image
//           src="/images/services-hero.jpg"
//           alt="Dental services"
//           fill
//           className="object-cover brightness-[0.85]"
//           priority
//         />
//         <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/60 to-black/40">
//           <div className="container text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Our Services</h1>
//             <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
//               Comprehensive dental care for patients of all ages
//             </p>
//             <Button size="lg" className="mt-8 bg-white text-[#1a2e4c] hover:bg-gray-100">
//               <Link href="#service-categories">Explore Our Services</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Introduction Section */}
//       <section className="bg-white py-16">
//         <div className="container">
//           <div className="mx-auto max-w-3xl text-center">
//             <div className="mb-6 inline-flex rounded-full bg-blue-100 p-2 text-blue-600">
//               <Smile className="h-6 w-6" />
//             </div>
//             <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-4xl">
//               Comprehensive Dental Care
//             </h2>
//             <p className="mb-8 text-lg text-gray-600">
//               At our dental clinic, we offer a wide range of services to meet all your dental needs. From routine
//               check-ups to advanced cosmetic procedures, our experienced team is dedicated to providing exceptional care
//               in a comfortable environment.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <Button asChild className="bg-[#1a2e4c] hover:bg-[#2a3e5c]">
//                 <Link href="/contact">Book an Appointment</Link>
//               </Button>
//               <Button variant="outline" asChild>
//                 <Link href="/about">Meet Our Team</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Service Categories Overview */}
//       <section id="service-categories" className="bg-gray-50 py-16">
//         <div className="container">
//           <div className="mb-12 text-center">
//             <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-4xl">
//               Our Service Categories
//             </h2>
//             <p className="mx-auto max-w-2xl text-gray-600">
//               Explore our comprehensive range of dental services designed to address all your oral health needs
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             <ServiceCategory
//               title="General Dentistry"
//               description="Comprehensive care for maintaining optimal oral health"
//               icon={<Sparkles className="h-6 w-6" />}
//               count={14}
//               color="blue"
//               href="#general"
//             />
//             <ServiceCategory
//               title="Cosmetic Dentistry"
//               description="Transform your smile with our aesthetic treatments"
//               icon={<Sparkles className="h-6 w-6" />}
//               count={7}
//               color="purple"
//               href="#cosmetic"
//             />
//             <ServiceCategory
//               title="Surgical Procedures"
//               description="Advanced surgical solutions for complex dental issues"
//               icon={<Scissors className="h-6 w-6" />}
//               count={7}
//               color="red"
//               href="#surgical"
//             />
//             <ServiceCategory
//               title="Invisalign"
//               description="Discreet teeth straightening with clear aligners"
//               icon={<Smile className="h-6 w-6" />}
//               count={1}
//               color="green"
//               href="#invisalign"
//             />
//             <ServiceCategory
//               title="Full Mouth Rehabilitation"
//               description="Complete restoration of dental function and aesthetics"
//               icon={<Repeat className="h-6 w-6" />}
//               count={1}
//               color="amber"
//               href="#rehabilitation"
//             />
//             <ServiceCategory
//               title="Problems We Treat"
//               description="Solutions for various dental concerns and conditions"
//               icon={<Shield className="h-6 w-6" />}
//               count={14}
//               color="teal"
//               href="#problems"
//             />
//           </div>
//         </div>
//       </section>

//       {/* General Dentistry Section */}
//       <section id="general" className="py-16">
//         <div className="container">
//           <div className="mb-12">
//             <div className="mb-4 inline-flex rounded-full bg-blue-100 p-2 text-blue-600">
//               <Sparkles className="h-6 w-6" />
//             </div>
//             <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-4xl">General Dentistry</h2>
//             <p className="max-w-3xl text-lg text-gray-600">
//               Our general dentistry services focus on preventing dental issues and maintaining optimal oral health
//               through regular check-ups, cleanings, and preventive treatments.
//             </p>
//           </div>

//           <div className="grid gap-8">
//             <DetailedService
//               title="Full Mouth Examination, 3D Scanning, and Cleaning"
//               description="Step into a world of advanced dental care with our full mouth screening, state-of-the-art 3D scanning, and meticulous cleaning services."
//               icon={<Scan className="h-6 w-6" />}
//               features={[
//                 "Full Mouth Screening: A deep dive into your oral health, catching potential issues early",
//                 "3D Scanning: High-tech imaging for precise diagnostics and treatment planning",
//                 "Professional Cleaning: Gentle removal of plaque and tartar for a fresh, clean smile",
//               ]}
//               duration="45-60 minutes"
//               image="/images/3d-scanning.jpg"
//             />

//             <DetailedService
//               title="Oral Cancer Screening"
//               description="At our clinic, your well-being is our priority. That's why we offer comprehensive oral cancer screening services to keep you healthy and confident."
//               icon={<Microscope className="h-6 w-6" />}
//               features={[
//                 "Early detection is key to successful treatment",
//                 "Quick and painless procedure conducted by our experienced team",
//                 "Especially crucial for those with risk factors like smoking or alcohol consumption",
//               ]}
//               duration="Few minutes"
//               image="/images/oral-cancer-screening.jpg"
//               reverse={true}
//             />

//             <DetailedService
//               title="Tooth-Coloured Fillings"
//               description="Experience a seamless blend of aesthetics and functionality with our tooth-coloured fillings, designed to restore your smile naturally."
//               icon={<Droplet className="h-6 w-6" />}
//               features={[
//                 "Matched to your natural tooth color for a seamless appearance",
//                 "Durable and long-lasting restoration for cavities",
//                 "Mercury-free alternative to traditional metal fillings",
//               ]}
//               duration="15-20 minutes per tooth"
//               image="/images/tooth-colored-fillings.jpg"
//             />
//           </div>

//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             <ServiceCard
//               icon={<Shield className="h-6 w-6" />}
//               title="Dental Sealants"
//               description="Invisible shields for your teeth that provide a strong barrier against bacteria and food particles, reducing cavity risk."
//               duration="Few minutes per tooth"
//               link="/services/dental-sealants"
//             />
//             <ServiceCard
//               icon={<Baby className="h-6 w-6" />}
//               title="Topical Fluoride Therapy"
//               description="Child-friendly fluoride treatment that strengthens developing teeth against decay for children aged 6-14 years."
//               duration="10 minutes"
//               link="/services/fluoride-therapy"
//             />
//             <ServiceCard
//               icon={<HeartPulse className="h-6 w-6" />}
//               title="Gum Treatment"
//               description="Comprehensive periodontal therapy focusing on diagnosing and addressing gum disease for healthier gums."
//               duration="Varies by condition"
//               link="/services/gum-treatment"
//             />
//             <ServiceCard
//               icon={<Activity className="h-6 w-6" />}
//               title="Root Canal Treatment"
//               description="Procedure that removes infected tissue from inside the tooth's root canal, alleviating pain and saving natural teeth."
//               duration="60-90 minutes"
//               link="/services/root-canal"
//             />
//             <ServiceCard
//               icon={<Baby className="h-6 w-6" />}
//               title="Pulpotomies & Pulpectomies"
//               description="Specialized treatments for children to address tooth decay and preserve baby teeth until permanent teeth erupt."
//               duration="Varies based on complexity"
//               link="/services/pulpotomies"
//             />
//             <ServiceCard
//               icon={<Crown className="h-6 w-6" />}
//               title="Crown & Bridge"
//               description="Custom restorations that protect weakened teeth and replace missing teeth for improved function and aesthetics."
//               duration="Two visits, 20-30 minutes each"
//               link="/services/crown-bridge"
//             />
//             <ServiceCard
//               icon={<Smile className="h-6 w-6" />}
//               title="Dentures"
//               description="Removable prosthetic devices designed to replace missing teeth and restore chewing, speaking, and smiling confidence."
//               duration="Multiple appointments"
//               link="/services/dentures"
//             />
//             <ServiceCard
//               icon={<Moon className="h-6 w-6" />}
//               title="Night Guards"
//               description="Custom-made oral appliances worn during sleep to prevent teeth grinding and reduce the impact of clenching."
//               duration="Custom fitting required"
//               link="/services/night-guards"
//             />
//             <ServiceCard
//               icon={<Shield className="h-6 w-6" />}
//               title="Sports Guards"
//               description="Custom-fitted mouthguards that provide superior protection during sports and physical activities."
//               duration="Custom fitting required"
//               link="/services/sports-guards"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Emergency Dental Care */}
//       <section className="bg-red-50 py-16">
//         <div className="container">
//           <div className="mb-12 text-center">
//             <div className="mb-4 inline-flex rounded-full bg-red-100 p-2 text-red-600 mx-auto">
//               <Zap className="h-6 w-6" />
//             </div>
//             <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-4xl">Dental Emergency Care</h2>
//             <p className="mx-auto max-w-2xl text-gray-600">
//               When dental emergencies strike, our experienced team provides prompt and compassionate care
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2">
//             <EmergencyCard
//               title="Children's Dental Emergencies"
//               emergencies={["Toothaches", "Broken or chipped teeth", "Knocked-out teeth", "Lost fillings or crowns"]}
//               steps={[
//                 "Stay calm and reassure your child",
//                 "Rinse their mouth with warm water",
//                 "Apply a cold compress to reduce swelling",
//                 "For knocked-out teeth, store in milk or saliva and reach us within 60 minutes",
//                 "Contact us immediately for urgent care",
//               ]}
//               image="/images/child-emergency.jpg"
//             />
//             <EmergencyCard
//               title="Adult Dental Emergencies"
//               emergencies={[
//                 "Severe toothaches",
//                 "Cracked or fractured teeth",
//                 "Avulsed (knocked-out) teeth",
//                 "Abscesses or infections",
//               ]}
//               steps={[
//                 "Remain calm and keep the affected area clean",
//                 "Take over-the-counter pain relievers as needed",
//                 "Apply a cold compress to reduce pain and swelling",
//                 "For knocked-out teeth, store in milk or saliva and reach us within 60 minutes",
//                 "Contact us immediately for emergency treatment",
//               ]}
//               image="/images/adult-emergency.jpg"
//             />
//           </div>

//           <div className="mt-10 text-center">
//             <p className="mb-6 text-lg font-medium text-gray-700">
//               We prioritize dental emergencies and strive to provide same-day appointments whenever possible, ensuring
//               you get the care you need without delay.
//             </p>
//             <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
//               <Link href="/contact">Contact Us for Emergency Care</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Invisalign Section */}
//       <section id="invisalign" className="py-16">
//         <div className="container">
//           <div className="mb-12">
//             <div className="mb-4 inline-flex rounded-full bg-green-100 p-2 text-green-600">
//               <Smile className="h-6 w-6" />
//             </div>
//             <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-4xl">Invisalign</h2>
//             <p className="max-w-3xl text-lg text-gray-600">
//               Transform your smile discreetly and comfortably with Invisalign, the clear alternative to traditional
//               braces.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2">
//             <div className="relative h-[400px] overflow-hidden rounded-lg">
//               <Image src="/images/invisalign-treatment.jpg" alt="Invisalign Treatment" fill className="object-cover" />
//             </div>
//             <div className="flex flex-col justify-center">
//               <h3 className="mb-4 text-2xl font-bold text-[#1a2e4c]">The Clear Path to a Straighter Smile</h3>
//               <p className="mb-6 text-gray-600">
//                 Invisalign uses a series of clear, removable aligners to gradually straighten your teeth. Custom-made
//                 for your unique smile, these aligners are virtually invisible and fit seamlessly into your lifestyle.
//               </p>
//               <div className="mb-6 space-y-3">
//                 <ServiceFeature text="Discreet appearance with virtually invisible aligners" />
//                 <ServiceFeature text="Removable for eating, brushing, and special occasions" />
//                 <ServiceFeature text="Comfortable with no metal brackets or wires" />
//                 <ServiceFeature text="Effective for a wide range of orthodontic issues" />
//                 <ServiceFeature text="Digital scanning for precise treatment planning" />
//               </div>
//               <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
//                 <Clock className="h-4 w-4" />
//                 <span>Treatment duration: 6-18 months depending on individual needs</span>
//               </div>
//               <Button asChild className="w-fit bg-[#1a2e4c] hover:bg-[#2a3e5c]">
//                 <Link href="/services/invisalign">Learn More About Invisalign</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Full Mouth Rehabilitation */}
//       <section id="rehabilitation" className="bg-amber-50 py-16">
//         <div className="container">
//           <div className="mb-12">
//             <div className="mb-4 inline-flex rounded-full bg-amber-100 p-2 text-amber-600">
//               <Repeat className="h-6 w-6" />
//             </div>
//             <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-4xl">
//               Full Mouth Rehabilitation
//             </h2>
//             <p className="max-w-3xl text-lg text-gray-600">
//               Rediscover the joy of a fully functional, beautiful smile with our comprehensive full mouth rehabilitation
//               services.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2">
//             <div className="flex flex-col justify-center order-2 md:order-1">
//               <h3 className="mb-4 text-2xl font-bold text-[#1a2e4c]">Complete Smile Transformation</h3>
//               <p className="mb-6 text-gray-600">
//                 Full mouth rehabilitation is a customized treatment plan that combines various dental procedures to
//                 restore the function, health, and appearance of your entire mouth. It may include crowns, bridges,
//                 veneers, implants, and other restorative and cosmetic treatments.
//               </p>
//               <div className="mb-6 space-y-3">
//                 <ServiceFeature text="Comprehensive care addressing multiple dental concerns" />
//                 <ServiceFeature text="Restored ability to eat, speak, and smile confidently" />
//                 <ServiceFeature text="Customized treatment plan for your unique needs" />
//                 <ServiceFeature text="Improved overall oral health and function" />
//                 <ServiceFeature text="Enhanced facial aesthetics and smile appearance" />
//               </div>
//               <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
//                 <Clock className="h-4 w-4" />
//                 <span>Treatment duration varies based on case complexity</span>
//               </div>
//               <Button asChild className="w-fit bg-[#1a2e4c] hover:bg-[#2a3e5c]">
//                 <Link href="/services/full-mouth-rehabilitation">Learn More</Link>
//               </Button>
//             </div>
//             <div className="relative h-[400px] overflow-hidden rounded-lg order-1 md:order-2">
//               <Image src="/images/full-mouth-rehab.jpg" alt="Full Mouth Rehabilitation" fill className="object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Cosmetic Dentistry */}
//       <section id="cosmetic" className="py-16">
//         <div className="container">
//           <div className="mb-12">
//             <div className="mb-4 inline-flex rounded-full bg-purple-100 p-2 text-purple-600">
//               <Sparkles className="h-6 w-6" />
//             </div>
//             <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-4xl">Cosmetic Dentistry</h2>
//             <p className="max-w-3xl text-lg text-gray-600">
//               Transform your smile with our range of cosmetic dental procedures designed to enhance the appearance of
//               your teeth and overall smile.
//             </p>
//           </div>

//           <div className="grid gap-8">
//             <DetailedService
//               title="Professional Teeth Whitening"
//               description="Achieve a radiant, confident smile with our professional teeth whitening services designed to effectively remove stains and discoloration."
//               icon={<Sparkles className="h-6 w-6" />}
//               features={[
//                 "More powerful than over-the-counter whitening products",
//                 "Customized treatment based on your sensitivity and needs",
//                 "Long-lasting results with proper maintenance",
//               ]}
//               duration="30-45 minutes"
//               image="/images/teeth-whitening.jpg"
//             />

//             <DetailedService
//               title="Veneers and Laminates"
//               description="Transform your smile with our custom veneers and laminates, designed to correct imperfections and enhance the beauty of your teeth."
//               icon={<Palette className="h-6 w-6" />}
//               features={[
//                 "Thin shells that cover the front surface of teeth",
//                 "Correct discoloration, chips, gaps, and other imperfections",
//                 "Laminates require minimal tooth preparation for a conservative approach",
//               ]}
//               duration="Multiple appointments"
//               image="/images/veneers.jpg"
//               reverse={true}
//             />

//             <DetailedService
//               title="Digital Smile Makeover"
//               description="Experience the power of technology and artistry with our digital smile makeover service that lets you preview your ideal smile before treatment."
//               icon={<Smartphone className="h-6 w-6" />}
//               features={[
//                 "Virtual simulation of potential cosmetic treatments",
//                 "Personalized design customized to your facial features",
//                 "Helps you make informed decisions about your smile transformation",
//               ]}
//               duration="Consultation required"
//               image="/images/digital-smile-makeover.jpg"
//             />
//           </div>

//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             <ServiceCard
//               icon={<Smile className="h-6 w-6" />}
//               title="Braces"
//               description="Orthodontic devices that gradually move teeth into proper alignment, available in traditional metal, ceramic, and lingual options."
//               duration="18-24 months"
//               link="/services/braces"
//             />
//             <ServiceCard
//               icon={<Smile className="h-6 w-6" />}
//               title="Dental Aligners"
//               description="Clear, removable aligners that gradually straighten teeth without the visibility of traditional braces."
//               duration="6-18 months"
//               link="/services/dental-aligners"
//             />
//             <ServiceCard
//               icon={<Scissors className="h-6 w-6" />}
//               title="Gummy Smile Reduction"
//               description="Procedure that reshapes the gum tissue to expose more of your teeth and create a more balanced smile."
//               duration="Varies by case"
//               link="/services/gummy-smile-reduction"
//             />
//             <ServiceCard
//               icon={<Baby className="h-6 w-6" />}
//               title="Growth Modulation"
//               description="Early intervention orthodontic treatment that guides jaw growth in growing patients for optimal dental development."
//               duration="Varies by patient"
//               link="/services/growth-modulation"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Surgical Procedures */}
//       <section id="surgical" className="bg-gray-50 py-16">
//         <div className="container">
//           <div className="mb-12">
//             <div className="mb-4 inline-flex rounded-full bg-red-100 p-2 text-red-600">
//               <Scissors className="h-6 w-6" />
//             </div>
//             <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-4xl">Surgical Procedures</h2>
//             <p className="max-w-3xl text-lg text-gray-600">
//               Advanced surgical solutions performed by our skilled specialists to address complex dental issues.
//             </p>
//           </div>

//           <div className="grid gap-8">
//             <DetailedService
//               title="Dental Implants"
//               description="Regain the functionality and aesthetics of natural teeth with our advanced dental implant solutions that look, feel, and function like real teeth."
//               icon={<Bone className="h-6 w-6" />}
//               features={[
//                 "Titanium posts surgically placed into the jawbone",
//                 "Permanent solution that integrates with your bone",
//                 "Lifetime warranty on premium implants like Noble Biocare, Straumann and Zimmer",
//               ]}
//               duration="3-6 months total process"
//               image="/images/dental-implants.jpg"
//             />

//             <DetailedService
//               title="Cortical Implants"
//               description="Cutting-edge solution for comprehensive full mouth rehabilitation with exceptional stability and support for dental restorations."
//               icon={<Bone className="h-6 w-6" />}
//               features={[
//                 "Designed for exceptional stability in the dense cortical bone",
//                 "Ideal for full mouth rehabilitation cases",
//                 "Minimizes risk of infections with deep integration",
//               ]}
//               duration="2-4 weeks"
//               image="/images/cortical-implants.jpg"
//               reverse={true}
//             />

//             <DetailedService
//               title="Bone Grafts and Ridge Augmentation"
//               description="Surgical procedures that restore bone volume and density for implant placement and enhanced facial aesthetics."
//               icon={<Bone className="h-6 w-6" />}
//               features={[
//                 "Adds bone material to deficient or weakened jawbone",
//                 "Promotes bone regeneration and density",
//                 "Creates a stable foundation for dental implants",
//               ]}
//               duration="3-6 months healing"
//               image="/images/bone-grafts.jpg"
//             />
//           </div>

//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             <ServiceCard
//               icon={<Sparkles className="h-6 w-6" />}
//               title="All-on-Four Implants"
//               description="Full-arch restoration with just four strategically placed implants to support a complete set of teeth."
//               duration="Consultation required"
//               link="/services/all-on-four"
//             />
//             <ServiceCard
//               icon={<Zap className="h-6 w-6" />}
//               title="Same Day Implants"
//               description="Immediate implant placement and restoration in a single visit for suitable candidates."
//               duration="Single day procedure"
//               link="/services/same-day-implants"
//             />
//             <ServiceCard
//               icon={<Sparkles className="h-6 w-6" />}
//               title="Implant-supported Dentures"
//               description="Removable dentures that attach to dental implants for improved stability and comfort."
//               duration="Multiple appointments"
//               link="/services/implant-dentures"
//             />
//             <ServiceCard
//               icon={<Scissors className="h-6 w-6" />}
//               title="Surgical Extractions"
//               description="Advanced procedures for removing problematic teeth that require surgical intervention."
//               duration="Varies by complexity"
//               link="/services/surgical-extractions"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Specialized Treatments */}
//       <section className="py-16">
//         <div className="container">
//           <div className="mb-12 text-center">
//             <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-4xl">
//               Specialized Treatments
//             </h2>
//             <p className="mx-auto max-w-2xl text-gray-600">
//               Advanced procedures for specific dental conditions and needs
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2">
//             <Card className="overflow-hidden">
//               <div className="relative h-64">
//                 <Image
//                   src="/images/frenectomy.jpg"
//                   alt="Frenectomy and Soft Tissue Laser Surgeries"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <CardContent className="p-6">
//                 <div className="mb-4 flex items-center justify-between">
//                   <h3 className="text-2xl font-bold text-[#1a2e4c]">Frenectomy & Laser Surgeries</h3>
//                   <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Specialized</Badge>
//                 </div>
//                 <p className="mb-4 text-gray-600">
//                   Experience advanced treatments for oral pathologies with frenectomy and soft tissue laser surgeries.
//                   These innovative procedures offer precise and effective solutions for a range of conditions.
//                 </p>
//                 <div className="mb-6 space-y-2">
//                   <ServiceFeature text="Treatment for tongue-tie and lip-tie that restrict movement" />
//                   <ServiceFeature text="Precise tissue removal with minimal bleeding and faster healing" />
//                   <ServiceFeature text="Applications for gum disease, lesions, and ulcer treatment" />
//                 </div>
//                 <Button asChild className="w-full bg-[#1a2e4c] hover:bg-[#2a3e5c]">
//                   <Link href="/services/frenectomy-laser">Learn More</Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="overflow-hidden">
//               <div className="relative h-64">
//                 <Image
//                   src="/images/tmj-sleep-apnea.jpg"
//                   alt="TMJ and Sleep Apnoea Treatment"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <CardContent className="p-6">
//                 <div className="mb-4 flex items-center justify-between">
//                   <h3 className="text-2xl font-bold text-[#1a2e4c]">TMJ & Sleep Apnoea Solutions</h3>
//                   <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Specialized</Badge>
//                 </div>
//                 <p className="mb-4 text-gray-600">
//                   Experience relief and improved quality of life with effective treatments for TMJ disorders and sleep
//                   apnoea that address the underlying causes of these conditions.
//                 </p>
//                 <div className="mb-6 space-y-2">
//                   <ServiceFeature text="Comprehensive evaluation of jaw function and sleep patterns" />
//                   <ServiceFeature text="Customized oral appliances for TMJ and sleep apnoea" />
//                   <ServiceFeature text="Treatment of jaw discrepancies to eradicate root causes" />
//                 </div>
//                 <Button asChild className="w-full bg-[#1a2e4c] hover:bg-[#2a3e5c]">
//                   <Link href="/services/tmj-sleep-apnea">Learn More</Link>
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Problems We Treat */}
//       <section id="problems" className="bg-teal-50 py-16">
//         <div className="container">
//           <div className="mb-12">
//             <div className="mb-4 inline-flex rounded-full bg-teal-100 p-2 text-teal-600">
//               <Shield className="h-6 w-6" />
//             </div>
//             <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-4xl">Problems We Treat</h2>
//             <p className="max-w-3xl text-lg text-gray-600">
//               Our comprehensive services address a wide range of dental concerns and conditions to restore your oral
//               health and confidence.
//             </p>
//           </div>

//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             <ProblemCard
//               title="Dental Anxiety & Phobia"
//               description="We offer gentle care and sedation options for patients with dental fear."
//               icon={<AlertCircle className="h-6 w-6" />}
//             />
//             <ProblemCard
//               title="Chipped or Cracked Teeth"
//               description="Restorative solutions to repair damaged teeth and restore function."
//               icon={<Scissors className="h-6 w-6" />}
//             />
//             <ProblemCard
//               title="Dental Trauma"
//               description="Emergency care and treatment for injuries to teeth and surrounding tissues."
//               icon={<Zap className="h-6 w-6" />}
//             />
//             <ProblemCard
//               title="Wisdom Tooth Pain"
//               description="Evaluation and extraction of problematic wisdom teeth causing discomfort."
//               icon={<Zap className="h-6 w-6" />}
//             />
//             <ProblemCard
//               title="Tooth Pain & Sensitivity"
//               description="Diagnosis and treatment of various causes of dental pain and sensitivity."
//               icon={<Thermometer className="h-6 w-6" />}
//             />
//             <ProblemCard
//               title="Missing Teeth"
//               description="Multiple solutions including implants, bridges, and dentures to replace missing teeth."
//               icon={<Trash2 className="h-6 w-6" />}
//             />
//             <ProblemCard
//               title="Teeth Grinding"
//               description="Custom night guards and treatments to address bruxism and its effects."
//               icon={<Hammer className="h-6 w-6" />}
//             />
//             <ProblemCard
//               title="Bleeding Gums"
//               description="Periodontal treatments to address gum disease and restore gum health."
//               icon={<Droplet className="h-6 w-6" />}
//             />
//             <ProblemCard
//               title="Bad Breath"
//               description="Identifying and treating the underlying causes of halitosis for fresher breath."
//               icon={<Wind className="h-6 w-6" />}
//             />
//             <ProblemCard
//               title="Crooked Teeth"
//               description="Orthodontic solutions to straighten misaligned teeth and improve bite."
//               icon={<Smile className="h-6 w-6" />}
//             />
//             <ProblemCard
//               title="Tooth Stains"
//               description="Professional whitening and cosmetic treatments to remove discoloration."
//               icon={<Droplet className="h-6 w-6" />}
//             />
//             <ProblemCard
//               title="Sleep Apnoea & Snoring"
//               description="Custom oral appliances to improve airflow and reduce sleep-disordered breathing."
//               icon={<Moon className="h-6 w-6" />}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Family Dentistry */}
//       <section className="py-16">
//         <div className="container">
//           <div className="grid gap-12 md:grid-cols-2">
//             <div className="relative h-[400px] overflow-hidden rounded-lg md:h-auto">
//               <Image src="/images/family-dentistry.jpg" alt="Family Dentistry" fill className="object-cover" />
//             </div>
//             <div className="flex flex-col justify-center">
//               <div className="mb-4 inline-flex rounded-full bg-blue-100 p-2 text-blue-600">
//                 <Users className="h-6 w-6" />
//               </div>
//               <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#1a2e4c]">
//                 Family Dentistry: Where Smiles Begin and Thrive
//               </h2>
//               <p className="mb-6 text-gray-600">
//                 Welcome to our family-friendly dental practice, where we prioritize the oral health and happiness of
//                 every member of your family, from children to adults and seniors. Family dentistry focuses on providing
//                 comprehensive dental care for patients of all ages, encompassing preventive, restorative, and cosmetic
//                 treatments tailored to each individual's needs.
//               </p>
//               <div className="mb-6 space-y-3">
//                 <ServiceFeature text="One-stop dental care for your entire family" />
//                 <ServiceFeature text="Consistent, personalized care and thorough understanding of your family's oral health history" />
//                 <ServiceFeature text="Patient education on proper oral hygiene habits" />
//                 <ServiceFeature text="Warm and welcoming environment with compassionate care" />
//                 <ServiceFeature text="Quarterly dental visits for 30-60 minutes to maintain healthy smiles" />
//               </div>
//               <Button asChild className="w-fit bg-[#1a2e4c] hover:bg-[#2a3e5c]">
//                 <Link href="/services/family-dentistry">Learn More</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-teal-500 py-16 text-white">
//         <div className="container text-center">
//           <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Smile?</h2>
//           <p className="mx-auto mb-8 max-w-2xl text-white/90">
//             Schedule your consultation today and discover how our comprehensive dental services can enhance your oral
//             health and confidence.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Button size="lg" variant="secondary" asChild>
//               <Link href="/contact">Book Your Appointment</Link>
//             </Button>
//             <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
//               <Link href="/contact#contact-form">Contact Us</Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }








// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import {
//   Shield,
//   Smile,
//   Sparkles,
//   Star,
//   Zap,
//   Search,
//   SmileIcon as Tooth,
//   Clock,
//   HeartPulse,
//   Baby,
//   Crown,
//   Scissors,
//   Moon,
//   Activity,
//   Droplet,
//   Bone,
//   Microscope,
//   Wind,
//   Thermometer,
//   Scan,
//   Hammer,
//   Trash2,
//   Smartphone,
//   Users,
//   Palette,
//   AlertCircle,
//   ArrowRight,
// } from "lucide-react"
// import TabNavigation from "@/components/ServiceComponents/tab-navigation"
// import ServiceAccordion from "@/components/ServiceComponents/service-accordion"
// import ServiceItem from "@/components/ServiceComponents/service-item"
// import ServiceFeature from "@/components/ServiceComponents/service-feature"

// export default function ServicesPage() {
//   return (
//     <main className="flex min-h-screen flex-col">
//       {/* Hero Section */}
//       <section className="bg-blue-50 text-gray-900 py-16 px-4 md:px-8">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
//           {/* Text Content */}
//           <div className="md:w-1/2">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2e4c]">Comprehensive Dental Services</h1>
//             <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-700">
//               Delivering gentle, advanced dental care for every smile. Your comfort and health are our top priorities at
//               Dental & Aesthetic Care Centre.
//             </p>
//             <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
//               <Link href="#service-categories">Explore Our Services</Link>
//             </Button>
//           </div>
//           {/* Illustration or Image */}
//           <div className="md:w-1/2 mt-8 md:mt-0">
//             <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
//               <Image src="/images/services-hero.jpg" alt="Dental services" fill className="object-cover" priority />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Service Categories */}
//       <section id="service-categories" className="py-16 px-4 md:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="mb-12 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2e4c]">Our Dental Services</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               We offer a comprehensive range of dental services to meet all your oral health needs, from routine
//               check-ups to advanced cosmetic and surgical procedures.
//             </p>
//           </div>

//           <TabNavigation
//             tabs={["General", "Cosmetic", "Surgical", "Invisalign", "Full Mouth Rehab", "Problems We Treat"]}
//             defaultTab="General"
//           >
//             {(activeTab) => (
//               <div className="space-y-6">
//                 {activeTab === "General" && (
//                   <>
//                     <ServiceAccordion
//                       title="Examinations & Preventive Care"
//                       icon={<Search className="h-5 w-5" />}
//                       defaultOpen={true}
//                     >
//                       <div className="space-y-6">
//                         <ServiceItem
//                           icon={<Scan className="h-5 w-5" />}
//                           title="Full Mouth Examination, 3D Scanning, and Cleaning"
//                           description="A deep dive into your oral health with state-of-the-art 3D scanning and professional cleaning to catch potential issues early and leave your teeth fresh and clean."
//                           link="/services/examination"
//                         />
//                         <ServiceItem
//                           icon={<Microscope className="h-5 w-5" />}
//                           title="Oral Cancer Screening"
//                           description="Early detection screening to identify potential issues before they become serious concerns, especially crucial for those with risk factors like smoking or alcohol consumption."
//                           link="/services/oral-cancer-screening"
//                         />
//                         <ServiceItem
//                           icon={<Shield className="h-5 w-5" />}
//                           title="Dental Sealants"
//                           description="Invisible shields for your teeth that provide a strong barrier against bacteria and food particles, reducing the risk of cavities and maintaining optimal oral health."
//                           link="/services/dental-sealants"
//                         />
//                         <ServiceItem
//                           icon={<Baby className="h-5 w-5" />}
//                           title="Topical Fluoride Therapy"
//                           description="Child-friendly fluoride treatment that strengthens developing teeth against decay for children aged 6-14 years, ensuring a healthy smile for years to come."
//                           link="/services/fluoride-therapy"
//                         />
//                       </div>
//                     </ServiceAccordion>

//                     <ServiceAccordion title="Restorative Treatments" icon={<Tooth className="h-5 w-5" />}>
//                       <div className="space-y-6">
//                         <ServiceItem
//                           icon={<Droplet className="h-5 w-5" />}
//                           title="Tooth-Coloured Fillings"
//                           description="Natural-looking fillings that blend seamlessly with your teeth, offering durability and a natural appearance for discreet cavity repair."
//                           link="/services/tooth-coloured-fillings"
//                         />
//                         <ServiceItem
//                           icon={<Activity className="h-5 w-5" />}
//                           title="Root Canal Treatment"
//                           description="Procedure that removes infected tissue from inside the tooth's root canal, alleviating pain and saving natural teeth with advanced techniques and laser sterilization."
//                           link="/services/root-canal"
//                         />
//                         <ServiceItem
//                           icon={<Baby className="h-5 w-5" />}
//                           title="Pulpotomies & Pulpectomies"
//                           description="Specialized treatments for children to address tooth decay and preserve baby teeth until permanent teeth erupt, preventing pain and maintaining proper dental development."
//                           link="/services/pulpotomies"
//                         />
//                         <ServiceItem
//                           icon={<Crown className="h-5 w-5" />}
//                           title="Crown & Bridge"
//                           description="Custom restorations that protect weakened teeth and replace missing teeth for improved function and aesthetics, helping in bite restoration for severe cases."
//                           link="/services/crown-bridge"
//                         />
//                       </div>
//                     </ServiceAccordion>

//                     <ServiceAccordion title="Gum Health & Emergency Care" icon={<HeartPulse className="h-5 w-5" />}>
//                       <div className="space-y-6">
//                         <ServiceItem
//                           icon={<HeartPulse className="h-5 w-5" />}
//                           title="Gum Treatment"
//                           description="Comprehensive periodontal therapy focusing on diagnosing and addressing gum disease to promote healthier gums and a stronger foundation for your teeth."
//                           link="/services/gum-treatment"
//                         />
//                         <ServiceItem
//                           icon={<Zap className="h-5 w-5" />}
//                           title="Dental Emergencies"
//                           description="Prompt care for dental emergencies including toothaches, broken teeth, and knocked-out teeth with same-day appointments whenever possible."
//                           link="/services/dental-emergencies"
//                         />
//                       </div>
//                     </ServiceAccordion>

//                     <ServiceAccordion title="Prosthetics & Protection" icon={<Shield className="h-5 w-5" />}>
//                       <div className="space-y-6">
//                         <ServiceItem
//                           icon={<Smile className="h-5 w-5" />}
//                           title="Dentures"
//                           description="Removable prosthetic devices designed to replace missing teeth and restore your ability to chew, speak, and smile with confidence."
//                           link="/services/dentures"
//                         />
//                         <ServiceItem
//                           icon={<Moon className="h-5 w-5" />}
//                           title="Night Guards"
//                           description="Custom-made oral appliances worn during sleep to prevent teeth grinding and reduce the impact of clenching, improving sleep quality."
//                           link="/services/night-guards"
//                         />
//                         <ServiceItem
//                           icon={<Shield className="h-5 w-5" />}
//                           title="Sports Guards"
//                           description="Custom-fitted mouthguards that provide superior protection during sports and physical activities, preventing dental injuries."
//                           link="/services/sports-guards"
//                         />
//                       </div>
//                     </ServiceAccordion>

//                     <ServiceAccordion title="Family Dentistry" icon={<Users className="h-5 w-5" />}>
//                       <div className="space-y-6">
//                         <ServiceItem
//                           icon={<Users className="h-5 w-5" />}
//                           title="Family Dentistry"
//                           description="Comprehensive dental care for your entire family, from children to seniors, providing convenience, continuity of care, and patient education."
//                           link="/services/family-dentistry"
//                         />
//                         <div className="mt-6 bg-blue-50 rounded-lg p-6">
//                           <h4 className="text-lg font-semibold text-[#1a2e4c] mb-3">Why Choose Family Dentistry?</h4>
//                           <div className="space-y-2">
//                             <ServiceFeature text="One-stop dental care for your entire family" />
//                             <ServiceFeature text="Consistent, personalized care and thorough understanding of your family's oral health history" />
//                             <ServiceFeature text="Patient education on proper oral hygiene habits" />
//                             <ServiceFeature text="Warm and welcoming environment with compassionate care" />
//                           </div>
//                           <div className="mt-4">
//                             <Link
//                               href="/services/family-dentistry"
//                               className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
//                             >
//                               Learn more about our family dentistry services <ArrowRight className="ml-2 h-4 w-4" />
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </ServiceAccordion>
//                   </>
//                 )}

//                 {activeTab === "Cosmetic" && (
//                   <>
//                     <ServiceAccordion
//                       title="Smile Enhancement"
//                       icon={<Sparkles className="h-5 w-5" />}
//                       defaultOpen={true}
//                     >
//                       <div className="space-y-6">
//                         <ServiceItem
//                           icon={<Sparkles className="h-5 w-5" />}
//                           title="Teeth Whitening"
//                           description="Professional whitening treatments to remove stains and brighten your smile dramatically, delivering noticeable results quickly with customized care."
//                           link="/services/teeth-whitening"
//                         />
//                         <ServiceItem
//                           icon={<Palette className="h-5 w-5" />}
//                           title="Veneers and Laminates"
//                           description="Custom-made shells to cover the front surface of teeth, correcting imperfections like discoloration, chips, and gaps for a flawless smile."
//                           link="/services/veneers"
//                         />
//                         <ServiceItem
//                           icon={<Smartphone className="h-5 w-5" />}
//                           title="Digital Smile Makeovers"
//                           description="Virtual smile design to preview your ideal smile before treatment begins, helping you visualize potential results and make informed decisions."
//                           link="/services/digital-smile-makeover"
//                         />
//                       </div>
//                     </ServiceAccordion>

//                     <ServiceAccordion title="Orthodontic Solutions" icon={<Smile className="h-5 w-5" />}>
//                       <div className="space-y-6">
//                         <ServiceItem
//                           icon={<Smile className="h-5 w-5" />}
//                           title="Braces"
//                           description="Traditional orthodontic treatment to correct misaligned teeth and bite issues, available in metal, ceramic, and lingual options."
//                           link="/services/braces"
//                         />
//                         <ServiceItem
//                           icon={<Smile className="h-5 w-5" />}
//                           title="Dental Aligners"
//                           description="Clear, removable aligners for discreet teeth straightening and bite correction, offering comfort and convenience."
//                           link="/services/dental-aligners"
//                         />
//                       </div>
//                     </ServiceAccordion>

//                     <ServiceAccordion title="Aesthetic Procedures" icon={<Scissors className="h-5 w-5" />}>
//                       <div className="space-y-6">
//                         <ServiceItem
//                           icon={<Scissors className="h-5 w-5" />}
//                           title="Gummy Smile Reduction"
//                           description="Reshaping the gumline to create a more balanced, aesthetically pleasing smile by exposing more of your teeth and reducing gum prominence."
//                           link="/services/gummy-smile-reduction"
//                         />
//                         <ServiceItem
//                           icon={<Baby className="h-5 w-5" />}
//                           title="Growth Modulation in Growing Patients"
//                           description="Early intervention orthodontic treatment that guides jaw growth in growing patients for optimal dental development and facial aesthetics."
//                           link="/services/growth-modulation"
//                         />
//                       </div>
//                     </ServiceAccordion>

//                     <div className="bg-purple-50 rounded-lg p-6 mt-8">
//                       <div className="flex flex-col md:flex-row gap-6 items-center">
//                         <div className="md:w-1/3">
//                           <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
//                             <Image
//                               src="/images/cosmetic-dentistry.jpg"
//                               alt="Cosmetic Dentistry"
//                               fill
//                               className="object-cover"
//                             />
//                           </div>
//                         </div>
//                         <div className="md:w-2/3">
//                           <h3 className="text-xl font-bold text-[#1a2e4c] mb-3">Transform Your Smile</h3>
//                           <p className="text-gray-700 mb-4">
//                             Our cosmetic dentistry services are designed to enhance the appearance of your teeth and
//                             overall smile, boosting your confidence and self-esteem. From subtle changes to major
//                             repairs, our experienced team can perform a variety of procedures to improve your smile.
//                           </p>
//                           <Button className="bg-purple-600 hover:bg-purple-700" asChild>
//                             <Link href="/contact">Schedule a Cosmetic Consultation</Link>
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 )}

//                 {activeTab === "Surgical" && (
//                   <>
//                     <ServiceAccordion title="Dental Implants" icon={<Tooth className="h-5 w-5" />} defaultOpen={true}>
//                       <div className="space-y-6">
//                         <ServiceItem
//                           icon={<Tooth className="h-5 w-5" />}
//                           title="Dental Implants"
//                           description="Permanent tooth replacement solution that looks, feels, and functions like natural teeth, with lifetime warranty on premium implants."
//                           link="/services/dental-implants"
//                         />
//                         <ServiceItem
//                           icon={<Tooth className="h-5 w-5" />}
//                           title="All-on-Four Implants"
//                           description="Full-arch restoration with just four strategically placed implants to support a complete set of teeth, ideal for those with significant tooth loss."
//                           link="/services/all-on-four"
//                         />
//                         <ServiceItem
//                           icon={<Zap className="h-5 w-5" />}
//                           title="Same Day Implants"
//                           description="Immediate implant placement and restoration in a single visit for suitable candidates, minimizing treatment time."
//                           link="/services/same-day-implants"
//                         />
//                         <ServiceItem
//                           icon={<Tooth className="h-5 w-5" />}
//                           title="Implant-supported Dentures"
//                           description="Removable dentures that attach to dental implants for improved stability and comfort compared to traditional dentures."
//                           link="/services/implant-dentures"
//                         />
//                         <ServiceItem
//                           icon={<Bone className="h-5 w-5" />}
//                           title="Cortical Implants"
//                           description="Advanced implants placed in dense jawbone for exceptional stability in full mouth rehabilitation, with minimized risk of infections."
//                           link="/services/cortical-implants"
//                         />
//                       </div>
//                     </ServiceAccordion>

//                     <ServiceAccordion title="Extractions & Bone Procedures" icon={<Scissors className="h-5 w-5" />}>
//                       <div className="space-y-6">
//                         <ServiceItem
//                           icon={<Scissors className="h-5 w-5" />}
//                           title="Surgical Extractions"
//                           description="Advanced procedures for removing problematic teeth that require surgical intervention due to impaction, root fractures, or extensive damage."
//                           link="/services/surgical-extractions"
//                         />
//                         <ServiceItem
//                           icon={<Bone className="h-5 w-5" />}
//                           title="Bone Grafts"
//                           description="Procedures to restore bone volume and density for implant placement and facial aesthetics, promoting bone regeneration."
//                           link="/services/bone-grafts"
//                         />
//                       </div>
//                     </ServiceAccordion>

//                     <ServiceAccordion title="Specialized Procedures" icon={<Microscope className="h-5 w-5" />}>
//                       <div className="space-y-6">
//                         <ServiceItem
//                           icon={<Scissors className="h-5 w-5" />}
//                           title="Frenectomy and Soft Tissue Laser Surgeries"
//                           description="Procedures to address tongue-tie, lip-tie, and other soft tissue conditions that can affect speech and oral function, with minimal discomfort."
//                           link="/services/frenectomy-laser"
//                         />
//                       </div>
//                     </ServiceAccordion>

//                     <div className="bg-red-50 rounded-lg p-6 mt-8">
//                       <div className="flex flex-col md:flex-row gap-6 items-center">
//                         <div className="md:w-1/3">
//                           <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
//                             <Image
//                               src="/images/surgical-procedures.jpg"
//                               alt="Surgical Procedures"
//                               fill
//                               className="object-cover"
//                             />
//                           </div>
//                         </div>
//                         <div className="md:w-2/3">
//                           <h3 className="text-xl font-bold text-[#1a2e4c] mb-3">Advanced Surgical Care</h3>
//                           <p className="text-gray-700 mb-4">
//                             Our surgical procedures are performed by experienced specialists using the latest techniques
//                             and technology. We prioritize your comfort and safety throughout the treatment process,
//                             ensuring optimal results and a smooth recovery.
//                           </p>
//                           <Button className="bg-red-600 hover:bg-red-700" asChild>
//                             <Link href="/contact">Schedule a Surgical Consultation</Link>
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 )}

//                 {activeTab === "Invisalign" && (
//                   <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                     <div className="relative h-[300px] w-full">
//                       <Image
//                         src="/images/invisalign-treatment.jpg"
//                         alt="Invisalign Treatment"
//                         fill
//                         className="object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                       <div className="absolute bottom-0 left-0 p-6 text-white">
//                         <h3 className="text-2xl font-bold mb-2">Invisalign Clear Aligners</h3>
//                         <p className="text-white/90">The clear alternative to traditional braces</p>
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <p className="text-gray-700 mb-6">
//                         Transform your smile discreetly and comfortably with Invisalign, the clear alternative to
//                         traditional braces. Enjoy the benefits of straight teeth without the hassle of metal brackets
//                         and wires. Invisalign uses a series of clear, removable aligners to gradually straighten your
//                         teeth, custom-made for your unique smile.
//                       </p>

//                       <h4 className="text-lg font-semibold text-[#1a2e4c] mb-3">Benefits of Invisalign</h4>
//                       <div className="space-y-2 mb-6">
//                         <ServiceFeature text="Discreet appearance with virtually invisible aligners" />
//                         <ServiceFeature text="Removable for eating, brushing, and special occasions" />
//                         <ServiceFeature text="Comfortable with no metal brackets or wires" />
//                         <ServiceFeature text="Effective for a wide range of orthodontic issues" />
//                         <ServiceFeature text="Digital scanning for precise treatment planning" />
//                       </div>

//                       <h4 className="text-lg font-semibold text-[#1a2e4c] mb-3">The Invisalign Process</h4>
//                       <ol className="list-decimal ml-5 space-y-2 text-gray-700 mb-6">
//                         <li>
//                           <span className="font-medium">Initial Consultation:</span> We'll assess your teeth and discuss
//                           your smile goals to determine if Invisalign is right for you.
//                         </li>
//                         <li>
//                           <span className="font-medium">Digital Scanning:</span> We'll take digital impressions of your
//                           teeth to create a 3D model of your current smile.
//                         </li>
//                         <li>
//                           <span className="font-medium">Custom Treatment Plan:</span> A personalized treatment plan will
//                           be created, showing the step-by-step transformation of your smile.
//                         </li>
//                         <li>
//                           <span className="font-medium">Wearing Your Aligners:</span> You'll wear each set of aligners
//                           for about 7-10 days, gradually moving your teeth into their desired position.
//                         </li>
//                         <li>
//                           <span className="font-medium">Regular Check-ups:</span> Periodic visits to monitor your
//                           progress and receive new sets of aligners.
//                         </li>
//                         <li>
//                           <span className="font-medium">Final Results:</span> Enjoy your new, beautifully aligned smile!
//                         </li>
//                       </ol>

//                       <div className="flex items-center gap-2 text-gray-600 mb-6">
//                         <Clock className="h-5 w-5 text-blue-600" />
//                         <span>Treatment duration: 6-18 months depending on individual needs</span>
//                       </div>

//                       <Button className="bg-green-600 hover:bg-green-700 w-full" asChild>
//                         <Link href="/contact">Schedule Your Invisalign Consultation</Link>
//                       </Button>
//                     </div>
//                   </div>
//                 )}

//                 {activeTab === "Full Mouth Rehab" && (
//                   <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                     <div className="relative h-[300px] w-full">
//                       <Image
//                         src="/images/full-mouth-rehab.jpg"
//                         alt="Full Mouth Rehabilitation"
//                         fill
//                         className="object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                       <div className="absolute bottom-0 left-0 p-6 text-white">
//                         <h3 className="text-2xl font-bold mb-2">Full Mouth Rehabilitation</h3>
//                         <p className="text-white/90">Complete restoration of dental function and aesthetics</p>
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <p className="text-gray-700 mb-6">
//                         Rediscover the joy of a fully functional, beautiful smile with our comprehensive full mouth
//                         rehabilitation services. This transformative treatment addresses multiple dental issues for
//                         optimal oral health and aesthetics through a customized treatment plan that combines various
//                         dental procedures.
//                       </p>

//                       <h4 className="text-lg font-semibold text-[#1a2e4c] mb-3">What Is Full Mouth Rehabilitation?</h4>
//                       <p className="text-gray-700 mb-6">
//                         Full mouth rehabilitation is a customized treatment plan that combines various dental procedures
//                         to restore the function, health, and appearance of your entire mouth. It may include crowns,
//                         bridges, veneers, implants, and other restorative and cosmetic treatments tailored to your
//                         unique needs.
//                       </p>

//                       <h4 className="text-lg font-semibold text-[#1a2e4c] mb-3">
//                         Benefits of Full Mouth Rehabilitation
//                       </h4>
//                       <div className="space-y-2 mb-6">
//                         <ServiceFeature text="Comprehensive care addressing multiple dental concerns" />
//                         <ServiceFeature text="Restored ability to eat, speak, and smile confidently" />
//                         <ServiceFeature text="Restored ability to eat, speak, and smile confidently" />
//                         <ServiceFeature text="Customized treatment plan for your unique needs" />
//                         <ServiceFeature text="Improved overall oral health and function" />
//                         <ServiceFeature text="Enhanced facial aesthetics and smile appearance" />
//                       </div>

//                       <h4 className="text-lg font-semibold text-[#1a2e4c] mb-3">The Rehabilitation Process</h4>
//                       <ol className="list-decimal ml-5 space-y-2 text-gray-700 mb-6">
//                         <li>
//                           <span className="font-medium">Comprehensive Evaluation:</span> Thorough examination of your
//                           oral health, including teeth, gums, jaw function, and bite alignment.
//                         </li>
//                         <li>
//                           <span className="font-medium">Personalized Treatment Planning:</span> Development of a
//                           customized plan addressing all your dental concerns in a coordinated approach.
//                         </li>
//                         <li>
//                           <span className="font-medium">Preparatory Treatments:</span> Addressing any underlying issues
//                           like gum disease or decay before proceeding with restorative work.
//                         </li>
//                         <li>
//                           <span className="font-medium">Restorative Procedures:</span> Implementation of various
//                           treatments such as implants, crowns, bridges, or veneers as needed.
//                         </li>
//                         <li>
//                           <span className="font-medium">Final Adjustments:</span> Fine-tuning your bite and ensuring all
//                           restorations function harmoniously.
//                         </li>
//                         <li>
//                           <span className="font-medium">Maintenance:</span> Regular follow-ups to ensure the longevity
//                           of your rehabilitation.
//                         </li>
//                       </ol>

//                       <div className="flex items-center gap-2 text-gray-600 mb-6">
//                         <Clock className="h-5 w-5 text-amber-600" />
//                         <span>Treatment duration varies based on case complexity</span>
//                       </div>

//                       <Button className="bg-amber-600 hover:bg-amber-700 w-full" asChild>
//                         <Link href="/contact">Schedule Your Rehabilitation Consultation</Link>
//                       </Button>
//                     </div>
//                   </div>
//                 )}

//                 {activeTab === "Problems We Treat" && (
//                   <>
//                     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                       <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
//                         <div className="rounded-full bg-teal-100 p-2 w-fit text-teal-600 mb-4">
//                           <AlertCircle className="h-5 w-5" />
//                         </div>
//                         <h3 className="text-lg font-semibold text-[#1a2e4c] mb-2">Dental Anxiety & Phobia</h3>
//                         <p className="text-gray-600">
//                           We offer gentle care and sedation options for patients with dental fear, ensuring a
//                           comfortable experience.
//                         </p>
//                       </div>

//                       <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
//                         <div className="rounded-full bg-teal-100 p-2 w-fit text-teal-600 mb-4">
//                           <Scissors className="h-5 w-5" />
//                         </div>
//                         <h3 className="text-lg font-semibold text-[#1a2e4c] mb-2">Chipped or Cracked Teeth</h3>
//                         <p className="text-gray-600">
//                           Restorative solutions to repair damaged teeth and restore function, from bonding to crowns
//                           depending on severity.
//                         </p>
//                       </div>

//                       <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
//                         <div className="rounded-full bg-teal-100 p-2 w-fit text-teal-600 mb-4">
//                           <Zap className="h-5 w-5" />
//                         </div>
//                         <h3 className="text-lg font-semibold text-[#1a2e4c] mb-2">Dental Trauma</h3>
//                         <p className="text-gray-600">
//                           Emergency care and treatment for injuries to teeth and surrounding tissues, with prompt
//                           attention to save damaged teeth.
//                         </p>
//                       </div>

//                       <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
//                         <div className="rounded-full bg-teal-100 p-2 w-fit text-teal-600 mb-4">
//                           <Tooth className="h-5 w-5" />
//                         </div>
//                         <h3 className="text-lg font-semibold text-[#1a2e4c] mb-2">Wisdom Tooth Pain</h3>
//                         <p className="text-gray-600">
//                           Evaluation and extraction of problematic wisdom teeth causing discomfort, infection, or
//                           crowding.
//                         </p>
//                       </div>

//                       <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
//                         <div className="rounded-full bg-teal-100 p-2 w-fit text-teal-600 mb-4">
//                           <Thermometer className="h-5 w-5" />
//                         </div>
//                         <h3 className="text-lg font-semibold text-[#1a2e4c] mb-2">Tooth Pain & Sensitivity</h3>
//                         <p className="text-gray-600">
//                           Diagnosis and treatment of various causes of dental pain and sensitivity, from cavities to
//                           exposed roots.
//                         </p>
//                       </div>

//                       <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
//                         <div className="rounded-full bg-teal-100 p-2 w-fit text-teal-600 mb-4">
//                           <Trash2 className="h-5 w-5" />
//                         </div>
//                         <h3 className="text-lg font-semibold text-[#1a2e4c] mb-2">Missing Teeth</h3>
//                         <p className="text-gray-600">
//                           Multiple solutions including implants, bridges, and dentures to replace missing teeth and
//                           restore your smile.
//                         </p>
//                       </div>

//                       <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
//                         <div className="rounded-full bg-teal-100 p-2 w-fit text-teal-600 mb-4">
//                           <Hammer className="h-5 w-5" />
//                         </div>
//                         <h3 className="text-lg font-semibold text-[#1a2e4c] mb-2">Teeth Grinding</h3>
//                         <p className="text-gray-600">
//                           Custom night guards and treatments to address bruxism and its effects on your teeth and jaw.
//                         </p>
//                       </div>

//                       <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
//                         <div className="rounded-full bg-teal-100 p-2 w-fit text-teal-600 mb-4">
//                           <Droplet className="h-5 w-5" />
//                         </div>
//                         <h3 className="text-lg font-semibold text-[#1a2e4c] mb-2">Bleeding Gums</h3>
//                         <p className="text-gray-600">
//                           Periodontal treatments to address gum disease and restore gum health, preventing tooth loss.
//                         </p>
//                       </div>

//                       <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
//                         <div className="rounded-full bg-teal-100 p-2 w-fit text-teal-600 mb-4">
//                           <Wind className="h-5 w-5" />
//                         </div>
//                         <h3 className="text-lg font-semibold text-[#1a2e4c] mb-2">Bad Breath</h3>
//                         <p className="text-gray-600">
//                           Identifying and treating the underlying causes of halitosis for fresher breath and improved
//                           confidence.
//                         </p>
//                       </div>

//                       <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
//                         <div className="rounded-full bg-teal-100 p-2 w-fit text-teal-600 mb-4">
//                           <Smile className="h-5 w-5" />
//                         </div>
//                         <h3 className="text-lg font-semibold text-[#1a2e4c] mb-2">Crooked Teeth</h3>
//                         <p className="text-gray-600">
//                           Orthodontic solutions to straighten misaligned teeth and improve bite for better function and
//                           aesthetics.
//                         </p>
//                       </div>

//                       <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
//                         <div className="rounded-full bg-teal-100 p-2 w-fit text-teal-600 mb-4">
//                           <Droplet className="h-5 w-5" />
//                         </div>
//                         <h3 className="text-lg font-semibold text-[#1a2e4c] mb-2">Tooth Stains</h3>
//                         <p className="text-gray-600">
//                           Professional whitening and cosmetic treatments to remove discoloration and brighten your
//                           smile.
//                         </p>
//                       </div>

//                       <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
//                         <div className="rounded-full bg-teal-100 p-2 w-fit text-teal-600 mb-4">
//                           <Moon className="h-5 w-5" />
//                         </div>
//                         <h3 className="text-lg font-semibold text-[#1a2e4c] mb-2">Sleep Apnoea & Snoring</h3>
//                         <p className="text-gray-600">
//                           Custom oral appliances to improve airflow and reduce sleep-disordered breathing for better
//                           rest.
//                         </p>
//                       </div>
//                     </div>

//                     <div className="mt-10 bg-teal-50 rounded-lg p-6">
//                       <div className="flex flex-col md:flex-row gap-6 items-center">
//                         <div className="md:w-1/4">
//                           <div className="rounded-full bg-teal-100 p-4 w-fit mx-auto">
//                             <Shield className="h-10 w-10 text-teal-600" />
//                           </div>
//                         </div>
//                         <div className="md:w-3/4 text-center md:text-left">
//                           <h3 className="text-xl font-bold text-[#1a2e4c] mb-3">Comprehensive Dental Solutions</h3>
//                           <p className="text-gray-700 mb-4">
//                             No matter what dental issue you're facing, our experienced team is equipped to provide
//                             effective solutions. We take a holistic approach to dental care, addressing not just the
//                             symptoms but the underlying causes of your dental problems.
//                           </p>
//                           <Button className="bg-teal-600 hover:bg-teal-700" asChild>
//                             <Link href="/contact">Schedule a Consultation</Link>
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             )}
//           </TabNavigation>
//         </div>
//       </section>

//       {/* Emergency Dental Care */}
//       <section className="bg-red-50 py-16 px-4 md:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="mb-12 text-center">
//             <div className="mb-4 inline-flex rounded-full bg-red-100 p-2 text-red-600 mx-auto">
//               <Zap className="h-6 w-6" />
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2e4c]">Dental Emergency Care</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               When dental emergencies strike, our experienced team provides prompt and compassionate care
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2">
//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="relative h-48">
//                 <Image
//                   src="/images/child-emergency.jpg"
//                   alt="Children's Dental Emergencies"
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 p-4">
//                   <h3 className="text-xl font-bold text-white">Children's Dental Emergencies</h3>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="mb-4">
//                   <div className="mb-2 flex items-center gap-2">
//                     <AlertCircle className="h-5 w-5 text-red-500" />
//                     <h4 className="font-semibold text-gray-800">Common Emergencies:</h4>
//                   </div>
//                   <ul className="ml-7 list-disc space-y-1 text-gray-600">
//                     <li>Toothaches</li>
//                     <li>Broken or chipped teeth</li>
//                     <li>Knocked-out teeth</li>
//                     <li>Lost fillings or crowns</li>
//                   </ul>
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center gap-2">
//                     <Star className="h-5 w-5 text-green-500" />
//                     <h4 className="font-semibold text-gray-800">Immediate Steps:</h4>
//                   </div>
//                   <ol className="ml-7 list-decimal space-y-1 text-gray-600">
//                     <li>Stay calm and reassure your child</li>
//                     <li>Rinse their mouth with warm water</li>
//                     <li>Apply a cold compress to reduce swelling</li>
//                     <li>For knocked-out teeth, store in milk or saliva and reach us within 60 minutes</li>
//                     <li>Contact us immediately for urgent care</li>
//                   </ol>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="relative h-48">
//                 <Image src="/images/adult-emergency.jpg" alt="Adult Dental Emergencies" fill className="object-cover" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 p-4">
//                   <h3 className="text-xl font-bold text-white">Adult Dental Emergencies</h3>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="mb-4">
//                   <div className="mb-2 flex items-center gap-2">
//                     <AlertCircle className="h-5 w-5 text-red-500" />
//                     <h4 className="font-semibold text-gray-800">Common Emergencies:</h4>
//                   </div>
//                   <ul className="ml-7 list-disc space-y-1 text-gray-600">
//                     <li>Severe toothaches</li>
//                     <li>Cracked or fractured teeth</li>
//                     <li>Avulsed (knocked-out) teeth</li>
//                     <li>Abscesses or infections</li>
//                   </ul>
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center gap-2">
//                     <Star className="h-5 w-5 text-green-500" />
//                     <h4 className="font-semibold text-gray-800">Immediate Steps:</h4>
//                   </div>
//                   <ol className="ml-7 list-decimal space-y-1 text-gray-600">
//                     <li>Remain calm and keep the affected area clean</li>
//                     <li>Take over-the-counter pain relievers as needed</li>
//                     <li>Apply a cold compress to reduce pain and swelling</li>
//                     <li>For knocked-out teeth, store in milk or saliva and reach us within 60 minutes</li>
//                     <li>Contact us immediately for emergency treatment</li>
//                   </ol>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-10 text-center">
//             <p className="mb-6 text-lg font-medium text-gray-700">
//               We prioritize dental emergencies and strive to provide same-day appointments whenever possible, ensuring
//               you get the care you need without delay.
//             </p>
//             <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
//               <Link href="/contact">Contact Us for Emergency Care</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-teal-500 py-16 px-4 md:px-8 text-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Smile?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
//             Schedule your consultation today and discover how our comprehensive dental services can enhance your oral
//             health and confidence.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Button size="lg" variant="secondary" asChild>
//               <Link href="/contact">Book Your Appointment</Link>
//             </Button>
//             <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
//               <Link href="/contact#contact-form">Contact Us</Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }