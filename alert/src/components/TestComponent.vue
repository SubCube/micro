<script lang="ts" setup>
import { ref } from 'vue';

 const count = ref(0)
</script>

<template>
    <h2>Counter is&nbsp;  {{ count }}</h2>
<button @click="count++">increment</button>
</template>
