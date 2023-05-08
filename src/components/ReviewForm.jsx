import React from "react";
import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./ReviewForm.css";
const ReviewForm = ({data, updateFieldHandler}) => {
    return (
        <div className="review-form">
            <div className="form-control score-container">
                <label className="radio-container">
                    <input type="radio"
                        value="unsatisfied"
                        name="review"
                        required
                        checked={data.review === "unsatisfied"}
                        onChange={(e) => {
                            updateFieldHandler("review",e.target.value)
                        }}
                    />
                    <BsFillEmojiFrownFill/>
                    <p>Insatisfeito</p>
                </label>
                <label className="radio-container">
                    <input type="radio"
                        value="neutral"
                        name="review"
                        required
                        checked={data.review === "neutral"}
                        onChange={(e) => {
                            updateFieldHandler("review",e.target.value)
                        }}
                    />
                    <BsFillEmojiNeutralFill/>
                    <p>Neutro</p>
                </label>
                <label className="radio-container">
                    <input type="radio"
                        value="satisfied"
                        name="review"
                        required
                        checked={data.review === "satisfied"}
                        onChange={(e) => {
                            updateFieldHandler("review",e.target.value)
                        }}
                    />
                    <BsFillEmojiSmileFill/>
                    <p>Gostei</p>
                </label>
                <label className="radio-container">
                    <input type="radio"
                        value="incredible"
                        name="review"
                        required
                        checked={data.review === "incredible"}
                        onChange={(e) => {
                            updateFieldHandler("review",e.target.value)
                        }}
                    />
                    <BsFillEmojiHeartEyesFill/>
                    <p>Adorei</p>
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="comment">Comentário(opcional)</label>
                <textarea
                    name="comment"
                    id="comment"
                    placeholder="Conte como foi a experiência da sua compra"
                    value={data.comment || ""}  
                    onChange={(e) => {
                        updateFieldHandler("comment",e.target.value)
                    }}
                >    
                </textarea>
            </div>
        </div>
    );
};

export default ReviewForm;