import StyledTodoDate from "../../styled/todoDate";
import StyledDate from "../../styled/date";
import React from "react";
import StyledDay from "../../styled/day";
import { getDate } from "../../utils/utilDate";

class TodoDate extends React.Component {
  render() {
    return (
      <StyledTodoDate>
        <StyledDate>
          <StyledDay>{getDate("day")}</StyledDay>
          <div>
            <div>{getDate("month")}</div>
            <div>{getDate("year")}</div>
          </div>
        </StyledDate>
        <div>{getDate("weekday").toUpperCase()}</div>
      </StyledTodoDate>
    );
  }
}

export default React.memo(TodoDate);
