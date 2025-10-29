<script setup lang="ts">
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import Field from '../../src/components/Field.vue'
import Checkbox from '../../src/components/Checkbox.vue'
import { ref } from 'vue'

const newsletter = ref(false)
</script>

<template>
  <Card title="Checkbox" dark-darker title-type="h1">
    <section class="mb-8">
      <Text h4 class="mb-4">Default</Text>
      <div class="flex max-w-[600px] flex-col gap-4">
        <Field>
          <Checkbox v-model="newsletter" label="Subscribe to newsletter" />
        </Field>
      </div>
    </section>
  </Card>
</template>
