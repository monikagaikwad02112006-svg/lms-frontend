import { Routes, Route, Navigate } from "react-router-dom";

import Attendance from "../pages/Student/Attendance";
import Assignments from "../pages/Student/Assignments";
import Dashboard from "../pages/Student/Dashboard";
import Calendar from "../pages/Student/Calendar";
import Certificates from "../pages/Student/Certificates";
import Doubts from "../pages/Student/Doubts";
import Forum from "../pages/Student/Forum";
import Notes from "../pages/Student/Notes";
import NotesLibrary from "../pages/Student/NotesLibrary";
import Quizzes from "../pages/Student/Quizzes";
import RecordedVideos from "../pages/Student/RecordedVideos";
import SubjectPage from "../pages/Student/SubjectPage";
import TeacherDirectory from "../pages/Student/TeacherDirectory";
import Videos from "../pages/Student/Videos";
import TeacherLogin from "../pages/Teacher/TeacherLogin";
import TeacherDashboard from "../pages/Teacher/TeacherDashboard";
import StudentProfile from "../pages/Student/Profile";
import AssignmentManagement from "../pages/Teacher/AssignmentManagement";
import Analytics from "../pages/Teacher/Analytics";
import Announcements from "../pages/Teacher/Announcements";
import StudentAttendance from "../pages/Teacher/StudentAttendance";
import QuizManagement from "../pages/Teacher/QuizManagement";
import TodaysClasses from "../pages/Teacher/TodaysClasses";
import UploadNotes from "../pages/Teacher/UploadNotes";
import VideoManagement from "../pages/Teacher/VideoManagement";
import Clock from "../pages/Teacher/Clock";
import TeacherProfile from "../pages/Teacher/Profile";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import ApproveContent from "../pages/Admin/ApproveContent";
import ManageBatches from "../pages/Admin/ManageBatches";
import ManageStudents from "../pages/Admin/ManageStudents";
import ManageSubjects from "../pages/Admin/ManageSubjects";
import ManageTeachers from "../pages/Admin/ManageTeachers";
import Notifications from "../pages/Admin/Notifications";
import Reports from "../pages/Admin/Reports";
import Settings from "../pages/Admin/Settings";
import SuperAdminDashboard from "../pages/SuperAdmin/Dashboard";
import SystemAnalytics from "../pages/SuperAdmin/SystemAnalytics";
import BranchManagement from "../pages/SuperAdmin/BranchManagement";
import BackupPlaceholder from "../pages/SuperAdmin/BackupPlaceholder";
import AuditLogs from "../pages/SuperAdmin/AuditLogs";
import RolePermissions from "../pages/SuperAdmin/RolePermissions";
import InstituteSettings from "../pages/SuperAdmin/InstituteSettings";
import Profile from "../pages/SuperAdmin/Profile";
import Login from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import Signup from "../pages/Auth/Signup";
import Home from "../pages/Home/Home";


export default function AppRoutes() {
  return (
    <Routes>
      <Route
  path="/"
  element={<Home />}
/>

      <Route
        path="/student/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/student/attendance"
        element={<Attendance />}
      />

      <Route
        path="/student/assignments"
        element={<Assignments />}
      />

      <Route
        path="/student/calendar"
        element={<Calendar />}
      />

     <Route
  path="/student/certificates"
  element={<Certificates />}
/> 
<Route
  path="/student/doubts"
  element={<Doubts />}
/>
<Route
  path="/student/forum"
  element={<Forum />}
/>
<Route
  path="/student/notes"
  element={<Notes />}
/>
<Route
  path="/student/notes-library"
  element={<NotesLibrary />}
/>
<Route
 path="/student/quizzes"
 element={<Quizzes />}
/>
<Route
 path="/student/recorded-videos"
 element={<RecordedVideos />}
/>
<Route
 path="/student/subjects"
 element={<SubjectPage />}
/>
<Route
 path="/student/teachers"
 element={<TeacherDirectory />}
/>
<Route
 path="/student/videos"
 element={<Videos />}
/>
<Route
  path="/student/profile"
  element={<StudentProfile />}
/>
<Route
  path="/teacher/login"
  element={<TeacherLogin />}
/>
<Route
  path="/teacher/dashboard"
  element={<TeacherDashboard />}
/>
<Route
  path="/teacher/assignment-management"
  element={<AssignmentManagement />}
/>
<Route
  path="/teacher/analytics"
  element={<Analytics />}
/>

<Route
  path="/teacher/announcements"
  element={<Announcements />}
/>

<Route
  path="/teacher/studentattendance"
  element={<StudentAttendance />}
/>
<Route
  path="/teacher/quizmanagement"
  element={<QuizManagement />}
/>
<Route
  path="/teacher/todays-classes"
  element={<TodaysClasses />}
/>
<Route
  path="/teacher/upload-notes"
  element={<UploadNotes />}
/>
<Route
  path="/teacher/videos"
  element={<VideoManagement />}
/>
<Route
  path="/teacher/clock"
  element={<Clock />}
/>
<Route
  path="/teacher/profile"
  element={<TeacherProfile />}
/>

<Route
  path="/admin/dashboard"
  element={<AdminDashboard />}
/>
<Route
  path="/admin/approve-content"
  element={<ApproveContent />}
/>
<Route
  path="/admin/manage-batches"
  element={<ManageBatches />}
/>
<Route
  path="/admin/manage-students"
  element={<ManageStudents />}
/>
<Route
  path="/admin/manage-subjects"
  element={<ManageSubjects />}
/>
<Route
  path="/admin/manage-teachers"
  element={<ManageTeachers />}
/>
<Route
  path="/admin/notifications"
  element={<Notifications />}
/>
<Route
  path="/admin/reports"
  element={<Reports />}
/>
<Route
  path="/admin/settings"
  element={<Settings />}
/>
<Route
  path="/superadmin/dashboard"
  element={<SuperAdminDashboard />}
/>
<Route
  path="/superadmin/system-analytics"
  element={<SystemAnalytics />}
/>
<Route
  path="/superadmin/branch-management"
  element={<BranchManagement />}
/>
<Route
  path="/superadmin/backup"
  element={<BackupPlaceholder />}
/>
<Route
  path="/superadmin/audit-logs"
  element={<AuditLogs />}
/>
<Route
  path="/superadmin/role-permissions"
  element={<RolePermissions />}
/>
<Route
  path="/superadmin/institute-settings"
  element={<InstituteSettings />}
/>
<Route
  path="/superadmin/profile"
  element={<Profile />}
/>
<Route
  path="/login"
  element={<Login />}
/>
<Route path="/forgot-password" element={<ForgotPassword />} />
<Route
  path="/reset-password"
  element={<ResetPassword />}
/>

<Route
  path="/signup"
  element={<Signup />}
/>
<Route path="/student/dashboard" element={<Dashboard />} />

<Route path="/teacher/dashboard" element={<TeacherDashboard />} />

<Route path="/admin/dashboard" element={<AdminDashboard />} />

<Route
  path="/superadmin/dashboard"
  element={<SuperAdminDashboard />}
/>

    </Routes>
  );
}