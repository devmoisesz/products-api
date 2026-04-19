import express from 'express'
import { PrismaClient } from '@prisma/client'

const server = express()
const prisma = new PrismaClient()
server.use(express.json())

server.post('/products', async (req, res) => {
    const { name, price, descripition, category, stock} = req.body

    const newProduct = await prisma.product.create({
        data: {
        name,
        price,
        descripition,
        category,
        stock,
        }
    })
    
    return res.status(201).json(newProduct)
})

server.get('/products', async (req, res) => {
    const products = await prisma.product.findMany()
    return res.json(products)
})

server.get('/products/:id', async (req, res) => {
    const productId = req.params.id
    const product = await prisma.product.findUnique({
        where: { id: Number(productId)}
    })
    if(!product){
        return res.status(404).json({message: 'Product not found'})
    }

    return res.json(products)
})
server.put('/products/:id', async (req, res) => {
    const productId = req.params.id
    const { name, price, descripition, category, stock } = req.body
    const products = await prisma.product.findUnique({
        where: { id: Number(productId)}
    })
    if(!products){
        return res.status(404).json({message: 'Product not found'})
    }
    const upProduct = await prisma.product.update({
        where: {id: Number(productId)},
        data:{
            name,
            price,
            descripition,
            category,
            stock,
        }
    })
    
    return res.status(200).json(upProduct)
})
server.delete('/products/:id', async (req, res) => {
    const productId = req.params.id
    const products = await prisma.product.findUnique({
        where: {id: Number(productId)}
    })
    if(!products){
        return res.status(404).json({message: 'Produto não encontrado'})
    }
    const product = await prisma.product.delete({
        where: { id: Number(productId)}
    })
    
    return res.status(200).json({message: 'Produto Apagado com sucesso!'})
})

server.listen(3020, () => {
    console.log("Servidor Rodando na porta 3020")
})