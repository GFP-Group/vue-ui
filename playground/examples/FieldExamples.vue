<script setup lang="ts">
import { ref } from 'vue'
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import Field from '../../src/components/Field.vue'
import Input from '../../src/components/Input.vue'
import Checkbox from '../../src/components/Checkbox.vue'

const name = ref('')
const email = ref('')
const updates = ref(false)
const username = ref('')
</script>

<template>
  <Card title="Field" dark-darker title-type="h1">
    <Text h5 class="mb-4">Default</Text>
    <div class="flex max-w-[600px] flex-col gap-4">
      <Field label="Name">
        <Input v-model:value="name" placeholder="Full name" />
      </Field>
    </div>

    <Text h5 class="mb-4 mt-8">With Note</Text>
    <div class="flex max-w-[600px] flex-col gap-4">
      <Field label="Email" :note="'We\'ll never share your email.'">
        <Input v-model:value="email" type="email" placeholder="Email Address" />
      </Field>
      <div class="h-4"></div>
      <Field label="Notifications" note="Receive product updates by email">
        <Checkbox v-model="updates" label="Send me updates" />
      </Field>

      <Text h5 class-name="mt-8">NotePosition: below</Text>
      <Field label="Email" :note="'We\'ll never share your email.'" note-position="below">
        <Input v-model:value="email" type="email" placeholder="Email Address" />
      </Field>

      <Text h5 class="mt-8">With Error</Text>
      <Field label="Email" :error="'This field is required'">
        <Input v-model:value="email" type="email" placeholder="Email Address" error />
      </Field>

      <Text h5 class="mt-8">With Success</Text>
      <Field label="Username" :success="'Username available'">
        <Input v-model:value="username" type="text" placeholder="Username" success />
      </Field>
    </div>
  </Card>
</template>
