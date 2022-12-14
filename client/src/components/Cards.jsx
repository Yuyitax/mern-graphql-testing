import photo from "../assets/charity-photo-test.avif";
import { DonateBtn } from "./DonateBtn";
import React, { useState } from "react";
// import  { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@mui/material";
import  { Modal, Box, Typography, Button } from "@mui/material";


const Cards = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {setShowModal(false)}
  return (
    <>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover transition  hover:-translate-y-1 hover:scale-110"
            src={photo}
            alt=""
          />
        </div>

        <div className="px-6 py-4">
          <p className="font-bold text-xl mb-2 text-white">Charity Name</p>
          <p className="text-gray-300 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>

        <DonateBtn onClickBtn={() => {setShowModal(true);}}/>
        <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box className= 'absolute w-[60%] md:max-h-screen md:max-w-xl bg-amber-100 rounded-lg p-6  mt-10 ml-12'>
        <img className="w-[85%] ml-[7%] mr-[10%] rounded-lg" src={photo} alt="" />
        <br />
        <Typography id="modal-modal-title" variant="h4" component="h2" className=" text-black">
          Charity Name
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </Typography>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Donate</Button>
        </Box>
        </Modal>
        {
        /* <Dialog 
        open={showModal}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: 'orange',
            color: 'blue',
            boxShadow: 'none',
          },
        }}
        >
          
        <DialogTitle className="font-bold text-xl mb-2 decoration-sky-600">
          Charity Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Charity Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, Nonea! Maiores et perferendis eaque,exercitationem praesentium nihil.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Donate</Button>
        </DialogActions>
      </Dialog> */}

      </div>    
    </>
  );
};

export default Cards;
