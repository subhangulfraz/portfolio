import React from "react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-30"
    >
      <h1 className="text-4xl font-bold text-center mb-12 py-20">Experience</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* MERN Course */}
        <div className="bg-gray-900 text-gray-200 shadow-xl rounded-xl p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-2">
            MERN Stack Course – ARID UIIT
          </h2>
          <p className="text-sm text-gray-200 mb-4">Duration: 1.5 Months</p>
          <ul className="list-disc list-inside  text-gray-200 space-y-2">
            <li>Learned and implemented MongoDB, Express.js, React.js, Node.js.</li>
            <li>Built small-scale applications integrating frontend and backend.</li>
            <li>Worked with REST APIs, authentication, and responsive UI.</li>
          </ul>
        </div>

        {/* Academic Projects */}
        <div className="bg-gray-900  text-gray-200 shadow-xl rounded-xl p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold text-gray-00 mb-2">
            Academic Projects
          </h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>
              <strong>University Network System:</strong> Designed a campus-wide
              network using Cisco Packet Tracer.
            </li>
            <li>
              <strong>Hospital Management System:</strong> Built a database for
              managing patients, doctors, and appointments using SQL.
            </li>
            <li>
              <strong>Premium Watches Website:</strong> Developed a responsive
              e-commerce front-end using HTML, CSS, and Bootstrap.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
