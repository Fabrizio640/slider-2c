import { useState } from 'react'
import './App.css'
import Xuxa1 from './assets/notebook-xuxa.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Xuxa1} alt="" className="img-card" />
              <h2 className="titulo-card">Notebook Xuxa</h2>
              <p className="desc">Notebook Gamer com RGB 1 nucleo e 512Mb de Ram</p>
              <p className="preco">R$ 5.999,99</p>
              <div className="avaliacao"> ★ ★ ★ ★ ☆</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Pc Gamer alt="" className="img-card" />
              <h2 className="titulo-card">Pc Gamer</h2>
              <p className="desc">PC Gamer com RGB 3 nucleo e 1Tb de Ram</p>
              <p className="preco">R$ 10.000.00</p>
              <div className="avaliacao"> ★ ★ ★ ★ ★</div>
              <div className="off">- 30%</div>
            </div>
          </a>
          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Xuxa1} alt="" className="img-card" />
              <h2 className="titulo-card">Notebook Xuxa</h2>
              <p className="desc">Notebook Gamer com RGB 1 nucleo e 512Mb de Ram</p>
              <p className="preco">R$ 5.999,99</p>
              <div className="avaliacao"> ★ ★ ★ ★ ☆</div>
              <div className="off">- 10%</div>
            </div>
          </a>

        </section>
        <section className="destaque"></section>
        <footer></footer>
      </main>
    </>
  )
}

export default App
