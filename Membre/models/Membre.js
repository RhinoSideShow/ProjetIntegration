import mongoose from 'mongoose'

/* MembreSchema will correspond to a collection in your MongoDB database. */
const MembreSchema = new mongoose.Schema({
  name: {
   
    type: String,
    required: [true, 'Please provide a name .'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },

  lastname: {
   
    type: String,
    required: [true, 'Please provide a Nom .'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  
  
  email: {
    
    type: String,
    required: [true, "Please provide the email"],
    maxlength: [80, "Email cannot be more than 60 characters"],
  },
  
  telephone: {
    
    type: String,
    required: [true, 'Please provide tel.'],
    maxlength: [60, 'Tel cannot be more than 40 characters'],
  },
  adresse: {
    
    type: String,
  },
  benevole: {
    /* Boolean benevole value */

    type: Boolean,
  },

  payment: {
    /* Boolean payment value */

    type: Boolean,
  },
  
})

export default mongoose.models.Membre || mongoose.model('Membre', MembreSchema)
