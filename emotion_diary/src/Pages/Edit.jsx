import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const curDiaryItem = useDiary(params.id);
  usePageTitle(`${params.id} Diary Edit Page`);

  //const data = useContext(DiaryStateContext);
  // [curDiaryItem, setCurDiaryItem] = useState();

  // useEffect(() => {
  //   const currentDiaryItem = data.find(
  //     (item) => String(item.id) === String(params.id)
  //   );

  //   if (!currentDiaryItem) {
  //     window.alert("Not founded");
  //     nav("/", { replace: true });
  //   }

  //   setCurDiaryItem(currentDiaryItem);
  // }, [params.id, data]);

  const onClickDelete = () => {
    if (window.confirm("Are you sure to delete?")) {
      // 일기 삭제 로직
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("You want to edit diary?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"Edit diary"}
        leftChild={<Button onClick={() => nav(-1)} text={"< BACK"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"DELETE"} type={"NEGATIVE"} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
