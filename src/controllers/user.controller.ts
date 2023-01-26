import {Request, Response} from 'express';
import { userType } from '../protocols/protocol.js';
import { getAllUsers, insertUser, toUpdateUser } from '../repositories/user.repository.js';

async function getUser(req: Request, res: Response){
    
    const resultado = await getAllUsers();

    return res.send(resultado)
}

 async function postUser(req: Request, res: Response): Promise<void> {
    const newUser = req.body as userType

    console.log(req.body);

//    try{
    const insertedUser = await insertUser(newUser);

    res.status(201).send(insertedUser);

//    } catch(err){
//     console.log(err.detail);
//    }

}

async function updateUser(req: Request, res: Response) {
    const {id} = req.params;

    try{
       await toUpdateUser(id, true);

       res.sendStatus(204);
    }catch(err){
        res.send(err.message);
    }
}

async function deleteUser(req: Request, res: Response) {
    const {id} = req.params;

    try{
    //    await connectionDb.query(`DELETE FROM users WHERE id=$1`, [id]);

       res.status(200).send("Usuario deletado com sucesso!")

    }catch(err){
        console.log(err);
    }
}

async function getUsersWhoBeted(req: Request, res: Response){
    try{
        // const {rows} = await connectionDb.query('SELECT * FROM users WHERE beted=$1', [true]);
     
        // res.status(200).send(usersWhoBeted);
     }catch(err){
     console.log(err);
     res.sendStatus(409);
     }
}


export { getUser, postUser, updateUser, deleteUser, getUsersWhoBeted };


// CREATE TABLE "users" (
// 	"id" serial NOT NULL PRIMARY KEY,
// 	"username" text NOT NULL UNIQUE,
// 	"beted" BOOLEAN NOT NULL DEFAULT 'false'
// );





