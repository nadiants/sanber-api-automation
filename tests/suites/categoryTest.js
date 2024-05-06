import { expect } from "chai"
import { addCategory } from "../function/category/addCategory.specs.js";
import { createToken } from "../function/getToken.spec.js";

describe(' End to End - Category', () => {
    let token;
    let categoryId;

    it('Succes create Category', async () => {
        token = await createToken()
        const response = await addCategory(token)
        categoryId = (await response).body.data.categoryId
        expect((await response).status).to.equal(201)

    })

    it('Verify response message equal Category berhasil ditambahkan', async () => {
        const response = await addCategory(token)
        expect((await response).body.message).to.equal('Category berhasil ditambahkan')
    })
})