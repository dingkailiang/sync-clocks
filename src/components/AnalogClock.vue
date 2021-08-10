<template>
    <div class="clock">
        <div
            v-for="i in 12" :key="i" 
            class="num"
            :class="{hide : i % 3 != 0}" 
            :style="{'--rotation' : 30 * i  + 'deg'}"
        >
            <span>{{i}}</span>
        </div>
        <span 
            v-for="type in ['hr','mn','sc']" 
            :key="type" 
            :class="type" 
            class="hand"
            :style="{'--rotation' : degrees[type]}"    
        ></span>
    </div>
</template>

<script setup>
import { computed } from "@vue/reactivity"

const props = defineProps({
    time : {
        type : Date,
        required : true
    }
})
const deg = n=>(n * 360).toFixed(2) + "deg"
const degrees = computed(()=>{
    const ret = {}
    const s = props.time.getSeconds()
    const m = props.time.getMinutes()
    const h = props.time.getHours() % 12

    // Calculate degrees
    ret["hr"] = deg((s + m * 60 + h * 3600) / 43200)
    ret["mn"] = deg((s + m * 60) / 3600)
    ret["sc"] = deg(s / 60)
    return ret
})
</script>

<style lang="less" scoped>
    .clock {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 270px;
        height: 270px;
        border: 4px solid #091921;
        border-radius: 50%;
        user-select: none;
        box-shadow: 
            0 -15px 15px rgba(255,255,255,0.05),
            inset 0 -15px 15px rgba(255, 255, 255, 0.05),
            0 15px 15px rgba(0, 0, 0, 0.3),
            inset 0 15px 15px rgba(0, 0, 0, 0.3);

        &::before {
            content : '';
            position: absolute;
            width: 10px;
            height: 10px;
            background: white;
            border-radius: 50%;
            z-index: 10;
        }

        div.num {
            position: absolute;
            width : 100%;
            height: 100%;
            text-align: center;
            transform: rotate(var(--rotation));
            color: #71777F;
            font-weight: 600;
            font-size: 18px;

            span {
                transform: rotate(calc(360deg - var(--rotation)));
                display: block;
                margin-top: 7px;
            }

            &.hide {
                span {display: none;}
                &::after {
                    font-size: 5px;
                    content : "|"
                }
            }
        }

        .hand {
            position: absolute;
            height: 50%;
            width: 100%;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            transform-origin: bottom;
            transform: rotate(var(--rotation));
            
            &:before {
                content : '';
                position: absolute;
                border-radius: 5px 5px 0  0;
                display: block;
            }

            &.hr:before {
                width : 8px;
                height : 60px;
                background: #ff105e;
                z-index: 5;
            }
            &.mn:before {
                width : 4px;
                height : 80px;
                background:whitesmoke;
                z-index: 6;
            }

            &.sc:before {
                width: 2px;
                height: 125px;
                background:white;
                z-index: 7;
                margin-bottom: -25px;
            }
        }



    }
</style>
