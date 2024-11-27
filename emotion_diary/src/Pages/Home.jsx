import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";
import { useNavigate } from "react-router-dom";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};
const Home = (isLoading) => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const navigate = useNavigate();

  usePageTitle(`Emotion Diary`);
  const monthlyData = getMonthlyData(pivotDate, data);
  console.log(monthlyData);

  useEffect(() => {
    if (!isLoading) {
      // 로딩이 완료되면, 홈으로 이동
      navigate("/"); // 로딩 완료 후 홈으로 이동
    }
  }, [isLoading, navigate]);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div className="home-background">
      <Header
        title={`${pivotDate.getMonth() + 1} / ${pivotDate.getFullYear()}`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
