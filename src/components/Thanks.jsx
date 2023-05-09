import "./Thanks.css";

const Thanks = ({data}) => {
    return (
        <div className="thanks-container">
            <h2>Obrigado por avaliar sua compra, {data.name}!</h2>
            <p>Você acaba de ganhar um cupom de 10% para sua próxima compra!</p>
            <span>cupom: GANHOU10</span>
        </div>
    );
};

export default Thanks;