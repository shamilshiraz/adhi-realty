import { motion } from "framer-motion";
import {
  ShieldCheck,
  Gem,
  Handshake,
  Globe,
  TrendingUp,
  Users,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "Built through honest relationships, reliable guidance and long-term commitment.",
  },
  {
    icon: Handshake,
    title: "Transparency",
    description:
      "Clear communication and informed decisions at every stage of the journey.",
  },
  {
    icon: Gem,
    title: "Excellence",
    description:
      "A commitment to delivering premium experiences and exceptional service.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "Connecting investors with opportunities in one of the world's most dynamic markets.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white pt-36">
      {/* Intro */}
      <section className="pb-32">
        <div className="mx-auto w-[92%] max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
            About Adhi Realty
          </p>

          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
                Built On
                <br />
                Relationships,
                <br />
                Driven By Trust.
              </h1>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-slate-600">
                Adhi Realty connects investors with carefully selected
                opportunities across Dubai's thriving real estate market.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Through roadshows, private consultations and strategic
                guidance, we help clients navigate opportunities with
                confidence and clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="pb-32">
        <div className="mx-auto w-[92%] max-w-7xl">
          <div className="overflow-hidden rounded-[40px]">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
              alt=""
              className="h-[700px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8FAFC] py-32">
        <div className="mx-auto w-[92%] max-w-7xl">
          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
              Our Values
            </p>

            <h2 className="text-5xl font-semibold">
              Principles That Guide Us
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-[32px] bg-white p-10"
                >
                  <Icon
                    className="mb-6 text-[#C9A86A]"
                    size={40}
                  />

                  <h3 className="text-3xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-slate-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-32">
        <div className="mx-auto grid w-[92%] max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
              Who We Serve
            </p>

            <h2 className="text-5xl font-semibold">
              Supporting Every Stage
              Of The Investment Journey.
            </h2>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold">
                First-Time Investors
              </h3>

              <p className="mt-3 text-slate-600">
                Guidance and confidence for those entering the market.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Experienced Investors
              </h3>

              <p className="mt-3 text-slate-600">
                Strategic opportunities and portfolio expansion.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Global Clients
              </h3>

              <p className="mt-3 text-slate-600">
                Access to Dubai's opportunities from anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-950 py-32 text-white">
        <div className="mx-auto w-[92%] max-w-7xl">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <TrendingUp
                size={42}
                className="mb-6 text-[#C9A86A]"
              />

              <h3 className="text-6xl font-semibold">
                500+
              </h3>

              <p className="mt-3 text-white/70">
                Investors Connected
              </p>
            </div>

            <div>
              <Users
                size={42}
                className="mb-6 text-[#C9A86A]"
              />

              <h3 className="text-6xl font-semibold">
                25+
              </h3>

              <p className="mt-3 text-white/70">
                Exclusive Roadshows
              </p>
            </div>

            <div>
              <Globe
                size={42}
                className="mb-6 text-[#C9A86A]"
              />

              <h3 className="text-6xl font-semibold">
                Global
              </h3>

              <p className="mt-3 text-white/70">
                Network & Reach
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-semibold leading-tight md:text-7xl">
            More Than Real Estate.
            <br />
            A Trusted Partner.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-600">
            Our mission is to create meaningful relationships and connect
            investors with opportunities that inspire confidence, growth
            and long-term success.
          </p>
        </div>
      </section>
    </main>
  );
}