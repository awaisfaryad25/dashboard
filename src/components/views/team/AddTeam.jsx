import React, {useState} from "react";
import InputField from "../../globalComponents/subComponents/InputField";
import ButtonPrimary from "../../globalComponents/subComponents/ButtonPrimary";
import { IoIosClose } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";

const AddTeam = ({ onClose }) => {
  const [formData, setFormData] = useState({ email: "", password: "",});
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {};
    
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg- bg-opacity-50 backdrop-blur-xs z-50">
        <div className="bg-white  p-5 rounded-lg shadow-lg w-[90%] max-w-96 relative border border-[var(--primary)] ">
          <button className="absolute top-2 cursor-pointer right-2 text-2xl text-[var(--primary)]" onClick={onClose}>
            <IoIosCloseCircle/>
          </button>
          <h2 className="text-xl text-[var(--secondary)] font-bold mb-4">Add New Team Member</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-2 mb-4">
              <InputField label="Name" placeholder="Enter your name" id="name" value={formData.name} onChange={handleChange}/>
              <InputField label="Role" placeholder="Enter your role" id="role" value={formData.role} onChange={handleChange}/>
              <InputField label="Profile Link" placeholder="Enter your link" id="link" value={formData.link} onChange={handleChange}/>
            </div>
            <ButtonPrimary text={loading ? "Saving..." :  "Save"} customClass="w-full" />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTeam;
