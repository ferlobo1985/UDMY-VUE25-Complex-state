<template>
    <div class="row">
      <h1>Admin</h1>
      <hr />
      <div class="col-sm-5">
        <p>
          <strong> Change count: {{ count }}</strong>
        </p>
  
        <!-- <div>
          <label class="form-label">By how much</label>
          <input type="number" class="form-control" v-model="data.amount" />
        </div>
        <br /> -->
  
        <button type="button" class="btn btn-primary me-3" @click="add">
          +
        </button>
        <button type="button" class="btn btn-outline-secondary" @click="subtract">
          -
        </button>
      </div>
      <div>   
        <hr/>
        <p>{{ store.car.brand }}</p>
        <p>{{ store.car.color }}</p>
        <button
          type="button" class="btn btn-primary me-3"
          @click="patchState"
        >
          Patch state
        </button>
      </div>
  
    </div>
</template>
  

<script setup>
  import { computed } from 'vue';
  import { useCounterStore } from '@/store/counter';
  const store = useCounterStore();

  const count = computed(()=> store.getCount)
  const add = () => {
    store.counter++
  }
  const subtract = () => {
    store.counter--
  }

  const patchState = () => {
    store.$patch({
      car:{
        brand:'Renault',
        color:'Blue'
      }
    })
  }

</script>