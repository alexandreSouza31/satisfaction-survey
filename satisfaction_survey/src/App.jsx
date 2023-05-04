import { GrFormNext, GrFormPrevious } from "react-icons/gr"; //importa os ícones

import './App.css'

function App() {

  return (
    <div className="app">
      <header className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Obrigado por comprar conosco! Preencha o formulário abaixo para avaliar o produto:</p>
      </header>
      <main>
        <p>etapas</p>
        <form>
          <div className="inputs-container"></div>
          <div className="actions">
            <button type='button'>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type='submit'>
              <span>Avançar</span>
              <GrFormNext />
            </button>
            
          </div>
        </form>
      </main>
    </div>
  )
}

export default App
