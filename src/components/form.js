import { useEffect } from "react";
import { useReducer, useRef } from "react";
import Label from "./form-components/label";
import "./form.css";

const Form = () => {

    const firstNameInput = useRef(null);
    const lastNameInput = useRef(null);
    const ageInput = useRef(null);

    const initialState = {
        firstName: "",
        lastName: "",
        age: ""
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'UPDATE_STATE':
                return {
                    ...state,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    age: action.age
                };
            default: throw new Error()
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        cleanerInput();
    }, [state]);

    const cleanerInput = () => {
        firstNameInput.current.value = "";
        lastNameInput.current.value = "";
        ageInput.current.value = "";
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
            <button className="app-form-button" onClick={() => dispatch({
                type: 'UPDATE_STATE',
                firstName: firstNameInput.current.value,
                lastName: lastNameInput.current.value,
                age: ageInput.current.value
            })}>
                Отправить в Redux
            </button>
        </div>
    );

}

export default Form;