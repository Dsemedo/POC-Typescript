import prisma from "../config/database.js";
import { userType } from "../protocols/protocol.js";

 async function insertUser(username: userType) {
    return [];
};

 async function toUpdateUser(id: string, status: boolean ){
    return [];
}

async function toDeleteUser(id: string) {
    // return await connectionDb.query(`DELETE FROM users WHERE id=$1`, [id]);
}

async function getAllUsers() {
    return prisma.users.findMany();
}


async function getOnlyUsersWhoBeted() {
    // return await connectionDb.query('SELECT * FROM users WHERE beted=$1', [true]);
}


export {insertUser, toUpdateUser,getAllUsers, getOnlyUsersWhoBeted, toDeleteUser}