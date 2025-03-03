import React from "react";
import SocialSidebar from "../components/Sidebar";
import Swal from "sweetalert2";
import { useTheme } from "../context/ThemeContext";

const ContactPage = () => {
  const { isDark } = useTheme();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6ac0c56b-a72f-4c05-ac07-e6b69a934d81");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title:
          "<h2 style='font-size: 1.2rem; margin-bottom: 10px;'>Message sent successfully!</h2>",
        icon: "success",
        draggable: true,
        width: "300px",
      });
    }
    event.target.reset();
  };

  return (
    <div
      className={`min-h-screen lg:pt-16 relative ${
        isDark ? "bg-[#0C0C0C]" : "bg-white"
      }`}
    >
      <SocialSidebar />
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h1
              className={`text-5xl lg:text-6xl ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Contact Me
            </h1>
            <div
              className={`h-px w-auto opacity-50 ${
                isDark ? "bg-white" : "bg-black"
              }`}
            ></div>
            <h2
              className={`text-2xl font-semibold ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Get in touch
            </h2>

            <div className="space-y-4">
              <div>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  Email:
                </p>
                <a
                  href="mailto:name@domain.com"
                  className={`${
                    isDark
                      ? "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-600"
                  }`}
                >
                  name@domain.com
                </a>
              </div>

              <div>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  Phone:
                </p>
                <a
                  href="tel:(555)123-4567"
                  className={`${
                    isDark
                      ? "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-600"
                  }`}
                >
                  (555)123-4567
                </a>
              </div>
            </div>

            <p className={isDark ? "text-gray-300" : "text-gray-700"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet
              pharetra.
            </p>
          </div>

          {/* Contact Form Fields */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={`w-full p-3 border bg-transparent placeholder-gray-500 focus:ring-2 focus:ring-gray-400 focus:border-transparent ${
                    isDark
                      ? "border-white text-white"
                      : "border-black text-black"
                  }`}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`w-full p-3 border bg-transparent placeholder-gray-500 focus:ring-2 focus:ring-gray-400 focus:border-transparent ${
                    isDark
                      ? "border-white text-white"
                      : "border-black text-black"
                  }`}
                  required
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                className={`w-full p-3 border bg-transparent placeholder-gray-500 focus:ring-2 focus:ring-gray-400 focus:border-transparent ${
                  isDark ? "border-white text-white" : "border-black text-black"
                }`}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`px-6 py-2 transition-colors ${
                isDark
                  ? "text-white hover:bg-white hover:text-black border border-white"
                  : "text-black hover:bg-black hover:text-white border border-black"
              }`}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
