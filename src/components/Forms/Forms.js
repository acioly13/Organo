import './Forms.css'
import Form from "../Form/Form";
import DropDown from "../DropDown/Dropdown";
import Button from "../Button/Button";

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

    const save = (event) => {
        event.preventDefault()
        console.log('Form submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Form label="Nome" obrigatorio={true} placeholder="Digite Seu Nome"/>
                <Form label="Cargo" obrigatorio={true} placeholder="Digite Seu Cargo"/>
                <Form label="Imagem" placeholder="Digite o Endereço Da Imagem"/>
                <DropDown obrigatorio={true} label="Time" itens={times}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Forms