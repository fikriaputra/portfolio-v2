"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  FaCode,
  FaFlask,
  FaUsers,
  FaNetworkWired,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    period: "Jul 2025 - Sep 2025",
    duration: 3,
    role: {
      id: "Magang Frontend Developer",
      en: "Frontend Developer Intern",
    },
    company: {
      id: "Sekretariat Daerah Provinsi Jawa Barat",
      en: "Regional Secretariat of West Java Province",
    },
    category: "frontend",
    description: {
      id: "Mengembangkan antarmuka web responsif untuk sistem inventaris dan pelaporan menggunakan React.js dan Tailwind CSS, membangun komponen UI yang dapat digunakan kembali, dan mengintegrasikan API RESTful untuk menghadirkan fitur yang skalabel dan andal di berbagai perangkat melalui kolaborasi lintas fungsi.",
      en: "Developed responsive web interfaces for an inventory and reporting system using React.js and Tailwind CSS, built reusable UI components, and integrated RESTful APIs to deliver scalable and reliable features across devices through cross-functional collaboration.",
    },
  },

  {
    icon: <FaFlask />,
    period: "Jun 2025 - Dec 2025",
    duration: 7,
    role: {
      id: "Penulis Pertama & Pembicara",
      en: "First Author & Presenter",
    },
    company: {
      id: "Publikasi Ilmiah ICICyTA 2025",
      en: "ICICyTA 2025 Scientific Publication",
    },
    category: "research",
    description: {
      id: "Mempublikasikan dan mempresentasikan makalah penelitian sebagai penulis utama tentang ADASYN-XGBoost untuk menangani dataset rekomendasi ikan yang tidak seimbang, menerapkan pendekatan pembelajaran mesin hibrida untuk meningkatkan akurasi rekomendasi dan mengoptimalkan kinerja prediksi menggunakan data kualitas air berbasis IoT untuk dukungan pengambilan keputusan akuakultur cerdas.",
      en: "Published and presented a first-authored research paper on ADASYN-XGBoost for handling imbalanced fish recommendation datasets, applying a hybrid machine learning approach to improve recommendation accuracy and optimize prediction performance using IoT-based water quality data for smart aquaculture decision support.",
    },
  },

  {
    icon: <FaNetworkWired />,
    period: "Apr 2025 - Jul 2025",
    duration: 4,
    role: {
      id: "Magang Administrator Jaringan",
      en: "Network Administrator Intern",
    },
    company: {
      id: "PT PLN (Persero) UP2D Jawa Barat",
      en: "PT PLN (Persero) UP2D West Java",
    },
    category: "networking",
    description: {
      id: "Memelihara dan mengoptimalkan infrastruktur jaringan, memantau kinerja jaringan, dan mengelola konfigurasi perangkat jaringan untuk memastikan ketersediaan tinggi, keandalan, dan operasi yang aman sambil meminimalkan waktu henti.",
      en: "Maintained and optimized network infrastructure, monitored network performance, and managed network device configurations to ensure high availability, reliability, and secure operations while minimizing downtime.",
    },
  },

  {
    icon: <FaUsers />,
    period: "Nov 2023 - Dec 2023",
    duration: 1,
    role: {
      id: "Perwakilan Mahasiswa",
      en: "Student Representative",
    },
    company: {
      id: "Microsoft",
      en: "Microsoft",
    },
    category: "leadership",
    description: {
      id: "Mewakili Microsoft dalam berbagai workshop dan program edukasi kampus. Mengembangkan dashboard Power BI untuk analisis data serta mengeksplorasi layanan Microsoft Azure yang mencakup cloud computing, AI/ML, database, dan IoT.",
      en: "Represented Microsoft through campus workshops and educational initiatives. Developed Power BI dashboards and explored Microsoft Azure services including cloud computing, AI/ML, databases, and IoT.",
    },
  },
];

interface ServicesProps {
  language: "id" | "en";
}

const Services = ({
  language,
}: ServicesProps) => {

  const { theme } = useTheme();

  const content = {
  id: {
    heading: "Pengalaman Saya",
    title: "Pengalaman & Perjalanan",
    description:
      "Pengalaman profesional, magang, penelitian, dan program kepemimpinan yang berkontribusi pada perkembangan kemampuan teknis serta kolaborasi saya.",

    frontend: "Frontend",
    research: "Penelitian",
    leadership: "Kepemimpinan",
    networking: "Jaringan",

    months: "Bulan",
  },

  en: {
    heading: "My Experience",
    title: "Experience & Journey",
    description:
      "Professional experiences, internships, research activities, and leadership programs that contributed to my technical and collaborative growth.",

    frontend: "Frontend",
    research: "Research",
    leadership: "Leadership",
    networking: "Networking",

    months: "Months",
  },
};

const t = content[language];

  return (
    <section
  id="services"
  className={`
    py-24 px-6 md:px-10 lg:px-20

    transition-all duration-300

    ${
      theme === "dark"
        ? "bg-black text-white"
        : "bg-white text-black"
    }
  `}
>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <p
          className={`
            text-lg font-Ovo mb-3
            ${
              theme === "dark"
                ? "text-gray-400"
                : "text-gray-600"
            }
          `}
        >
          {t.heading}
        </p>

        <h2 className="text-4xl md:text-6xl font-Ovo mb-6">
          {t.title}
        </h2>

        <p
          className={`
            max-w-3xl mx-auto leading-8
            ${
              theme === "dark"
                ? "text-gray-400"
                : "text-gray-600"
            }
          `}
        >
          {t.description}
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative">

        {/* Vertical Line Desktop */}
        <div
  className={`
    hidden lg:block
    absolute
    left-[240px]
    top-0
    bottom-0
    w-px

    transition-all duration-300

    ${
      theme === "dark"
        ? "bg-gray-700"
        : "bg-gray-300"
    }
  `}
/>

        <div className="space-y-12">
          {services.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                grid
                grid-cols-1
                lg:grid-cols-[220px_80px_1fr]
                gap-6
                items-start
              "
            >
              {/* Date */}
              <div className="hidden lg:block text-right pt-2">
                <h3 className="font-semibold text-lg">
                  {exp.period}
                </h3>

                <p
                  className={`
                    mt-1
                    ${
                      theme === "dark"
                        ? "text-gray-400"
                        : "text-gray-500"
                    }
                  `}
                >
                  {exp.duration} {t.months}
                </p>
              </div>

              {/* Timeline Icon */}
              <div
                className="
                  hidden lg:flex
                  justify-center
                  relative
                "
              >
                <div
                  className={`
                  w-14 h-14
                  rounded-full
                  border
                  flex items-center justify-center
                  text-lg
                  shadow-md
                  z-10

                  transition-all duration-300 ease-in-out

                  ${
                    theme === "dark"
                      ? "bg-[#111111] border-gray-700"
                      : "bg-white border-gray-300"
                  }
                `}
                >
                  {exp.icon}
                </div>
              </div>

              {/* Card */}
              <div
                className={`
                  border
                  rounded-[28px]
                  p-6 md:p-7
                  transition-all duration-300 ease-in-out
                  hover:-translate-y-1
                  hover:shadow-lg
                  ${
                    theme === "dark"
                      ? "bg-[#111111] border-gray-700"
                      : "bg-white border-gray-200"
                  }
                `}
              >
                {/* Mobile Date */}
                <div className="lg:hidden mb-4">
                  <p
                    className={`
                      text-sm font-medium
                      ${
                        theme === "dark"
                          ? "text-gray-400"
                          : "text-gray-500"
                      }
                    `}
                  >
                    {exp.period}
                  </p>

                  <p
                    className={`
                      text-sm
                      ${
                        theme === "dark"
                          ? "text-gray-500"
                          : "text-gray-400"
                      }
                    `}
                  >
                    {exp.duration}
                  </p>
                </div>

                <div className="flex justify-between items-start gap-4 flex-wrap">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      {exp.role[language]}
                    </h3>

                    <p
                      className={`
                        mt-2
                        ${
                          theme === "dark"
                            ? "text-gray-400"
                            : "text-gray-600"
                        }
                      `}
                    >
                      {exp.company[language]}
                    </p>
                  </div>

                  <span
                    className="
                      px-4 py-2
                      rounded-full
                      text-sm
                      font-medium
                      bg-blue-50
                      text-blue-600
                    "
                  >
                    {
  exp.category === "frontend"
    ? t.frontend
    : exp.category === "research"
    ? t.research
    : exp.category === "leadership"
    ? t.leadership
    : t.networking
}
                  </span>
                </div>

                <p
                  className={`
                    mt-5
                    leading-8
                    ${
                      theme === "dark"
                        ? "text-gray-300"
                        : "text-gray-600"
                    }
                  `}
                >
                  {exp.description[language]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;