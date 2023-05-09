//essa é a página principal
//importando os componentes que criei
import { GrFormNext, GrFormPrevious } from "react-icons/gr"; //importa os ícones
import {BsFillEmojiSunglassesFill} from "react-icons/bs"
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Confirm from "./components/Confirm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

//hooks
import { useForm } from "./hooks/useForm";
import { useState } from "react";//serve pra fazer a alteração nos dados

import './App.css';

const formTemplate = {
  name: "", email: "", review: "", comment: ""
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      //vou retornar um novo objeto com com todos os itens do preview state pra não mexer com o que já está colocado,
      //vou alterar a chave específica desse objeto(name, review, ou comment) para o valor de value.
      return {...prev,[key]:value}
    })
  }

  const formComponents = [//chamo a função update onde tiver input
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Confirm data={data} />,
    <Thanks data={data} />
  ];

  //vou desestruturar pra extrair cada um desses
  const { currentStep, currentComponent, changeStep, isSecondStep, isFirstStep, isThirdStep } = useForm(formComponents);

  return (
    <div className="app">
      <header className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Obrigado por comprar conosco! <BsFillEmojiSunglassesFill className="emoji-glasses"/></p>
      </header>
      <main className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)} className="form">
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && !isThirdStep && (
              <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}

            {!isThirdStep ? (
              <button type='submit'>
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              ""
            )}

          </div>
        </form>
      </main>
    </div>
  )
}

export default App
