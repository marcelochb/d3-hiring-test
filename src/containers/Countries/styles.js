import styled from "styled-components";

export const Container = styled.div`
  padding-top: ${(props) => props.theme.spacing.paddingBase};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
