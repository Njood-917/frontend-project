import { ChangeEvent, FormEvent, useState } from 'react'
import { editProducts, Product } from '../redux/slices/products/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { RootState } from '../redux/store'
import { ProductForm } from './ProductForm'

export const EditProductWrapper = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const products = useSelector((state: RootState) => state.products.products)

  const selectedProduct = products.find((product: Product) => product.id === Number(id))

  const [product, setProduct] = useState<Product>(selectedProduct as Product)

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

    dispatch(editProducts({ product: product }))
  }

  return (
    <div>
      <h3 className="text-2xl font-bold">Edit a product</h3>
      {selectedProduct && (
        <ProductForm
          isEdit={true}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          product={selectedProduct}
        />
      )}
    </div>
  )
}
