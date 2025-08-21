import ButtonPrimary from "../../globalComponents/subComponents/ButtonPrimary";
import { FaFolderOpen } from "react-icons/fa";
import Ecom from "../../../assets/portfolio/E-Com.png";
import hand from "../../../assets/portfolio/hand.jpeg";
import system from "../../../assets/portfolio/system.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Website",
      description: "Full-stack shop built with React & Node.js",
      image: Ecom,
      status: "Completed"
    },
    {
      id: 2,
      name: "Mobile Banking App",
      description: "Secure mobile banking platform for iOS & Android",
      image: hand,
      status: "In Progress"
    },
    {
      id: 3,
      name: "Portfolio Website",
      description: "Personal portfolio showcasing UI/UX designs",
      image: system,
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="p-4 bg-white rounded-lg shadow bg-opacity-40 flex items-center justify-between border-l-2">
        <h2 className="font-semibold text-lg">Portfolio</h2>
        <ButtonPrimary text="Add Project" />
      </div>

      {/* Projects Grid */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img src={project.image} alt={project.name} className="w-full h-60 object-fill"/>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-gray-500 text-sm mb-3"> {project.description} </p>
                <span
                  className={`inline-block px-3 py-1 text-xs rounded-full ${
                    project.status === "Completed" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
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
