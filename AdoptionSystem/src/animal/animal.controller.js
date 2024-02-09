'user strict'

import Animal from './animal.model.js'

export const prueba = (req, res) => {
    return res.send('AaAaAaAaA')
}

export const guardar = async (req, res) => {
    try {
        let data = req.body
        let animal = new Animal(data)
        await animal.save()
        return res.send({ message: 'Animal registered successfully' })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: 'Error registering animal', err })
    }
}

export const actualizar = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        
        let updateAnimal = await Animal.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        )

        if (!updateAnimal) return res.status(401).send({ message: 'Animal not found and not update' })
        return res.send({ message: 'Update animal', updateAnimal })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error updating animal' })
    }
}

export const borrar = async (req, res) => {
    try {
        let { id } = req.params
        let deleteAnimal = await Animal.findOneAndDelete({ _id: id })
        if (!deleteAnimal) return res.status(400).send({ message: 'Animal not found and not deleted' })
        return res.send({ message: `Animal with name ${deleteAnimal.name} delete successfully` })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'error deleting Animal' })
    }
}

export const buscar = async(req, res) => {
    try {
        let data = await Animal.find();
        console.log(data)
        if(!data.length) {
            console.log('No hay datos existentes')
        }
        return res.status(200).json({
          message,
          data
        });
    }
    catch(e) {
        console.error(e);
        let message = 'error en la consulta ';
        return res.status(500).json({
            message
        });
    }
}