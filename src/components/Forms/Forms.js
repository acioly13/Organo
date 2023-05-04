import './Forms.css'
import Form from "../Form/Form";
import DropDown from "../DropDown/Dropdown";

const Forms = () => {

    const times = [
        'Programacao',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Form label="Nome" placeholder="Digite Seu Nome"/>
                <Form label="Cargo" placeholder="Digite Seu Cargo"/>
                <Form label="Imagem" placeholder="Digite o Endereço Da Imagem"/>
                <DropDown label="Time" itens={times}/>
            </form>
        </section>
    )
}

export default Forms