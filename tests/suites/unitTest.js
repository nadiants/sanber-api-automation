import request from "supertest";
import { expect } from "chai"
import { addUnit } from "../function/unit/addUnit.specs.js";
import { createToken } from "../function/getToken.spec.js";

describe(' End to End - Unit', () => {
    let token;
    let unitId;

    it('Succes create Unit', async () => {
        token = await createToken()
        const response = await addUnit(token)
        unitId = (await response).body.data.unitId
        expect((await response).status).to.equal(201)

    })

    it('Verify response message equal Unit berhasil ditambahkan', async () => {
        const response = await addUnit(token)
        expect((await response).body.message).to.equal('Unit berhasil ditambahkan')
    })
})