import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose} from 'react-icons/md';

export const GridSection = styled.div`
  padding: 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 50px;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const GridHeading = styled.div`
  color: #fff;
  font-size: 48px;
  line-height: 1.1;
  margin-bottom: 24px;
  margin-right: auto;
`;

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const GridCard = styled.div`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 240px;
  height: 360px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(1) {
    margin: 8px;
  }
  &:nth-child(2) {
    margin: 8px;
  }  
  &:nth-child(3) {
    margin: 8px;
  }
  &:nth-child(4) {
    margin: 8px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.5s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 1080px) {
    width: 100%;

    &:hover {
      transform: none;
    }
  }
`;

export const GridCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const ImgWrapper = styled(Link)`
max-width: 300px;
display: flex;
justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;
`;

export const GridCardIcon = styled.div`
  margin: 24px 0;
`;

export const GridCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const GridCardCost = styled.h4`
  font-size: 40px;
`;

export const GridCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const GridCardFeatures = styled.ul`
  margin: 5px 0 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const GridCardFeature = styled.li`
  margin-bottom: 10px;
`;

export const Modal = styled.div`
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 960px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #242424;
  color: #000;
  position: relative;
  border-radius: 10px;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
  padding-bottom: 60px;
  padding-top: 0px
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;