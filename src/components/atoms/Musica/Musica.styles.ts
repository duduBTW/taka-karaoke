import styled from "@emotion/styled";

export const MusicaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MusicaImage = styled.img`
  border-radius: 22px;
  object-fit: cover;

  width: 100%;
  height: 300px;
`;

export const MusicaLabel = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;

  letter-spacing: 0.1em;

  color: #ffffff;
`;
