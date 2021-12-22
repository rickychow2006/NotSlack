import {useState} from 'react';
import SignUpFormModal from '../Auth/SignUpFormModal';

const NavBar = () => {
    const [showSignUp, setShowSignUp] = useState(false)

    return (
        <nav>
            <>
                <button onClick={() => {setShowSignUp(!showSignUp)}} style={{cursor: 'pointer'}} >
                    Sign Up
                </button>
                {showSignUp && <SignUpFormModal setOpenModal = {setShowSignUp} />}
            </>
        </nav>
    )
}

export default NavBar;