import React,{useState,useEffect} from 'react';
import { User } from '../models/User';
import * as api from '../services/userService'
import UserItem from './UserItem';

const UserList = () => {

    const [users, setUser] = useState<[]>([]);

    useEffect(() => {
       getUsers();
    },[]);

    const getUsers = async () =>{
        const usuarios = await api.getUsuarios();
        setUser(usuarios);
    }

    return (
        <div className="container">
            <div className="row">
               { users.map((user:User)=> <UserItem key={user._id} user={user} loadUsers={getUsers}/>)}
            </div>
        </div>
    )
}

export default UserList
