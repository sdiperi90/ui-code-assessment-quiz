import styled from "styled-components";

export const ScH1 = styled.h1`
  font-size: 24px;
  font-family: Helvetica;
  font-weight: 700;
  padding-bottom: 15px;
`;

export const ScP = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  font-family: Helvetica;
  font-weight: 400;
  padding-bottom: 5px;
`;

export const ScStrong = styled.strong`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  font-family: Helvetica;
  font-weight: 700;
`;
