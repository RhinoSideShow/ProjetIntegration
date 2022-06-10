import mongoose from 'mongoose';


/* MembreSchema will correspond to a collection in your MongoDB database. */
const ProjetSchema = new mongoose.Schema({

    

    _createur: String,

    _budget: {

        type: String,
        required: [true, 'Entrez le Budget .'],
        maxlength: [8, 'Budget cannot be more than 8 characters'],
    },
    
    _debut: Date,
    _fonds: String,
    _membres: String,
    _status: Boolean,
    _fin: Date,
    
    _titre: {
   
    type: String,
    required: [true, 'Entrez un nom .'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },

  _somm: {

    type: String,
    required: [true, 'Entrez le sommaire .'],
    maxlength: [6000, 'Name cannot be more than 60 characters'],
},

_desc: {

    type: String,
    required: [true, 'Entrez le desc .'],
    maxlength: [6000, 'Name cannot be more than 60 characters'],
},
  
},
{

    versionKey: false // You should be aware of the outcome after set to false

}

)

export default mongoose.models.Projet || mongoose.model('projet', ProjetSchema)
