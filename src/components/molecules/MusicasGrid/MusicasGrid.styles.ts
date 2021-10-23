import styled from "@emotion/styled";

export const MusicasGridContainer = styled.div`
  grid-column: 4 / -2;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 1fr;

  grid-column-gap: 20px;
  grid-row-gap: 40px;
  margin-top: 12px;
`;
