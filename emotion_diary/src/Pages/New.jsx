import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  usePageTitle("New Diary");

  // useEffect(() => {
  //   const $title = document.getElementsByTagName("title")[0];
  //   $title.innerText = "New Diary";
  // }, []);

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"NEW DIARY"}
        leftChild={<Button onClick={() => nav(-1)} text={"< BACK"} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
