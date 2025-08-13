import React from "react";
import { FaUsers, FaDollarSign, FaShoppingCart, FaChartLine } from "react-icons/fa";

const Home = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,245",
      icon: <FaUsers className="text-blue-500 text-3xl" />,
      color: "bg-blue-100"
    },
    {
      title: "Total Sales",
      value: "$12,450",
      icon: <FaDollarSign className="text-green-500 text-3xl" />,
      color: "bg-green-100"
    },
    {
      title: "Orders",
      value: "345",
      icon: <FaShoppingCart className="text-yellow-500 text-3xl" />,
      color: "bg-yellow-100"
    },
    {
      title: "Growth",
      value: "23%",
      icon: <FaChartLine className="text-purple-500 text-3xl" />,
      color: "bg-purple-100"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-5 flex items-center gap-4 border border-gray-100 hover:shadow-lg transition"
          >
            <div className={`p-4 rounded-full ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <h2 className="text-xl font-bold">{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
