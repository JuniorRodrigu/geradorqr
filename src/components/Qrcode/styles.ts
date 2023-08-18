import styled from 'styled-components';



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .qr-code-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px; 
    width: 100%;
    margin-bottom: 20px;
   
  }

  .qr-code-placeholder-content {
    height: 128px;
    width: 128px;

  }

  /* Adicione isso ao seu arquivo de estilos CSS */
  .input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
  }
  
  .light-theme .input {
    color: black; /* Cor do texto para o tema claro */
  }
  
  .dark-theme .input {
    color: white; /* Cor do texto para o tema escuro */
  }
  

  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  .input {
    margin: 10px;
    background: none;
    border: none;
    outline: none;
    max-width: 190px;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 9999px;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
    color: #fff; /* Dark theme text color */
  }
  
  .light-theme .input {
    color: #000; /* Light theme text color */
  }
  

  .button {
    --main-focus: #2d8cf0;
    --font-color: #dedede;
    --bg-color-sub: #222;
    --bg-color: #323232;
    --main-color: #dedede;
    position: relative;
    width: 150px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    background-color: var(--bg-color);
    border-radius: 10px;
    overflow: hidden;
  }
  
  .button, .button__icon, .button__text {
    transition: all 0.3s;
  }
  
  .button .button__text {
    transform: translateX(21px);
    color: var(--font-color);
    font-weight: 600;
  }
  
  .button .button__icon {
    position: absolute;
    transform: translateX(109px);
    height: 100%;
    width: 39px;
    background-color: var(--bg-color-sub);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .button .svg {
    width: 20px;
    fill: var(--main-color);
  }
  
  .button:hover {
    background: var(--bg-color);
  }
  
  .button:hover .button__text {
    color: transparent;
  }
  
  .button:hover .button__icon {
    width: 148px;
    transform: translateX(0);
  }
  
  .button:active {
    transform: translate(3px, 3px);
    box-shadow: 0px 0px var(--main-color);
  }

`;