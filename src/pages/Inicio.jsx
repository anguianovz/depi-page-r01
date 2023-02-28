
import { BrowserRouter } from "react-router-dom";
import bannerhero from "../img/banner-did.png";
import Navbar from "./Navbar";


export default function Inicio() {
    return (
        <div>
                <Navbar />
                <section>
                <div className="hero is-medium has-background">
                    <img alt='banner' className='hero-background' src={bannerhero} />
                    <div className="hero-body">
                    <div>
                        <h3 className="title has-text-weight-semibold">Sobre el Doctorado Institucional en Derecho.
                            </h3>
                    </div>
                </div>
                </div>
            </section>   
        </div>
    );
}