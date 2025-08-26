import React from "react";
import { FaGraduationCap, FaFileDownload } from "react-icons/fa";

const About = () => {
    return (
        <div id="about" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
            {/* Heading */}
            <div className="mt-20">
            <h1 className="text-4xl font-bold text-center mb-10 py-20 ">About Me</h1>
</div>
            {/* Card */}
            <div className="bg-gray-900 text-gray-300 rounded-2xl shadow-lg p-8 md:p-12">
                {/* Intro */}
                <h2 className="text-2xl font-semibold mb-4">
                    Hi, I'm <span className="text-blue-400">Subhan Gulfraz</span> 👋
                </h2>

                <p className="mb-4 leading-relaxed">
                    I am a passionate <span className="font-semibold">Software Engineering student</span>
                    who loves creating modern and responsive applications. My main focus is building
                    clean, scalable, and user-friendly projects using modern tools and technologies.
                </p>

                <p className="mb-4 leading-relaxed">
                    I work with technologies like <span className="font-semibold text-blue-300">React</span>,
                    <span className="font-semibold  text-blue-300"> Tailwind CSS</span>, and the
                    <span className="font-semibold  text-blue-300"> MERN stack</span>. My goal is to keep learning and
                    improving so I can deliver professional solutions to real-world problems.
                </p>

                <p className="leading-relaxed">
                    Apart from coding, I enjoy exploring new tech trends, enhancing my problem-solving skills,
                    and working on projects that challenge me to grow.
                </p>

                {/* Education Section */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-2">
                        <FaGraduationCap size={24} /> Education
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">Army Public School & College</h3>
                            <p className="text-gray-400">FSc Pre-Engineering (Intermediate)</p>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">PMAS ARID Agriculture University</h3>
                            <p className="text-gray-400">Bachelors in Software Engineering (Currently in 5th Semester)</p>
                        </div>
                    </div>
                </div>

                {/* Resume Button */}
                <div className="mt-8 flex justify-center">
                    <a
                        href="Subhan_resume.pdf"   // <-- public folder me resume.pdf rakho
                        download //attributes hai file download ka
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 
                       text-white px-6 py-2 rounded-lg shadow-md transition"
                    >
                        <FaFileDownload size={18} /> Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
