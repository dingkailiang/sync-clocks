<template>
    <el-container>
        <el-header>
            <h1>Synchronized Clocks</h1>
        </el-header>
        <el-main>
            <el-form>
                <el-form-item label="Time">
                    <el-time-picker
                        v-model="time"
                    ></el-time-picker>
                </el-form-item>
            </el-form>
                <el-row :gutter="30">
                <el-col :span="12">
                    <el-card header="Digital Clock"></el-card>
                </el-col>
                <el-col :span="12">
                    <el-card header="Analog Clock"></el-card>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script setup>
import { ref } from "@vue/reactivity"
import {ElContainer,ElHeader,ElMain,ElCard,ElRow,ElCol,ElTimePicker,ElFormItem,ElForm} from "element-plus"
// Init time as current time
const time = ref(new Date())

// Increase time every second
setInterval(()=>{
    time.value = new Date(time.value.getTime() + 1000)
},1000)
</script>

<style>
html {
    background-color:whitesmoke;
}
.el-header {
    border-bottom: 1px solid #dcdfe6
}
</style>
