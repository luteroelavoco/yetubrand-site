import styled, { css } from "styled-components";

export const Content = styled.div`
  max-width: 100vw;
  width: 98vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.2rem;
  text-align: center;

  h1 {
    font-size: 3.2rem;
    font-family: "Montserrat", sans-serif;
    color: var(--title-color);
    font-weight: 800;
  }
  p {
    line-height: 1.5;
    margin: 20px 0;
    font-weight: 300;
    max-width: 768px;
  }
`;
export const Behind = styled.aside`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 0rem 4rem;
  gap: 25px;

  @media (max-width: 991px){
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 480px){
    padding: 0rem 2rem;
  }
`;

export const Article = styled.article`
  background: var(--color-white);
  max-width: 320px;
  box-shadow: 2px 2px 10px #f5f5f5;
  border-radius: 25px;
  padding: 2rem 2rem 0 2rem;
  cursor: pointer;
  transition: 0.2s;
  position: relative;

  img {
    width: 50px;
    height: 50px;
  }

  h4 {
    font-weight: 400;
    font-size: 16px;
  }
  button {
    position: absolute;
    bottom: 20px;
    left: 0;
    right:0;
    margin-left: auto;
    margin-right: auto;
  }
  &:hover {
    box-shadow: 0px -1px 60px -35px rgba(0, 0, 0, 0.75);
  }

  
`;

export const Itens = styled.div`
  padding: 40px 0 80px 0;
`;

export const Item = styled.div`
  display: flex;
  text-align: left;
  span {
    font-size: 14px;
    font-weight: 300;
    margin-left: 8px;
  }
  img {
    height: 17px;
    width: 17px;
  }
`;