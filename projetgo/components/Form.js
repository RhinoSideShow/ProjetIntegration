import { useState } from 'react'
import { useRouter } from 'next/router'
import { mutate } from 'swr'



const Form = ({ formId, membreForm, forNewMembre = true }) => {
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const [form, setForm] = useState({
    _prenom: membreForm._prenom,
    _nom: membreForm._nom,
    _email: membreForm._email,
    telephone: membreForm.telephone,
    adresse: membreForm.adresse,
    password: membreForm.password,
    benevole: membreForm.benevole,
    payment: membreForm.payment,
    
  })


  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query

    try {
      const res = await fetch(`/api/membres/${id}`, {
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

      mutate(`/api/membres/${id}`, data, false) // Update the local data without a revalidation
      router.push('/')
    } catch (error) {
      setMessage('Failed to update membre')
    }
  }

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch('/api/membres', {
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
      //router.push(`/[id]`, as,  `/${membre._id}`)
      //<Link href="/[id]" as={`/${membre._id}`}>
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
    if (!form._prenom) err._prenom = 'Name is required'
    if (!form._nom) err._nom = 'Prenom is required'
    if (!form._email) err._email = 'Email is required'
    if (!form.telephone) err.telephone = 'Species is required'
    if (!form.adresse) err.adresse = 'Adresse is required'
    return err
  }

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>

        
        <input
          type="text"
          maxLength="60"
          name="_prenom"
          placeholder='Prénom'
          value={form._prenom}
          onChange={handleChange}
          required
        />

        
        <input
          type="text"
          maxLength="60"
          name="_nom"
          placeholder='Nom'
          value={form._nom}
          onChange={handleChange}
          required
        />

        
        <input
          type="text"
          maxLength="80"
          name="_email"
          placeholder='Email'
          value={form._email}
          onChange={handleChange}
          required
        />

        
        <input
          type="text"
          maxLength="30"
          name="telephone"
          placeholder='Téléphone'
          value={form.telephone}
          onChange={handleChange}
          required
        />

        
        <input
          type="text"
          maxLength="80"
          name="adresse"
          placeholder='Adresse'
          value={form.adresse}
          onChange={handleChange}
        />
          <input
          type="text"
          maxLength="80"
          name="password"
          placeholder='Mot de passe'
          value={form.password}
          onChange={handleChange}
        />

        <label htmlFor="benevole">Voulez vous etre Bénévole ? </label>
        <input
          type="checkbox"
          name="benevole"
          checked={form.benevole}
          onChange={handleChange}
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
