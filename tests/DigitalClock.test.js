import { shallowMount } from '@vue/test-utils'
import DigitalClock from '../src/components/DigitalClock.vue'

describe("DigitalClock.vue",()=>{
    it("show time", ()=>{
        const time = new Date()
        time.setHours(23)
        time.setMinutes(4)
        time.setSeconds(46)
        const wrapper = shallowMount(DigitalClock,{
            props : { time }
        })
        expect(wrapper.text()).toBe("11: 04: 46PM")
    })

    it("change with prop", async ()=>{
        const time = new Date()
        time.setHours(11)
        time.setMinutes(59)
        time.setSeconds(59)
        const wrapper = shallowMount(DigitalClock,{
            props : { time }
        })
        expect(wrapper.text()).toBe("11: 59: 59AM")
        await wrapper.setProps({ time : new Date(time.getTime() + 1000) })
        expect(wrapper.text()).toBe("12: 00: 00PM")
    })
})