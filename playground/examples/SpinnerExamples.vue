<script setup lang="ts">
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import Spinner from '../../src/components/Spinner.vue'
</script>

<template>
  <Card title="Spinner" dark-darker title-type="h1">
    <section class="mb-8">
      <Text h5 class="mb-4">Default</Text>
      <Spinner />
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4 mt-10">Sizes</Text>
      <div class="flex gap-4 items-center">
        <Spinner class="w-4 h-4" />
        <Spinner class="w-6 h-6" />
        <Spinner class="w-8 h-8" />
        <Spinner class="w-10 h-10" />
        <Spinner class="w-12 h-12" />
        <Spinner class="w-14 h-14" />
        <Spinner class="w-16 h-16" />
        <Spinner class="w-18 h-18" />
      </div>
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4 mt-10">Dark</Text>
      <div
        class="bg-dark rounded border border-gray-700 p-4 max-w-25 flex justify-center items-center"
      >
        <Spinner variant="dark" />
      </div>
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4 mt-10">Invert</Text>
      <div
        class="border border-gray-200 bg-white rounded p-4 max-w-25 flex justify-center items-center"
      >
        <Spinner variant="dark" invert />
      </div>
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4 mt-10">Custom Colors</Text>
      <Text small class="mb-4">Using the color prop with hex, rgb, or rgba values</Text>
      <div class="flex gap-4 items-center flex-wrap">
        <div class="flex flex-col items-center gap-2">
          <Spinner color="#ef4444" />
          <Text small class="text-gray-500">Red</Text>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Spinner color="#10b981" />
          <Text small class="text-gray-500">Green</Text>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Spinner color="#f59e0b" />
          <Text small class="text-gray-500">Orange</Text>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Spinner color="#8b5cf6" />
          <Text small class="text-gray-500">Purple</Text>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Spinner color="rgba(236, 72, 153, 0.8)" />
          <Text small class="text-gray-500">Pink (rgba)</Text>
        </div>
      </div>
    </section>
  </Card>
</template>
