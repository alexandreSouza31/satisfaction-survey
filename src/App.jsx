//essa é a página principal
//importando os componentes que criei
import { GrFormNext, GrFormPrevious } from "react-icons/gr"; //importa os ícones
import { FiSend } from "react-icons/fi"
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

//hooks
import { useForm } from "./hooks/useForm";

import './App.css'

function App() {

  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];
  
  //vou desestruturar pra extrair cada um desses
  const { currentStep, currentComponent,changeStep, isLastStep,isFirstStep} = useForm(formComponents);

  return (
    <div className="app">
      <header className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Obrigado por comprar conosco! Preencha o formulário abaixo para avaliar a compra:</p>
      </header>
      <main className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e)=>changeStep(currentStep + 1,e)} className="form">
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type='button' onClick={()=>changeStep(currentStep -1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            )}
            
            {!isLastStep ? (
              <button type='submit'>
              <span>Avançar</span>
              <GrFormNext />
            </button>
            ) : (
              <button type='button'>
              <span>Enviar</span>
              <FiSend />
            </button>
            )}
            
          </div>
        </form>
      </main>
    </div>
  )
}

export default App