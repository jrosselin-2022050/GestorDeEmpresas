import Categoria from './categoria.model.js'

export const nuevaCategoria = async (req, res)=>{
    try{
        let data = req.body
        let categoria = new Categoria(data)
        await categoria.save()
        return res.send({message:'Categoria Guardada'})
    }catch(err){
        console.error(err);
        return res.status(500).send({message:'Error en el servidor'})
    }
}

export const listarCategorias = async (req, res)=>{
    try{
        let categoria = await Categoria.find()
        return res.send({message:'Todas las categorias:', categoria})
    }catch(err){
        console.error(err);
        return res.status(500).send({message:'Errir en la base de datos'})
    }
}

export const editarCategoria = async(req, res)=>{
    try{
        let {id}= req.params
        let data = req.body
        let categoria = await Categoria.findOneAndUpdate({ _id: id }, data, { new: true })
        if(!categoria) return res.status(404).send({message:'No se encontro la categoria a editar'})
        return res.send({message:'categoria editada correctamente'})
    }catch(err){
        console.error(err);
        return res.status(500).send({message:'Error del servidor'})
    }
}

export const  eliminarCategoria = async (req, res)=>{
    try{
        let { id } = req.params
        let eliminar = await Categoria.findOneAndDelete({_id: id})
        if(!eliminar) return res.status(404).send({message: 'Categoria no encontrada'})
        return res.send({message: 'Categoria elimimnada correctameente'})
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error en el servidor'})
    }
}