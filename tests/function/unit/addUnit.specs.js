import request from 'supertest'
import { baseUrl } from '../../../data/config.js'

export async function addUnit(token) {
    const payload = {
        "name": "unit baru",
        "description": "new unit description"
    }


    const response = await request(baseUrl)
        .post('/units')
        .send(payload)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)

    const user = (await response)
    return user
}