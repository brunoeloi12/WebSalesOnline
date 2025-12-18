import styled from 'styled-components';

export const BodyLogin = styled.body`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
export const BackgrounImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
`;

export const ContainerLoginLeft = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 100vh;
  max-width: 741px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LogoLogin = styled.img`
  width: 100px;
  height: auto;
`;
