<template>
    <el-container>
        <el-header>
            <h1>Synchronized Clocks</h1>
        </el-header>
        <el-main>
            <el-form :inline="true">
                <el-form-item label="Time">
                    <el-time-picker
                        v-model="time"
                    ></el-time-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="reset">
                        Reset
                        <i class="el-icon-refresh-left el-icon--right"></i>
                    </el-button>
                </el-form-item>
            </el-form>
                <el-row :gutter="30">
                <el-col :span="12">
                    <el-card header="Digital Clock">
                        <digital-clock :time="time"></digital-clock>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card header="Analog Clock">
                        <analog-clock :time="time"></analog-clock>
                    </el-card>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script setup>
import { ref } from "@vue/reactivity"
import {
    ElContainer,ElHeader,ElMain,ElCard,ElRow,ElCol,ElTimePicker,ElFormItem,ElForm,ElButton
} from "element-plus"
import DigitalClock from "./components/DigitalClock.vue"
import AnalogClock from "./components/AnalogClock.vue"

// Init time as current time
const time = ref(new Date())

// Increase time every second
setInterval(()=>{
    time.value = new Date(time.value.getTime() + 1000)
},1000)

function reset(){
    time.value = new Date()
}
</script>

<style>
html {
    background-color:whitesmoke;
}
.el-header {
    border-bottom: 1px solid #dcdfe6
}
.el-card {
    background-color: #10101E!important;
    color: white !important;
}

.el-card__body {
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.el-card__header {
    border-bottom-color:#000000 !important;
}

</style>
