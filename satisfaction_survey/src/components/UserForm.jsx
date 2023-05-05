import React from "react";

const UserForm = () => {
    return (
        <div>
            <form className="form-control">
                <label htmlFor="name" required>Nome:</label>
                <input type="text" name="name" className="name" placeholder="Digite o seu nome" required/>
            </form>
        
            <form className="form-control">
            <label htmlFor="email">Email:</label>
                <input type="email" name="email" className="email" placeholder="Digite o seu email" required/>
            </form>
        </div>

    );
};

export default UserForm