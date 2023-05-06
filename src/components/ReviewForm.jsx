import React from "react";
import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from "react-icons/bs"

import "./ReviewForm.css";
const ReviewForm = () => {
    return (
        <div className="review-form">
            <div className="form-control score-container">
                <label className="radio-container">
                    <input type="radio" value="unsatisfied" name="review" required />
                    <BsFillEmojiFrownFill/>
                    <p>Insatisfeito</p>
                </label>
                <label className="radio-container">
                    <input type="radio" value="neutral" name="review" required />
                    <BsFillEmojiNeutralFill/>
                    <p>Neutro</p>
                </label>
                <label className="radio-container">
                    <input type="radio" value="satisfied" name="review" required />
                    <BsFillEmojiSmileFill/>
                    <p>Gostei</p>
                </label>
                <label className="radio-container">
                    <input type="radio" value="incredible" name="review" required />
                    <BsFillEmojiHeartEyesFill/>
                    <p>Adorei</p>
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="comment">Comentário(opcional)</label>
                <textarea name="comment" id="comment" placeholder="Conte como foi a experiência da sua compra"></textarea>
            </div>
        </div>
    );
};

export default ReviewForm;