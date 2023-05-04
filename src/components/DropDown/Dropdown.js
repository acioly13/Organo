import './Dropdown.css'

const Dropdown = (props) => {
    console.log(props.itens)
    return (
        <div className='drop-down'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown;