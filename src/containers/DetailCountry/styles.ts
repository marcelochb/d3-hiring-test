import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.spacing.paddingBase};
  padding-top: ${(props) => props.theme.spacing.paddingLagest};
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

export const Content = styled.div`
  padding-top: ${(props) => props.theme.spacing.paddingLagest};
`;

export const CountryContainer = styled.div`
  padding-top: ${(props) => props.theme.spacing.paddingLagest};
  display: flex;
`;

export const CountryDataContent = styled.div`
  display: flex;
  width: 600px;
`;
export const CountryDataItens = styled.div`
  padding-top: ${(props) => props.theme.spacing.paddingBase};
  padding-bottom: ${(props) => props.theme.spacing.paddingLagest};
  width: 500px;
  margin-right: ${(props) => props.theme.spacing.marginBase};
`;
export const BorderCountries = styled.div`
  display: flex;
  align-items: center;
`;

export const CountryImage = styled.div`
  height: auto;
  width: 500px;

  img {
    height: auto;
    max-width: 500px;
    /* max-height: 100%; */
    width: auto;
  }
`;

export const CountryDataContainer = styled.div`
  padding: ${(props) => props.theme.spacing.paddingBase};
  width: 500px;
`;

export const LabelCountryData = styled.text`
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSize.large};
  margin-right: ${(props) => props.theme.spacing.marginBase};
`;
export const TextCountryData = styled.text`
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize.large};
`;

export const CountryDataRow = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: ${(props) => props.theme.spacing.marginSmall};
`;

export const CountryName = styled.text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSize.lagest};
  font-weight: 800;
  display: flex;
`;

export const BorderContainer = styled.div`
  background: ${(props) => props.theme.colors.elements};
  padding: ${(props) => props.theme.spacing.paddingSmallest};
  width: 100px;
  border-radius: ${(props) => props.theme.spacing.radius};
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.3);
  margin-right: ${(props) => props.theme.spacing.marginBase};
`;

export const TextBorder = styled.text`
  color: ${(props) => props.theme.colors.text};
`;
