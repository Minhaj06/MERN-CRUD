import React from "react";
import UpdateForm from "../../components/studentCRUD/UpdateForm";
import { useParams } from "react-router-dom";

function UpdatePage() {
  let { id } = useParams();

  return (
    <div>
      <UpdateForm id={id} />
    </div>
  );
}

export default UpdatePage;
