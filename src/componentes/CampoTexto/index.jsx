import './CampoTexto.css';


const CampoTexto = (props) => {

  const onTyping = (event) => {
    props.onChanged(event.target.value);

  }

  return(
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={props.valueField} onChange={onTyping} required={props.obrigatorio} placeholder={props.placeholder} />  
    </div>
  )
}

export default CampoTexto;