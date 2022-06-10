import Form from '../components/Projet'

const NewMembre = () => {
  const membreForm = {

    _budget: '',
        _createur: '',
        _debut: new Date().toISOString(),
        _fonds: '',
        _membres: '',
        _status: true,
        _fin: new Date().toISOString(),
        _titre: '',
        _somm: '',
        _desc: '',
    
    
  }

  return <Form formId="add-membre-form" membreForm={membreForm} />
}

export default NewMembre
