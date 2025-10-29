<script setup lang="ts">
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import Badge from '../../src/components/Badge.vue'

const colors = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'zinc',
] as const

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<template>
  <Card title="Badge" dark-darker title-type="h1">
    <section class="mb-8">
      <Text h4 class="mb-4">Colors</Text>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        <div v-for="c in colors" :key="c" class="flex items-center justify-between pr-4">
          <code class="text-sm dark:text-white/80">{{ c }}</code>
          <Badge :color="c">label</Badge>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">Sizes</Text>
      <div class="flex flex-col gap-3">
        <div v-for="s in sizes" :key="s" class="flex items-center gap-3">
          <code class="text-sm w-8 dark:text-white/80">{{ s }}</code>
          <Badge :size="s">label</Badge>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">Pill</Text>
      <Badge size="md" pill>pill</Badge>
    </section>
  </Card>
</template>
