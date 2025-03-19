import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Login from '../../Auth/Login';
import Register from '../../Auth/Register';
function Model({ isOpen, onOpen, onClose }) {
    const [auth, setAuth] = useState(true)
    const handleLogin = () => {
        setAuth(true)
    }
    const handleRegister = () => {
        setAuth(false)
    }
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {auth ? <Login onRegister={handleRegister} onClose={onClose} /> : <Register onLogin={handleLogin} onClose={onClose} />}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default Model;