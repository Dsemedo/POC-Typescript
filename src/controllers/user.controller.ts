import {Request, Response} from 'express';
import {connectionDb} from "../config/database.js"
import { userType } from '../protocols/protocol.js';
import { insertUser, toUpdateUser, toDeleteUser,getAllUsers, getOnlyUsersWhoBeted } from '../repositories/user.repository.js';

async function getUser(req: Request, res: Response): Promise<void>{

try{
   const users = await getAllUsers();

   res.status(200).send(users.rows);
}catch(err){
console.log(err);
res.sendStatus(409);
}
}

async function postUser(req: Request, res: Response): Promise<void> {
    const newUser = req.body as userType

    console.log(req.body);

   try{
    const insertedUser = await insertUser(newUser);

    res.status(201).send(insertedUser);

   }catch(err){
    console.log(err.detail);
   }

}

async function updateUser(req: Request, res: Response): Promise<void> {
    const {id} = req.params;

    try{
       await toUpdateUser(id, true);

       res.sendStatus(204);
    }catch(err){
        res.send(err.message);
    }
}

async function deleteUser(req: Request, res: Response): Promise<void> {
    const {id} = req.params;

    try{
       await toDeleteUser(id);

       res.status(200).send("Usuario deletado com sucesso!")

    }catch(err){
        console.log(err);
    }
}

async function getUsersWhoBeted(req: Request, res: Response): Promise<void>{
    try{
        const usersWhoBeted = await getOnlyUsersWhoBeted()
     
        res.status(200).send(usersWhoBeted.rows);
     }catch(err){
     console.log(err);
     res.sendStatus(409);
     }
}


export { getUser, postUser, updateUser, deleteUser, getUsersWhoBeted };