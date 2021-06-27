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
    StyledError,
    StyledFieldset,
    StyledInputGrid,
    StyledInputGridWrapper
} from './FormPermintaanData.elements';

const initalState = {
    nama: '',
    niknip: '',
    instansi: '',
    alamat: '',
    notelpinstansi: '',
    notelppribadi: '',
    email: '',
    keperluan: '',
    jenisdata: '',
    awalperiode: '',
    akhirperiode: '',
    keterangan: '',
  };  

const FormPermintaanData = () => {
    const [state, setState] = useState(initalState);
    const [error, setError] = useState('');
    const [islengkap, setIsLengkap] = useState(false);
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx_m792hXIoZwFADajXAmp5vhUxwhXFyP2XLrWFV6CayxXD7SUDHKibGM_mkOrhHZA9_g/exec'
    const form = document.forms['form-permintaan-data']
  
  
    const handleSubmit = e => {
      e.preventDefault();
  
      if (state.nama === '') {
        setError(`Anda Harus Mengisi Nama`);
        return
      } else if (state.niknip === '') {
        setError(`Anda Harus Mengisi NIK atau NIP`);
        return
      } else if (state.instansi === '') {
        setError(`Anda Harus Mengisi Nama Instansi`);
        return
      } else if (state.alamat === '') {
        setError(`Anda Harus Mengisi Alamat Instansi`);
        return
      } else if (state.notelpinstansi === '') {
        setError(`Anda Harus Mengisi Nomor Telepon Instansi`);
        return
      } else if (state.notelppribadi === '') {
        setError(`Anda Harus Mengisi Nomor Telepon Pribadi`);
        return
      } else if (state.email === '') {
        setError(`Anda Harus Mengisi Email`);
        return
      } else if (state.keperluan === '') {
        setError(`Anda Harus Mengisi Keperluan Anda`);
        return
      } else if (state.jenisdata === '') {
        setError(`Anda Harus Mengisi Jenis Data`);
        return
      } else if (state.awalperiode === '') {
        setError(`Anda Harus Mengisi Awal Periode Data`);
        return
      } else if (state.akhirperiode === '') {
        setError(`Anda Harus Mengisi Akhir Periode Data`);
        return
      } else if (state.keterangan === '') {
        setError(`Anda Harus Mengisi Keterangan`);
        return
      }
      
  
      if( state.nama ==='' || 
          state.niknip ==='' || 
          state.instansi ==='' || 
          state.alamat ==='' ||
          state.notelpinstansi ==='' ||
          state.notelppribadi ==='' ||
          state.email ==='' ||
          state.keperluan ==='' ||
          state.jenisdata ==='' ||
          state.awalperiode ==='' ||
          state.akhirperiode ==='' ||
          state.keterangan ===''
      ) {
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
        <GlobalStyle />
        <StyledFormWrapper>
          <StyledForm name= 'form-permintaan-data' onSubmit={handleSubmit}>
          <FormHeading>Form Permintaan Data</FormHeading>
          {islengkap ? 
            <FormIsLengkap>Data Anda Terkirim <br/>Terima Kasih</FormIsLengkap> :
            <FormIsLengkap>Silahkan Isi Data Anda</FormIsLengkap>
          }
            <StyledInputGrid>
              <StyledInputGridWrapper>          
                <label htmlFor="nama">Nama</label>
                <StyledInput
                  type="text"
                  name="nama"
                  value={state.nama}
                  onChange={handleInput}
                />
                <label htmlFor="niknip">NIK/NIP</label>
                <StyledInput
                  type="number"
                  name="niknip"
                  value={state.niknip}
                  onChange={handleInput}
                />
                <label htmlFor="instansi">Instansi</label>
                <StyledInput
                  type="text"
                  name="instansi"
                  value={state.instansi}
                  onChange={handleInput}
                />
                <label htmlFor="alamat">Alamat Instansi</label>
                <StyledInput
                  type="text"
                  name="alamat"
                  value={state.alamat}
                  onChange={handleInput}
                />
                <label htmlFor="notelpinstansi">No. Telp. Instansi</label>
                <StyledInput
                  type="number"
                  name="notelpinstansi"
                  value={state.notelpinstansi}
                  onChange={handleInput}
                />
                <label htmlFor="notelppribadi">No. Telp. Pribadi</label>
                <StyledInput
                  type="number"
                  name="notelppribadi"
                  value={state.notelppribadi}
                  onChange={handleInput}
                />
                <label htmlFor="email">Email</label>
                <StyledInput
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleInput}
                />
                <label htmlFor="keperluan">Keperluan</label>
                <StyledInput
                  type="text"
                  name="keperluan"
                  value={state.keperluan}
                  onChange={handleInput}
                />                                  
                <label htmlFor="keterangan">Keterangan</label>
                <StyledTextArea
                  name="keterangan"
                  value={state.keterangan}
                  onChange={handleInput}
                />
              </StyledInputGridWrapper>
              <StyledInputGridWrapper>
              <label htmlFor="jenisdata">Jenis Data</label>
                <StyledFieldset>
                  <legend>Data 1</legend>
                  <label htmlFor="awalperiode">Awal Periode Data</label>
                  <StyledInput
                    type="date"
                    name="awalperiode"
                    value={state.awalperiode}
                    onChange={handleInput}
                  />
                  <label htmlFor="akhirperiode">Akhir Periode Data</label>
                  <StyledInput
                    type="date"
                    name="akhirperiode"
                    value={state.akhirperiode}
                    onChange={handleInput}
                  />
                  <label>
                    <input
                      type="radio"
                      value="Curah Hujan"
                      name="jenisdata"
                      checked={state.jenisdata === 'Curah Hujan'}
                      onChange={handleInput}
                    />
                    Curah Hujan
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Suhu"
                      name="jenisdata"
                      checked={state.jenisdata === 'Suhu'}
                      onChange={handleInput}
                    />
                    Suhu
                  </label> <br/>
                  <label>
                    <input
                      type="radio"
                      value="Curah Hujan"
                      name="jenisdata"
                      checked={state.jenisdata === 'Curah Hujan'}
                      onChange={handleInput}
                    />
                    Kelembapan
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Suhu"
                      name="jenisdata"
                      checked={state.jenisdata === 'Suhu'}
                      onChange={handleInput}
                    />
                    Angin
                  </label> <br/>
                  <label>
                    <input
                      type="radio"
                      value="Curah Hujan"
                      name="jenisdata"
                      checked={state.jenisdata === 'Curah Hujan'}
                      onChange={handleInput}
                    />
                    Penyinaran Matahari
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Suhu"
                      name="jenisdata"
                      checked={state.jenisdata === 'Suhu'}
                      onChange={handleInput}
                    />
                    Tekanan Udara
                  </label>
                </StyledFieldset>
                <StyledFieldset>
                  <legend>Data 2</legend>
                  <label htmlFor="awalperiode">Awal Periode Data</label>
                  <StyledInput
                    type="date"
                    name="awalperiode"
                    value={state.awalperiode}
                    onChange={handleInput}
                  />
                  <label htmlFor="akhirperiode">Akhir Periode Data</label>
                  <StyledInput
                    type="date"
                    name="akhirperiode"
                    value={state.akhirperiode}
                    onChange={handleInput}
                  />
                  <label>
                    <input
                      type="radio"
                      value="Curah Hujan"
                      name="jenisdata"
                      checked={state.jenisdata === 'Curah Hujan'}
                      onChange={handleInput}
                    />
                    Curah Hujan
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Suhu"
                      name="jenisdata"
                      checked={state.jenisdata === 'Suhu'}
                      onChange={handleInput}
                    />
                    Suhu
                  </label> <br/>
                  <label>
                    <input
                      type="radio"
                      value="Curah Hujan"
                      name="jenisdata"
                      checked={state.jenisdata === 'Curah Hujan'}
                      onChange={handleInput}
                    />
                    Kelembapan
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Suhu"
                      name="jenisdata"
                      checked={state.jenisdata === 'Suhu'}
                      onChange={handleInput}
                    />
                    Angin
                  </label> <br/>
                  <label>
                    <input
                      type="radio"
                      value="Curah Hujan"
                      name="jenisdata"
                      checked={state.jenisdata === 'Curah Hujan'}
                      onChange={handleInput}
                    />
                    Penyinaran Matahari
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Suhu"
                      name="jenisdata"
                      checked={state.jenisdata === 'Suhu'}
                      onChange={handleInput}
                    />
                    Tekanan Udara
                  </label>
                </StyledFieldset>
              </StyledInputGridWrapper>
            </StyledInputGrid>
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
      </>
    );
}

export default FormPermintaanData
