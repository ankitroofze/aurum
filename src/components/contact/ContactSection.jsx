import React from "react";
import tree from "../../assets/tree.png";

const ContactSection = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden font-roboto">
      
      {/* Tree Shape */}
      <img
        src={tree}
        alt="tree"
        className="absolute bottom-0 right-0 w-64 opacity-40 brightness-50 pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-[430px_1fr] gap-14 items-start">

        {/* LEFT CARD */}
        <div className="bg-[#F7F7F7] rounded-[20px] p-7 shadow-sm">

          <h3 className="text-[20px] md:text-[20px] font-bold text-[#0B0F2F] mb-5">
            Information:
          </h3>

          <p className="text-gray-600 text-base md:text-base leading-8 mb-8 max-w-sm">
            Brendan Fraser, renowned actor of the silver screen, has taken on a
            new role as a tour guide, leveraging his passion for adventure.
          </p>

          <div className="space-y-5 text-base md:text-base text-[#0B0F2F]">

            <p>
              <span className="font-medium">Phone :</span>{" "}
              <span className="font-semibold">+123 9998 000</span>
            </p>

            <p>
              <span className="font-medium">Website :</span>{" "}
              <span className="font-semibold">www.info.com</span>
            </p>

            <p>
              <span className="font-medium">E-Mail :</span>{" "}
              <span className="font-semibold">info@gmail.com</span>
            </p>

            <p>
              <span className="font-medium">Address :</span>{" "}
              <span className="font-semibold">
                1426 California, USA
              </span>
            </p>

          </div>

          {/* MAP */}
          <div className="mt-10 rounded-2xl overflow-hidden max-w-[380px]">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              className="w-full h-56 border-0 grayscale contrast-125 brightness-90"
              loading="lazy"
            ></iframe>
          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="max-w-3xl w-full">

          <h2 className="text-2xl md:text-2xl lg:text-[40px] font-bold text-[#0B0F2F] leading-tight">
            Let's Connect And Get To Know  <br />
             Each Other
          </h2>

          <p className="mt-5 text-gray-600 text-base md:text-base leading-7 max-w-2xl">
            Brendan Fraser, Renowned Actor Of The Silver Screen, Has Taken On A
            New Role As A Tour Guide, Leveraging His Passion.
          </p>

          {/* FORM */}
          <form className="mt-10 space-y-5 w-full">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-xl px-5 py-4 text-base md:text-base outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
              />

              <input
                type="email"
                placeholder="E-mail"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                className="border border-gray-300 rounded-xl px-5 py-4 text-base md:text-base outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
              />

            </div>

            <input
              type="text"
              placeholder="Website"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 text-base md:text-base outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />

            <textarea
              rows="5"
              placeholder="Comments"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 text-base md:text-base outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none transition"
            ></textarea>

            <label className="flex items-center gap-3 text-sm md:text-sm text-gray-600">
              <input
                type="checkbox"
                className="w-4 h-4 accent-[#5B2EFF]"
              />
              Save my name, email, and website in this browser for the next
              time I comment.
            </label>

            <button
              type="submit"
              className="bg-[#5B2EFF] text-white px-8 py-3 rounded-[5px] text-sm md:text-sm font-semibold hover:bg-[#4720d6] transition duration-300"
            >
              SEND MESSAGE
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;