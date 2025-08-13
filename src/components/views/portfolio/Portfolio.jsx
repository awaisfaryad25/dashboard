import React from "react";
import ButtonPrimary from "../../globalComponents/subComponents/ButtonPrimary";
import { FaFolderOpen } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Website",
      description: "Full-stack shop built with React & Node.js",
      image: "https://via.placeholder.com/300x200",
      status: "Completed"
    },
    {
      id: 2,
      name: "Mobile Banking App",
      description: "Secure mobile banking platform for iOS & Android",
      image: "https://via.placeholder.com/300x200",
      status: "In Progress"
    },
    {
      id: 3,
      name: "Portfolio Website",
      description: "Personal portfolio showcasing UI/UX designs",
      image: "https://via.placeholder.com/300x200",
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="p-4 bg-[#DBF8CF] shadow bg-opacity-40 flex items-center justify-between border-b">
        <h2 className="font-semibold text-lg">Portfolio</h2>
        <ButtonPrimary text="Add Project" />
      </div>

      {/* Projects Grid */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover"/>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-gray-500 text-sm mb-3"> {project.description} </p>
                <span
                  className={`inline-block px-3 py-1 text-xs rounded-full ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-400">
            <FaFolderOpen className="mx-auto text-5xl mb-4" />
            <p>No projects found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
