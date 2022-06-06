import Head from 'next/head'
import {useRouter} from "next/router";
import styles from "../styles/Home.module.css";


export default function CreateProject(){

    const router = useRouter();

    return (
        <div id="__next" className={styles.DivContainer}>
            <Head>
                <title>Creez votre projet</title>
            </Head>
            <div className={styles.DivSousContainer}>
                <img src="/Image_Login/logoMoon.png" className={styles.DivImageLogo}/><br/>

            <div>

                <input type="text" className={styles.Input} placeholder="Nom du projet"/>
                <br/><br/>
            </div>
            <div>

                <input type="text" className={styles.Input} placeholder="Code du projet"/>
                <br/><br/>
            </div>
            <div>

                <input type="text" className={styles.Input} placeholder="Description couter du projet"/>
                <br/><br/>
            </div>
            <div>

                <textarea type="text" className={styles.Input2} placeholder="Sommaire du projet"/>
                <br/><br/>
            </div>
    <diV>
        <button className={styles.ButtonSignIn2} onClick={() => router.push('/')}>Soumettre</button>
        <button className={styles.ButtonSignIn2} onClick={() => router.push('/')}>Retour</button>
    </diV>
            </div>
    </div>




)


}

