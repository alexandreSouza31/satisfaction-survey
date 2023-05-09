import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Confirm.css";

const emojiData = {
    usatisfied:<BsFillEmojiFrownFill/>,
    neutral:<BsFillEmojiNeutralFill/>,
    satisfied:<BsFillEmojiSmileFill/>,
    incredible:<BsFillEmojiHeartEyesFill/>,
}

const Confirm = ({data}) => {
    return (
        <div className="confirm-container">
            <h2>Falta pouco...</h2>
            <p>
                A sua opinião é muito importante, em breve você receberá um cupom de 
                10% para sua próxima compra!
            </p>
            <p>Para concluir sua avaliação clique no botão <b>Avançar</b> abaixo.</p>
            <h3>Aqui está o resumo da sua avaliação, <i>{data.name}</i>:</h3>
            <p className="review-data">
                <span>Satisfação com o produto:</span>
                {emojiData[data.review]}
            </p>
            <p className="review-data">
                <span>Comentário: </span>
                {data.comment}
            </p>
        </div>
    );
};

export default Confirm;