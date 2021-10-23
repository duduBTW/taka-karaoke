import styled from "@emotion/styled";

export const CantandoAgoraCardContainer = styled.div`
  grid-column: 4 / -2;
  color: white;

  border: 2px solid #2b2b2b;
  box-sizing: border-box;
  border-radius: 32px;

  padding: 20px;
  margin-top: 24px;

  display: grid;
  grid-template-columns: auto 1fr;

  grid-column-gap: 40px;

  grid-template-areas:
    "image controls"
    "image title";
`;

export const CardImage = styled.img`
  grid-area: image;

  width: 214px;
  height: 100%;

  object-fit: cover;

  border-radius: 22px;
`;

export const CardControls = styled.div`
  grid-area: controls;
  padding-top: 24px;
`;

export const CardTitle = styled.div`
  grid-area: title;

  align-self: flex-end;

  font-style: normal;
  font-weight: 300;
  font-size: 68px;
  line-height: 98px;
  letter-spacing: 0.1em;

  color: #ffffff;
`;
