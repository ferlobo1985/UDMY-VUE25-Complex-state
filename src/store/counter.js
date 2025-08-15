import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter',{
    state:()=>({
        counter:7,
        car:{
            brand:'Ford',
            color:'red'
        }
    })
})