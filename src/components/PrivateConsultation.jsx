import { motion } from "framer-motion";

export default function PrivateConsultation() {
  return (
    <section className="py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="relative overflow-hidden rounded-[40px]">
          {/* Background */}
          <img
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-950/75" />

          <div className="relative grid gap-12 p-10 md:p-16 lg:grid-cols-2 lg:p-20">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
                Private Consultation
              </p>

              <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
                Let's Discuss
                <br />
                Your Next
                <span className="block text-[#C9A86A]">
                  Investment Move.
                </span>
              </h2>

              <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
                Speak with our team to explore opportunities, roadshows,
                investment strategies and premium developments across Dubai.
              </p>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
            >
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/50 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/50 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/50 outline-none"
                />

                <textarea
                  rows="4"
                  placeholder="Tell us about your investment goals..."
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/50 outline-none"
                />

                <button className="w-full rounded-2xl bg-[#C9A86A] py-4 font-medium text-white transition hover:opacity-90">
                  Request Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}