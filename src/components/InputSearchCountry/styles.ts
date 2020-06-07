import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.elements};
  border-radius: ${(props) => props.theme.spacing.radius};
  height: ${(props) => props.theme.spacing.inputHeight};
  width: ${(props) => props.theme.spacing.inputWidthDouble};
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing.paddingBase} 0;
  padding-left: ${(props) => props.theme.spacing.paddingBase};
`;

export const InputSearch = styled.input`
  background: ${(props) => props.theme.colors.elements};
  padding-left: ${(props) => props.theme.spacing.paddingBase};
  color: ${(props) => props.theme.colors.text};
  border: none;
  ::placeholder {
    color: ${(props) => props.theme.colors.text};
  }
`;
