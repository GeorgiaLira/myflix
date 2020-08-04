import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border-radius: 2px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 187px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: 400ms;
  p {
    margin-left: 320px;
    transition: 600ms;
    background-color: transparent;
    color: transparent;
    padding: 20px;
    padding-right: 230px;
    color: #fff;
    width: 100vw;
    position: absolute;
    font-size: 14px;
    border-radius: 0 10px 0;
  }
  &:hover {
    z-index: 40;
    transform: scale(1.03);
    box-shadow: inset 0 0 1em #22252C, 0 0 1em #000000;
    p {
      z-index: 58;
      margin-left: 10px;
    }
  }
  &:not(:first-child) {
    margin-left: 20px;
  }
  @media (max-width: 810px) {
    p {
      font-size: 12px;
      padding: 10px;
    }
  }
  @media (max-width: 410px) {
    width: 178px;
    height: 77px;
    p {
      font-size: 10px;
    }
  }
`;
