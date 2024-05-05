import request from 'supertest'
import { baseUrl } from '../../../data/config.js'
import { createUser } from '../../../data/testData.js'

export async function addUser(token) {
    const response = await request(baseUrl)
        .post('/users')
        .send(createUser)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)

    const user = (await response)
    return user
}