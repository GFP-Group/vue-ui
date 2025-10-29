<script setup lang="ts">
import { ref } from 'vue'
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import Badge from '../../src/components/Badge.vue'
import Button from '../../src/components/Button.vue'
import Modal from '../../src/components/Modal.vue'

const showDefaultModal = ref(false)
const showFullScreenModal = ref(false)
const showNoOverlayCloseModal = ref(false)
const showBeforeOpenModal = ref(false)
const showAfterOpenModal = ref(false)
const showBeforeCloseModal = ref(false)
const showAfterCloseModal = ref(false)

const handleBeforeOpen = () => {
  alert('beforeOpen: Modal is about to open')
}

const handleAfterOpen = () => {
  alert('afterOpen: Modal has fully opened (after animation)')
}

const handleBeforeClose = () => {
  alert('beforeClose: Modal is about to close')
}

const handleAfterClose = () => {
  alert('afterClose: Modal has fully closed (after animation)')
}
</script>

<template>
  <Card title="Modal" dark-darker title-type="h1">
    <section class="mb-8">
      <Text h5 class="mb-4">Default</Text>
      <Button label="Open Modal" primary @click="showDefaultModal = true" />

      <Modal :visible="showDefaultModal" title="Default Modal" @close="showDefaultModal = false">
        <Text p>
          This is a default modal with standard sizing. It has a title, scrollable content area, and
          a footer for action buttons.
        </Text>
        <Text p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloremque optio excepturi
          ullam aut reiciendis repudiandae veritatis ex ea nostrum consequatur doloribus, autem cum
          animi molestiae minus deserunt beatae voluptatum.
        </Text>
        <Text p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloremque optio excepturi
          ullam aut reiciendis repudiandae veritatis ex ea nostrum consequatur doloribus, autem cum
          animi molestiae minus deserunt beatae voluptatum.
        </Text>
        <Text p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloremque optio excepturi
          ullam aut reiciendis repudiandae veritatis ex ea nostrum consequatur doloribus, autem cum
          animi molestiae minus deserunt beatae voluptatum.
        </Text>
        <Text p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloremque optio excepturi
          ullam aut reiciendis repudiandae veritatis ex ea nostrum consequatur doloribus, autem cum
          animi molestiae minus deserunt beatae voluptatum.
        </Text>
        <Text p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloremque optio excepturi
          ullam aut reiciendis repudiandae veritatis ex ea nostrum consequatur doloribus, autem cum
          animi molestiae minus deserunt beatae voluptatum.
        </Text>
        <Text p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloremque optio excepturi
          ullam aut reiciendis repudiandae veritatis ex ea nostrum consequatur doloribus, autem cum
          animi molestiae minus deserunt beatae voluptatum.
        </Text>
        <Text p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloremque optio excepturi
          ullam aut reiciendis repudiandae veritatis ex ea nostrum consequatur doloribus, autem cum
          animi molestiae minus deserunt beatae voluptatum.
        </Text>
        <Text p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloremque optio excepturi
          ullam aut reiciendis repudiandae veritatis ex ea nostrum consequatur doloribus, autem cum
          animi molestiae minus deserunt beatae voluptatum.
        </Text>
        <Text p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloremque optio excepturi
          ullam aut reiciendis repudiandae veritatis ex ea nostrum consequatur doloribus, autem cum
          animi molestiae minus deserunt beatae voluptatum.
        </Text>
        <Text p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloremque optio excepturi
          ullam aut reiciendis repudiandae veritatis ex ea nostrum consequatur doloribus, autem cum
          animi molestiae minus deserunt beatae voluptatum.
        </Text>
        <Text p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloremque optio excepturi
          ullam aut reiciendis repudiandae veritatis ex ea nostrum consequatur doloribus, autem cum
          animi molestiae minus deserunt beatae voluptatum.
        </Text>

        <template #footer>
          <Button label="Cancel" light @click="showDefaultModal = false" />
          <Button label="Confirm" primary @click="showDefaultModal = false" />
        </template>
      </Modal>
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4"><Badge color="zinc" class="font-mono">full-screen</Badge></Text>
      <Button label="Open Full Screen Modal" primary @click="showFullScreenModal = true" />

      <Modal
        :visible="showFullScreenModal"
        title="Full Screen Modal"
        full-screen
        @close="showFullScreenModal = false"
      >
        <Text p>
          This is a full screen modal that takes up the entire viewport. Perfect for forms or
          content that needs maximum space.
        </Text>
        <Text p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloremque optio excepturi
          ullam aut reiciendis repudiandae veritatis ex ea nostrum consequatur doloribus, autem cum
          animi molestiae minus deserunt beatae voluptatum.
        </Text>
        <Text p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloremque optio excepturi
          ullam aut reiciendis repudiandae veritatis ex ea nostrum consequatur doloribus, autem cum
          animi molestiae minus deserunt beatae voluptatum.
        </Text>

        <template #footer>
          <Button label="Close" light @click="showFullScreenModal = false" />
          <Button label="Save Changes" primary @click="showFullScreenModal = false" />
        </template>
      </Modal>
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4"
        ><Badge color="zinc" class="font-mono">disable-overlay-click-close</Badge></Text
      >
      <Button
        label="Open Modal (No Overlay Close)"
        primary
        @click="showNoOverlayCloseModal = true"
      />

      <Modal
        :visible="showNoOverlayCloseModal"
        title="Important Action Required"
        disable-overlay-click-close
        @close="showNoOverlayCloseModal = false"
      >
        <Text p>
          This modal has <strong>disableOverlayClickClose</strong> enabled. Clicking the overlay
          will not close it - you must use the close button or footer actions.
        </Text>
        <Text p>
          This is useful for forms, confirmations, or any modal where accidental closure should be
          prevented.
        </Text>
        <Text p class="text-dark-5 dark:text-gray-400">
          Try clicking outside the modal - it won't close!
        </Text>

        <template #footer>
          <Button label="Cancel" light @click="showNoOverlayCloseModal = false" />
          <Button label="Confirm" primary @click="showNoOverlayCloseModal = false" />
        </template>
      </Modal>
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4">
        <Badge color="zinc" class="font-mono">beforeOpen</Badge> callback
      </Text>
      <Button label="Open Modal with beforeOpen" primary @click="showBeforeOpenModal = true" />

      <Modal
        :visible="showBeforeOpenModal"
        title="beforeOpen Callback Demo"
        :before-open="handleBeforeOpen"
        @close="showBeforeOpenModal = false"
      >
        <Text p>
          The <strong>beforeOpen</strong> callback is triggered immediately when the modal starts to
          open, before any animations begin.
        </Text>
        <Text p>Watch for the alert when you open this modal!</Text>

        <template #footer>
          <Button label="Close" light @click="showBeforeOpenModal = false" />
        </template>
      </Modal>
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4">
        <Badge color="zinc" class="font-mono">afterOpen</Badge> callback
      </Text>
      <Button label="Open Modal with afterOpen" primary @click="showAfterOpenModal = true" />

      <Modal
        :visible="showAfterOpenModal"
        title="afterOpen Callback Demo"
        :after-open="handleAfterOpen"
        @close="showAfterOpenModal = false"
      >
        <Text p>
          The <strong>afterOpen</strong> callback is triggered after the modal has fully opened and
          all animations have completed.
        </Text>
        <Text p>You'll see the alert after the modal animation finishes!</Text>

        <template #footer>
          <Button label="Close" light @click="showAfterOpenModal = false" />
        </template>
      </Modal>
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4">
        <Badge color="zinc" class="font-mono">beforeClose</Badge> callback
      </Text>
      <Button label="Open Modal with beforeClose" primary @click="showBeforeCloseModal = true" />

      <Modal
        :visible="showBeforeCloseModal"
        title="beforeClose Callback Demo"
        :before-close="handleBeforeClose"
        @close="showBeforeCloseModal = false"
      >
        <Text p>
          The <strong>beforeClose</strong> callback is triggered immediately when the modal starts
          to close, before any animations begin.
        </Text>
        <Text p>Watch for the alert when you close this modal!</Text>

        <template #footer>
          <Button label="Close" light @click="showBeforeCloseModal = false" />
        </template>
      </Modal>
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4">
        <Badge color="zinc" class="font-mono">afterClose</Badge> callback
      </Text>
      <Button label="Open Modal with afterClose" primary @click="showAfterCloseModal = true" />

      <Modal
        :visible="showAfterCloseModal"
        title="afterClose Callback Demo"
        :after-close="handleAfterClose"
        @close="showAfterCloseModal = false"
      >
        <Text p>
          The <strong>afterClose</strong> callback is triggered after the modal has fully closed and
          all animations have completed.
        </Text>
        <Text p>You'll see the alert after the modal closing animation finishes!</Text>

        <template #footer>
          <Button label="Close" light @click="showAfterCloseModal = false" />
        </template>
      </Modal>
    </section>
  </Card>
</template>
