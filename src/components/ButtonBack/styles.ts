import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.elements};
  padding: ${(props) => props.theme.spacing.paddingSmallest};
  width: 120px;
  border-radius: ${(props) => props.theme.spacing.radius};
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.3);
`;

export const TextButton = styled.text`
  color: ${(props) => props.theme.colors.text};
  margin-left: ${(props) => props.theme.spacing.marginLarge};
`;
