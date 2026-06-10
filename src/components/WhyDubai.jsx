import { motion } from "framer-motion";

const destinations = [
  {
    title: "Palm Jumeirah",
    description: "Luxury waterfront residences and iconic living.",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Dubai Marina",
    description: "A vibrant waterfront district with global appeal.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Downtown Dubai",
    description: "Premium investment opportunities in the city's core.",
    image:
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function InvestmentDestinations() {
  return (
    <section className="py-24">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
            Dubai Investments
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold md:text-5xl">
            Explore Dubai's Most
            <br />
            Sought-After Destinations
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[520px] cursor-pointer overflow-hidden rounded-[32px]"
            >
              <img
                src={destination.image}
                alt={destination.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-8">
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#C9A86A]">
                  Featured Destination
                </p>

                <h3 className="text-3xl font-semibold text-slate-900">
                  {destination.title}
                </h3>

                <p className="mt-2 max-w-sm text-slate-600">
                  {destination.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}