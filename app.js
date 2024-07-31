//Montar server en puerto 3000
const express = require('express')
const app = express();
const port = 3000

app.get('/',(req,res)=> {
    res.send('He recibido una petición get, alguien solicita datos')
})

app.post('/',(req,res)=> {
    res.send('He recibido una petición Post, vienen datos para procesar')
})

app.put('/actualizar',(req,res)=> {
    res.send('Actualizando info')
})

app.patch('/',(req,res)=> {
    res.send('He recibido una petición Patch, debo actualizar datos')
})

app.delete('/',(req,res)=> {
    res.send('He recibido una petición Delete, debo eliminar información')
})

app.listen(3000, ()=>{ //callback 
    console.log(`Server corriendo en puerto ${port}`)
})