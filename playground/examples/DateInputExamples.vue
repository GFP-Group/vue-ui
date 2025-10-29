<script setup lang="ts">
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import DateInput from '../../src/components/DateInput.vue'
</script>

<template>
  <Card title="Date Input" dark-darker title-type="h1">
    <section class="mb-8">
      <Text h4 class="mb-4">Default</Text>
      <div class="flex gap-2 flex-col max-w-[300px]">
        <DateInput @change="console.log($event)" />
      </div>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">Date Range</Text>
      <div class="flex gap-2 flex-col max-w-[300px]">
        <DateInput range @change="console.log($event)" />
      </div>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">Appearance</Text>
      <div class="flex gap-2 flex-col max-w-[300px]">
        <Text h5>Solid</Text>
        <DateInput solid @change="console.log($event)" />
        <Text h5>Solid dark-darker</Text>
        <DateInput solid dark-darker @change="console.log($event)" />
      </div>
    </section>
  </Card>
</template>
