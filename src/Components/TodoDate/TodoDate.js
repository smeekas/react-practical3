import TodoDateDiv from "../../styled/todoDate";
import DateDiv from "../../styled/date";
import DayDiv from "../../styled/day";

function TodoDate() {
  const currentTime = new Date();
  const weekday = currentTime.toLocaleDateString("en-US", { weekday: "long" });
  const month = currentTime.toLocaleDateString("en-US", { month: "short" });
  const day = currentTime.toLocaleDateString("en-US", { day: "numeric" });
  const year = currentTime.toLocaleDateString("en-US", { year: "numeric" });

  return (
    <TodoDateDiv>
      <DateDiv>
        <DayDiv>{currentTime.getMinutes()}</DayDiv>
        <div>
          <div>{month}</div>
          <div>{year}</div>
        </div>
      </DateDiv>
      <div>{weekday.toUpperCase()}</div>
    </TodoDateDiv>
  );
}
export default TodoDate;
