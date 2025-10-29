<script setup lang="ts">
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import RadioGroup from '../../src/components/RadioGroup.vue'
import { ref } from 'vue'
import Badge from '../../src/components/Badge.vue'

const selected2 = ref('medium')
const selected3 = ref('SM')
const selectedXs = ref('option2')
const selectedSm = ref('option2')
const selectedMd = ref('option2')
const selectedLg = ref('option2')
const selectedXl = ref('option2')
const selectedWithCallback = ref('option2')

const handleChange = (value: string | number) => {
  alert(`onChange callback fired with value: ${value}`)
}
</script>

<template>
  <Card title="Radio Group" dark-darker title-type="h1">
    <section class="mb-8">
      <Text h4 class="mb-4">Default</Text>
      <Text p class="mb-4">Simple radio group with labels.</Text>
      <RadioGroup
        v-model="selected2"
        :options="[
          { label: 'Small', value: 'sm' },
          { label: 'Medium', value: 'medium' },
          { label: 'Large', value: 'lg' },
          { label: 'Extra Large', value: 'xl' },
        ]"
        @change="console.log('Selected:', $event)"
      />
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">Sizes</Text>

      <div class="space-y-6">
        <div>
          <div class="mb-4"><Badge size="sm" color="zinc" class="font-mono">xs</Badge></div>
          <RadioGroup
            v-model="selectedXs"
            size="xs"
            :options="['Option 1', 'Option 2', 'Option 3']"
          />
        </div>
        <div>
          <div class="mb-4"><Badge size="sm" color="zinc" class="font-mono">sm</Badge></div>
          <RadioGroup
            v-model="selectedSm"
            size="sm"
            :options="['Option 1', 'Option 2', 'Option 3']"
          />
        </div>
        <div>
          <div class="mb-4">
            <Badge size="sm" color="zinc" class="font-mono">md</Badge> (default)
          </div>
          <RadioGroup
            v-model="selectedMd"
            size="md"
            :options="['Option 1', 'Option 2', 'Option 3']"
          />
        </div>
        <div>
          <div class="mb-4"><Badge size="sm" color="zinc" class="font-mono">lg</Badge></div>
          <RadioGroup
            v-model="selectedLg"
            size="lg"
            :options="['Option 1', 'Option 2', 'Option 3']"
          />
        </div>
        <div>
          <div class="mb-4"><Badge size="sm" color="zinc" class="font-mono">xl</Badge></div>
          <RadioGroup
            v-model="selectedXl"
            size="xl"
            :options="['Option 1', 'Option 2', 'Option 3']"
          />
        </div>
      </div>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">Disabled</Text>
      <Text p class="mb-4">Radio group with disabled state.</Text>
      <RadioGroup v-model="selected3" :options="['SM', 'MD', 'LG']" disabled />
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4"> <Badge color="zinc">onChange</Badge> callback </Text>
      <Text p class="mb-4"
        >Demonstrates the <strong>onChange</strong> callback prop that fires when the selection
        changes.</Text
      >
      <RadioGroup
        v-model="selectedWithCallback"
        :options="['Option 1', 'Option 2', 'Option 3']"
        :on-change="handleChange"
      />
    </section>
  </Card>
</template>
