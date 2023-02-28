
import { Link } from'react-router-dom';
import FADERLogo from '../img/FADER.png';
import logoDepi from "../img/logo-depi_gold.png";



export default function Navbar() {
    return(
    <div>
        <section className="hero bd-hero is-small has-background">

            <img alt="FADERyCIPOL" className="hero-background is-transparent" src={FADERLogo} />
            <div className="hero-body bd-hero-body">
                <div className="columns is-gapless">
                    <div className="column is-2 is-hidden-touch">
                        <Link className="figure image is-128x128" to={'/'}>
                            <img src={logoDepi} alt="DEPI" />
                        </Link>
                    </div>
                    <div className="column is-align-content-center">
                        <Link className="figure image bd-image is-hidden-desktop" to={"#"}>
                            <img src={logoDepi} alt="DEPI" />
                        </Link>
                        <h1 className="title is-hidden-touch">Universidad Juárez del Estado de Durango</h1>
                        <h1 className="title is-4 is-hidden-desktop">Universidad Juárez del Estado de Durango</h1>            
                        <p className="subtitle">
                            <span> Facultad de Derecho y Ciencias Políticas</span><br />
                            <span>División de Estudios de Posgrado e Investigación</span>
                        </p>
                    </div>
                    <div className="column has-text-right is-2 is-hidden-touch">
                        <Link className="is-inline-block image is-128x128" to={"https://faderycipol.ujed.mx/"}>
                            <img className="has-ratio" src={FADERLogo} alt="UJED" width="200" height="120" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* INICIO DE LA BARRA DE NAVEGACION */}

        <nav className="navbar is-size-6-touch" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item is-hidden" href="#">
                    <img src="img/logo-depi_gold.png" alt="DEPI" width="90" height="100" />
                </a>
            <div className="navbar-burger burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
  
            <div className="navbar-menu">
                <div className="navbar-start is-align-self-flex-end">
                    <a className="navbar-item" href="/">
                    Inicio
                    </a>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        Conócenos
                    </a>
                    <div className="navbar-dropdown is-boxed">
                        <a className="navbar-item" href="about.html">
                            Quienes Somos
                        </a>
                        <a className="navbar-item" href="mision.html">
                            Misión
                        </a>
                        <a className="navbar-item" href="vision.html">
                            Visión
                        </a>
                        <a className="navbar-item" href="organigrama.html">
                            Organigrama
                        </a>
                    </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable"> 
                    <a className="navbar-link">
                        Oferta Académica
                    </a>
                    <div className="navbar-dropdown is-boxed">
                        <a className="navbar-item" href="did.html">
                            Doctorado Institucional de Derecho
                        </a>
                        <a className="navbar-item" href="mid.html">
                            Maestría Institucional de Derecho
                        </a>
                    </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable"> 
                    <a className="navbar-link">
                        Convocatorias
                    </a>
                    <div className="navbar-dropdown is-boxed">
                        <a className="navbar-item" href="doc_convocatoria.html">
                            Doctorado Institucional de Derecho
                        </a>
                        <a className="navbar-item" href="madh-convocatoria.html">
                            Maestría en Derechos Humanos
                        </a>
                    </div>
                </div>
                <a className="navbar-item" href="calendario_sem23.html">
                    Calendario
                </a>
                <a className="navbar-item" href="https://www.facebook.com/profile.php?id=100063538663610" target="_blank">
                    Contacto
                </a>
                </div>
                <div className="navbar-end">
            
            </div>
        </div>
    </nav>
    </div>  
    );
}


