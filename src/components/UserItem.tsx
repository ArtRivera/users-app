import React from 'react'
import {User} from '../models/User';
import {useHistory} from 'react-router-dom';
import * as db from '../services/userService'
import { toast } from 'react-toastify';

interface Props{
    user: User,
    loadUsers: () => void;
}

const UserItem = ({user, loadUsers}: Props) => {

    const history = useHistory();

    const handleClick = async ()=>{
        try {
           await db.deleteUser(user._id);
           toast.success('Usuario Eliminado');
        } catch (error) {
           toast.error('Ha ocurrido un error al eliminar');
        }
        loadUsers();
    }

    return (
        <div className="col-md-4">
            <div className="card card-user mt-3" style={{cursor: 'pointer'}}>
            <button className="btn btn-danger" onClick={handleClick}>Eliminar</button>
            <div className="body-card p-2"  onClick={()=> history.push(`/update-user/${user._id}`)}>
            <img src={user.img} className="img-fluid" alt={user.nombre}/>
            <h3 className="card-title">{user.nombre}</h3>
            <p><b> Email:</b> {user.email}</p>
            <p><b> Género:</b> {user.genero}</p>
            <p><b> Celular:</b> {user.celular}</p>
          
            </div>
            </div>
            
        </div>
    )
}

export default UserItem
