import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';

function App() {
    return (
        <div className="App">
            <Banner/>
            <Form label="Nome" placeholder="Digite Seu Nome"/>
            <Form label="Cargo" placeholder="Digite Seu Cargo"/>
            <Form label="Imagem" placeholder="Digite o Endereço Da Imagem"/>
        </div>
    );
}

export default App;
