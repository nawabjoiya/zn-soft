import { useState } from "react";
import { FaEdit, FaEnvelope, FaPhone, FaPlay, FaUser } from "react-icons/fa";
import AnimateIn from "../animation/AnimateIn";

const SUBJECTS = [
  "Select Subject 01",
  "Select Subject 02",
  "Select Subject 03",
];

export default function ContactSection({
  videoUrl = "https://www.youtube.com/watch?v=Get7rqXYrbQ",
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    // simulate backend delay
    await new Promise((res) => setTimeout(res, 800));

    setStatus({
      type: "success",
      message: "Thanks! Your message has been received.",
    });

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setLoading(false);
  };

  return (
    <section className="relative overflow-hidden bg-[#141414] py-[70px] lg:py-[90px]">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
        style={{
          backgroundImage:
            "url('/assets/images/backgrounds/contact-one-bg.jpg')",
        }}
      />

      <div className="container-site">
        <div className="grid items-start gap-10 lg:grid-cols-[5fr_7fr] lg:gap-0">

          {/* FORM SIDE */}
          <AnimateIn
            variant="slideInLeft"
            className="relative z-[1] lg:-ml-[30px]"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#4e535b] p-[30px] max-w-md w-fit mx-auto"
            >
              {/* NAME */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="h-[58px] w-full bg-white pl-5 pr-14 text-sm font-medium text-[#6c6b6f] outline-none"
                />
                <span className="pointer-events-none absolute right-[30px] top-1/2 -translate-y-1/2 text-brand">
                  <FaUser />
                </span>
              </div>

              {/* EMAIL */}
              <div className="relative mb-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="h-[58px] w-full bg-white pl-5 pr-14 text-sm font-medium text-[#6c6b6f] outline-none"
                />
                <span className="pointer-events-none absolute right-[30px] top-1/2 -translate-y-1/2 text-brand">
                  <FaEnvelope />
                </span>
              </div>

              {/* PHONE */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className="h-[58px] w-full bg-white pl-5 pr-14 text-sm font-medium text-[#6c6b6f] outline-none"
                />
                <span className="pointer-events-none absolute right-[30px] top-1/2 -translate-y-1/2 text-brand">
                  <FaPhone />
                </span>
              </div>

              {/* SUBJECT */}
              <div className="relative mb-6">
                <select
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  className="h-[58px] w-full cursor-pointer appearance-none bg-white pl-5 pr-14 text-sm font-medium text-[#6c6b6f] outline-none"
                >
                  <option value="">Subject</option>
                  {SUBJECTS.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <span className="pointer-events-none absolute right-[30px] top-1/2 -translate-y-1/2 text-brand">
                  <FaEdit />
                </span>
              </div>

              {/* STATUS */}
              {status && (
                <p
                  className={`mb-4 -mt-2 text-[13px] ${
                    status.type === "success"
                      ? "text-green-300"
                      : "text-red-300"
                  }`}
                >
                  {status.message}
                </p>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="zn-btn w-full cursor-pointer border-none px-[29px] py-[15px] disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit Now"}
              </button>
            </form>
          </AnimateIn>

          {/* VIDEO SIDE */}
          <AnimateIn
            variant="zoomIn"
            delay={0.1}
            className="text-center lg:ml-[70px] lg:mt-[104px]"
          >
            <a
              href={videoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group"
            >
              <span
                className="
                  relative mx-auto flex h-[90px] w-[90px]
                  items-center justify-center
                  border-2 border-white
                  text-[18px] text-white
                  transition-all duration-500
                  group-hover:bg-white
                  group-hover:text-brand
                "
              >
                <FaPlay className="ml-1" />
                <span
                  className="absolute inset-0 animate-contact-ripple border-2 border-white"
                  aria-hidden
                />
              </span>
            </a>

            <h4 className="mt-[39px] text-[26px] font-semibold leading-[36px] text-white md:text-[35px] md:leading-[45px] lg:text-[45px] lg:leading-[55px]">
              Better Digital Marketing Solution
              <br />
              &amp; Services Fingertips
            </h4>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}