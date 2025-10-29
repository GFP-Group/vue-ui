<script setup lang="ts">
import { ref } from 'vue'
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import Input from '../../src/components/Input.vue'

const inputValue = ref('')
</script>

<template>
  <Card title="Input" dark-darker title-type="h1">
    <div class="max-w-md">
      <Text h4 class="mb-4">Default</Text>
      <Input v-model="inputValue" class="mb-6" placeholder="Enter your email" />
      <Text h4 class="mb-4">Solid</Text>
      <Input v-model="inputValue" class="mb-6" placeholder="Enter your email" solid />

      <Text h4 class="mb-4">Solid dark-darker</Text>
      <Input v-model="inputValue" class="mb-6" placeholder="Enter your email" solid dark-darker />

      <Text h4 class="mb-4">Error</Text>
      <Input v-model="inputValue" class="mb-6" placeholder="Enter your email" error />

      <Text h4 class="mb-4">Success</Text>
      <Input v-model="inputValue" class="mb-6" placeholder="Enter your email" success />
    </div>
  </Card>
</template>
