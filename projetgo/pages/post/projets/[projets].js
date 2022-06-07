import styles from '../../../styles/Home.module.css';

export default function AffichageProjets({projet}) {

    return (
        <div id="__next" className={styles.DivContainer}>
            {projet && (
                <>
                    <div>
                        <h1>{projet._titre}</h1>
                        <h1>{projet._id}</h1>
                        <h1>{projet._createur}</h1>
                        <h1>{projet._somm}</h1>
                        <h1>{projet._status}</h1>
                        <h1>{projet._desc}</h1>
                        <h1>{projet._budget}</h1>
                        <h1>{projet._debut}</h1>
                        <h1>{projet._fin}</h1>
                        <h1>{projet._fonds}</h1>
                        <h1>{projet._membres}</h1>
                    </div>
                </>
            )}
        </div>
    )
}

export async function getServerSideProps({params}) {

    const data = await fetch(`http://localhost:3000/api/ProjetDetails?projets_id=${params.projets}`)
    const projet = await data.json();

    return {
        props: {projet}

    }
}