import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .qr-code-placeholder.show {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    width: 50%;
    margin-bottom: 20px;
    background-color: #FFFFFF;
  }
  
  .qr-code-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    width: 50%; /* Defina a largura desejada, por exemplo, 40% */
   
    margin-bottom: 20px;
    
  }
  

  .qr-code-placeholder-content {
    height: 128px;
    width: 128px;
  }

  .input {
    /* Estilos da classe .input que você definiu */
    border-radius: 10px;
    outline: 2px solid #3d7eae;
    border: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #e2e2e2;
    outline-offset: 3px;
    padding: 4% 5rem; 
    transition: 0.25s;
    line-height: 1.5; 
     text-align: center; 
  
  }

  .input:focus {
    outline-offset: 5px;
    background-color: #fff;
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
    width: 155px;
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