import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Contact Us</h2>
          <p className="text-black text-lg max-w-2xl mx-auto">
            We’d love to hear from you. Whether you have a question about our services or want to explore partnerships, feel free to reach out.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-black0 rounded-full flex items-center justify-center mb-4">
              <Phone className="text-white" size={24} />
            </div>
            <h4 className="text-black font-semibold text-lg mb-1">Phone</h4>
            <p className="text-black">+1 (800) 123-4567</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <Mail className="text-white" size={24} />
            </div>
            <h4 className="text-black font-semibold text-lg mb-1">Email</h4>
            <p className="text-black">info@quantumcapital.com</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-white" size={24} />
            </div>
            <h4 className="text-black font-semibold text-lg mb-1">Address</h4>
            <p className="text-black">123 Venture Blvd, San Francisco, CA</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white rounded-3xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
