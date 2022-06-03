import styles from '../styles/Home.module.css';
import Head from "next/head";
import {useRouter} from "next/router";

export default function Login() {

    // aide a changer URL dans la fonction onClick des button.
    const router = useRouter();

    return (
        <>
            <div id="__next" className={styles.DivContainer}>
                <Head>
                    <title>ProjetGo</title>
                </Head>
                <div className={styles.DivSousContainer}>
                    <div className={styles.DivSousSousContainerLogin}>
                        <div className={styles.DivImage}>
                            <img src="/Image_Login/tothemoon.jpg" alt="nope" className={styles.Image}/>
                        </div>
                        <div className={styles.DivText}>
                            <div>
                                <img src="/Image_Login/logoMoon.png" className={styles.DivImageLogo}/><br/>
                            </div>
                            <div>
                                <h3>Apporter votre projet vers la lune</h3>
                                <h4>Rejoignez ProjetGo aujourd'hui.</h4><br/><br/>

                                <button className={styles.ButtonLogin} onClick={() => router.push('/')}>Continuer sans Compte</button>

                                <div className={styles.DivLigne}>
                                    <span className={styles.OrSpan}>
                                        OU
                                    </span>
                                </div>

                                <button className={styles.ButtonLogin} onClick={() => router.push('/Sign_In')}>Se connecter</button>
                                <p className={styles.TextAccount}>Vous n'avez pas de compte ?</p>

                                <button className={styles.ButtonLoginSignIn} onClick={() => router.push('/')}>S'inscrire</button>
                                <p className={styles.Mini}>En vous inscrivant, vous acceptez les conditions d'utilisation et </p><p className={styles.Mini}>la confidentialité Politique, y compris l'utilisation des cookies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}