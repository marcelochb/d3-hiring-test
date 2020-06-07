import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      elements: string;
      inputs: string;
      background: string;
      text: string;
    };
    fontSize: {
      base: string;
      large: string;
      lagest: string;
      small: string;
      smallest: string;
    };
    spacing: {
      marginBase: string;
      marginLarge: string;
      marginLagest: string;
      marginSmall: string;
      marginSmallest: string;
      paddingBase: string;
      paddingLarge: string;
      paddingLagest: string;
      paddingSmall: string;
      paddingSmallest: string;
      desktopWidth: string;
      mobileWidth: string;
      inputHeight: string;
      inputWidthBase: string;
      inputWidthDouble: string;
      radius: string;
    };
  }
}
