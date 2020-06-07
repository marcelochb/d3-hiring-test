import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: ${(props) => props.theme.spacing.paddingLarge};
`;

export const CountryName = styled.text`
  color: ${(props) => props.theme.colors.text};
  font-weight: 800;
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing.marginLarge};
`;

export const Content = styled.div`
  background: ${(props) => props.theme.colors.elements};
  width: 290px;
  height: 350px;
`;

export const CountryImage = styled.div`
  height: 200px;
  width: 290px;

  img {
    height: auto;
    max-width: 100%;
    max-height: 100%;
    width: auto;
  }
`;

export const CountryData = styled.div`
  padding: ${(props) => props.theme.spacing.paddingBase};
`;

export const LabelCountryData = styled.text`
  font-weight: 800;
  font-size: ${(props) => props.theme.fontSize.smallest};
`;
export const TextCountryData = styled.text`
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize.smallest};
`;

export const CountryDataRow = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing.marginSmall};
`;
