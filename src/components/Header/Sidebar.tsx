"use client";

import Nav from "./Nav";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } z-20`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-30 flex flex-col`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 text-2xl"
          onClick={onClose}
        >
          ✖
        </button>

        <Nav
          className="mt-16 px-6 p-4"
          listClassName="flex flex-col space-y-6"
          linkClassName="text-2xl text-gray-900 hover:text-fuchsia-600 transition-colors"
        />
      </div>
    </>
  );
};

export default Sidebar;
