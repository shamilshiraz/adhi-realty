import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
              About Adhi Realty
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Connecting People
              <br />
              With Exceptional
              <span className="block text-[#C9A86A]">
                Investment Opportunities
              </span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-lg leading-relaxed text-slate-600">
              Adhi Realty creates meaningful connections between investors,
              developers and opportunities through carefully curated
              roadshows, networking events and private consultations.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Our focus is on helping individuals and organizations discover
              high-potential real estate opportunities while building trusted
              relationships within the industry.
            </p>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 overflow-hidden rounded-[32px]"
        >
          <img
            src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop"
            alt="Adhi Realty"
            className="h-[500px] w-full object-cover"
          />
        </motion.div>

        {/* Stats */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 p-8">
            <h3 className="text-4xl font-semibold text-[#C9A86A]">25+</h3>
            <p className="mt-2 text-slate-600">Roadshows Hosted</p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8">
            <h3 className="text-4xl font-semibold text-[#C9A86A]">500+</h3>
            <p className="mt-2 text-slate-600">Investor Connections</p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8">
            <h3 className="text-4xl font-semibold text-[#C9A86A]">100+</h3>
            <p className="mt-2 text-slate-600">Investment Opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
}