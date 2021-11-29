import styled from "@emotion/styled";

export const MusicasGridContainer = styled.div`
  grid-column: 4 / -2;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 1fr;

  grid-column-gap: 20px;
  grid-row-gap: 40px;
  margin-top: 12px;

  @media only screen and (max-width: 1480px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 840px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
