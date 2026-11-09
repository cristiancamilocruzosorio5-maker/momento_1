import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <main className="home-content">
        <h1>Bienvenido a Sazón Integrador</h1>
        <p>Conectando sabores y tradición de nuestra tierra</p>
      </main>
      <Footer />
    </>
  )
}

export default Home