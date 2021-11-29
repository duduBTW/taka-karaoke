import styled from "@emotion/styled";

export const MusicaImage = styled.img`
  border-radius: 22px;
  object-fit: cover;

  width: 100%;
  height: 140px;
`;

export const MusicaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: opacity 0.2s ease;
  position: relative;

  &:hover {
    ${MusicaImage} {
      transition: opacity 0.2s ease;
      opacity: 0.82;
    }
  }
`;

export const MusicaLabel = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.1em;

  color: rgba(255, 255, 255, 0.82);
`;

export const MusicaExcluir = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;

  letter-spacing: 0.1em;

  color: white;

  position: absolute;
  top: 12px;
  right: 12px;

  z-index: 2;

  cursor: pointer;
`;
