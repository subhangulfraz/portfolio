import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully ✅");
  };

  return (
    <div
      id="contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-4xl font-bold text-center mb-10">Contact Me</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8"
      >
        {/* Username */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="username"
            required
            className="w-full border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            className="w-full border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            name="message"
            required
            className="w-full border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Send Button */}
        <button
          type="submit"
          name="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-500 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
