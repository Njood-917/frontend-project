import { useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import { ProductForm } from './ProductForm'
import { addProduct, Product } from '../redux/slices/products/productSlice'
import { AppDispatch } from '../redux/store'

const initialProductState: Product = {
  id: 0,
  name: '',
  image: '',
  description: '',
  categories: [],
  variants: [],
  sizes: [],
  price: 0
}

export function NewProductWrapper() {
  const dispatch = useDispatch<AppDispatch>()
  const [product, setProduct] = useState<Product>(initialProductState)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    const isList = name === 'categories' || name === 'variants' || name === 'sizes'
    if (isList) {
      setProduct({
        ...product,
        [name]: value.split(',')
      })
      return
    }

    setProduct({
      ...product,
      [name]: value
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const newProduct: Product = {
      ...product,
      id: +new Date()
    }
    console.log(newProduct, 'newProduct')

    dispatch(addProduct({ product: newProduct }))
    // Reset the form
    setProduct(initialProductState)
  }

  return (
    <div>
      <h3 className="text-2xl font-bold">Add a new product</h3>
      <ProductForm
        isEdit={false}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        product={product}
      />
    </div>
  )
}
