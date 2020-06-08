import styled from "styled-components";

export const DropDownContainer = styled.div`
  width: 200px;

  @media only screen and (max-width: 787px) {
    padding-top: ${(props) => props.theme.spacing.paddingBase};
  }
`;

export const DropDownHeader = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.marginBase};
  padding: ${(props) => props.theme.spacing.paddingBase};
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.elements};
  border-radius: ${(props) => props.theme.spacing.radius};
  height: ${(props) => props.theme.spacing.inputHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    cursor: default;
  }
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 500;
`;

export const DropDownList = styled.ul`
  padding-left: ${(props) => props.theme.spacing.paddingBase};
  background: ${(props) => props.theme.colors.elements};
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.text};
  border-radius: ${(props) => props.theme.spacing.radius};
  width: 200px;
  &:hover {
    cursor: default;
  }
  &:first-child {
    padding-top: ${(props) => props.theme.spacing.paddingSmall};
  }
  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing.marginSmallest};
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: ${(props) => props.theme.spacing.marginLagest};
  &:hover {
    cursor: default;
  }
`;
