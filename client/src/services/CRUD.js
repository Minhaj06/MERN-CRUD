import axios from "axios";

export function Create(firstName, lastName, email, mobile, department, semester, shift) {
  let URL = `/api/v1/createStudent`;
  let postBody = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    mobile: mobile,
    department: department,
    semester: semester,
    shift: shift,
  };
  return axios
    .post(URL, postBody)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

export function Read() {
  let URL = `/api/v1/readStudents`;
  return axios
    .get(URL)
    .then((res) => {
      if (res.status === 200) {
        return res.data["data"];
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

export function ReadById(id) {
  let URL = `/api/v1/readStudentById/${id}`;
  return axios
    .get(URL)
    .then((res) => {
      if (res.status === 200) {
        return res.data["data"];
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

export function Delete(id) {
  let URL = `/api/v1/deleteStudent/${id}`;
  return axios
    .delete(URL)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

export function Update(id, firstName, lastName, email, mobile, department, semester, shift) {
  let URL = `/api/v1/updateStudent/${id}`;
  let postBody = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    mobile: mobile,
    department: department,
    semester: semester,
    shift: shift,
  };

  return axios
    .put(URL, postBody)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}
