import React from "react";
import { Link } from 'react-router-dom'

const Menubtn = () => {
  return (
    <div>
     <Link to="/recipes">
  <button type="button" className="btn btn-danger">Our Menu</button>
</Link>
    </div>
  );
};

export default Menubtn;