import styled from "styled-components";

export const Container = styled.div`
  padding-top: ${(props) => props.theme.spacing.paddingLagest};
  padding-bottom: ${(props) => props.theme.spacing.paddingLarge};
  padding-left: ${(props) => props.theme.spacing.paddingBase};
  padding-right: ${(props) => props.theme.spacing.paddingBase};
  margin: 0 auto;

  @media only screen and (min-width: 1500px) {
    width: ${(props) => props.theme.spacing.desktopWidth};
  }

  @media only screen and (max-width: 787px) {
    width: ${(props) => props.theme.spacing.mobileWidth};
    padding-left: ${(props) => props.theme.spacing.paddingSmall};
    padding-right: ${(props) => props.theme.spacing.paddingSmall};
  }
`;

export const FormFilter = styled.div`
  padding-top: ${(props) => props.theme.spacing.paddingLagest};
  display: flex;
  justify-content: space-between;
`;
