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
}