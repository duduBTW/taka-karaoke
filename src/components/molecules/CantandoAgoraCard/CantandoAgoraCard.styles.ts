import styled from "@emotion/styled";

export const CantandoAgoraCardContainer = styled.div`
  grid-column: 4 / -2;
  color: white;

  border: 2px solid #2b2b2b;
  box-sizing: border-box;
  border-radius: 32px;

  padding: 22px;
  margin-top: 12px;

  display: grid;
  grid-template-columns: auto 1fr;

  grid-column-gap: 20px;

  grid-template-areas:
    "image controls"
    "image title";
`;

export const CardImage = styled.img`
  grid-area: image;

  width: 244px;
  height: 140px;

  object-fit: cover;

  border-radius: 22px;

  cursor: pointer;

  transition: opacity 0.2s ease;

  &:hover {
    transition: opacity 0.2s ease;
    opacity: 0.82;
  }
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
  font-size: 58px;
  line-height: 58px;
  letter-spacing: 0.1em;

  color: #ffffff;
`;
