import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext('');
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Current value of the Current User', currentUser);
            setLoading(false)
        })
        return (() => {
            unSubscribe();
        })
    })

    const authInfo = { user, createUser, signIn, logOut, loading,googleLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;