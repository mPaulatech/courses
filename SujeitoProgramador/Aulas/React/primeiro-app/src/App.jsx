import { Oferta } from "./Oferta"

export default function App(){
  return(
    <div>
      <h1>Olá React!</h1>

      <Oferta
      titulo="Tenis Nike 15%OFF"
      valor="R$450"
      description="O melhor sempre"
      />

      <hr />

      <Oferta
      titulo="Tenis Adidas 50%OFF"
      valor="R$250"
      description="O mais custo beneficio"
      />
    </div>
  )
}
