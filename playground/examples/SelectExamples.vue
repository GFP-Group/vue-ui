<script setup lang="ts">
import { ref, computed } from 'vue'
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import Select from '../../src/components/Select.vue'
import Badge from '../../src/components/Badge.vue'

const selectedCeremony = ref('ceremony-1')
const selectedStatus1 = ref('booked')
const selectedWithCallback = ref('ceremony-1')

const statusColorMap: Record<string, string> = {
  booked: 'success',
  eligible: 'warning',
  unavailable: 'danger',
}

const discColor1 = computed(() => statusColorMap[selectedStatus1.value])

const handleChange = (value: string | number) => {
  window.alert(`Select changed to: ${value}`)
}
</script>

<template>
  <Card title="Select" dark-darker title-type="h1">
    <div class="max-w-md">
      <Text h4 class="mb-4">Default</Text>
      <Select
        v-model="selectedCeremony"
        class="mb-6"
        :options="[
          { label: 'Ceremony 1', value: 'ceremony-1' },
          { label: 'Ceremony 2', value: 'ceremony-2' },
        ]"
      />

      <Text h4 class="mb-4">Solid</Text>
      <Select
        v-model="selectedCeremony"
        class="mb-6"
        solid
        dark-darker
        :options="[
          { label: 'Ceremony 1', value: 'ceremony-1' },
          { label: 'Ceremony 2', value: 'ceremony-2' },
        ]"
      />

      <Text h4 class="mb-4">Custom classes</Text>
      <Select
        v-model="selectedCeremony"
        class="mb-6"
        select-class="bg-yellow-300 dark:bg-yellow-500"
        :options="[
          { label: 'Ceremony 1', value: 'ceremony-1' },
          { label: 'Ceremony 2', value: 'ceremony-2' },
        ]"
      />

      <Text h4 class="mb-4 mt-8">With disc color (dynamic)</Text>
      <Text p class="mb-4"
        >The disc color changes dynamically based on the selected option. Try changing the
        selection!</Text
      >
      <Select
        v-model="selectedStatus1"
        class="mb-4"
        :disc-color="discColor1"
        :options="[
          { label: 'Booked', value: 'booked' },
          { label: 'Eligible', value: 'eligible' },
          { label: 'Unavailable', value: 'unavailable' },
        ]"
      />

      <Text h4 class="mb-4 mt-8"><Badge color="zinc">onChange</Badge> callback</Text>
      <Text p class="mb-4">An alert will be shown when the selection changes.</Text>
      <Select
        v-model="selectedWithCallback"
        :on-change="handleChange"
        :options="[
          { label: 'Ceremony 1', value: 'ceremony-1' },
          { label: 'Ceremony 2', value: 'ceremony-2' },
          { label: 'Ceremony 3', value: 'ceremony-3' },
        ]"
      />
    </div>
  </Card>
</template>
