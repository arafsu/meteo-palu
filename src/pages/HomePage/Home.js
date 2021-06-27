import React, { useState } from 'react';
import { homeObjOne,
         homeObjThree,
         homeObjFour,
         homeObjFive,
         homeObjSix,
         homeObjSeven,
         homeObjEight,
         Modal,
         ModalBackground,
         ModalWrapper,
         ModalImg,
         CloseModalButton
} from './Data';
import { Berita, InfoSection} from '../../components';
import { SliderData } from '../../components/SliderData/SliderData';

const Home = () => {

    const [showModal, setShowModal] = useState(true);

    return (
        <>
            <Modal>
            {showModal ?
                <ModalBackground>
                <ModalWrapper>
                    <ModalImg src={require('../../images/banner_pelayanan/3_budaya_kerja.jpg').default} alt='image'/>
                    <CloseModalButton
                    aria-label='Close modal'
                    onClick={() => setShowModal(prev1 => !prev1)}
                    />
                </ModalWrapper>
                </ModalBackground>
            : null
            }
            </Modal>
            <Berita slides={SliderData}/>
            <InfoSection {...homeObjOne} />           
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <InfoSection {...homeObjFive} />
            <InfoSection {...homeObjSix} />
            <InfoSection {...homeObjSeven} />
            <InfoSection {...homeObjEight} />            
        </>
    );
};

export default Home;
