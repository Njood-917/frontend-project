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
    // Reset the form
    // setProduct(initialProductState)
  }

  // const { state } = useLocation()

  // const [id] = useState(state.id)
  // const [name, setName] = useState(state.name)
  // const [description, setDescription] = useState(state.description)

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.name === 'name') {
  //     setName(event.target.value)
  //   } else if (event.target.name === 'description') {
  //     setDescription(event.target.value)
  //   }
  // }

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault()
  //   const editedProduct = {
  //     id: id,
  //     name: name,
  //     description: description
  //   }
  //   if (!name || !description) {
  //     alert('add name and description')
  //   } else {
  //     dispatch(editProducts(editedProduct))
  //   }
  // }

  // function handleChange(event: ChangeEvent<HTMLInputElement>): void {
  //   throw new Error('Function not implemented.')
  // }

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

      {/* <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="title" value={name} onChange={handleChange} />
        <br /> <br />
        <input
          type="text"
          name="description"
          placeholder="name"
          value={description}
          onChange={handleChange}
        />
        <br /> <br />
        <button type="submit">Edit</button>
      </form> */}
    </div>
  )
}
