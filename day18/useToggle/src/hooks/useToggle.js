import { useState} from 'react';
export function useToggle(){
    const [isOpen, setIsOpen] = useState(false)

    function toggle(){
        setIsOpen(prev => !prev);
    }

    return {isOpen , toggle}
}