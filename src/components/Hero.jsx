import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Gold Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      <div className="relative mx-auto flex h-full w-[92%] max-w-7xl items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A86A]">
              Adhi Realty
            </p>

            <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
              Exclusive
              <span className="block text-[#C9A86A]">
                Investor Roadshows
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/80">
              Connect with developers, investors and premium opportunities
              through curated roadshows, meetings and events.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#C9A86A] px-6 py-3 font-medium text-white transition hover:scale-105">
                Explore Events
              </button>

              <button className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-end"
          >
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <p className="mb-1 text-sm uppercase tracking-widest text-[#C9A86A]">
                Upcoming Roadshow
              </p>

              <h3 className="mb-6 text-2xl font-semibold text-white">
                Reserve Your Seat
              </h3>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none"
                />

                <button className="w-full rounded-xl bg-[#C9A86A] py-3 font-medium text-white">
                  Register Interest
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-white/40" />
        </div>
      </div>
    </section>
  );
}