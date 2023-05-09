import "./Thanks.css";

const Thanks = ({data}) => {
    return (
        <div className="thanks-container">
            <h2>Obrigado por avaliar sua compra, <i className="thanks-name">{data.name}</i>!</h2>
            <p>Você acaba de ganhar um cupom de 10% para sua próxima compra!</p>
            <span>cupom: <i className="thanks-name">GANHOU10</i></span>
        </div>
    );
};

export default Thanks;