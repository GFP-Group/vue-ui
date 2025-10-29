<script setup lang="ts">
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import BlockButton from '../../src/components/BlockButton.vue'
import { BsGearFill, BsPersonFill, BsClipboardCheckFill } from 'vue-icons-plus/bs'
import { ref } from 'vue'
import Dialog from '../../src/components/Dialog.vue'
import Badge from '../../src/components/Badge.vue'

const visible = ref(false)
const open = () => (visible.value = true)
const close = () => (visible.value = false)
</script>

<template>
  <Card title="Block Button" dark-darker title-type="h1">
    <section class="mb-8">
      <Text h4 class="mb-4">Default</Text>
      <Text small class-name="mb-3"
        >Full-width buttons with icons and labels, perfect for dashboard tiles or action
        grids.</Text
      >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BlockButton label="Settings"
          ><BsGearFill class="text-gray-700 dark:text-gray-300"
        /></BlockButton>
        <BlockButton label="Profile"
          ><BsPersonFill class="text-gray-700 dark:text-gray-300"
        /></BlockButton>
        <BlockButton label="Tasks"
          ><BsClipboardCheckFill class="text-gray-700 dark:text-gray-300"
        /></BlockButton>
      </div>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">Custom Label Sizes</Text>
      <Text small class-name="mb-3"
        >Use <Badge color="zinc" class="font-mono">label-size-sm</Badge>,
        <Badge color="zinc" class="font-mono">label-size-md</Badge>,
        <Badge color="zinc" class="font-mono">label-size-lg</Badge>,
        <Badge color="zinc" class="font-mono">label-size-xl</Badge>, and
        <Badge color="zinc" class="font-mono">label-size-2xl</Badge> to control label sizes at
        different breakpoints.</Text
      >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BlockButton
          label="Small Label"
          label-size-sm="text-xs"
          label-size-md="text-xs"
          label-size-lg="text-sm"
          label-size-xl="text-sm"
          label-size2xl="text-sm"
        >
          <BsGearFill class="text-gray-700 dark:text-gray-300" />
        </BlockButton>
        <BlockButton label="Default Label"
          ><BsPersonFill class="text-gray-700 dark:text-gray-300"
        /></BlockButton>
        <BlockButton
          label="Large Label"
          label-size-sm="text-base"
          label-size-md="text-lg"
          label-size-lg="text-xl"
          label-size-xl="text-xl"
          label-size2xl="text-2xl"
        >
          <BsClipboardCheckFill class="text-gray-700 dark:text-gray-300" />
        </BlockButton>
      </div>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">With Click Handlers</Text>
      <Text small class-name="mb-3">BlockButtons can have click handlers.</Text>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BlockButton label="Click Me" :on-click="open">
          <BsGearFill class="text-gray-700 dark:text-gray-300" />
        </BlockButton>
      </div>
    </section>
  </Card>
  <Dialog
    v-model:visible="visible"
    title="Notice"
    message="To see a world in a grain of sand, and a heaven in a wild flower, hold infinity in the palm of your hand, and eternity in an hour. ~William Blake"
    :buttons="[{ label: 'OK', action: 'confirm', type: 'primary' }]"
    @confirm="close"
    @cancel="close"
  />
</template>
