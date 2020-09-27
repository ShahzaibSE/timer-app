import React from "react"
import { shallow } from "enzyme"
import Timer from "../Timer/Timer"

describe("Grid", () => {
    let container: any

    beforeEach(()=>container = shallow(<Timer/>))

    it('checking presence of Grid component', () => {
        expect(container.containsMatchingElement(<Timer/>)).toEqual(true)
    })
})