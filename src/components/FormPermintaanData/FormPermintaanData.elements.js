import styled, { createGlobalStyle, css }from "styled-components";

export const FormSection = styled.div`
  padding: 480px 0 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

export const FormWrapper = styled.div`
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

export const FormHeading = styled.h1`
  font-family: 'Lucida Sans';
  color: purple;
  font-size: 48px;
  margin-bottom: 24px;
  margin-right: auto;
`;

export const FormIsLengkap = styled.h1`
  font-family: 'Arial';
  color: black;
  font-size: 25px;
  margin-bottom: 24px;
  margin-right: auto;
`;

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: whitesmoke;
    height: 100%;
    margin: auto;
    color: #555;
  }
`;

export const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 190vh;
  padding: 0 20px;
  margin: auto;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    position: absolute;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 960px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
export const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 2rem;
  border: 0;
  border-radius: 100px;
  height: 40px;
  padding: 1px 100px;
  cursor: pointer;
  box-sizing: border-box;
  margin: auto;
`;

export const StyledTerkirim = styled.div`
  background-color: green;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 10px 20px;
  box-sizing: border-box;
  margin: auto;
`;

export const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }

  label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

export const StyledInputGrid = styled.div`
  width: 100%;
  max-width: 960px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 40px;
  padding-bottom: 10px;
`;

export const StyledInputGridWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 10px 10px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;