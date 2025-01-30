import React, { useState } from "react";
import DataTable from "react-data-table-component";
import ButtonPrimary from "../../globalComponents/subComponents/ButtonPrimary";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Dialog, DialogContent } from "@mui/material";
import AddTeam from "./AddTeam";

import awais from "../../../assets/team/awais.jpg";
import tina from "../../../assets/team/tina.png";
import john from "../../../assets/team/john.png";
import lana from "../../../assets/team/lana.png";
import abrahm from "../../../assets/team/abrahm.png";

const teamData = [
  { id: 1, name: "Awais Faryad", role: "Frontend Developer", image: awais, link: "https://linkedin.com/in/awaisfaryad" },
  { id: 2, name: "Tina Smith", role: "Backend Developer", image: tina, link: "https://linkedin.com/in/tinasmith" },
  { id: 3, name: "John Doe", role: "UI/UX Designer", image: john, link: "https://linkedin.com/in/johndoe" },
  { id: 4, name: "Lana Martin", role: "Project Manager", image: lana, link: "https://linkedin.com/in/lanamartin" },
  { id: 5, name: "Abrahm Smith", role: "DevOps Engineer", image: abrahm, link: "https://linkedin.com/in/abrahmsmith" },
];

const Team = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => { setSelectedImage(image);};

  const columns = [
    { name: "Image",
      selector: (row) => (
        <img src={row.image} alt={row.name}
          className="size-10 object-cover rounded-full cursor-pointer"
          onClick={() => handleImageClick(row.image)}
        />
      ),
      sortable: false,
      width: "80px",
    },
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Role", selector: (row) => row.role, sortable: true },
    { name: "Profile Link",
      selector: (row) => (
        <a href={row.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          View Profile
        </a>
      ),
      sortable: false,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-3">
          <button className="text-blue-600 hover:text-blue-800">
            <FaEdit size={16} />
          </button>
          <button className="text-red-600 hover:text-red-800">
            <FaTrash size={16} />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <div className="p-3">
      {/* Header */}
      <div className="p-3 bg-white shadow flex items-center justify-between">
        <h2 className="font-medium text-lg">Team</h2>
        <ButtonPrimary text="Add Team" onClick={() => setIsModalOpen(true)} />
      </div>

      {/* DataTable */}
      <div className="max-w-[22rem] md:max-w-full mt-4 shadow">
        <DataTable
          columns={columns}
          data={teamData}
          pagination
          highlightOnHover
          customStyles={{
            headCells: {
              style: { backgroundColor: "#DBF8CF", fontWeight: "bold", fontSize: "14px" },
            },
          }}
        />
      </div>

      <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)}>
        <DialogContent>
          <img src={selectedImage} alt="Selected Popup" className="w-full max-w-80 h-96 rounded object-contain" />
        </DialogContent>
      </Dialog>

      {isModalOpen && <AddTeam onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Team;
