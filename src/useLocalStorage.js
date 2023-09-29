import { useState } from 'react'

//A custom hook used for storage the values of the user in the browser's local storage. It take a key, that will hold the value, and an initial value that the key will store

export const useLocalStorage = (key, initialValue) => {
//we use the useState hook, and make an stored value, and a set new value function
  const [storedValue, setNewValue] = useState(() => {

    //using a try catch in case of errors
    try {
        const item = window.localStorage.getItem(key); //we get the item stored in the local storage within the key value that we passed
        return item ? JSON.parse(item) : initialValue //if there is a key with a value there, we empty the key so we can store a new value in there, otherwise we return that key will hold the initial value
    } catch (error) {   
        return initialValue //in case of an error, key will hold the initial value
    }
  });

  const setValue = value => {
    //this function will set the value that the user passes in the key
    //then again with a try cath in case of an error
    try {
        setNewValue(value) //with the setnew value function we made earlier, we set the the value that was passed in the function
        window.localStorage.setItem(key, JSON.stringify(value)) //then set the key new value in the local storage, passing it trough the stringify, cause it must be an string so the local storage con hold it
    } catch (error) {
        console.error(error) //in case of an error return the error
    }
  }

  return [storedValue, setValue]; //return an array that holds, the stored initial value, and the function to update it
}

