import mongoose from "mongoose";

const empresasSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    propetario:{
        type: mongoose.Schema.ObjectId,
        required: true
    },
    categoria:{
        type: mongoose.Schema.ObjectId,
        required: false
    },
    trayectoria:{
        type: String,
        required:true
    },
    impacto:{
        type: Number,
        enum: [1,2,3,4,5,6,7,8,9,10],
        required: true
    }
})

export default mongoose.model('empresa', empresasSchema)