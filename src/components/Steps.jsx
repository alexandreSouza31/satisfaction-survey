import React from "react";
import "./style_components/Steps.css";
import "./style_components/Media-query.css";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { AiOutlineAlert } from "react-icons/ai";

const Steps = ({ currentStep }) => {
    return (
        <div className="steps">
            <div className="step active">
                <AiOutlineUser />
                <p>Identificação</p>
            </div>
            <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
                <AiOutlineStar />
                <p>Avaliação</p>
            </div>
            <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
                <AiOutlineAlert />
                <p>Confirme</p>
            </div>
            <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
                <FiSend />
                <p>Envio</p>
            </div>
        </div>
    )
}

export default Steps;