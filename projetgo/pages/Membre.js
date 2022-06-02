import styles from '../styles/Home.module.css';
import image from '../public/Image_Login/tothemoon.jpg'
import logo from '../public/Image_Login/logoMoon.png'

export default function login() {
    return (
        <>
            <div className={styles.DivContainer}>
                <div className={styles.DivSousContainer}>
                    <div>
                        <div className={styles.DivImage}>
                            <img src="/Image_Login/tothemoon.jpg" alt="nope" className={styles.Image} />
                        </div>
                        <div className={styles.DivText}>
                            <div>
                                <img src="/Image_Login/logoMoon.png" className={styles.DivImageLogo} /><br />
                            </div>
                            <div>
                                <h1>Membres ProjetGO</h1>
                                <h2>Bienvenue</h2>

                                <form action="/my-handling-form-page" method="post">


                                <li>
                                    <label className={styles.form} for="nom">Nom :</label>
                                    <input className={styles.button} type="text" id="nom" name="user_nom"></input>
                                </li>
                                <li>
                                    <label className={styles.label} for="prenom">Prénom </label>
                                    <input className={styles.button} type="text" id="prenom" name="user_prenom"></input>
                                </li>
                                <li>
                                    <label className={styles.label} for="email">Email </label>
                                    <input className={styles.button} type="text" id="email" name="user_email"></input>
                                </li>
                                <li>
                                    <label for="telephone">Téléphone </label>
                                    <input type="text" id="telephone" name="user_telephone"></input>
                                </li>
                                <li>
                                    <label for="adresse">Adresse </label>
                                    <input type="text" id="adresse" name="user_adresse"></input>
                                </li>
                             
                                <li>
                                    <label for="statut">Statut </label>
                                    <input type="text" id="statut" name="user_statut"></input>
                                </li>
                                </form>
                                <li class="button">
                                    <button className={styles.Button} type="submit">Soumettre</button>
                                </li>
                                <p className={styles.Mini}>En vous inscrivant, vous acceptez les conditions de service et la politique
                                    de confidentialité, y compris l'utilisation des cookies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}