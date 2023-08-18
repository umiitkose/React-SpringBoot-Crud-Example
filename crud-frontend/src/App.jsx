import "./App.css";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./component/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./pages/student/AddStudent";
import ViewStudent from "./pages/student/ViewStudent";
import EditStudent from "./pages/student/EditStudent";
import ProfileStudent from "./pages/student/ProfileStudent";

function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/view-students" element={<ViewStudent />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
          <Route path="/profile-student/:id" element={<ProfileStudent />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
