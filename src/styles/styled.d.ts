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
  }
}
