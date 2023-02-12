import { Fragment, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import { errorToast, isEmpty, successToast } from "../../helpers/validation";
import FullScreenLoader from "../common/FullScreenLoader";
import { ReadById, Update } from "../../services/CRUD";
import { useNavigate } from "react-router";

function UpdateForm({ id }) {
  const navigate = useNavigate();

  let firstName,
    lastName,
    email,
    mobile,
    department,
    semester,
    shift,
    loader = useRef();

  const updateStudent = () => {
    let FirstName = firstName.value;
    let LastName = lastName.value;
    let Email = email.value;
    let Mobile = mobile.value;
    let Department = department.value;
    let Semester = semester.value;
    let Shift = shift.value;

    if (isEmpty(FirstName)) {
      errorToast("First Name Required");
    } else if (isEmpty(LastName)) {
      errorToast("Last Name Required");
    } else if (isEmpty(Email)) {
      errorToast("Email Name Required");
    } else if (isEmpty(Mobile)) {
      errorToast("Mobile Number Required");
    } else if (isEmpty(Department)) {
      errorToast("Department Required");
    } else if (isEmpty(Semester)) {
      errorToast("Semester Required");
    } else if (isEmpty(Shift)) {
      errorToast("Shift Required");
    } else {
      loader.classList.remove("d-none");

      Update(id, FirstName, LastName, Email, Mobile, Department, Semester, Shift).then(
        (result) => {
          if (result === true) {
            successToast("Student updated successfully");
            navigate("/");
          } else {
            errorToast("Student not updated. Try again.");
          }
        }
      );
    }
  };

  useEffect(() => {
    ReadById(id).then((result) => {
      loader.classList.add("d-none");

      firstName.value = result.firstName;
      lastName.value = result.lastName;
      email.value = result.email;
      mobile.value = result.mobile;
      department.value = result.department;
      semester.value = result.semester;
      shift.value = result.shift;
    });
  }, []);

  return (
    <Fragment>
      <div className="container my-5">
        <div className="row gx-4 gy-3 align-items-end">
          <div className="col-md-6 col-lg-4">
            <label className="mb-1">First Name</label>
            <input
              ref={(input) => (firstName = input)}
              type="text"
              className="form-control"
              placeholder="Enter first name"
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <label className="mb-1">Last Name</label>
            <input
              ref={(input) => (lastName = input)}
              type="text"
              className="form-control"
              placeholder="Enter last name"
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <label className="mb-1">Email</label>
            <input
              ref={(input) => (email = input)}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <label className="mb-1">Mobile</label>
            <input
              ref={(input) => (mobile = input)}
              type="text"
              className="form-control"
              placeholder="Enter mobile"
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <label className="mb-1">Select Department</label>
            <Form.Select ref={(input) => (department = input)}>
              <option value="computer">Computer</option>
              <option value="electrical">Electrical</option>
              <option value="electronics">Electronics</option>
              <option value="mechatronics">Mechatronics</option>
              <option value="civil">Civil</option>
            </Form.Select>
          </div>
          <div className="col-md-6 col-lg-4">
            <label className="mb-1">Select Semester</label>
            <Form.Select ref={(input) => (semester = input)}>
              <option value="first">First</option>
              <option value="second">Second</option>
              <option value="third">Third</option>
              <option value="fourth">Fourth</option>
              <option value="fifth">Fifth</option>
              <option value="sixth">Sixth</option>
              <option value="seventh">Seventh</option>
              <option value="eighth">Eighth</option>
            </Form.Select>
          </div>
          <div className="col-md-6">
            <label className="mb-1">Select Shift</label>
            <Form.Select ref={(input) => (shift = input)}>
              <option value="First">First</option>
              <option value="Second">Second</option>
            </Form.Select>
          </div>
          <div className="col-md-6">
            <button onClick={updateStudent} className="btn btn-dark w-100">
              Update Student
            </button>
          </div>
        </div>
      </div>

      <div ref={(div) => (loader = div)}>
        <FullScreenLoader />
      </div>
    </Fragment>
  );
}

export default UpdateForm;
