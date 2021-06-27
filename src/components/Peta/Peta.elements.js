import styled from "styled-components";

export const PetaSection = styled.div`
  padding: 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #101522;
`;

export const PetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PetaHeading = styled.div`
  color: #fff;
  font-size: 48px;
  line-height: 1.1;
  margin-bottom: 24px;
  margin-right: auto;
`;

export const PetaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid black;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const Subtitle = styled.p`
max-width: 960px;
margin-top: 10px;
margin-bottom: 0px;
margin-right: auto;
font-size: 18px;
line-height: 24px;
color: #fff;
`;