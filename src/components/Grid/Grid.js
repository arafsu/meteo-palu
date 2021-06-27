import React, { useState }from 'react';
import { Button } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
  GridSection,
  GridWrapper,
  GridHeading,
  GridContainer,
  GridCard,
  GridCardInfo,
  GridCardIcon,
  GridCardFeatures,
  GridCardFeature,
  Img,
  ImgWrapper,
  Modal,
  ModalBackground,
  ModalWrapper,
  ModalImg,
  CloseModalButton
} from './Grid.elements';

const Grid = ({
  img1, img2, img3, img4,
  alt,
  start
}) => {

  const [showModal1, setShowModal1] = useState(false);
  const openModal1 = () => {
    setShowModal1(prev1 => !prev1);
  };

  const [showModal2, setShowModal2] = useState(false);
  const openModal2 = () => {
    setShowModal2(prev2 => !prev2);
  };

  const [showModal3, setShowModal3] = useState(false);
  const openModal3 = () => {
    setShowModal3(prev3 => !prev3);
  };

  const [showModal4, setShowModal4] = useState(false);
  const openModal4 = () => {
    setShowModal4(prev4 => !prev4);
  };

  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <Modal>
          {showModal1 ?
            <ModalBackground>
              <ModalWrapper showModal1={showModal1}>
                <ModalImg src={img1} alt='camera'/>
                <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal1(prev1 => !prev1)}
                />
              </ModalWrapper>
            </ModalBackground>
           : null}
      </Modal>
      <Modal>
          {showModal2 ?(
            <ModalBackground>
              <ModalWrapper showModal2={showModal2}>
                <ModalImg src={img2} alt='camera'/>
                <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal2(prev2 => !prev2)}
                />
              </ModalWrapper>
            </ModalBackground>
          ) : null}
      </Modal>
      <Modal>
          {showModal3 ?(
            <ModalBackground>
              <ModalWrapper showModal3={showModal3}>
                <ModalImg src={img3} alt='camera'/>
                <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal3(prev3 => !prev3)}
                />
              </ModalWrapper>
            </ModalBackground>
          ) : null}
      </Modal>
      <Modal>
          {showModal4 ?(
            <ModalBackground>
              <ModalWrapper showModal4={showModal4}>
                <ModalImg src={img4} alt='camera'/>
                <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal4(prev4 => !prev4)}
                />
              </ModalWrapper>
            </ModalBackground>
          ) : null}
      </Modal>
      <GridSection>        
        <GridWrapper>
          <GridHeading>Citra Satelit</GridHeading>
          <GridContainer>
            <GridCard>
              <GridCardInfo>
                <GridCardIcon>
                <ImgWrapper to='/meteorologi' start={start}>
                    <Img src={img1} alt={alt} />
                    </ImgWrapper>
                </GridCardIcon>                
                <GridCardFeatures>
                  <GridCardFeature>Satelit Himawari EH</GridCardFeature>
                </GridCardFeatures>
                <Button onClick={openModal1} primary>Perbesar...</Button>
              </GridCardInfo>
            </GridCard>
            <GridCard>
              <GridCardInfo>              
                <GridCardIcon>
                <ImgWrapper to='/meteorologi' start={start}>
                    <Img src={img2} alt={alt} />
                    </ImgWrapper>
                </GridCardIcon>                
                <GridCardFeatures>
                  <GridCardFeature>Satelit Himawari NC</GridCardFeature>
                </GridCardFeatures>
                <Button onClick={openModal2} primary>Perbesar...</Button>
              </GridCardInfo>
            </GridCard>
            <GridCard>
              <GridCardInfo>
                <GridCardIcon>
                <ImgWrapper to='/meteorologi' start={start}>
                    <Img src={img3} alt={alt} />
                    </ImgWrapper>
                </GridCardIcon>                
                <GridCardFeatures>
                  <GridCardFeature>Satelit Himawari WE</GridCardFeature>
                </GridCardFeatures>
                <Button onClick={openModal3} primary>Perbesar...</Button>
              </GridCardInfo>
            </GridCard>
            <GridCard>
              <GridCardInfo>
                <GridCardIcon>
                <ImgWrapper to='/meteorologi' start={start}>
                    <Img src={img4} alt={alt} />
                    </ImgWrapper>
                </GridCardIcon>                
                <GridCardFeatures>
                  <GridCardFeature>Hourly Precipitation</GridCardFeature>
                </GridCardFeatures>
                <Button onClick={openModal4} primary>Perbesar...</Button>
              </GridCardInfo>
            </GridCard>
          </GridContainer>         
        </GridWrapper>
        <GridWrapper>
          <GridHeading>Prakiraan Cuaca</GridHeading>
          <GridContainer>
            <GridCard>
              <GridCardInfo>
                <GridCardIcon>
                <ImgWrapper to='/meteorologi' start={start}>
                    <Img src={img1} alt={alt} />
                    </ImgWrapper>
                </GridCardIcon>                
                <GridCardFeatures>
                  <GridCardFeature>Satelit Himawari EH</GridCardFeature>
                </GridCardFeatures>
                <Button onClick={openModal1} primary>Perbesar...</Button>
              </GridCardInfo>
            </GridCard>
            <GridCard>
              <GridCardInfo>              
                <GridCardIcon>
                <ImgWrapper to='/meteorologi' start={start}>
                    <Img src={img2} alt={alt} />
                    </ImgWrapper>
                </GridCardIcon>                
                <GridCardFeatures>
                  <GridCardFeature>Satelit Himawari NC</GridCardFeature>
                </GridCardFeatures>
                <Button onClick={openModal2} primary>Perbesar...</Button>
              </GridCardInfo>
            </GridCard>
            <GridCard>
              <GridCardInfo>
                <GridCardIcon>
                <ImgWrapper to='/meteorologi' start={start}>
                    <Img src={img3} alt={alt} />
                    </ImgWrapper>
                </GridCardIcon>                
                <GridCardFeatures>
                  <GridCardFeature>Satelit Himawari WE</GridCardFeature>
                </GridCardFeatures>
                <Button onClick={openModal3} primary>Perbesar...</Button>
              </GridCardInfo>
            </GridCard>
            <GridCard>
              <GridCardInfo>
                <GridCardIcon>
                <ImgWrapper to='/meteorologi' start={start}>
                    <Img src={img4} alt={alt} />
                    </ImgWrapper>
                </GridCardIcon>                
                <GridCardFeatures>
                  <GridCardFeature>Hourly Precipitation</GridCardFeature>
                </GridCardFeatures>
                <Button onClick={openModal4} primary>Perbesar...</Button>
              </GridCardInfo>
            </GridCard>
          </GridContainer>         
        </GridWrapper>
        <GridWrapper>
          <GridHeading>Peringatan Dini Cuaca</GridHeading>
          <GridContainer>
            <GridCard>
              <GridCardInfo>
                <GridCardIcon>
                <ImgWrapper to='/meteorologi' start={start}>
                    <Img src={img1} alt={alt} />
                    </ImgWrapper>
                </GridCardIcon>                
                <GridCardFeatures>
                  <GridCardFeature>Satelit Himawari EH</GridCardFeature>
                </GridCardFeatures>
                <Button onClick={openModal1} primary>Perbesar...</Button>
              </GridCardInfo>
            </GridCard>
            <GridCard>
              <GridCardInfo>              
                <GridCardIcon>
                <ImgWrapper to='/meteorologi' start={start}>
                    <Img src={img2} alt={alt} />
                    </ImgWrapper>
                </GridCardIcon>                
                <GridCardFeatures>
                  <GridCardFeature>Satelit Himawari NC</GridCardFeature>
                </GridCardFeatures>
                <Button onClick={openModal2} primary>Perbesar...</Button>
              </GridCardInfo>
            </GridCard>
            <GridCard>
              <GridCardInfo>
                <GridCardIcon>
                <ImgWrapper to='/meteorologi' start={start}>
                    <Img src={img3} alt={alt} />
                    </ImgWrapper>
                </GridCardIcon>                
                <GridCardFeatures>
                  <GridCardFeature>Satelit Himawari WE</GridCardFeature>
                </GridCardFeatures>
                <Button onClick={openModal3} primary>Perbesar...</Button>
              </GridCardInfo>
            </GridCard>
            <GridCard>
              <GridCardInfo>
                <GridCardIcon>
                <ImgWrapper to='/meteorologi' start={start}>
                    <Img src={img4} alt={alt} />
                    </ImgWrapper>
                </GridCardIcon>                
                <GridCardFeatures>
                  <GridCardFeature>Hourly Precipitation</GridCardFeature>
                </GridCardFeatures>
                <Button onClick={openModal4} primary>Perbesar...</Button>
              </GridCardInfo>
            </GridCard>
          </GridContainer>         
        </GridWrapper>
      </GridSection>
    </IconContext.Provider>
  );
};
export default Grid;
