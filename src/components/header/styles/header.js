import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0;
  padding: 18px 0;
  align-items: center;

  a {
    display: flex;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;
  margin-left: 4vw;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  margin-right: 30px;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
    top left;
  background-repeat: no-repeat;
  background-size: ${({ src }) => (src ? "contain" : "cover")};
`;

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;
  margin-top: 10vw;
  margin-left: 30px;

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (min-width: 1000px) {
    margin-left: 56px;
  }
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;

  @media (max-width: 1000px) {
    font-size: 30px;
  }

  @media (max-width: 800px) {
    font-size: 20px;
  }

  @media (max-width: 550px) {
    font-size: 15px;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.p`
  margin-right: 30px;
  cursor: pointer;
  text-decoration: none;
  font-weight: ${({ active }) => (active === "true" ? "700 " : "normal")};
  color: ${({ active }) => (active === "true" ? "#fff" : "#edeef0")};

  &:hover {
    color: #bababa;
  }
`; 

export const Picture = styled.button`
  background-image: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-right: 4vw;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 100px;
  top: 35px;
  right: 10px;
  border-radius: 5px;

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Frame = styled(Container)`
  position: fixed;
  width: 100%;
  z-index: 1000;
  background: ${(props) =>
    props.isScrolled
      ? "black"
      : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 50%, rgba(0, 0, 0, 1) 100%)"};
  transition: background-color 0.3s ease;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const SearchInput = styled.input`
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  margin-left: ${({ active }) => (active === true ? "10px" : "0")};
  padding: ${({ active }) => (active === true ? " 0 10px" : "0")};
  opacity: ${({ active }) => (active === true ? "1" : "0")};
  width: ${({ active }) => (active === true ? "200px" : "0")};

  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  @media (max-width: 800px) {
    font-size: 13px;
  }

  @media (max-width: 550px) {
    font-size: 10px;
    max-width: 80px;
  }
`;
