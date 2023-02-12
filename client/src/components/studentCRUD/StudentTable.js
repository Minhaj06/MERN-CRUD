import React, { useEffect, useState } from "react";
import { Delete, Read } from "../../services/CRUD";
import { errorToast, successToast } from "../../helpers/validation";
import FullScreenLoader from "../common/FullScreenLoader";
import { useNavigate } from "react-router";

function StudentTable(props) {
  let [studentList, setStudentList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Read().then((result) => {
      setStudentList(result);
    });
  }, []);

  const deleteStudent = (id) => {
    Delete(id).then((result) => {
      if (result === true) {
        successToast("Student successfully deleted");
        setStudentList(studentList.filter((student) => student._id !== id));
      } else {
        errorToast("Request failed. Try again");
      }
    });
  };

  const updateStudent = (id) => {
    navigate(`/update/${id}`);
  };

  if (studentList.length > 0) {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table text-capitalize align-middle">
                <thead>
                  <tr>
                    <th>Sl No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Department</th>
                    <th>Semester</th>
                    <th>Shift</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {studentList.map((item, i) => {
                    return (
                      <tr key={item._id}>
                        <td>{i + 1}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td className="text-lowercase">{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.department}</td>
                        <td>{item.semester}</td>
                        <td>{item.shift}</td>
                        <td>
                          <div className="btn-group">
                            <button
                              onClick={updateStudent.bind(this, item._id)}
                              className="btn btn-warning"
                            >
                              Edit
                            </button>
                            <button
                              onClick={deleteStudent.bind(this, item._id)}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <FullScreenLoader />
      </div>
    );
  }
}

export default StudentTable;
