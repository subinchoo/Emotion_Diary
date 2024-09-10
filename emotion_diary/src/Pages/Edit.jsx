import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  return <div>{params.id}Diary Edit page</div>;
};

export default Edit;
