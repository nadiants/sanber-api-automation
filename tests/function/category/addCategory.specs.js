<<<<<<< HEAD
import request from 'supertest'
import { baseUrl } from '../../../data/config.js'

export async function addCategory(token) {
    const payload = {
        "name": "roma",
        "description": "biscuit by mayora"
    }


    const response = await request(baseUrl)
        .post('/categories')
        .send(payload)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)

    const user = (await response)
    return user
=======
import request from 'supertest'
import { baseUrl } from '../../../data/config.js'

export async function addCategory(token) {
    const payload = {
        "name": "roma",
        "description": "biscuit by mayora"
    }


    const response = await request(baseUrl)
        .post('/categories')
        .send(payload)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)

    const user = (await response)
    return user
>>>>>>> efa0128175192f2026162d9d43d9640e32c47fb6
}