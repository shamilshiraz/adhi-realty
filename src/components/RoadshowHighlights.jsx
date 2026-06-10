import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Tax-Friendly Environment",
    description:
      "Benefit from a globally attractive investment ecosystem with favorable tax policies.",
  },
  {
    number: "02",
    title: "Strong Rental Yields",
    description:
      "Dubai consistently ranks among the world's leading cities for rental returns.",
  },
  {
    number: "03",
    title: "Global Connectivity",
    description:
      "A strategic hub connecting Europe, Asia and Africa through world-class infrastructure.",
  },
  {
    number: "04",
    title: "Premium Lifestyle",
    description:
      "Luxury living, safety, innovation and unmatched quality of life.",
  },
];

export default function WhyDubai() {
  return (
    <section className="bg-[#f8fafc] py-28">
      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Header */}
        <div className="mb-20 max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
            Why Dubai
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
            One Of The World's Most
            <span className="block text-[#C9A86A]">
              Attractive Property Markets
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-px overflow-hidden rounded-[32px] bg-slate-200 lg:grid-cols-2">
          {reasons.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-10 transition duration-500 hover:bg-[#EAF5FF]"
            >
              <span className="text-sm font-medium text-[#C9A86A]">
                {item.number}
              </span>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 max-w-md leading-relaxed text-slate-600">
                {item.description}
              </p>

              <div className="mt-8 h-[2px] w-12 bg-[#C9A86A] transition-all duration-500 group-hover:w-24" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}