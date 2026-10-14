export function Oferta({titulo, valor, description}){
  return(
    <>
      <h2>{titulo} - {valor}</h2>
      <h3>Descrição:</h3>
      <p>
        {description}
      </p>
    </>
    
  )
}
