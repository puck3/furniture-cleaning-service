"use client";

import Nav from "./Nav";

import SidebarProps from "@/types/SidebarProps";
import "@/styles/Sidebar.scss";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`sidebar-bg ${isOpen ? "visible" : ""}`}
        onClick={onClose}
      ></div>

      <div className={`sidebar ${isOpen ? "visible" : ""}`}>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>

        <Nav className="sidebar-nav" textClassName="sidebar-links" />
      </div>
    </>
  );
};

export default Sidebar;
