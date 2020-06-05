import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${(props) => props.theme.colors.elements};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
`;
