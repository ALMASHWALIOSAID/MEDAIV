// ✅ صفحة المريض PatientPage.js
import React from "react";
import { Link } from "react-router-dom";
import "./PatientPage.css";

export default function PatientPage() {
  return (
    <div className="patient-page">
      <div className="patient-container">
        <h2 className="patient-title">Welcome to Patient Section</h2>
        <p className="patient-subtitle">
          Manage your medical reports and history easily.
        </p>

        <div className="patient-actions">
          <Link to="/upload" className="patient-button">
            Upload Report
          </Link>
          <Link to="/history" className="patient-button">
            View History
          </Link>
          <Link to="/" className="patient-button">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
