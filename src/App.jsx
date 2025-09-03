import { useState } from 'react'
import './App.css'
import Xuxa1 from './assets/notebook-xuxa.jpg'
import pcgamer from './assets/PC-Gamer 2.webp'
import pcben10 from './assets/Pc-Ben10.jpg'

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
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (15) </div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={pcgamer} alt="" className="img-card" />
              <h2 className="titulo-card">Pc Gamer</h2>
              <p className="desc">PC Gamer com RGB 3 nucleo e 1Tb de Ram</p>
              <p className="preco">R$ 10.000.00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (40) </div>
              <div className="off">- 30%</div>
            </div>
          </a>
          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={pcben10} alt="" className="img-card" />
              <h2 className="titulo-card">Pc Ben10</h2>
              <p className="desc">PC Ben10 com RGB 4 nucleo e 2Tb de Ram</p>
              <p className="preco">R$ 13.999,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (25)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

        </section>
        <section className="destaque">

        <iframe src="https://www.youtube.com/embed/p7cDN1ofIw0?autoplay=1&mute=1&controls=0&loop=1&playlist=p7cDN1ofIw0&modestbranding=1&showinfo=0"   frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>  
        <footer> 

          <img src="" alt="" className='logo-footer'/>

          <div className="social-icons">
            <div className="icon">
              <img src="instagram.svg" alt="" id="instagram" />
            </div>
            <div className="icon">
              <img src="discord.svg" alt="" id="discord" />
            </div>
            <div className="icon">
              <img src="whatsapp.svg" alt="" id="whatsapp" />
            </div>
            <div className="icon">
              <img src="youtube.svg" alt="" id="youtube" />
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
