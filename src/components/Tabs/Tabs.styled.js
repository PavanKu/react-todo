import styled, { css } from "styled-components";

const StyledTabGrp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
`;

export const StyledTab = styled.button.attrs(() => ({
  type: "button",
}))`
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;
  background: transparent;
  cursor: pointer;
  margin-right: 6px;
  &:last-child {
    margin-right: 0;
  }

  ${(props) =>
    !props.isActive &&
    css`
      :hover {
        border-color: rgba(175, 47, 47, 0.1);
      }
    `}
  ${(props) =>
    props.isActive &&
    css`
      border-color: rgba(175, 47, 47, 0.2);
    `};
`;

export default StyledTabGrp;
