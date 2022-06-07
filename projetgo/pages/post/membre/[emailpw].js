import {useRouter} from "next/router";
import styles from '../../../styles/Home.module.css';

export default  function VerifSignIn({membre}){


    return(
        <div id="__next" className={styles.DivContainer}>
            {membre &&(
                <>
                    <div>
                        <h1>{membre._email}</h1>
                    </div>
                    <br/>
                    <h1>{membre._pw}</h1>
                </>
            )}
        </div>
    )
}

export async function  getServerSideProps ({params}) {
    const data = await fetch (`http://localhost:3000/api/membrelogin?emailpw=${params.emailpw}`)
    const membre = await data.json();

    return{
        props:{membre}

    }
}