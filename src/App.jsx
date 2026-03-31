import {
  Car,
  Calculator,
  Clock,
  Eye,
  Landmark,
  Lightbulb,
  Map,
  MapPin,
  Users,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
useState;

export default function Page() {
  const stats = [
    {
      stat: "13M+",
      info: "Daily commuters in Metro Manila",
    },
    {
      stat: "79%",
      info: "Struggle with fare & route info",
    },
    {
      stat: "72%",
      info: "Confused by routes & transfers",
    },
    {
      stat: "79%",
      info: "Faced fare discrepencies",
    },
  ];

  const stats2 = [
    {
      stat: "55%",
      info: "Experienced fare discrepencies, drivers charge inconsistent or unclear fares for the same routes.",
    },
    {
      stat: "72%",
      info: "Struggled with navigating routes and transfer points, especially through unfamiliar districts or barangays.",
    },
    {
      stat: "66%",
      info: "Expressed feeling unsafe when consuming late at night or in overcrowded vehicles.",
    },
    {
      stat: "79%",
      info: "Experienced moderate to severe challenges when accessing accurate fare and route information.",
    },
  ];

  const features1 = [
    {
      icon: <Clock />,
      title: "Accessibility",
      info: "Simpler, more convinient commuting for every Filipino.",
    },
    {
      icon: <Eye />,
      title: "Transparency",
      info: "Clear fare estimates and routes, no hidden costs.",
    },
    {
      icon: <Lightbulb />,
      title: "Innovation",
      info: "GPS, mapping, and real-time commuting solutions.",
    },
    {
      icon: <Users />,
      title: "Community-centered",
      info: "Serving commuters, drivers, and local communities.",
    },
  ];

  const features2 = [
    {
      icon: <Clock />,
      title: "Real-time routing",
      info: "Live traffic updates and optimal route suggestion across jeepneys, buses, and trains.",
    },
    {
      icon: <Calculator />,
      title: "Fare calculator",
      info: "Accurate fare estimates based on official LTFRB matrices no more guessing or disputes.",
    },
    {
      icon: <Map />,
      title: "Terminal mapping",
      info: "Official and commonly-used pickup points mapped for every major route in Metro Manila.",
    },
    {
      icon: <MapPin />,
      title: "Live location sharing",
      info: "Share your real-time location with trusted contacts for peace of mind on every trip",
    },
    {
      icon: <Landmark />,
      title: "Landmark navigation",
      info: "Directions the Filipino way using landmarks and barangays just like how local gives directions.",
    },
    {
      icon: <Users />,
      title: "Community-driven",
      info: "Connecting riders, drivers, and operators for a stronger, more transparent transport ecosystem.",
    },
  ];

  const [isWaiting, setIsWaiting] = useState(false);

  const handleDownloadClick = () => {
    if (isWaiting) return; // Exit if they just clicked

    toast(
      "Thanks for your interest! This is a conceptual prototype for a class project.",
      {
        icon: "🚀",
      },
    );

    setIsWaiting(true);
    // Re-enable the button after 3 seconds
    setTimeout(() => setIsWaiting(false), 3000);
  };

  return (
    <div>
      {/* Header */}
      <div className="navbar sticky top-0 z-50 bg-slate-50">
        <div className="flex-1 sm:ms-4">
          <div className="me-2 hidden h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-500 sm:flex">
            <Car />
          </div>
          <a
            href="#"
            className="font-bitcount btn btn-ghost text-2xl font-extrabold"
          >
            Komyuter
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal items-center px-1 font-semibold">
            <li className="hidden md:block">
              <a href="#whyus">Why Us</a>
            </li>
            <li className="hidden md:block">
              <a href="#problem">Problem</a>
            </li>
            <li className="hidden md:block">
              <a href="#solution">Solution</a>
            </li>
            <li className="hidden md:block">
              <a href="#mission">Mission</a>
            </li>
            <li>
              <button
                className="btn ms-4 hidden cursor-not-allowed rounded-md bg-blue-300 opacity-80 hover:bg-blue-400 md:block"
                onClick={handleDownloadClick}
              >
                Download App (Soon)
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero */}
      <div className="hero min-h-screen bg-slate-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="mockup-phone flex-none">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard phone-1">
                <img
                  src={import.meta.env.BASE_URL + "komyuter.webp"}
                  className="h-full w-full object-cover"
                  alt="Phone display content"
                />
              </div>
            </div>
          </div>
          <div>
            <span className="badge badge-primary border-none bg-blue-100 font-semibold tracking-widest text-blue-500">
              FOR FILIPINO COMMUTERS
            </span>
            <h1 className="text-6xl font-bold">
              Commute <span className="text-blue-500">smarter</span>, safer,
              every day
            </h1>
            <p className="py-6">
              Komyuter is a mobile-first platform built for jeepney, tricycle,
              bus, and train riders. Bringing fare transparency, real-time
              routing, and safety features to every Filipino commuter.
            </p>
            <div className="block space-y-4 sm:flex sm:space-y-0">
              <button
                className="btn me-4 cursor-not-allowed rounded-lg bg-blue-300 opacity-80 shadow-lg hover:bg-blue-400"
                onClick={handleDownloadClick}
              >
                Download For Free (Soon)
              </button>
              <button
                className="btn btn-ghost cursor-not-allowed rounded-lg border border-slate-400 opacity-80 sm:mt-0"
                onClick={handleDownloadClick}
              >
                Learn More (Soon)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 gap-4 bg-blue-200 p-6 text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.id} className="flex flex-col">
            <span className="text-4xl font-extrabold">{item.stat}</span>
            <span>{item.info}</span>
          </div>
        ))}
      </div>

      {/* Body */}
      <main>
        {/* Section 1 */}
        <section
          id="whyus"
          className="m-4 scroll-mt-24 text-center lg:text-left"
        >
          <div className="my-16 flex flex-col items-center space-y-4">
            <span className="text-xl font-semibold text-blue-400">
              WHY KOMYUTER
            </span>
            <h2>Born from the daily commute</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 px-4 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <p>
                Komyuter was conceptualized as both an answer to these struggles
                and a product of firsthand experience. Like most Filipinos, our
                founders stood in long lines, debated fare inconsistencies with
                drivers, and felt the uncertainty of navigating unfamiliar
                routes.
              </p>
              <p>
                Our mission is not to promise a perfect solution, but to provide
                commuters with a much-needed aid system, making their journey
                simpler, more transparent, and more secure. Unlike car-centric
                apps or ride-hailing platforms, Komyuter focuses exclusively on
                public utility vehicle commuting.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {features1.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center space-y-2 rounded-xl border bg-slate-100 p-6 shadow-lg lg:block"
                >
                  <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-500">
                    {item.icon}
                  </div>

                  <h3 className="font-bold">{item.title}</h3>
                  <span>{item.info}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section
          id="problem"
          className="m-4 scroll-mt-24 text-center lg:text-left"
        >
          <div className="my-16 flex flex-col items-center space-y-4">
            <span className="text-xl font-semibold text-blue-400">
              THE PROBLEM
            </span>
            <h2>Daily struggles Filipino commuters face</h2>
            <span>
              A survey of 110 commuters in Quezon City revealed persistent,
              everyday pain points that existing solutions have failed to
              adequately address.
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {stats2.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center space-y-2 rounded-xl border bg-slate-100 p-8 shadow-lg lg:block"
              >
                <h3 className="text-4xl font-bold text-blue-500">
                  {item.stat}
                </h3>
                <span>{item.info}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section
          id="solution"
          className="m-4 scroll-mt-24 text-center lg:text-left"
        >
          <div className="my-16 flex flex-col items-center space-y-4">
            <span className="text-xl font-semibold text-blue-400">
              OUR SOLUTION
            </span>
            <h2>One app. Every commute.</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {features2.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center space-y-2 rounded-xl border bg-slate-100 p-6 shadow-lg lg:block"
              >
                <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-500">
                  {item.icon}
                </div>
                <h3 className="font-bold">{item.title}</h3>
                <span>{item.info}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="mx-0 mt-32 bg-blue-950 text-slate-200">
          {/* Section 4 */}
          <section
            id="mission"
            className="grid scroll-mt-24 grid-cols-1 lg:grid-cols-2"
          >
            <div className="flex flex-col space-y-4 p-16">
              <span className="text-xl font-semibold text-yellow-400">
                MISSION
              </span>
              <h2>Empowering every Filipino commuter</h2>
              <p>
                Our mission is to empower commuters with reliable features that
                make every journey smoother and worry-free. More than just a
                map, Komyuter serves as a connector and lifeline for Filipinos
                on the move, promoting inclusivity, strengthening local
                partnerships, and supporting sustainable travel.
              </p>
            </div>
            <div className="flex flex-col space-y-4 bg-blue-900 p-16">
              <span className="text-xl font-semibold text-yellow-400">
                VISION
              </span>
              <h2>Redefining what commuting can be </h2>
              <p>
                To redefine everyday commuting into a simple, accessible, and
                community-driven experience, helping Filipinos reach their
                families and destinations faster, safer, and with peace of mind.
                We envision a future where commuting is hassle-free, informed,
                and empowering for every Filipino.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="solution" className="scroll-mt-24">
            <div className="flex flex-col items-center space-y-8 p-16">
              <h2>
                Start your{" "}
                <span className="text-yellow-500">better commute</span> today.
              </h2>
              <span>
                Join thousands of Filipino commuters who are already navigating
                smarter with Komyuter.
              </span>
              <div className="block space-y-4 sm:flex sm:space-y-0">
                <button
                  className="btn me-4 cursor-not-allowed rounded-lg bg-yellow-500 opacity-80 shadow-lg hover:bg-yellow-600"
                  onClick={handleDownloadClick}
                >
                  Download the App (Soon)
                </button>
                <button
                  className="btn btn-ghost cursor-not-allowed rounded-lg border border-blue-400 opacity-80 hover:bg-blue-900"
                  onClick={handleDownloadClick}
                >
                  Learn More (Soon)
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer footer-center bg-slate-100 p-4 text-base-content">
        <aside>
          <p className="font-semibold">
            © {new Date().getFullYear()} Komyuter. Made with care for Filipino
            commuters.
          </p>
        </aside>
      </footer>
    </div>
  );
}
