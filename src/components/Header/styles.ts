import styled from "styled-components";

export const HeaderHTML = styled.header`
  width: 100%;
`

export const Container = styled.div`
  padding: 16px 32px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textColor};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`