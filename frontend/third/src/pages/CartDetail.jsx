import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function CartDetail() {

  const { products } = useSelector(state => state.cart)

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            products.map((product) => (
              <TableRow>
                <TableCell className='mx-auto'><img src={product.image} className='max-w-28 max-h-28' alt='Product_Image' /></TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>1</TableCell>
                <TableCell>{product.price}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CartDetail