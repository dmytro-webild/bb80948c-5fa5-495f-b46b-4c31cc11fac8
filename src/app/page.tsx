"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="mediumSizeLargeTitles"
        background="none"
        cardStyle="gradient-mesh"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Projects",
          id: "projects",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Prosper Construction"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "gradient-bars",
      }}
      title="Building the Future of Rwanda"
      description="Prosper Construction Company Ltd delivers high-quality construction and engineering solutions for residential, commercial, and infrastructure projects in Kigali and beyond."
      buttons={[
        {
          text: "Get a Quote",
          href: "#contact",
        },
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/aerial-view-streets-office-building-business-district_107420-95727.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/construction-site_53876-31720.jpg",
          alt: "Construction site",
        },
        {
          src: "http://img.b2bpic.net/free-photo/crane-building-construction-site-filtered-image-processed_1232-2707.jpg",
          alt: "Crane and building construction site",
        },
        {
          src: "http://img.b2bpic.net/free-photo/abstract-city-building-shadows_23-2149283301.jpg",
          alt: "Abstract city building shadows",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cad-program-pc-display-photovoltaics-factory_482257-124932.jpg",
          alt: "CAD program display",
        },
        {
          src: "http://img.b2bpic.net/free-photo/abstract-city-building-shadows_23-2149283288.jpg",
          alt: "Building shadows",
        },
      ]}
      avatarText="Trusted by 500+ clients across Rwanda"
      marqueeItems={[
        {
          type: "text",
          text: "Residential Construction",
        },
        {
          type: "text",
          text: "Commercial Renovation",
        },
        {
          type: "text",
          text: "Infrastructure Development",
        },
        {
          type: "text",
          text: "Civil Engineering",
        },
        {
          type: "text",
          text: "Project Management",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Professionalism & Expertise"
      description="Based in Kigali, Rwanda, Prosper Construction Company Ltd specializes in delivering durable, modern infrastructure solutions. We prioritize reliability, quality workmanship, and efficiency in every project we undertake."
      bulletPoints={[
        {
          title: "Expertise",
          description: "Years of experience in civil engineering and construction.",
        },
        {
          title: "Reliability",
          description: "Committed to delivering projects on time and within budget.",
        },
        {
          title: "Quality",
          description: "High standards of workmanship for lasting structural integrity.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/male-female-engineer-working-plan-office_23-2147842978.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "s1",
          title: "Building Construction",
          author: "Experts",
          description: "Residential and commercial building construction.",
          tags: [
            "Construction",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/exterior-istanbul-s-building_53876-32161.jpg",
        },
        {
          id: "s2",
          title: "Civil Engineering",
          author: "Engineers",
          description: "Specialized civil works and structural engineering.",
          tags: [
            "Engineering",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-vienna-railway-station-vienna-austria_181624-10305.jpg",
        },
        {
          id: "s3",
          title: "Infrastructure",
          author: "Infrastructure Team",
          description: "Large-scale infrastructure development projects.",
          tags: [
            "Infrastructure",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/construction-site-with-tower-crane-apartments-urban-modern-architecture_169016-69092.jpg",
        },
        {
          id: "s4",
          title: "Renovation",
          author: "Designers",
          description: "Comprehensive renovation and maintenance services.",
          tags: [
            "Renovation",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/manual-worker-grinding-metal-steel-objects-workshop-with-tools_1163-3130.jpg",
        },
      ]}
      title="Our Services"
      description="Comprehensive engineering and infrastructure solutions tailored to your needs."
    />
  </div>

  <div id="projects" data-section="projects">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Residential complex",
          price: "Completed",
          imageSrc: "http://img.b2bpic.net/free-photo/illustration-construction-site_23-2151850243.jpg",
        },
        {
          id: "p2",
          name: "Commercial Office Park",
          price: "Completed",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-architecture-office-business-building-with-glass-window-shape_74190-6438.jpg",
        },
        {
          id: "p3",
          name: "Public Infrastructure Bridge",
          price: "Completed",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-bridge_1127-3958.jpg",
        },
        {
          id: "p4",
          name: "Urban Road Network",
          price: "Ongoing",
          imageSrc: "http://img.b2bpic.net/free-photo/road-construction_342744-602.jpg",
        },
        {
          id: "p5",
          name: "Luxury Home Renovation",
          price: "Completed",
          imageSrc: "http://img.b2bpic.net/free-photo/set-designer-work-indoors_23-2149836952.jpg",
        },
        {
          id: "p6",
          name: "Community Housing Project",
          price: "Ongoing",
          imageSrc: "http://img.b2bpic.net/free-photo/cranes-construction-site_53876-145039.jpg",
        },
      ]}
      title="Featured Projects"
      description="A glimpse into our recent building and infrastructure projects in Rwanda."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "John Doe",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-side-view-engineer-architect-supervising-construction_23-2148233789.jpg",
        },
        {
          id: "t2",
          name: "Jane Smith",
          imageSrc: "http://img.b2bpic.net/free-photo/person-expressing-appreciation-their-workmates_23-2149430632.jpg",
        },
        {
          id: "t3",
          name: "Robert Brown",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-woman-standing-with-his-boyfriend-showing-house-keys-toward-camera_23-2148151730.jpg",
        },
        {
          id: "t4",
          name: "Emily White",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-clenching-fists-triumph_482257-119272.jpg",
        },
        {
          id: "t5",
          name: "David Miller",
          imageSrc: "http://img.b2bpic.net/free-photo/man-riding-scooter-outdoors_23-2149019492.jpg",
        },
      ]}
      cardTitle="Client Feedback"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How do I request a quote?",
          content: "You can fill out our contact form or call us at +250 799 355 836.",
        },
        {
          id: "f2",
          title: "Do you work on government projects?",
          content: "Yes, we specialize in government infrastructure and large-scale projects.",
        },
        {
          id: "f3",
          title: "What areas do you serve?",
          content: "We primarily operate in and around Kigali, Rwanda, and handle projects nationwide.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Get quick answers to common questions about our services and process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact Us"
      title="Get in touch for your project"
      description="Located at KK 15 Road, Kigali, Rwanda. Reach out to discuss your construction and engineering needs today."
      imageSrc="http://img.b2bpic.net/free-photo/located-shanghai-one-hundred-years-ago-steel-bridge_1127-3115.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Prosper Construction Company Ltd"
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Projects",
              href: "#projects",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Call: +250 799 355 836",
              href: "tel:+250799355836",
            },
            {
              label: "Kigali, KK 15 Rd",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 | Prosper Construction Company Ltd"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
