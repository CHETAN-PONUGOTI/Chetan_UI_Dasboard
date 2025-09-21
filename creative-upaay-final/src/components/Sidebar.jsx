import React from 'react';
import { GoHome, GoTasklist } from 'react-icons/go';
import { HiOutlineUsers } from 'react-icons/hi';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsChatDots, BsPlusLg } from 'react-icons/bs';
import logo from '/images/logo.png'

const Sidebar = () => {
  const menuItems = [
    { icon: <GoHome />, name: 'Home' },
    { icon: <BsChatDots />, name: 'Messages' },
    { icon: <GoTasklist />, name: 'Tasks' },
    { icon: <HiOutlineUsers />, name: 'Members' },
    { icon: <IoSettingsOutline />, name: 'Settings' },
  ];

  const projects = [
    { name: 'Mobile App', color: 'bg-green-500', active: true },
    { name: 'Website Redesign', color: 'bg-orange-500' },
    { name: 'Design System', color: 'bg-purple-300' },
    { name: 'Wireframes', color: 'bg-blue-500' },
  ];

  return (
    <aside className="w-60 bg-white p-5 flex-col justify-between hidden lg:flex">
      <div>
        <div className="flex items-center gap-2 mb-10">
            <img src={logo} className="text-3xl text-brand-purple" />
            <h1 className="text-xl font-bold text-neutral-gray-h">Project M.</h1>
        </div>

        <nav className="flex flex-col gap-4 text-neutral-gray-s font-medium">
          {menuItems.map((item, index) => (
            <a href="#" key={index} className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition-colors">
              {React.cloneElement(item.icon, { className: 'text-2xl' })}
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        <div className="my-8 border-t border-gray-200"></div>

        <div className="text-neutral-gray-s font-bold text-xs uppercase flex justify-between items-center mb-4">
          <span>My Projects</span>
          <button className="p-1 rounded hover:bg-gray-100"><BsPlusLg /></button>
        </div>

        <div className="flex flex-col gap-1">
          {projects.map((project, index) => (
            <a href="#" key={index} className={`flex items-center justify-between p-2 rounded-md text-neutral-gray-h font-medium ${project.active ? 'bg-brand-purple-light' : 'hover:bg-gray-100'}`}>
              <div className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${project.color}`}></span>
                <span>{project.name}</span>
              </div>
              {project.active && <span className="font-bold text-lg leading-none -mt-1">...</span>}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 p-4 bg-brand-purple-light rounded-lg text-center relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-1 rounded-full shadow-lg">
          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 text-2xl">💡</div>
        </div>
        <h3 className="font-semibold text-sm text-neutral-gray-h pt-6">Thoughts Time</h3>
        <p className="text-xs text-neutral-gray-s my-2">We don't have any notice for you, till then you can share your thoughts with your peers.</p>
        <button className="w-full bg-white text-black text-sm font-medium py-2 rounded-md mt-2 shadow-sm">Write a message</button>
      </div>
    </aside>
  );
};

export default Sidebar;