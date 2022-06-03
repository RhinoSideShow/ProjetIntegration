import styles from '../styles/Home.module.css';
import Switch from '../components/Switch';
import image from '../public/Image_Login/tothemoon.jpg';
import logo from '../public/Image_Login/logoMoon.png';


export default function login() {
    return (
        <>
            <div className={styles.DivContainer}>
                
                            
                            <div>
                                <p>image</p>
                                <h1>Membres ProjetGO</h1>
                                <h2>Bienvenue</h2>

                                <form className={styles.Form} action="/my-handling-form-page" method="post">

                                
                                    <label className={styles.label} for="nom"></label>
                                    <input className={styles.Input} type="text" id="nom" name="user_nom" placeholder="Nom"></input>
                                    <br/><br/>
                                
                                    <label className={styles.label} for="prenom"></label>
                                    <input className={styles.Input} type="text" id="prenom" name="user_prenom" placeholder="Prenom"></input>
                                    <br/><br/>
                                
                                    <label className={styles.label} for="email"></label>
                                    <input className={styles.Input} type="text" id="email" name="user_email" placeholder="Email"></input>
                                    <br/><br/>
                                
                                    <label for="telephone"> </label>
                                    <input className={styles.Input} type="text" id="telephone" name="user_telephone" placeholder="Téléphone 000 000 0000"></input>
                                    <br/><br/>
                                
                                    <label for="adresse"> </label>
                                    <input className={styles.Input}  type="text" id="adresse" name="user_adresse" placeholder="Adresse"></input>
                                    <br/><br/>
                                

                                    <label className={styles.Label}>Benevolat </label>
                                    <p className={styles.Switch}><Switch 
                                           
                                           handleToggle={() => setValue(!value)} 
                                    /></p>

                                <button className={styles.Button} type="submit">Soumettre</button>
                                <p className={styles.Mini}>En vous inscrivant, vous acceptez les conditions de service et la politique
                                    de confidentialité, y compris l'utilisation des cookies.</p>

                                </form>
                           
                            </div>
                        </div>
                   
        </>
    );
}