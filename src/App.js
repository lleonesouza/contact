import React, { Component } from 'react';
import './App.css';
import Perfil from './perfil.jpg'


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>leone de souza 
          </h1>
         


        <div className="header">
          <img src={Perfil} alt=""/>

          <p>lleonesouza@live.com <br /> cel: (19) 999554396<br /> 
          <a href="https://github.com/lleonesouza"> github</a> || <a href="https://www.linkedin.com/in/leone-souza-54944815b/">linkedin</a> </p>
         
        </div>


       
        <h3>Olá, sou desenvolvedor-web especializado principalmente em NodeJS, ReactJS e React-Native</h3>
      


            <h2>Linguagems quais escrevo:</h2> 
            
            <h3>Javascript ||  Golang || Python <br/> html  ||  css  || scss</h3>

              <h2>Experiencia com:</h2> 
              
              
                <h3>   Banco de dados SQL e noSQ
                <hr/>
                 Microservices e Containers
                <hr/>
               Integração e criação de API's REST
               <hr/>
                Segurança de aplicações Web
                <hr/>
                 Teste de aplicações Web
                 <hr/>
               Tokens e sistemas de logins
               <hr/>
             E-commerce
             <hr/>
             Métodos de Pagementos
             <hr/>
               Inteligencia Artificial
               <hr/>
              Aplicações Web FullStack
                <hr/>
            JSON, XML e outros formatos
            <hr/>
              outras ...
                </h3> 

          <br/>
          <br/>
       


          <p className="footer">Estou procurando uma vaga <br/> como - desenvolvedor web - <br/>
          <br/><br/>  envie um email para me contratar: lleonesouza@live.com  </p>
          <br/>
          <br/>
          <br/>
          <br/>
      </div>
    );
  }
}

export default App;
