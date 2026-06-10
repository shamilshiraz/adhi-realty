import { motion } from "framer-motion";

export default function Roadshows() {
  return (
    <section className="bg-[#F8FAFC] py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
              Events & Roadshows
            </p>

            <h2 className="text-5xl font-semibold leading-tight text-slate-900">
              Meet Us Around
              <br />
              The World.
            </h2>
          </div>

          <p className="max-w-md text-slate-600">
            Exclusive investor gatherings, project launches and private
            presentations designed to connect you with Dubai's most
            promising opportunities.
          </p>
        </div>

        {/* Layout */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Featured Event */}
          <motion.div
            whileHover={{ y: -6 }}
            className="group relative col-span-12 overflow-hidden rounded-[36px] lg:col-span-7"
          >
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop"
              alt=""
              className="h-[700px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 p-10 text-white">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
                Featured Event
              </p>

              <h3 className="max-w-xl text-4xl font-semibold">
                Dubai Luxury Property Showcase
              </h3>

              <p className="mt-4 max-w-lg text-white/75">
                Explore premium developments, meet industry leaders and
                discover exclusive investment opportunities.
              </p>
            </div>
          </motion.div>

          {/* Side Events */}
          <div className="col-span-12 flex flex-col gap-6 lg:col-span-5">
            <motion.div
              whileHover={{ x: 6 }}
              className="group relative overflow-hidden rounded-[32px]"
            >
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2070&auto=format&fit=crop"
                alt=""
                className="h-[337px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h4 className="text-2xl font-semibold">
                  Investor Networking Night
                </h4>

                <p className="mt-2 text-white/70">
                  Connect with investors and developers.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 6 }}
              className="group relative overflow-hidden rounded-[32px]"
            >
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop"
                alt=""
                className="h-[337px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h4 className="text-2xl font-semibold">
                  Private Investment Briefing
                </h4>

                <p className="mt-2 text-white/70">
                  Exclusive access to upcoming projects.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}