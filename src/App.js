import './App.css'; 
import { Text } from './components/Title';
import { Text2 } from './components/Title';
import { Btn } from './components/Title';
import { Text3 } from './components/Title';
import { Text4 } from './components/Title';
import { Text5 } from './components/Title';
import { Text6 } from './components/Title';
import { Text7 } from './components/Title';
import { Text8 } from './components/Title';
import { FaSignInAlt } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import  logo  from "./assets/Logo verde 1.svg"
import  IMAGEM  from "./assets/IMAGEM.svg"
import  secure  from "./assets/Secure login-pana 1.svg"
import  logobranca  from "./assets/Logo branca 1.svg"
import  PREPARAÇÃO  from "./assets/PREPARAÇÃO.svg"
import  INDEXAÇÃO from "./assets/INDEXAÇÃO.svg"
import  DIGITALIZAÇÃO  from "./assets/DIGITALIZAÇÃO.svg"

import Component  from "./components/carousel";
import "./components/slick.css";
import "./components/slick-theme.css"

import React from 'react';


function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <img src={logo} className="logosvg"></img>
            </div>
            <div className="item-menu">
            <a href="#">Sobre nós</a>
            <a href="#">Digitaliza Cloud</a>
            <a href="#">GED</a>
            <a href="#">Serviços</a>
            <a href="#" className="login">Entrar<FaSignInAlt/></a>
            </div>
          </div>
        </div>
        <div className='text'>
        <Text>Deixe que a parte<br/>
              chata e trabalhosa<br/>
              a gente faz!
        </Text>
        </div>
        <div className='IMAGE'>
        <img src={IMAGEM} className="IMG"></img>
        </div>
        <div className='container-text'>
          <Text2>Somos uma empresa especializada em Digitalização de<br/>
              Documentos e em soluções para Gestão Eletrônica de<br/>
              Documentos(GED)
        </Text2>
        <div className="btn">
          <Btn>Conhecer a Digitaliza</Btn>
        </div>
        <div>
          <Text3>Nós estamos presente em todo o estado</Text3>
        </div>
        </div>
        <div className='slide'>
          <Component></Component>
      </div>
        <div className='IMAGE-2'>
        <img src={secure} className="IMG-2"></img>

          <div className='text-4'>
            <Text4><a>Acesso facilitado</a> e <br/>
                   prático de docs<br/>
                   (GED) online
            </Text4>
            <Text5>Você tem acesso a diversos documentos digitalizados em<br/>
                  poucos cliques, acessando apenas a dashboard da sua<br/>
                  empresa e pesquisar o arquivo desejado já digitalizado.<br/>
            </Text5>
          </div>
          <div>
          <a href="#" className="acessar">Acessar documentos<FiDownloadCloud/></a>
          </div>
          <div className="parent">
            <div className="nossos-serviços">
              <h1>Nossos<br/>
                serviços
                </h1>
                <h2>Prezamos pela <a>organização e agilidade<br/>
                  na preparação e organização</a> dos seus<br/>
                  arquivos digitalizados. Um serviço<br/>
                  responsável de ponta-a-ponta.<br/>
                </h2>
            </div>
            <div className='simbolos'>
            <img src={PREPARAÇÃO} className="preparação"></img>
            <img src={INDEXAÇÃO} className="indexação"></img>
            <img src={DIGITALIZAÇÃO} className="digitalização"></img>
            </div>
            <div className="serviços">
             <Text6><h1>Preparação</h1>
              Nesta etapa da digitalização de documentos é feita a preparação para<br/>
              que papéis que compôem os volumes, de diversos tipos, formatos e<br/>
              estado de conervação, sejam adequados à digitalização nos scanners.<br/>
              </Text6>
              <Text7><h1>Indexação</h1>
              Os documentos digitalizados são indexados no sistema, permitindo assim<br/>
              fácil operação e consultas realizadas pelo cliente.<br/>
              </Text7>
              <Text8><h1>Digitalização</h1>
              Em seguida são escaneados, de acordo com as especificações determinadas<br/>
              pelo sistema. As imagens são migradas para o Software GED.<br/>
              </Text8>
            </div>
          </div>
        </div>
      </div>
      <footer className="container">
        <div>
        <h1 className='text-footer'>Digitaliza é uma ferramenta que<br/>
            une diversos arquivos de forma<br/>
            organizada e prática.</h1>
        </div>
        <div className='logo-branca'>
        <img src={logobranca} className="logo-footer"></img>
      </div>
      <div>
      <h2>© 2022 Digitaliza. All rights reserved.</h2>
      </div>
      <div className="container-footer">
            <a>Sobre nós</a>
            <a>Digitaliza Cloud</a>
            <a>GED</a>
            <a>Serviços</a>
      </div>
      <div className="final-footer">
      <h1>Mais de 30 milhões de arquivos digitalizados</h1>
      </div>
      </footer>
    </div>
  );
}
export default App