import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from "@mui/icons-material/Delete"
import { clearCart, removeProduct } from '../store/features/cartSlice'
import YesNoModal from '../components/YesNoModal'

function CartDetail() {

  const dispatch = useDispatch()

  const { products } = useSelector(state => state.cart)

  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleDelete = () => {
    dispatch(clearCart())
    closeModal()
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              products.map((product, key) => (
                <TableRow key={key}>
                  <TableCell className='mx-auto'><img src={product.image} className='max-w-28 max-h-28' alt='Product_Image' /></TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>
                    <DeleteIcon color='error' onClick={() => dispatch(removeProduct(product))} />
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      <div className='flex justify-end m-4'>
        <Button
          onClick={() => setIsModalVisible(true)}
          variant='outlined'
          color='error' startIcon={<DeleteIcon />}>Clear Cart</Button>
      </div>
      <YesNoModal
        text="Would you like to clear cart?"
        isModalVisible={isModalVisible}
        closeModal={closeModal}
        clickYes={handleDelete} />
    </>
  )
}

export default CartDetail