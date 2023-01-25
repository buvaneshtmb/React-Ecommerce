import React from "react";
import { Outlet } from "react-router-dom";
const ControlPanel = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default ControlPanel;
