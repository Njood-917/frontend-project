// EditProfile.tsx
import React, { ChangeEvent, FormEvent, useState } from 'react'

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    // Implement API call to update user profile with formData
    // You can use axios or your preferred HTTP library
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />

      {/* Add other fields as needed */}
      <button type="submit">Save Changes</button>
    </form>
  )
}

export default EditProfile
