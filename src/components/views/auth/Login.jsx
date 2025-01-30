

import  { useState } from "react";
import bg from "../../../assets/login/solar.jpg";
import logo from "../../../assets/logo/ghse.svg";
import InputField from "../../globalComponents/subComponents/InputField"

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "",});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {};

  return (
    <div
      className="lg:h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${bg})`,
        height: "full", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
      }}
    >
      <div className="flex items-center py-32 justify-center lg:h-screen backdrop-blur-xs">
        <div className="w-[90%] sm:w-96 mx-auto bg-white rounded-lg shadow-lg border border-[var(--primary)] ">
          <div className=" p-6">
            <div className="w-full text-center">
              <img src={logo} alt="" className="w-32 mx-auto"/>
              <h1 className="text-[var(--secondary)] font-bold text-2xl my-2"> Login  Admin</h1>
              {/* <p className="text-[var(--primary)] text-xs "> Manage your business in one place. Its free!</p> */}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb- space-y-2">
                <InputField label="Email" placeholder="Enter your email" id="email" value={formData.email} onChange={handleChange}/>
                <InputField label="Password" placeholder="Enter your password" id="password" value={formData.password} onChange={handleChange}/>
              </div>
              <div className="text-end pt-1">
                <a href="#" className="text-xs text-[var(--primary)] hover:underline"> Forgot Password?</a>
              </div>
              <div className="mt-3">
                <button type="submit" disabled={loading}
                  className="w-full py-2 bg-[var(--primary)] hover:opacity-70 text-white text-sm font-bold rounded-md  focus:outline-none"
                >
                  {loading ? "Processing..." :  "Login"}
                </button>
              </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
}                       

export default Login;