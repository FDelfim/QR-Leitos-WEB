import { useState } from 'react';
import './styles.css'

export default function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return (

        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title">
                            QR Leitos WEB
                        </span>

                        <div className="wrap-input">
                            <input className={email !== "" ? "has-val input" : "input"}
                                type='e-mail'
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                            <span className='focus-input' data-placeholder="E-mail"></span>
                        </div>

                        <div className="wrap-input">
                            <input className={senha !== "" ? "has-val input" : "input"}
                                type='passWord'
                                value={senha}
                                onChange={e => setSenha(e.target.value)} />
                            <span className='focus-input' data-placeholder="Senha"></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn"> Login </button>
                        </div>

                        <div className="singup">
                            <span className="sing-up"> Não possui uma conta? </span>
                            <a className="cadastro" href="#">Criar conta</a>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}