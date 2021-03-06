import styled from "styled-components";
import colors from "../../../shared/style/colors";

const StyledTodoCard = styled.div`
  min-height: 80px;
  min-width: 200px;
  max-width: 320px;
  padding: 12px 8px 12px 12px;
  margin: 32px 16px;
  background-color: rgba(0, 188, 205, 0.2);
  border-radius: 8px;
  box-shadow: 0 0 4px 2px rgba(0, 188, 205, 0.3);
`;

const TodoHeader = styled.div`
  padding-right: 56px;
`;

const HeaderText = styled.div`
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: ${colors.primaryDark};
`;

const TodoBody = styled.div`
  padding-top: 16px;
`;

export { TodoHeader, HeaderText, TodoBody };

export default StyledTodoCard;
