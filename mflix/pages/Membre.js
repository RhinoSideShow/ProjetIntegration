import styles from '../styles/Home.module.css';
import Link from 'next/link';

import { useState } from 'react';
import {useRouter} from 'next/router'


export default function Membres() {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [adresse, setAdresse] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const [favorite, setFavorite] = useState(false);
    const [adminPerson, setAdminPerson] = useState(false);
  
  
  const handleAdminChange = () => {
    setFavorite('Administrateur');
  };

  const handleMembreChange = () => {
    setFavorite('Membre');
  };
  const handleBenevoleChange = () => {
    setFavorite('Benevole');
  };
        const RadioButton = ({ label, value, onChange }) => {
            return (
              <label>
                <input type="radio" checked={value} onChange={onChange} />
                {label}
              </label>
            );
          };
      
    const handlePost = async (e) => {
        e.preventDefault();
        router.push(`./MembreAccount`)
        //router.push(`/channel/${inputValue}`)

        // reset error and message
        setError('');
        setMessage('');

        // fields check
        if (!nom || !prenom || !email || !telephone || !adresse) return setError('All fields are required');

        // post structure
        let post = {
            nom,
            prenom,
            email,
            telephone,
            adresse,
            published: false,
            createdAt: new Date().toISOString(),
        };
        // save the post
        let response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify(post),
        });

        // get the data
        let data = await response.json();

        if (data.success) {
            // reset the fields
            setNom('');
            setPrenom('');
            // set the message
            return setMessage(data.message);
        } else {
            // set the error
            return setError(data.message);
        }
    };
    return (
        <>
            <div className={styles.DivContainer}>
                
                            
                            <div>
                                <p>image</p>
                                <h1>Membres ProjetGO</h1>
                                <h2>Bienvenue</h2>

                                <form  
                                    onSubmit={handlePost} className={styles.Form}>
                                    {error ? (
                                        <div className={styles.formItem}>
                                            <h3 className={styles.error}>{error}</h3>
                                        </div>
                                    ) : null}
                                    {message ? (
                                        <div className={styles.formItem}>
                                            <h3 className={styles.message}>{message}</h3>
                                        </div>
                                    ) : null}
                                

                    
                                    <label className={styles.label} for="nom"></label>
                                    <input 
                                    className={styles.Input} 
                                    type="text" 
                                    id="nom" 
                                    name="nom" 
                                    
                                    onChange={(e) => setNom(e.target.value)}
                                    value={nom}
                                    placeholder="Nom"
                                    >
                                    </input>
                                    <br/><br/>
                                
                                    <label className={styles.label} for="prenom"></label>
                                    <input 
                                    className={styles.Input} 
                                    type="text" 
                                    id="prenom" 
                                    name="prenom" 
                                    
                                    onChange={(e) => setPrenom(e.target.value)}
                                    value={prenom}
                                    placeholder="Prenom"
                                    >
                                    </input>
                                    <br/><br/>
                                
                                    <label className={styles.label} for="email"></label>
                                    <input 
                                    className={styles.Input} 
                                    type="text" 
                                    id="email" 
                                    name="email" 
                                    
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    placeholder="Email"
                                    >

                                    </input>
                                    <br/><br/>
                                
                                    <label for="telephone"> </label>
                                    <input 
                                    className={styles.Input} 
                                    type="text" 
                                    id="telephone" 
                                    name="telephone" 
                                    
                                    onChange={(e) => setTelephone(e.target.value)}
                                    value={telephone}
                                    placeholder="Telephone">

                                    </input>
                                    <br/><br/>
                                
                                    <label for="adresse"> </label>
                                    <input 
                                   className={styles.Input} 
                                   type="text" 
                                   id="adresse" 
                                   name="adresse" 
                                   
                                   onChange={(e) => setAdresse(e.target.value)}
                                   value={adresse}
                                   placeholder="Adresse">

                                    </input>
                                    <br/><br/>
      <RadioButton
        label="Administrateur"
        value={favorite ==='Administrateur'}
        onChange={handleAdminChange}
      />
    
    <RadioButton
        label="Membre"
        value={favorite === 'Membre'}
        onChange={handleMembreChange}
      />
      <RadioButton
        label="Benevole"
        value={favorite === 'Benevole'}
        onChange={handleBenevoleChange}
      />
    
                        
                                    <br/><br/>
                                                                    
                                   
                                <button className={styles.Button} type="submit">Soumettre</button>
                                <p className={styles.Mini}>En vous inscrivant, vous acceptez les conditions de service et la politique
                                    de confidentialité, y compris l'utilisation des cookies.</p>
                                    <label className={styles.Link}>
                                     <Link href="/">
                                     <a>Liste de membres</a>
                                    </Link>
                                    </label>
                                </form>
                           
                            </div>
                        </div>
                   
        </>
    );
}