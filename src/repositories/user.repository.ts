import { connectionDb } from "../config/database.js";
import { userType } from "../protocols/protocol.js";

 async function insertUser(username: userType) {
    return await connectionDb.query(`
        INSERT INTO users (username, beted) VALUES ($1, $2);`,
        [username.username, false]
    );
};

 async function toUpdateUser(id: string, status: boolean ){
    return await connectionDb.query(`UPDATE users SET beted=$1 WHERE id=$2`, [status, id])
}

// async function deleteUser()

export {insertUser, toUpdateUser}