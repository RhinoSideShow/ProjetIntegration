import FormProjet from '../Components/FormProjet'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../Components/Navbar";

const NewProjet = () => {
    const projetForm = {

        _budget: '',
        _createur: '',
        _debut: new Date().toISOString(),
        _fonds: '',
        _membres: '',
        _status: true,
        _fin: new Date().toISOString(),
        _titre: '',
        _somm: '',
        _desc: '',

    }

    return (
        <div id="__next" className={styles.DivContainerHome}>
            <Navbar/>
            <br/><br/><br/><br/><br/>
            <div className={styles.DivContainer}>
            <div className={styles.DivSousContainer}>

                <div className={styles.DivSousContainerCreate}>
                    <div className={styles.DivImageEtTexte}>
                        <img src="/Image_Login/logoMoon.png" className={styles.DivImageLogoCreate}/>
                        <h3>Creez votre projet</h3></div>
                <FormProjet formId="add-projet-form" projetForm={projetForm}/>
                </div>
            </div>
        </div>
</div>

    )

}

export default NewProjet
