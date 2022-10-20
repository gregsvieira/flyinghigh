import { useState } from 'react';
import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = (props) => {

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [stack, setStack] = useState('');
  const [cargo, setCargo] = useState('');
  const [organization, setOrganization] = useState('');
  const [time, setTime] = useState('');


  const onSave = (event) => {
    event.preventDefault();
    props.registeredEmployee({
      name,
      image,
      stack,
      cargo,
      organization,
      time
    });
    setName('')
    setImage('')
    setStack('')
    setCargo('')
    setOrganization('')
    setTime('')
  } 


  return (
    <section className="formulario">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do integrante</h2>
        <CampoTexto
          value={name}
          onChanged={value => setName(value)} 
          obrigatorio={true} 
           label="Nome" placeholder="Digite seu nome" />
        <CampoTexto
          value={image}
          onChanged={value => setImage(value)} 
          label="Imagem"
          placeholder="Informe o endereço da sua imagem" />
        <CampoTexto 
          value={stack}
          onChanged={value => setStack(value)} 
          obrigatorio={true} 
          label="Stack"
          placeholder="Digite a stack que trabalha" />
        <CampoTexto
          value={cargo}
          onChanged={value => setCargo(value)}  
          obrigatorio={true} 
          label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto
          value={organization}
          onChanged={value => setOrganization(value)}
          obrigatorio={true} 
          label="Organização"
          placeholder="Digite a empresa onde trabalha" />
          <ListaSuspensa
          value={time}
          onChanged={value => setTime(value)}
          obrigatorio={true} 
          label="Time" 
          itens={props.times} />
          <Botao 
            texto='Criar Card'>
            Criar Card
          </Botao>
      </form>
    </section>
  )
}

export default Formulario;