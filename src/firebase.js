
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, collection, getDocs, query, where, limit, doc, getDoc, setDoc, updateDoc, deleteDoc, Timestamp, serverTimestamp, arrayUnion, arrayRemove, collectionGroup, onSnapshot, orderBy, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { getFunctions, httpsCallable } from 'firebase/functions';
import firebaseConfig from './firebase-config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app, 'southamerica-east1');

export { 
    app, 
    auth, 
    db, 
    storage,
    functions,
    httpsCallable,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
    updateProfile,
    collection,
    getDocs,
    query,
    where,
    limit,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    deleteDoc,
    Timestamp,
    serverTimestamp,
    ref,
    uploadBytes,
    getDownloadURL,
    arrayUnion,
    arrayRemove,
    collectionGroup,
    onSnapshot,
    orderBy,
    uploadBytesResumable,
    addDoc
};
