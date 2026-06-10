import { motion } from "framer-motion";

const events = [
  {
    title: "Dubai Luxury Property Showcase",
    date: "28 June 2026",
    location: "Downtown Dubai",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Investor Networking Evening",
    date: "12 July 2026",
    location: "Dubai Marina",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Exclusive Developer Briefing",
    date: "02 August 2026",
    location: "Business Bay",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Events() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto w-[92%] max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="mb-4 uppercase tracking-[0.3em] text-[#C9A86A]">
              Events
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold text-white md:text-7xl">
              Exclusive Investor
              <br />
              Experiences.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/75">
              Discover premium events, roadshows and networking opportunities
              curated for investors and property enthusiasts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24">
        <div className="mx-auto w-[92%] max-w-7xl">
          <div className="mb-12">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
              Upcoming Events
            </p>

            <h2 className="text-5xl font-semibold">
              Join Us In Dubai
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[550px] overflow-hidden rounded-[32px]"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8">
                  <p className="mb-2 text-sm text-[#C9A86A]">
                    {event.date}
                  </p>

                  <h3 className="text-3xl font-semibold">
                    {event.title}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {event.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto w-[92%] max-w-7xl">
          <div className="mb-14">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
              Why Attend
            </p>

            <h2 className="text-5xl font-semibold">
              More Than Just Events
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[32px] bg-slate-200 lg:grid-cols-3">
            {[
              "Network With Investors",
              "Meet Leading Developers",
              "Discover Exclusive Opportunities",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-10"
              >
                <h3 className="text-2xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto w-[92%] max-w-7xl">
          <div className="rounded-[40px] bg-slate-950 p-16 text-center">
            <p className="mb-4 uppercase tracking-[0.3em] text-[#C9A86A]">
              Reserve Your Spot
            </p>

            <h2 className="mx-auto max-w-3xl text-4xl font-semibold text-white md:text-6xl">
              Be Part Of Our Next Investor Event
            </h2>

            <button className="mt-10 rounded-full bg-[#C9A86A] px-8 py-4 text-white">
              Register Interest
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}