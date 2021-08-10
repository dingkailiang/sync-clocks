<template>
    <div class="clock">
        <span>{{ hours }}</span>:
        <span>{{ minutes }}</span>:
        <span>{{ seconds }}</span>
        <span>{{ period }}</span>
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
const pad = n => String(n).padStart(2,'0')
const hours = computed(()=>pad((props.time.getHours() + 11) % 12 + 1))
const minutes = computed(()=>pad(props.time.getMinutes()))
const seconds = computed(()=>pad(props.time.getSeconds()))
const period = computed(()=>props.time.getHours() >= 12 ? "PM" : "AM")
</script>


<style scoped>
    .clock {
        font-family: sans-serif;
        width: 400px;
        padding : 15px 10px;
        border : 3px solid #2E94E3;
        border-radius: 5px;
        font-size: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        margin-bottom: 100px;
        -webkit-box-reflect: below 1px linear-gradient(transparent,rgba(255,255,255,.1));
        transition: 0.5s;
        transition-property: background-color, box-shadow;
        user-select: none;
    }

    .clock:hover {
        background-color: #2E94E3;
        box-shadow: 0 0 30px #2E94E3;
    }

    .clock span:not(:last-child){
        margin:0 6px;
        text-align: center;
        letter-spacing: 3px;
    }

    .clock span:last-child {
        background: #2E94E3;
        font-size: 30px;
        margin-top: 5px;
        padding: 0 5px;
        border-radius: 3px;
    }
</style>