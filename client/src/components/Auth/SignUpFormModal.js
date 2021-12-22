import React, {useState} from 'react';
import SignUpForm from './SignUpForm';
import { GrClose as Close } from "react-icons/gr";
import './Modal.css';

const SignUpFormModal = ({setOpenModal}) => {
  return (
    <div id="modal">
      <div id="modal-background" />
       <div id="modal-content">
        <div id="modal__close-button"><Close onClick={() => setOpenModal(false)} id="close__button" /></div>
          <SignUpForm/>
        </div>
    </div>
  )
};

export default SignUpFormModal
