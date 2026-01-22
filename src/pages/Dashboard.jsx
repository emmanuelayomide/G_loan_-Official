import React from 'react';
import { Search, Bell, ChevronDown, RefreshCcw, Info, ArrowLeftRight } from 'lucide-react';
import './Dashboard.css';

// images
import User from "../assets/user.jpg"

const Dashboard = () => {
  const tabs = ["Summary", "Documents", "Payments", "Disbursements", "Activity", "Collaterals", "Dependents", "Due Diligence"];

  return (
    <div className="dashboard-wrapper">
      {/* 1. TOP HEADER */}
      <header className="dashboard-header">
        <div className="search-container">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search users, loans, payments" className="search-input" />
        </div>
        <div className="header-actions">
          <div className="notification-wrapper">
            <Bell size={20} className="header-icon" />
            <span className="notif-badge">21</span>
            <span className="notif-text">Notifications</span>
          </div>
          <div className="profile-trigger">
            <img src={User} alt="User" className="user-avatar" />
            <span className="user-name">Curtis K</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </header>

      {/* 2. PAGE CONTENT AREA */}
      <div className="page-content">
        <div className="user-title-row">
          <h1>Curtis Kriner</h1>
          <div className="action-buttons">
            <button className="btn-secondary">Modify Details</button>
            <button className="btn-secondary">Update Loan</button>
            <button className="btn-icon-only"><ArrowLeftRight size={18} /></button>
          </div>
        </div>
        <p className="breadcrumb">All Accounts &gt; Account ID : 7388333459 &gt; Beneficiary &gt; <span>Curtis Kriner</span></p>

        {/* 3. TABS */}
        <div className="tabs-container">
          {tabs.map((tab, i) => (
            <div key={tab} className={`tab-item ${i === 0 ? 'active' : ''}`}>{tab}</div>
          ))}
        </div>

        {/* 4. TOP STATS GRID (Profile + Numbers) */}
        <div className="stats-grid">
          <div className="profile-card">
            <div className="elite-badge">✦ ELITE MEMBER ✦</div>
            <div className="avatar-large">
              <img src={User} alt="Kiran" />
            </div>
            <h2 className="profile-name">Curtis Kriner</h2>
            <p className="profile-id">ID : 7388333459</p>
            <p className="profile-id">Addr : Las Vegas</p>
          </div>

          <div className="stat-box">
            <div className="stat-label">Borrowed</div>
            <div className="stat-value">$10,000.00</div>
            <div className="stat-footer">
              <span className="footer-label">Average Rate</span>
              <span className="footer-value">12.21%</span>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-label">Repaid</div>
            <div className="stat-value">$0,000.00</div>
            <div className="stat-footer">
              <span className="footer-label">Credit Score</span>
              <div className="credit-score">
                <span className="score-text">POOR</span>
                <RefreshCcw size={14} className="refresh-icon" />
              </div>
              
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-header">
              <span className="stat-label">Internal Risk Score</span>
              <Info size={14} className="info-icon" />
            </div>
            <div className="stat-value">16.66 <span className="value-total">/ 18.00</span></div>
            <div className="gauge-mockup">
               <div className="gauge-arc">
                 <div className="gauge-number">780</div>
               </div>
            </div>
          </div>
        </div>

        {/* 5. ACTIVE LOANS SECTION */}
        <div className="active-loans-section">
          <h3 className="section-title">Your Interest</h3>
          <div className="loans-grid">
            <div className="loan-card">
              <div className="loan-image-wrapper">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400" alt="Home" />
              </div>
              <div className="loan-info">
                <h4>Home Loan</h4>
                <p className="loan-id">ID : HML9932828823</p>
                <p className="loan-meta">Rate $15,000.00</p>
                <p className="loan-meta">Interest :5%</p>
              </div>
            </div>

            <div className="loan-card">
              <div className="loan-image-wrapper">
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=400" alt="Car" />
              </div>
              <div className="loan-info">
                <h4>Car Loan</h4>
                <p className="loan-id">ID : CRL9932828823</p>
                <p className="loan-meta">Rate $7,000.00</p>
                <p className="loan-meta">Interest :5%</p>
              </div>
            </div>

            <div className="loan-card">
              <div className="loan-image-wrapper">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400" alt="Business" />
              </div>
              <div className="loan-info">
                <h4>Business Loan</h4>
                <p className="loan-id">ID : BSL9932828823</p>
                <p className="loan-meta">Rate $15,000.00</p>
                <p className="loan-meta">Interest :8%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;