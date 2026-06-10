import { motion } from "framer-motion";

const experiences = [
  {
    title: "Meet Industry Leaders",
    description:
      "Connect directly with developers, advisors and market experts shaping the future of Dubai real estate.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Explore Premium Opportunities",
    description:
      "Discover carefully selected projects and investment opportunities across Dubai's most desirable destinations.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Build Valuable Connections",
    description:
      "Network with investors, professionals and decision-makers in an exclusive and engaging environment.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Roadshow() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto w-[92%] max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A86A]">
              Adhi Realty Roadshow
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-tight text-white md:text-7xl">
              Experience Dubai's
              <br />
              Property Market
              <br />
              Firsthand.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
              Exclusive events bringing together investors, developers and
              opportunities through carefully curated roadshow experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32">
        <div className="mx-auto w-[92%] max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
            The Experience
          </p>

          <h2 className="mb-20 text-4xl font-semibold md:text-6xl">
            What Happens During
            <br />
            A Roadshow?
          </h2>

          <div className="grid gap-12 md:grid-cols-4">
            {[
              "Welcome & Networking",
              "Developer Presentations",
              "Investment Consultation",
              "Private Follow-Up",
            ].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-6xl font-light text-[#C9A86A]/40">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {step}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="pb-32">
        <div className="mx-auto w-[92%] max-w-7xl">
          <div className="overflow-hidden rounded-[40px]">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop"
              alt=""
              className="h-[750px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Experience Sections */}
      <section className="pb-32">
        <div className="mx-auto flex w-[92%] max-w-7xl flex-col gap-32">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
                  0{index + 1}
                </p>

                <h2 className="text-4xl font-semibold md:text-5xl">
                  {item.title}
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>

              <div className="overflow-hidden rounded-[32px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[550px] w-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[#F8FAFC] py-32">
        <div className="mx-auto max-w-5xl px-6">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-medium leading-relaxed text-slate-900 md:text-5xl"
          >
            “The Adhi Realty Roadshow provided valuable insights,
            meaningful connections and access to opportunities we
            would not have discovered elsewhere.”
          </motion.blockquote>

          <p className="mt-10 text-center text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
            Investor • Dubai
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto w-[92%] max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
            Join Us
          </p>

          <h2 className="text-5xl font-semibold leading-tight md:text-7xl">
            Ready To Attend
            <br />
            The Next Roadshow?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-600">
            Register your interest and be among the first to receive
            invitations to upcoming Adhi Realty roadshows and investor events.
          </p>

          <button className="mt-10 rounded-full bg-[#C9A86A] px-8 py-4 font-medium text-white transition hover:scale-105">
            Register Interest
          </button>
        </div>
      </section>
    </main>
  );
}