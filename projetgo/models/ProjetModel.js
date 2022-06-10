import mongoose from 'mongoose';


/* MembreSchema will correspond to a collection in your MongoDB database. */
const ProjetModelSchema = new mongoose.Schema({

    _budget: {

        type: String,
        required: [true, 'Entrez le Budget .'],
        maxlength: [8, 'Budget cannot be more than 8 characters'],
    },


    _createur: {

        type: String,
        required: [true, 'Entrez le createur .'],
        maxlength: [60, 'createur cannot be more than 60 characters'],
    },

    _debut: {

        type: Date,
        required: [true, 'Entrez la date de debut .'],
        maxlength: [60, 'debut cannot be more than 60 characters'],
    },

    _fonds: {

        type: String,
        required: [true, 'Entrez les fonds .'],
        maxlength: [8, 'fonds cannot be more than 8 characters'],
    },

    _membres: {

        type: String,
        required: [true, 'Entrez les membres .'],
        maxlength: [6000, 'Name cannot be more than 6000 characters'],
    },

    _status: {

        type: Boolean,

    },

    _fin : {

        type : Date,
        required:[true, 'Entrez la fin.'],
        maxlength: [60, 'Fin cannot be more than 60 characters'],


    },

    _titre: {
        type: String,
        required: [true, 'Entrez le titre .'],
        maxlength: [60, 'titre cannot be more than 60 characters'],
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


export default mongoose.models.ProjetModelSchema || mongoose.model('ProjetModel', ProjetModelSchema)
