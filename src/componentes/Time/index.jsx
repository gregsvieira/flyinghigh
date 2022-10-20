import './Time.css';
import Colaborador from '../Colaborador';

//dumb components
const Time = (props) => {

  return (
    props.colaboradores.length > 0 ? <section className='time' style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria}}>{props.title}</h3>
      <div className='colaboradores'>
        {props.colaboradores.map( colaborador => <Colaborador
        backgroundColorOfTime={props.corPrimaria}
        key={colaborador.name}
        name={colaborador.name} 
        cargo={colaborador.cargo} 
        stack={colaborador.stack} 
        image={colaborador.image}
        organization={colaborador.organization}
      />)}
      </div>
    </section>
    : ''
  )
}

export default Time;