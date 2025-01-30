import React from "react";
import { Dialog, DialogContent } from "@mui/material";

const ImagePopup = ({ open, image, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <img
          src={image}
          alt="Selected"
          className="w-full max-w-80 max-h-96 rounded object-contain"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImagePopup;
