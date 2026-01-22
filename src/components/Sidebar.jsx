import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  BarChart3, 
  Landmark, 
  ShieldCheck, 
  Plus,
  Menu,
  X 
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Users', icon: <Users size={20} />, active: true },
    { name: 'Payments', icon: <CreditCard size={20} /> },
    { name: 'Reporting', icon: <BarChart3 size={20} /> },
    { name: 'Loans', icon: <Landmark size={20} /> },
    { name: 'Controls', icon: <ShieldCheck size={20} /> },
  ];

  return (
    <>
      {/* Hamburger Button - Only visible on Mobile */}
      <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo-section">
          <span className="logo-text">Groloans</span>
          <span className="admin-badge">user</span>
        </div>

        <nav className="nav-menu">
          {menuItems.map((item, index) => (
            <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="add-btn"><Plus size={18} /> Add New</button>
          <p className="version-number">Version 21.1.2</p>
        </div>
      </aside>

      {/* Overlay to close menu when clicking outside on mobile */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Sidebar;