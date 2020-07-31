import React from 'react';
import DefaultTemplate from '../../../components/DefaultTemplate';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
        <DefaultTemplate>
            <h1>Cadastro de vídeo</h1>
        <Link to='/cadastro/categoria'>
            Cadastrar categoria
        </Link>
        </DefaultTemplate>
    );
}

export default CadastroVideo;