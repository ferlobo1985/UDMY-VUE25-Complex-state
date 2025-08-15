<template>
  <app-header></app-header>
        <div class="container">
          <router-view></router-view>
        </div>
</template>

<script setup>
  import { useCounterStore } from './store/counter';
  const store = useCounterStore();

  store.$onAction(({
    name, // NAME
    store, // store instance
    args, // event
    after, // HOOK
    onError // HOOK
  })=>{
    console.log(name);
    console.log(store)
    console.log(args);

    after((result)=>{console.log(result)})
    onError((error)=>{console.log(error)})
  },true)

</script>