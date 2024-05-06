<<<<<<< HEAD
import request from 'supertest'
import { baseUrl } from "../../data/config.js";
import { login } from '/sanber-api-automation/data/testData.js'

export async function createToken() {
    /*const payload = {
        "email": "tokonadia1@gmail.com",
        "password": "123qwerty@"
    }*/

    const response = await request(baseUrl)
        .post('/authentications')
        .send(login)
        .set('Content-Type', 'application/json')

    const token = (await response).body.data.accessToken;
    return token;
=======
import request from 'supertest'
import { baseUrl } from "../../data/config.js";
import { login } from '../../../data/testData.js'

export async function createToken() {
    /*const payload = {
        "email": "tokonadia1@gmail.com",
        "password": "123qwerty@"
    }*/

    const response = await request(baseUrl)
        .post('/authentications')
        .send(login)
        .set('Content-Type', 'application/json')

    const token = (await response).body.data.accessToken
    return token
>>>>>>> efa0128175192f2026162d9d43d9640e32c47fb6
}