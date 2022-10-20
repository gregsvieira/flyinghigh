import './Colaborador.css';

const Colaborador = ({ name, cargo, image, stack, organization, backgroundColorOfTime }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={({ backgroundColor: backgroundColorOfTime })}>
        <img src={image} alt={name} />
      </div>
      <div className='rodape'>
        <h4>{name}</h4>
        <h5>{cargo} - {stack}</h5>
        <h5>{organization}</h5>
      </div>
    </div>
  )
}

export default Colaborador;