import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../../component/common/Search";

const ViewStudent = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:8080/students");
    setStudents(result.data);
  };

  const handleDelete = async (id) => {
    await axios.post(`http://localhost:8080/students/student/delete/${id}`);
    loadStudents();
  };

  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <section style={styles}>
      <Search search={search} setSearch={setSearch} />
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>İsminiz</th>
            <th>Soyisminiz</th>
            <th>Email</th>
            <th>Departman</th>
            <th colSpan="3">İşlemler</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {students
            .filter((st) => st.firstName.toLowerCase().includes(search))
            .map((student, index) => (
              <tr key={student.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.department}</td>
                <td className="mx-2">
                  <Link
                    to={`/profile-student/${student.id}`}
                    className="btn btn-info"
                  >
                    <FaEye />
                  </Link>
                </td>
                <td className="mx-2">
                  <Link
                    to={`/edit-student/${student.id}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(student.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default ViewStudent;
