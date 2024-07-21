import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: 5
};

function YesNoModal({text, isModalVisible, closeModal, clickYes}) {
  
  return (
    <Modal 
      open={isModalVisible}
      onClose={closeModal}
    >
      <Box sx={{...style}}>
        <Typography align='center' variant='h5'>{text ? text : "Are You Sure?"}</Typography>
        <Box sx={{display: "flex", justifyContent: "space-around", mt: 4}}>
          <Button variant='outlined' color='error' onClick={closeModal}>No</Button>
          <Button variant='outlined' color='success' onClick={clickYes}>Yes</Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default YesNoModal