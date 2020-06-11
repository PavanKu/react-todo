import styled, { css } from "styled-components";

export const StyledCheckBox = styled.input.attrs((props) => ({
  type: "checkbox",
  checked: props.isCompleted,
}))`
  position: relative;
  width: 0px;
  height: 0px;
  :before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border: 1px solid #f0f0f0;
    border-radius: 50%;
    top: -25px;
    left: 10px;
    cursor: pointer;
  }
  :checked:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 16px;
    border-bottom: 2px solid #6cc9b7;
    border-right: 2px solid #6cc9b7;
    left: 20px;
    top: -20px;
    transform: rotate(45deg);
    cursor: pointer;
  }
`;
export const StyledTaskLabel = styled.label`
  word-break: break-all;
  padding: 15px 15px 15px 60px;
  display: inline-block;
  line-height: 1.2;
  transition: color 0.4s;
  cursor: pointer;
  ${(props) =>
    props.isCompleted &&
    css`
      color: #d9d9d9;
      text-decoration: line-through;
    `}
`;
export const StyledTaskDelete = styled.button`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  :after {
    content: "×";
  }
`;

const StyledTask = styled.div`
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  background: #fefefe;
`;

export default StyledTask;
