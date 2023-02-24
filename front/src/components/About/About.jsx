import style from "./About.module.css"
import ig from "./instagram.png"
import linkedin from "./linkedin.png"
import rickandmorty from "./rickandmorty.jpg"
const About = () => {

    return (
        <div className={style.div}>
            <div className={style.about}>
            <h1>About</h1>
            <p> La API de Rick and Morty es una API REST(ish) y GraphQL basada en el programa de televisión Rick and Morty . Tendrás    acceso a cientos de personajes, imágenes, lugares y episodios. La API de Rick and Morty está llena de información canónica como se ve en el programa de televisión.</p>
            <p>
                Esta web fue diseñada para buscar y "traer" personajes de la serie Rick and Morty a traves de su ID  mediante la Api https://rickandmortyapi.com/ la misma fue hecha con fines educativos
            </p><br />
            <div className={style.a}>
            <a href="https://www.instagram.com/josuem2099/"><img src={ig} className={style.icon} alt="Instagram" /></a>
            <a href="https://www.linkedin.com/in/josue-mora-6b612a192/"><img src={linkedin} className={style.icon} alt="Instagram" /></a>
            </div>
        </div>
            <div className={style.img}><img src={rickandmorty} alt="" /></div>
        </div>
    )
}

export default About