import {NavLink} from 'react-router-dom';

function Nav() {
    return (
        <nav>
        <ul>
            <li><NavLink to="/">Início</NavLink></li>
            <li><NavLink to="/CadastroFilmes">Cadastros Filmes</NavLink></li>
            <li><NavLink to="/CadastroJogos">Cadastros Jogos</NavLink></li>
            <li><NavLink to="/filmes">Filmes</NavLink></li>
            <li><NavLink to="/series">Séries</NavLink></li>
            <li><NavLink to="/livros">Livros</NavLink></li>
            <li><NavLink to="/jogos">Jogos</NavLink></li>
        </ul>
    </nav>
    );
}

export default Nav;