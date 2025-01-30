import React from "react";
import DataTable from "react-data-table-component";
import ButtonPrimary from "../../globalComponents/subComponents/ButtonPrimary";
import { FaEdit, FaTrash } from "react-icons/fa";

const teamData = [
  { id: 1, name: "John Doe", role: "Frontend Developer", image: "https://via.placeholder.com/50", link: "https://linkedin.com/in/johndoe",},
  { id: 2, name: "Jane Smith", role: "Backend Developer", image: "https://via.placeholder.com/50", link: "https://linkedin.com/in/janesmith",},
];

const columns = [
  { name: "Image", selector: (row) => <img src={row.image} alt={row.name} className="size-10 rounded-full" />, sortable: false,},
  { name: "Name", selector: (row) => row.name, sortable: true,},
  { name: "Role", selector: (row) => row.role, sortable: true,},
  { name: "Profile Link", selector: (row) => <a href={row.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View Profile</a>, sortable: false,},
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
    minWidth: "100px",
  },
];

const Team = () => {
  return (
    <div className="">
      <div className="p-3 bg-white shadow flex items-center justify-between">
        <h2 className="font-medium text-lg">Team</h2>
        <ButtonPrimary text="Add Team" />
      </div>

      <div className="max-w-[21.9rem] md:max-w-full mt-4 shadow">
        <DataTable
          columns={columns}
          data={teamData}
          pagination
          highlightOnHover
          customStyles={{
            headCells: {
              style: { backgroundColor: "#DBF8CF", fontWeight: "bold", fontSize: "14px",},
            },
          }}
        />
      </div>
    </div>
  );
};

export default Team;
