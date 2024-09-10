import { useNavigate } from "react-router-dom";
import { getEmotionImage } from "../util/get-emotion-img";
import Button from "./Button";
import "./DiaryItem.css";
import PropTypes from "prop-types"; // Import PropTypes

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  const goDiaryPage = () => {
    nav(`/diary/${id}`);
  };

  const goEditPage = () => {
    nav(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDiaryPage}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} alt="Emotion" />
      </div>
      <div onClick={goDiaryPage} className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button onClick={goEditPage} text={"EDIT"} />
      </div>
    </div>
  );
};

// Define prop types for validation
DiaryItem.propTypes = {
  id: PropTypes.number.isRequired,
  emotionId: PropTypes.number.isRequired,
  createdDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  content: PropTypes.string.isRequired,
};

export default DiaryItem;
