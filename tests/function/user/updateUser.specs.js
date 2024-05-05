import request from 'supertest'
import { baseUrl } from '../../../data/config.js'
import { updateDataUser } from '../../../data/testData.js'

export async function updateUser(token, id) {
    const response = await request(baseUrl)
        .put('/users/' + id)
        .send(updateDataUser)
        .set('Authorization', `Bearer ${token}`)

    const user = (await response)
    return user
}
