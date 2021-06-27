import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Modal = styled.div`
  z-index: 20;
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
  width: 500px;
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

export const homeObjOne = {
    link: '/daftar',
    lightBg: true,
    primary: false,
    imgStart: 'start', 
    lightTopLine: false, 
    lightTextDesc: false,
    buttonLabel: 'Telusuri', 
    description: 'Kami Segenap Kru Stamet Palu akan membantu Anda dalam menyediakan kebutuhan cuaca sesuai daerah dan perajalan anda masing-masing. Cepat tepat Akurat dan Terpercaya',
    headline: 'Pelayanan Meteorologi', 
    lightText: false, 
    topLine: 'Weather Report',
    img: require('../../images/svg-1.svg').default,
    alt: 'Image',
    start: 'true'
};

export const homeObjThree = {
    link: '/pelayanan',
    primary: true,
    lightBg: false, 
    imgStart: '', 
    lightTopLine: true, 
    lightTextDesc: true,
    buttonLabel: 'Telusuri', 
    description: 'Kami Segenap Kru Stamet Palu akan membantu Anda dalam menyediakan kebutuhan cuaca sesuai daerah dan perajalan anda masing-masing. Cepat tepat Akurat dan Terpercaya',
    headline: 'Alur Pelayanan', 
    lightText: true, 
    topLine: 'Telusuri',
    img: require('../../images/banner_pelayanan/1_alur_pelayanan.jpg').default,
    alt: 'Image',
    start: ''
};

export const homeObjFour = {
    link: '/pelayanan',
    primary: true,
    lightBg: true, 
    imgStart: 'start', 
    lightTopLine: false, 
    lightTextDesc: false,
    buttonLabel: 'Telusuri', 
    description: 'Kami Segenap Kru Stamet Palu akan membantu Anda dalam menyediakan kebutuhan cuaca sesuai daerah dan perajalan anda masing-masing. Cepat tepat Akurat dan Terpercaya',
    headline: 'Maklumat Pelayanan', 
    lightText: false, 
    topLine: 'Services',
    img: require('../../images/banner_pelayanan/4_maklumat_pelayanan.jpg').default,
    alt: 'Image',
    start: 'true'
};

export const homeObjFive = {
    link: '/pelayanan',
    primary: true,
    lightBg: false, 
    imgStart: '', 
    lightTopLine: true, 
    lightTextDesc: true,
    buttonLabel: 'Telusuri', 
    description: 'Kami Segenap Kru Stamet Palu akan membantu Anda dalam menyediakan kebutuhan cuaca sesuai daerah dan perajalan anda masing-masing. Cepat tepat Akurat dan Terpercaya',
    headline: 'Pelayanan Data', 
    lightText: true, 
    topLine: 'Services',
    img: require('../../images/banner_pelayanan/5_pelayanan_data.jpg').default,
    alt: 'Image',
    start: ''
};

export const homeObjSix = {
    link: '/pelayanan',
    primary: true,
    lightBg: true, 
    imgStart: 'start', 
    lightTopLine: false, 
    lightTextDesc: false,
    buttonLabel: 'Telusuri', 
    description: 'Kami Segenap Kru Stamet Palu akan membantu Anda dalam menyediakan kebutuhan cuaca sesuai daerah dan perajalan anda masing-masing. Cepat tepat Akurat dan Terpercaya',
    headline: 'Prosedur Pelayanan', 
    lightText: false, 
    topLine: 'Services',
    img: require('../../images/banner_pelayanan/6_prosedur_pelayanan.jpg').default,
    alt: 'Image',
    start: 'true'
};

export const homeObjSeven = {
    link: '/pelayanan',
    primary: true,
    lightBg: false, 
    imgStart: '', 
    lightTopLine: true, 
    lightTextDesc: true,
    buttonLabel: 'Telusuri', 
    description: 'Kami Segenap Kru Stamet Palu akan membantu Anda dalam menyediakan kebutuhan cuaca sesuai daerah dan perajalan anda masing-masing. Cepat tepat Akurat dan Terpercaya',
    headline: 'Alur Pengaduan', 
    lightText: true, 
    topLine: 'Complaint',
    img: require('../../images/banner_pelayanan/2_alur_pengaduan.jpg').default,
    alt: 'Image',
    start: ''
};

export const homeObjEight = {
    link: '/pelayanan',
    primary: true,
    lightBg: true, 
    imgStart: 'start', 
    lightTopLine: false, 
    lightTextDesc: false,
    buttonLabel: 'Telusuri', 
    description: 'Kami Segenap Kru Stamet Palu akan membantu Anda dalam menyediakan kebutuhan cuaca sesuai daerah dan perajalan anda masing-masing. Cepat tepat Akurat dan Terpercaya',
    headline: 'ISO Certificate', 
    lightText: false, 
    topLine: 'Certifiation',
    img: require('../../images/banner_pelayanan/8_sertifikat_iso.jpg').default,
    alt: 'Image',
    start: 'true'
};