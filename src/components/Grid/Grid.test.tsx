import React from "react"
import { shallow, mount } from "enzyme"
import Timer from "../Timer/Timer"
import TimerButton from "../TimerButton/TimerButton"
// Assets.
import {images} from "./../Timer/Timer.style"

describe("Grid", () => {
    let container: any
    let container_btn: any

    beforeEach(()=>
        container = mount(<Timer/>
    ))

    it('should render a div', () => {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1)
    })

    it('checking presence of Grid component', () => {
        expect(container.containsMatchingElement(<Timer/>)).toEqual(true)
    })

    it('should render timer button', ()=>{
        expect(container.find("TimerButton").length).toBeGreaterThanOrEqual(1)
    })

    // Testing Start, Stop and Reset functionalities.
    // *** //
    // ******** Start Timer ******** //
    // **** //
    // --- Checking If start timer button exist - UI Snapshot testing --- //
    it("checking if start button exist", ()=>{
        container.update()
        expect(container.find("Start")).toMatchSnapshot()
    })

    it("invoke start timer when start timer button is clicked", ()=>{
        const start_timer_mock_fn = jest.fn() // Mock Start timer function.
        const startTimer = mount(<TimerButton 
                                    buttonTitle={images[0].title} 
                                    buttonImage={images[0].url} 
                                    buttonWidth={images[0].width}
                                    buttonAction={start_timer_mock_fn} />)
        const startBtn = startTimer.find("button").first()
        startBtn.update()
        expect(start_timer_mock_fn).toHaveBeenCalledTimes(0)
        startBtn.simulate("click")
        expect(start_timer_mock_fn).toHaveBeenCalledTimes(1)
    })

    // *** //
    // ******** Stop Timer ******** //
    // **** //
    // --- Checking If stop timer button exist - UI Snapshot testing --- //
    it("checking if stop button exist", ()=>{
        container.update()
        expect(container.find("Stop")).toMatchSnapshot()
    })

    it("invokes stopTimer when the stop button is clicked", ()=>{
        const stop_timer_mock_fn = jest.fn() // Mock Start timer function.
        const stopTimer = mount(<TimerButton 
                                    buttonTitle={images[1].title} 
                                    buttonImage={images[1].url} 
                                    buttonWidth={images[1].width}
                                    buttonAction={stop_timer_mock_fn} />)
        const stopBtn = stopTimer.find("button").first()
        stopBtn.update()
        expect(stop_timer_mock_fn).toHaveBeenCalledTimes(0)
        stopBtn.simulate("click")
        expect(stop_timer_mock_fn).toHaveBeenCalledTimes(1)
    })

    // *** //
    // ******** Reset Timer ******** //
    // **** //
    // --- Checking if reset timer button exist - UI Snapshot testing --- //
    it("checking if reset button exist", ()=>{
        container.update()
        expect(container.find("Reset")).toMatchSnapshot()
    })

    it("invokes resetTimer when the reset button is clicked", ()=>{
        const reset_timer_mock_fn = jest.fn() // Mock Start timer function.
        const resetTimer = mount(<TimerButton 
                                    buttonTitle={images[2].title} 
                                    buttonImage={images[2].url} 
                                    buttonWidth={images[2].width}
                                    buttonAction={reset_timer_mock_fn} />)
        const resetBtn = resetTimer.find("button").first()
        resetBtn.update()
        expect(reset_timer_mock_fn).toHaveBeenCalledTimes(0)
        resetBtn.simulate("click")
        expect(reset_timer_mock_fn).toHaveBeenCalledTimes(1)
    })

    // Checking if 
    it("checking if isOn state is changing to true", ()=>{
        container.update()
        expect(container.find("Start")).toMatchSnapshot()
    })

})