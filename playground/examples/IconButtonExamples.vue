<script setup lang="ts">
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import IconButton from '../../src/components/IconButton.vue'
import { BsBellFill, BsGearFill } from 'vue-icons-plus/bs'
</script>

<template>
  <Card title="Icon Button" dark-darker title-type="h1">
    <section class="mb-8">
      <Text h4 class="mb-4">Default</Text>
      <IconButton :size="32"><BsBellFill /></IconButton>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">Sizes</Text>
      <Text small class-name="mb-3"
        >Controlled by the numeric <code>size</code> prop (circle diameter).</Text
      >
      <div class="flex flex-wrap gap-4 items-center">
        <IconButton :size="20"><BsBellFill /></IconButton>
        <IconButton :size="30"><BsBellFill /></IconButton>
        <IconButton :size="40"><BsBellFill /></IconButton>
        <IconButton :size="50"><BsBellFill /></IconButton>
        <IconButton :size="60"><BsBellFill /></IconButton>
      </div>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">Background overrides</Text>
      <Text small class-name="mb-3"
        >Use <code>bgClass</code> to control background, hover, and dark variants.</Text
      >
      <div class="flex flex-wrap gap-4 items-center">
        <IconButton
          :size="32"
          bg-class="bg-white hover:bg-gray-100 dark:bg-dark-2 dark:hover:bg-gray-700/20"
        >
          <BsGearFill />
        </IconButton>
        <IconButton
          :size="32"
          bg-class="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <BsGearFill />
        </IconButton>
        <IconButton :size="32" bg-class="bg-primary/10 hover:bg-primary/20 dark:bg-primary/20">
          <BsGearFill />
        </IconButton>
      </div>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">Naked variant</Text>
      <Text small class-name="mb-3"
        >Use <code>naked</code> to remove the background and border. On hover, they appear.</Text
      >

      <IconButton :size="40" naked><BsBellFill /></IconButton>
    </section>
  </Card>
</template>
