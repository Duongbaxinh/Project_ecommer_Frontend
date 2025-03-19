import { useToast } from '@chakra-ui/react';
import React from 'react';

export const Anouncement = ({ message = 'sucessfully', status = 'success' }) => {
    const toast = useToast()
    return React.useEffect(() => {
        toast({
            title: 'Successfully!',
            description: message,
            status: status,
            duration: 3000,
            isClosable: true,
        });
    }, [toast, message, status]);

}
