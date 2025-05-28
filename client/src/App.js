import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "./HomePage";
import LoginPage from "./Login";
import DoctorPage from "./DoctorPage";
import AdminPage from "./AdminPage";
import UploadReportPage from "./UploadReportPage";
import AnalyzeResultPage from "./AnalyzeResultPage";
import MyReportsPage from "./MyReportsPage";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "./NotFoundPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <UploadReportPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-reports"
          element={
            <ProtectedRoute>
              <MyReportsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor"
          element={
            <ProtectedRoute requiredRole="doctor">
              <DoctorPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/analyze/:id"
          element={
            <ProtectedRoute>
              <AnalyzeResultPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/upload"
          element={
            <PrivateRoute>
              <UploadReportPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-reports"
          element={
            <PrivateRoute>
              <MyReportsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/analyze/:reportId"
          element={
            <PrivateRoute>
              <AnalyzeResultPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
