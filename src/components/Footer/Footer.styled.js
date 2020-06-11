import styled, { css } from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background: #fefefe;
`;

export const StyledRemainingContainer = styled.div`
  flex: 1;
  background: #fff;
`;

export const StyledClearBtnContainer = styled.div`
  background: #fff;
  margin-left: 30px;
  ${(props) =>
    props.show &&
    css`
      visibility: visible;
    `}
  ${(props) =>
    !props.show &&
    css`
      visibility: hidden;
    `}
`;

export default StyledFooter;
