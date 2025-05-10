import React from 'react'
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return(
        <section id = "intro">
            <div className="introContent">
                <span className="hello"> Hello,</span>
                <span className="introText">I'm Fred <span className="introName">Fred</span> <br/> Website Designer </span>
                <p className="introPara"> AQUI É O fred....... caso o nome ficar grande, adicionar a quebra <br/>de linha quebra
                dee linha pra quando for estilizar bonitinho  </p>

            <Link><button className="btn"><img src = {btnImg} alt="Hire" className={btnImg}/>Hire me</button></Link>

             </div>
            <img src={bg} alt = 'Profile' className="bg"/>
        </section>
    );
}

export default Intro;