import React,{ChangeEvent, FormEvent, useState, useEffect} from 'react';
import { User } from '../models/User';
import * as db from '../services/userService';
import {toast} from 'react-toastify';
import {useHistory,useParams} from 'react-router-dom'

interface Params{
  id: string
}

const UserForm = () => {

    const initalState: User = {
        _id: '',
        nombre: '',
        genero: '',
        celular: '',
        email: ''
    }

    const history = useHistory();
    const params = useParams<Params>();

    useEffect(() => {
      if(params.id){
        getUser(params.id);
      }
    
    },[]);

    const getUser = async (id: string) =>{
      const usuario = await db.getUsuario(id);
      console.log(usuario);
      setUser(usuario);
    }

    

    const [user, setUser] = useState(initalState)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setUser({...user,[e.target.name]: e.target.value});
    }

    const handleCheck = (sexo: string) =>{
      setUser({...user,genero: sexo});
    }

    const handleSumbit = async(e: FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      if(params.id){
        try {
          await db.updateUsuario(params.id,user);
          toast.success('Usuario Actualizado Exitosamente');
          setUser(initalState);
          history.push('/');
        } catch (error) {
          toast.error('No se ha podido crear el usuario');
          console.error(error);
        }
      }
      else{
        try {
          await db.crearUsuario(user);
          toast.success('Usuario Creado Exitosamente');
          setUser(initalState);
          history.push('/');
        } catch (error) {
          toast.error('No se ha podido crear el usuario');
          console.error(error);
        }
      }
      
   
    }

    return (
        <div className="container">
          <div className="row justfy-content-center">
              <div className="col-5 offset-4 mt-3">
                <div className="card">
                    <div className="card-body">
                    { params.id ? <h1 className="text-center">Actualizar Usuario</h1> : <h1 className="text-center">Nuevo Usuario</h1>}
                    <form onSubmit={handleSumbit}>
                    <div className="form-group">
                      <input type="text" name="nombre" placeholder="Nombre Completo" 
                        onChange={handleInputChange}
                        value={user.nombre}
                        className="form-control"/>
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Email" 
                        onChange={handleInputChange}
                        value={user.email}
                        className="form-control"/>
                    </div>
                    <div className="form-group">
                      <input type="phone" name="celular" placeholder="Celular" 
                        onChange={handleInputChange}
                        value={user.celular}
                        className="form-control"/>
                    </div>
                    <div className="form-group">
                      <input type="text" name="img" placeholder="Imagen Url" 
                        onChange={handleInputChange}
                        value={user.img}
                        className="form-control"/>
                    </div>
                     <div className="form-check">
                     <input className="form-check-input" type="radio" name="flexRadioDefault" 
                     value={user.genero}
                     id="flexRadioDefault1"
                     onClick={()=> handleCheck('Hombre')}/>
                     <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Hombre
                    </label> 
                    </div>
                    <div className="form-check">
                     <input className="form-check-input" type="radio" name="flexRadioDefault" 
                     value={user.genero}
                     id="flexRadioDefault2"
                     onClick={()=> handleCheck('Mujer')}/>
                     <label className="form-check-label" htmlFor="flexRadioDefault2">
                       Mujer
                    </label> 
                    </div>
                    <button className="btn btn-primary w-100 mt-2">Guardar</button> 
                    </form>
                    </div>
                </div>
              </div>
          </div>
        </div>
    )
}

export default UserForm;
