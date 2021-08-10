import { shallowMount } from '@vue/test-utils'
import AnalogClock from '../src/components/AnalogClock.vue'

describe("AnalogClock.vue",()=>{
    it("show time", ()=>{
        const time = new Date()
        time.setHours(6)
        time.setMinutes(30)
        time.setSeconds(30)
        const wrapper = shallowMount(AnalogClock,{
            props : { time }
        })
        const expected =  {
            hr : `${(180 + 360 / 24 + 360 / (24 * 60)).toFixed(2)}deg`,
            mn : `${(180 + 360 / 120).toFixed(2)}deg`,
            sc : "180.00deg",
        }

        for (let type in expected){
            let e = wrapper.find(`span.hand.${type}`)
            expect(e.exists()).toBe(true)
            expect(e.attributes("style")).toBe(`--rotation: ${expected[type]};`)
        }
    })

    it("change with prop", async ()=>{
        const time = new Date()
        time.setHours(11)
        time.setMinutes(59)
        time.setSeconds(59)
        const wrapper = shallowMount(AnalogClock,{
            props : { time }
        })
        const expected =  {
            hr : `0.00deg`,
            mn : `0.00deg`,
            sc : "0.00deg",
        }
        for (let type in expected){
            let e = wrapper.find(`span.hand.${type}`)
            expect(e.exists()).toBe(true)
            expect(e.attributes("style")).not.toBe(`--rotation: ${expected[type]};`)
        }
        await wrapper.setProps({ time : new Date(time.getTime() + 1000) })
        for (let type in expected){
            let e = wrapper.find(`span.hand.${type}`)
            expect(e.exists()).toBe(true)
            expect(e.attributes("style")).toBe(`--rotation: ${expected[type]};`)
        }
    })
})