import styled from "styled-components";

const StyledTaskInput = styled.input.attrs(() => ({
  type: "text",
}))`
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  font-size: 24px;
  line-height: 1.4em;
  width: 100%;
  outline: none;
  background: #fefefe;
  box-sizing: border-box;
`;

export default StyledTaskInput;
