import './Forms.css'
import Form from "../Form/Form";

const Forms = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Form label="Nome" placeholder="Digite Seu Nome"/>
                <Form label="Cargo" placeholder="Digite Seu Cargo"/>
                <Form label="Imagem" placeholder="Digite o Endereço Da Imagem"/>
            </form>
        </section>
    )
}

export default Forms