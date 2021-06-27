import React, { useState } from 'react';
import { FormSection,
         FormWrapper,
         GlobalStyle,
         StyledFormWrapper,
         StyledForm,
         FormHeading,
         FormIsLengkap,
         StyledInput,
         StyledTextArea,
         StyledButton,
         StyledTerkirim,
         StyledError
} from './FormPengaduan.elements';

const initalState = {
  nama: '',
  nohp: '',
  email: '',
  pesan: ''
};

const FormPengaduan = () => {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState('');
  const [islengkap, setIsLengkap] = useState(false);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxV1oCgdynQ9lGpDG-o9J86q5qjzneFKpHyV7eoQjEDF72-jKP299AicNAadnBHfHrr/exec'
  const form = document.forms['form-pengaduan']


  const handleSubmit = e => {
    e.preventDefault();

    if (state.nama === '') {
      setError(`Anda Harus Mengisi Nama`);
      return
    } else if (state.nohp === '') {
      setError(`Anda Harus Mengisi Nomor Handphone`);
      return
    } else if (state.email === '') {
      setError(`Anda Harus Mengisi Alamat Email`);
      return
    } else if (state.pesan === '') {
      setError(`Anda Harus Mengisi Pesan`);
      return
    }

    if(state.nama ==='' || state.nohp ==='' || state.email ==='' || state.pesan ==='') {
    } else {
      console.log('Data Anda Terkirim');
      setIsLengkap(true);
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Response : ', response.status))
        .catch(error => console.error('Error : ', error.message))
    }
    setError('');
  };

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState(prev => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <FormSection>
        <FormWrapper>
          <GlobalStyle />
          <StyledFormWrapper>
            <StyledForm name= 'form-pengaduan' onSubmit={handleSubmit}>
              <FormHeading>Form Pengaduan</FormHeading>
              {islengkap ? 
                <FormIsLengkap>Data Anda Terkirim <br/>Terima Kasih</FormIsLengkap> :
                <FormIsLengkap>Silahkan Isi Data Anda</FormIsLengkap>
              } 
              <label htmlFor="nama">Nama</label>
              <StyledInput
                type="text"
                name="nama"
                value={state.nama}
                onChange={handleInput}
              />
              <label htmlFor="email">Email</label>
              <StyledInput
                type="email"
                name="email"
                value={state.email}
                onChange={handleInput}
              />
              <label htmlFor="nohp">Nomor Handphone</label>
              <StyledInput
                type="number"
                name="nohp"
                value={state.nohp}
                onChange={handleInput}
              />
              <label htmlFor="message">Pesan</label>
              <StyledTextArea
                name="pesan"
                value={state.pesan}
                onChange={handleInput}
              />
              {error && (
                <StyledError>
                  <p>{error}</p>
                </StyledError>
              )}
              {
                islengkap ? <StyledTerkirim type ="text">Data Telah Terkirim</StyledTerkirim> :
                <StyledButton type="submit">Kirim</StyledButton>
              }              
            </StyledForm>           
          </StyledFormWrapper>
        </FormWrapper>
      </FormSection>      
    </>
  );
}

export default FormPengaduan;