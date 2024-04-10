import {React, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Navigation = () => {
    const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  }, []);
  return (
    <div className="flex items-center space-x-4 p-4 text-xl font-black bg-black mb-8">
      <div>
        <NavLink
          to="/home"
          className="text-white hover:text-greenyellow"
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/about"
          className="text-white hover:text-greenyellow"
        >
          About
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/contact"
          className="text-white hover:text-greenyellow"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
