import React from "react";

const UserForm = () => {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" className="name" placeholder="Digite o seu nome" required/>
            </div>
        
            <div className="form-control">
            <label htmlFor="email">Email:</label>
                <input type="email" name="email" className="email" placeholder="Digite o seu email" required/>
            </div>
        </div>

    );
};

export default UserForm