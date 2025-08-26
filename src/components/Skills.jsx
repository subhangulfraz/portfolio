import React from "react";

const skills = [
  { name: "C++", img: "https://img.icons8.com/color/48/c-plus-plus-logo.png" },
  { name: "C#", img: "https://img.icons8.com/color/48/c-sharp-logo.png" },
  { name: "HTML", img: "https://img.icons8.com/color/48/html-5.png" },
  { name: "CSS", img: "https://img.icons8.com/color/48/css3.png" },
  { name: "Bootstrap", img: "https://img.icons8.com/color/48/bootstrap.png" },
  { name: "Tailwind CSS", img: "https://img.icons8.com/color/48/tailwind_css.png" },
  { name: "JavaScript", img: "https://img.icons8.com/color/48/javascript.png" },
  { name: "ReactJS", img: "https://img.icons8.com/color/48/react-native.png" },
  { name: "NodeJS", img: "https://img.icons8.com/color/48/nodejs.png" },
  { name: "ExpressJS", img: "https://img.icons8.com/ios/50/000000/express-js.png" },
  { name: "MongoDB", img: "https://img.icons8.com/color/48/mongodb.png" },
];

const Skills = () => {
  return (
    <div id="skills" className=" max-w-screen-xl mx-auto px-4 md:px-20 my-16">
      <h1 className="text-4xl font-bold text-center mb-10 py-20">My Skills</h1>

      <div className="bg-gray-900 text-gray-300 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-6">Skills</h2>

        {/* Proper Responsive Flex Layout */}
        <div className="flex flex-wrap -mx-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 px-3 mb-6"
            >
              <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg shadow-md 
              transform transition duration-300 hover:scale-105 hover:bg-gray-700">
                <img src={skill.img} alt={skill.name} className="w-10 h-10" />
                <span className="font-semibold">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
