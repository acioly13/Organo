import './Form.css'

const Form = (props) => {

    let valor = '';
    const aoDigitado = (event) => {
        valor = event.target.value;
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default Form;