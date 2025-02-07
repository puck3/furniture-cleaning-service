"use client";

import Nav from "./Nav";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-30`}
    >
      <button
        className="absolute top-4 right-4 text-gray-600"
        onClick={onClose}
      >
        ✖
      </button>

      <nav className="mt-12">
        <Nav />
      </nav>
    </div>
  );
};

export default Sidebar;
