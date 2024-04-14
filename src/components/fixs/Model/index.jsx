import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Login from '../../Auth/Login';
import Register from '../../Auth/Register';
function Model({ isOpen, onOpen, onClose }) {
    const [auth, setAuth] = useState(true)
    const handleLogin = () => {
        console.log('run at here')
        setAuth(true)
    }
    const handleRegister = () => {
        setAuth(false)
    }
    console.log('check authentication ::::: ', auth)
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {auth ? <Login onRegister={handleRegister} /> : <Register onRegister={handleLogin} />}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default Model;