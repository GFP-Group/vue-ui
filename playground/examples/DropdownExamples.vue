<script setup lang="ts">
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import Dropdown from '../../src/components/Dropdown.vue'
import { BiUserCircle } from 'vue-icons-plus/bi'

const dropdownItems = [
  { text: 'Dashboard', onClick: () => console.log('dash') },
  { text: 'Settings', onClick: () => console.log('settings') },
  { text: 'Logout', onClick: () => console.log('logout'), danger: true },
]
</script>

<template>
  <Card title="Dropdown" dark-darker title-type="h1">
    <section class="mb-8">
      <Text h4 class="mb-4">Default</Text>
      <Dropdown label="Some menu" :items="dropdownItems" />
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">Sizes</Text>
      <div class="flex gap-2 items-start mb-6">
        <Dropdown size="xs" outline label="Some menu" :items="dropdownItems" />
        <Dropdown size="sm" outline label="Some menu" :items="dropdownItems" />
        <Dropdown outline label="Some menu" :items="dropdownItems" />
        <Dropdown size="lg" outline label="Some menu" :items="dropdownItems" />
        <Dropdown size="xl" outline label="Some menu" :items="dropdownItems" />
      </div>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">Types</Text>
      <div class="flex gap-2 items-start mb-6">
        <Dropdown outline label="Default" :items="dropdownItems" />
        <Dropdown primary label="Primary" :items="dropdownItems" />
        <Dropdown success label="Success" :items="dropdownItems" />
        <Dropdown danger label="Danger" :items="dropdownItems" />
        <Dropdown warning label="Warning" :items="dropdownItems" />
      </div>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">Custom Trigger</Text>
      <Dropdown :items="dropdownItems">
        <button
          class="flex gap-2 items-star p-4 mb-8 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 cursor-pointer"
        >
          <BiUserCircle />
          <span>John Smith</span>
        </button>
      </Dropdown>
    </section>
  </Card>
</template>
