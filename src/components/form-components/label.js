import "./label.css"

const Label = (props) => {

    return(
        <label className="form-label">{props.labelName}</label>
    );
}

export default Label;