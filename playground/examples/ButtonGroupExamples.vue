<script setup lang="ts">
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import ButtonGroup from '../../src/components/ButtonGroup.vue'

const buttons = [
  { label: 'Export', type: 'default' as const, onClick: () => console.log('Export') },
  { label: 'Import', type: 'default' as const, onClick: () => console.log('Import') },
  { label: 'Consolidate', type: 'default' as const, onClick: () => console.log('Consolidate') },
  { label: 'Save', type: 'primary' as const, onClick: () => console.log('Save') },
  { label: 'Delete', type: 'danger' as const, onClick: () => console.log('Delete') },
]
</script>

<template>
  <Card title="Button Group" dark-darker title-type="h1">
    <section class="mb-8">
      <Text h4 class="mb-4">Default</Text>
      <Text p
        >Collapses buttons into a dropdown at set breakpoint passed in as a prop.
        <strong class="text-red-500">Resize window to see the effect.</strong></Text
      >

      <Text p faint small>Buttons collapse at window width &lt; 1000px</Text>
      <div class="flex items-center gap-4">
        <ButtonGroup :buttons="buttons" :collapse-below-px="1000" />
      </div>
    </section>
  </Card>
</template>
