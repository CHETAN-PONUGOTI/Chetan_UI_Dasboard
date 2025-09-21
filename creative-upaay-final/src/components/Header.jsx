import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterTerm, setPriorityFilter, setDateFilter } from '../redux/tasksSlice';
import { FiSearch, FiEdit2, FiLink } from 'react-icons/fi';
import { BsCalendar2Event, BsChatDots, BsGridFill } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { TfiMenuAlt } from "react-icons/tfi";

const Header = () => {
    const dispatch = useDispatch();
    const { dateFilter } = useSelector((state) => state.tasks);
    const currentPriorityFilter = useSelector((state) => state.tasks.priorityFilter);

    const handleTextFilterChange = (e) => {
        dispatch(setFilterTerm(e.target.value));
    };
    
    const handlePriorityFilterChange = (e) => {
        dispatch(setPriorityFilter(e.target.value));
    };

    const handleDateFilterToggle = () => {
        const newFilter = dateFilter === 'Today' ? 'All' : 'Today';
        dispatch(setDateFilter(newFilter));
    };

    return (
        <div className="flex flex-col gap-6">
            {/* Top Bar: Search, Icons, Profile */}
            <div className="flex items-center justify-between">
                <div className="flex-1 max-w-lg">
                    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-3 py-2">
                        <FiSearch className="text-neutral-gray-s" />
                        <input
                            type="text"
                            placeholder="Search for anything..."
                            className="w-full focus:outline-none text-sm"
                            onChange={handleTextFilterChange}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="p-2 text-neutral-gray-s text-xl hover:bg-gray-100 rounded-md"><BsCalendar2Event /></button>
                    <button className="p-2 text-neutral-gray-s text-xl hover:bg-gray-100 rounded-md"><BsChatDots /></button>
                    <button className="p-2 text-neutral-gray-s text-2xl hover:bg-gray-100 rounded-md"><IoMdNotificationsOutline /></button>
                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <p className="font-medium text-neutral-gray-h">Palak Jain</p>
                            <p className="text-sm text-neutral-gray-s">Rajasthan, India</p>
                        </div>
                        <img src="https://i.pravatar.cc/40?img=5" alt="User Profile" className="w-10 h-10 rounded-full" />
                        <button className="text-neutral-gray-s"><HiOutlineChevronDown /></button>
                    </div>
                </div>
            </div>

            {/* Title Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b border-gray-300">
                <div className="flex items-center gap-3">
                    <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-gray-h">Mobile App</h1>
                    <button className="p-2 text-brand-purple hover:bg-brand-purple-light rounded-md transition-colors"><FiEdit2 /></button>
                    <button className="p-2 text-brand-purple hover:bg-brand-purple-light rounded-md transition-colors"><FiLink /></button>
                </div>
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                    <div className="flex items-center -space-x-2">
                        <img src="https://i.pravatar.cc/32?img=1" alt="User 1" className="w-9 h-9 rounded-full border-2 border-white" />
                        <img src="https://i.pravatar.cc/32?img=2" alt="User 2" className="w-9 h-9 rounded-full border-2 border-white" />
                        <img src="https://i.pravatar.cc/32?img=3" alt="User 3" className="w-9 h-9 rounded-full border-2 border-white" />
                        <div className="w-9 h-9 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-semibold border-2 border-white">+2</div>
                    </div>
                     <button className="text-sm font-medium text-brand-purple flex items-center gap-2">
                        <span>Invite</span>
                    </button>
                </div>
            </div>

            {/* Filter and Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-3">
                      <select
                          value={currentPriorityFilter}
                          onChange={handlePriorityFilterChange}
                          className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 text-neutral-gray-s hover:bg-gray-100 bg-white focus:outline-none"
                      >
                          <option value="All">Filter by Priority</option>
                          <option value="Low">Low</option>
                          <option value="High">High</option>
                      </select>
                  </div>
                  <button 
                          onClick={handleDateFilterToggle}
                          className={`flex items-center gap-2 border rounded-md px-3 py-2 transition-colors ${
                              dateFilter === 'Today' 
                              ? 'bg-brand-purple text-white border-brand-purple' 
                              : 'border-gray-300 text-neutral-gray-s hover:bg-gray-100'
                          }`}
                      >
                          <BsCalendar2Event />
                          <span>Today</span>
                      </button>

                </div>
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                    <button className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 text-neutral-gray-s hover:bg-gray-100">
                        <span>Share</span>
                    </button>
                    <div className="h-6 border-l border-gray-300 mx-2"></div>
                    <button className="p-2 bg-brand-purple text-white rounded-md"><TfiMenuAlt /></button>
                    <button className="p-2 text-neutral-gray-s hover:bg-gray-100 rounded-md"><BsGridFill /></button>
                </div>
            </div>
        </div>
    );
};

export default Header;