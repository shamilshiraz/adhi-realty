import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Understand your investment goals, budget and preferred opportunities.",
  },
  {
    number: "02",
    title: "Property Selection",
    description:
      "Explore curated developments and projects across Dubai's prime districts.",
  },
  {
    number: "03",
    title: "Private Viewing",
    description:
      "Attend exclusive roadshows, presentations and property showcases.",
  },
  {
    number: "04",
    title: "Investment & Ownership",
    description:
      "Complete the process with guidance from our experienced team.",
  },
];

export default function InvestmentJourney() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto grid w-[92%] max-w-7xl gap-20 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
            Your Journey
          </p>

          <h2 className="text-5xl font-semibold leading-tight text-slate-900">
            From First
            <br />
            Conversation
            <br />
            To Ownership.
          </h2>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-slate-600">
            Adhi Realty guides investors through every stage of the property
            acquisition journey, ensuring confidence and clarity at every step.
          </p>

          <img
            src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="mt-12 h-[500px] w-full rounded-[32px] object-cover"
          />
        </motion.div>

        {/* Right */}
        <div className="flex flex-col justify-center">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-slate-200 py-8"
            >
              <div className="flex gap-8">
                <span className="text-lg font-medium text-[#C9A86A]">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-md leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}