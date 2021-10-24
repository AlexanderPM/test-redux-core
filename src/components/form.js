import { useRef } from "react";
import Label from "./form-components/label";
import "./form.css";

const Form = (props) => {

    const firstNameInput = useRef(null);
    const lastNameInput = useRef(null);
    const ageInput = useRef(null);

    console.log(props.state)

    const cleanerInput = () => {
        firstNameInput.current.value = "";
        lastNameInput.current.value = "";
        ageInput.current.value = "";
    }

    const buttonClick = () => {
        props.updateStoreReduxCore(firstNameInput.current.value, lastNameInput.current.value, ageInput.current.value);
        cleanerInput();
    }

    
    return (
        <div className="app-form">
            <h3>Форма регистрации пользователя:</h3>
            <div className="app-form-firstname">
                <Label labelName={"Фамилия"} />
                <input className="form-input" placeholder="Введите фамилию..." ref={firstNameInput}></input>
            </div>
            <div className="app-form-lastname">
                <Label labelName={"Имя"} />
                <input className="form-input" placeholder="Введите имя..." ref={lastNameInput}></input>
            </div>
            <div className="app-form-age">
                <Label labelName={"Возраст"} />
                <input className="form-input" placeholder="Введите возраст..." ref={ageInput}></input>
            </div>
            <button className="app-form-button" onClick={() => buttonClick()}>
                Отправить в Redux
            </button>
        </div>
    );

}

export default Form;