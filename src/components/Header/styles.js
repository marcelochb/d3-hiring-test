import styled from "styled-components";

export const Content = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: bold;
  display: flex;
  height: 60px;
  padding: ${(props) => props.theme.spacing.paddingBase};
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;

  @media only screen and (min-width: 1500px) {
    width: ${(props) => props.theme.spacing.desktopWidth};
  }

  @media only screen and (max-width: 787px) {
    width: ${(props) => props.theme.spacing.mobileWidth};
    padding: 0 ${(props) => props.theme.spacing.paddingSmall};
  }
`;

export const Container = styled.header`
  background: ${(props) => props.theme.colors.elements};
  position: fixed;
  width: 100%;
`;
