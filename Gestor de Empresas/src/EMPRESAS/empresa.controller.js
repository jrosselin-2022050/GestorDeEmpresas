import Empresa  from './empresa.model.js'

import XlsxPopulate from 'xlsx-populate'




export const nuevaEmpresa = async(req, res)=>{
    try{
        let data = req.body
        let { id } = req.params
        data.propetario = id
        let { uid } = req.user
        data.usuario = uid
        let empresa = new Empresa(data)
        await empresa.save()
        return res.send({ message: 'Empresa subida' })
    }catch(err){
        console.error(err);
    }
}

export const actualizarEmpresa = async(req, res)=>{
    try{
        let {id} = req.params
        let data = req.body
        let empresa = await Empresa.findOne({_id:id})
        if(!empresa) return res.status(404).send({message: 'Empresa no encontrada'})
        let actualizar = await Empresa.findOneAndUpdate({_id: id},data,{new: true})
        if(!actualizar) return res.status(401).send({message:'No se pudo actualizar los datos'})
        return res.send({message:'Actualizado correctamente'})
    }catch(err){
        console.error(err);
    }
}

/*export const eliminarEmpresa = async(req, res)=>{
    try{
        let { id } = req.params
        let empresa = await Empresa.findOne({_id:id})
        if(!empresa)return res.status(400).send({message: 'La empresa no existe'})
        let eliminar = await Empresa.findOneAndDelete({_id:id})
        if(!eliminar) return res.status(404).send({message: 'No se pudo eliminar'})
        return res.send({message: ` ${eliminar.name} Se elimino correctamente`})
    }catch(err){
        console.error(err);
        return res.status(500).send({message:'Error en el servidor'})
    }
}*/

export const listarEmpresas = async(req,res)=>{
    try{
        let empresa = await Empresa.find({})
        return res.send({message: 'Estas son las empresas: ', empresa})
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error en el servidor'})
    }
}

export const buscarEmpresa = async(req, res)=>{
    try{
        let { id } = req.params
        let empresa = await Empresa.find({_id: id})
        return res.send({message: empresa})
    }catch(err){
        console.error(err);
    }
}
export const buscarfiltro = async (req, res) => {
    try {
        const { buscar } = req.body;

        if (!buscar || (buscar !== 'asc' && buscar !== 'desc')) {
            return res.status(400).send({ message: 'La propiedad "buscar" debe ser "asc" o "desc"' });
        }

        let sortDirection = 1;
        if (buscar === 'desc') {
            sortDirection = -1;
        }

        const empresa = await Empresa.find({}).sort({ name: sortDirection });

        return res.send({ message: empresa });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error en la búsqueda de la base de datos' });
    }
}

export const tiempo = async(req, res)=>{
    try{
        let { buscar } = req.body
        let a = 0
        if(buscar == 'new')
            a = -1
        if(buscar == 'old')
            a = 1
        let empresa = await Empresa.find({}).sort({yearsExperience:a})
        return res.send({message: empresa})
    }catch(err){
        console.error(err);
        return res.status(500).send({message:'Error en la base de datos'})
    }
}

