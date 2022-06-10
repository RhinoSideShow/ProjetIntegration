import { useState } from 'react'
import { useRouter } from 'next/router'
import { mutate } from 'swr'
import styles from "../styles/Home.module.css";



const Form = ({ formId, membreForm, forNewMembre = true }) => {
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const [form, setForm] = useState({

        _budget: membreForm._budget,
        _createur : membreForm._createur,
        _debut : membreForm._debut,
        _fonds : membreForm._fonds,
        _membres : membreForm._membres,
        _status : membreForm._status,
        _fin : membreForm._fin,
        _titre : membreForm._titre,
        _somm : membreForm._somm,
        _desc : membreForm._desc,
    
    
  })


  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query

    try {
      const res = await fetch(`/api/projet/${id}`, {
        method: 'PUT',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      const { data } = await res.json()

      mutate(`/api/projet/${id}`, data, false) // Update the local data without a revalidation
      router.push('/')
    } catch (error) {
      setMessage('Failed to update membre')
    }
  }

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch('/api/projet', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }
      
      router.push('/')
    } catch (error) {
      setMessage('Failed to add membre')
    }
  }



  const handleChange = (e) => {
    const target = e.target
    const value =
    
      target.name === 'benevole' ? target.checked : target.value
      target.name === 'paymment' ? target.checked : target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = formValidate()
    if (Object.keys(errs).length === 0) {
      forNewMembre ? postData(form) : putData(form)
      
    } else {
      setErrors({ errs })
    }
  }

  /* Makes sure membre info is filled */
  const formValidate = () => {
    let err = {}
    if (!form._titre) err._titre = 'Titre is required'
    if (!form._budget) err._budget = 'Budget is required'
    if (!form._desc) err._desc = 'Desc is required'
    if (!form._somm) err._somm = 'Somm is required'
   
    return err
  }

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>

        
        <input
          type="text"
          maxLength="60"
          name="_titre"
          placeholder='Titre'
          value={form._titre}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          maxLength="60"
          name="_budget"
          placeholder='Budget'
          value={form._budget}
          onChange={handleChange}
          required
        />

<input
              type="text"
              className={styles.Input}
              maxLength="80"
              name="_desc"
              placeholder='Description courte du projet'
              value={form._desc}
              onChange={handleChange}
              required
          />


          <input
              type="text"
              className={styles.InputArea}
              maxLength="600"
              name="_somm"
              placeholder='Sommaire du projet'
              value={form._somm}
              onChange={handleChange}
              required
          />

        
        

      

        <button type="submit" className="btn">
          Soumettre
        </button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  )
}

export default Form
