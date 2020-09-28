import React from "react"
import { shallow } from "enzyme"
// Component.
import TimerButton from "./TimerButton"

describe("Timer Button", () => {
    let container: any

    beforeEach(()=>container = shallow(<TimerButton/>))

    it("Check timer button", ()=>{
        expect(container.find("div").length).toBeGreaterThanOrEqual(1)
    })
})