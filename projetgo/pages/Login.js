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
                            <img src="/Image_Login/tothemoon.jpg" alt="nope" className={styles.Image}/>
                        </div>
                        <div className={styles.DivText}>
                            <div>
                                <img src="/Image_Login/logoMoon.png" className={styles.DivImageLogo}/><br/>
                            </div>
                            <div>
                                <h1>Take your project to the moon</h1>
                                <h2>Join ProjetGo Today.</h2>
                                <br/><br/>
                                <button className={styles.Button}>Continue without account</button>
                                <div className={styles.DivLigne}>
                                <span className={styles.OrSpan}>
                                    OR
                                </span>
                                </div>
                                <button className={styles.ButtonSignIn}>Sign in</button>
                                <br/><br/><br/>
                                <p className={styles.TextAccount}>Dont have an account ?</p>
                                <button className={styles.Button}>Sign up</button>
                                <p className={styles.Mini}>By signing up, you agree to the Terms of Service and Privacy Policy,
                                    including
                                    the Use of Cookies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}