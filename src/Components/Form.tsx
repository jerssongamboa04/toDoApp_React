import React, { useState, useContext } from 'react';
import Button from './Button';
import { UserContext } from '../Context/Context';
import firebaseapp from '../Config/firebase.config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import auth from '../Config/firebase.config';


interface FormData {
  email: string;
  password: string;
}

const Form = () => {

  const [registro, setRegistro] = useState (false)
  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUser(formData)

    if (registro) {
      try {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      } catch (error) {
        console.log('Error creating user:', error);
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
      } catch (error) {
        console.log('Error signing in:', error);
      }
    }

  };

  const handleClick = () => {
    setRegistro(!registro)
  }

  return (
    <div className="flex justify-center items-center flex-col m-20 ">
      <form onSubmit={handleSubmit} className="bg-white flex flex-col border rounded-2xl px-20 py-10 shadow-[rgba(0,0,0,0.1)0_4px_12px]">

      <h1 className="font-bold text-4xl p-8">Login</h1>

        <div className="flex flex-col my-[0.8rem] mx-[0.4rem] text-start gap-2">
          <input required placeholder='Email'
            className="border rounded p-1"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col my-[0.8rem] mx-[0.4rem] text-start gap-2">
          <input required placeholder='Password'
            className="border rounded p-1"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-center">
          <button className="my-[0.8rem] mx-[0.4rem text-white mb-2 bg-[#3f8f6b]" type="submit">Iniciar sesion</button>
        </div>

      </form>

      <Button onClick={handleClick} url={registro ? '/Home' : '/' } content={registro ? 'Ya tienes cuenta? Inicia sesion':'No tienes cuenta? Registrate' } className={'text-white bg-[#1f1815] m-6 px-10'} />
    </div>

  )
}

export default Form;