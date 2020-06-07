import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colors.elements};
  color: ${(props) => props.theme.colors.text};
  border-width: 0;
  margin-left: ${(props) => props.theme.spacing.marginBase};
`;
