import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

router.post('/', async (req, res) => {
    const { name, price, descripition, category, stock} = req.body

    const newProduct = await prisma.product.create({
        data: {
        name,
        price,
        descripition,
        category,
        stock
        }
    })
    
    return res.status(201).json(newProduct)
})

router.get('/', async (req, res) => {
    const products = await prisma.product.findMany()
    return res.json(products)
})

router.get('/:id', async (req, res) => {
    const productId = req.params.id
    const product = await prisma.product.findUnique({
        where: {id: Number(productId)}
    })
    if(!product){
        return res.status(404).json({message: 'Product not found'})
    }
    return res.json(product)
})

router.put('/:id', async (req, res) => {
    const productId = req.params.id
    const { name, price, descripition, category, stock} = req.body
    const product = await prisma.product.findUnique({
        where: {id: Number(productId)}
    })
    if(!product){
        return res.status(404).json({message: 'Product not found'})
    }
    const upProduct = await prisma.product.update({
        where: {id: Number(productId)},
        data:{
            name,
            price,
            descripition,
            category,
            stock
        }
    })
    return res.status(200).json(upProduct)
})

router.delete('/:id', async (req, res) => {
    const productId = req.params.id
    const products = await prisma.product.findUnique({
        where: {id: Number(productId)}
    })
    if(!products){
        return res.status(404).json({message: 'Product not found'})
    }
    const product = await prisma.product.delete({
        where: {id: Number(productId)}
    })
    return res.status(200).json({message: 'Produto Pagado com sucesso'})
})

export default router