import TodoDateDiv from "../../styled/todoDate";
import DateDiv from "../../styled/date";
import React from "react";
import DayDiv from "../../styled/day";
import { weekday, month, year, getDay } from "../../utils/utilDate";
class TodoDate extends React.Component {
  render() {
    return (
      <TodoDateDiv>
        <DateDiv>
          <DayDiv>{getDay()}</DayDiv>
          <div>
            <div>{month}</div>
            <div>{year}</div>
          </div>
        </DateDiv>
        <div>{weekday.toUpperCase()}</div>
      </TodoDateDiv>
    );
  }
}
// function TodoDate() {
//   // console.log("date component")
//   return (
//     <TodoDateDiv>
//       <DateDiv>
//         <DayDiv>{getDay()}</DayDiv>
//         <div>
//           <div>{month}</div>
//           <div>{year}</div>
//         </div>
//       </DateDiv>
//       <div>{weekday.toUpperCase()}</div>
//     </TodoDateDiv>
//   );
// }
export default React.memo(TodoDate);
