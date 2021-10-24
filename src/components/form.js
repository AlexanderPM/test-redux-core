import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Label from "./form-components/label";
import "./form.css";
import updateStoreReduxCore from "../redux/actions";

const Form = () => {

    const state = useSelector(state => state)

    const dispatch = useDispatch();

    const firstNameInput = useRef(null);
    const lastNameInput = useRef(null);
    const ageInput = useRef(null);

    const cleanerInput = () => {
        firstNameInput.current.value = "";
        lastNameInput.current.value = "";
        ageInput.current.value = "";
    }

    const buttonClick = () => {
        dispatch(updateStoreReduxCore(firstNameInput.current.value, lastNameInput.current.value, ageInput.current.value));
        cleanerInput();
    }

    console.log(state)
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