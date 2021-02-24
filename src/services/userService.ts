import axios from 'axios';
import {User} from '../models/User';

const API = `http://localhost:4000`;

const getUsuarios = async () =>{
    const res = await axios.get(`${API}/usuarios`);
    return res.data;
}

const crearUsuario = async (usuario: User) =>{
    const res = await axios.post(`${API}/usuarios`,usuario);
    return res.data
}

const getUsuario = async (id: string) =>{
    const res = await axios.get(`${API}/usuarios/${id}`);
    return res.data;
}

const updateUsuario = async(id:string, user:User) =>{
    const res = await axios.put(`${API}/usuarios/${id}`,user);
    return res.data;
}

const deleteUser = async (id: string) =>{
    const res = await axios.delete(`${API}/usuarios/${id}`);
    return res.data;
}

export {
    getUsuarios,
    crearUsuario,
    getUsuario,
    updateUsuario,
    deleteUser
}