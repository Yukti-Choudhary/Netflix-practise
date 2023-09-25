import styled from "styled-components/macro";

export const Container = styled.div``;

export const Button = styled.button`
  background-color: #e50914;
  border-color: #ff0a16;
  width: 12vw;
  max-width: 115px;
  min-width: 60px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 18px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }

  @media (max-width: 1000px) {
    font-size: 16px;
    height: 38px;
  }

  @media (max-width: 600px) {
    font-size: 13px;
    height: 30px;
  }
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  margin: auto;

  video {
    width: 100%;
    height: 100%;
  }
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);

  video {
    width: 100vw;
    height: 100vh;
  }
`;

export const Close = styled.div`
  position: absolute;
  right: 35px;
  top: 15px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  color: white;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
`;
