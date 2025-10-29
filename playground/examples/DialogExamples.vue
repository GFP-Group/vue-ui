<script setup lang="ts">
import { ref } from 'vue'
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import Button from '../../src/components/Button.vue'
import Dialog from '../../src/components/Dialog.vue'

const visibleOne = ref(false)
const visibleTwo = ref(false)
const visibleDanger = ref(false)
const visibleWarning = ref(false)
const visibleSuccess = ref(false)

const openOne = () => {
  visibleOne.value = true
}

const openTwo = () => {
  visibleTwo.value = true
}

const openDanger = () => {
  visibleDanger.value = true
}

const openWarning = () => {
  visibleWarning.value = true
}

const openSuccess = () => {
  visibleSuccess.value = true
}

const close = () => {
  visibleOne.value = false
  visibleTwo.value = false
  visibleDanger.value = false
  visibleWarning.value = false
  visibleSuccess.value = false
}
</script>

<template>
  <Card title="Dialog" dark-darker title-type="h1">
    <section class="mb-8">
      <Text h5 class="mb-4">Default confirm - one button</Text>
      <Button label="Open Confirm" primary @click="openOne" />
      <Dialog
        v-model:visible="visibleOne"
        title="Notice"
        message="This is a confirmation with OK."
        :buttons="[{ label: 'OK', action: 'confirm', type: 'primary' }]"
        @confirm="close"
        @cancel="close"
      />
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4">Default confirm - two buttons</Text>
      <Button label="Open Confirm" primary @click="openTwo" />
      <Dialog
        v-model:visible="visibleTwo"
        title="Notice"
        message="This is a confirmation with OK and Cancel."
        :buttons="[
          { label: 'Cancel', action: 'cancel', type: 'light' },
          { label: 'OK', action: 'confirm', type: 'primary' },
        ]"
        @confirm="close"
        @cancel="close"
      />
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4">Danger type</Text>
      <Button label="Open Danger Dialog" danger @click="openDanger" />
      <Dialog
        v-model:visible="visibleDanger"
        type="danger"
        title="Delete file?"
        message="This cannot be undone."
        confirm-text="Delete"
        cancel-text="Cancel"
        @confirm="close"
        @cancel="close"
      />
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4">Warning type</Text>
      <Button label="Open Warning Dialog" warning @click="openWarning" />
      <Dialog
        v-model:visible="visibleWarning"
        type="warning"
        title="Are you sure?"
        message="This action may have unintended consequences."
        confirm-text="Proceed"
        cancel-text="Cancel"
        @confirm="close"
        @cancel="close"
      />
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4">Success type</Text>
      <Button label="Open Success Dialog" success @click="openSuccess" />
      <Dialog
        v-model:visible="visibleSuccess"
        type="success"
        title="Completed"
        message="The operation finished successfully."
        :show-cancel="false"
        confirm-text="OK"
        @confirm="close"
      />
    </section>
  </Card>
</template>
