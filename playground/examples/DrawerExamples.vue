<script setup lang="ts">
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import Button from '../../src/components/Button.vue'
import Drawer from '../../src/components/Drawer.vue'
import Input from '../../src/components/Input.vue'
import { ref } from 'vue'
import Badge from '../../src/components/Badge.vue'

const drawerRight = ref(false)
const drawerLeft = ref(false)
const drawerWithFooter = ref(false)
const drawerWithAfterOpen = ref(false)
const focusInputVal = ref('')
const focusInputRef = ref<InstanceType<typeof Input> | null>(null)
</script>

<template>
  <Card title="Drawer" dark-darker title-type="h1">
    <section class="mb-8">
      <Text h4 class="mb-4">Default (Right side)</Text>
      <Text p class="mb-4">Drawer slides in from the right side by default.</Text>
      <Button label="Open Right Drawer" primary @click="drawerRight = true" />
      <Drawer :visible="drawerRight" title="Right Drawer" @close="drawerRight = false">
        <Text p
          >You can close it by clicking the X button, clicking the backdrop, or pressing ESC.</Text
        >
      </Drawer>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">Left side</Text>
      <Text p class="mb-4"
        >Drawer can slide in from the left using the <code>side="left"</code> prop.</Text
      >
      <Button label="Open Left Drawer" primary @click="drawerLeft = true" />
      <Drawer :visible="drawerLeft" side="left" title="Left Drawer" @close="drawerLeft = false">
        <Text p
          >You can close it by clicking the X button, clicking the backdrop, or pressing ESC.</Text
        >
      </Drawer>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">Footer slot</Text>
      <Text p class="mb-4"
        >Drawer supports a footer slot for action buttons or additional content.</Text
      >
      <Button label="Open Drawer with Footer" primary @click="drawerWithFooter = true" />
      <Drawer
        :visible="drawerWithFooter"
        title="Drawer with Footer"
        @close="drawerWithFooter = false"
      >
        <Text p>This drawer has a footer with action buttons.</Text>
        <Text p
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro. Maxime
          accusamus delectus adipisci officia velit, nostrum fugit saepe quas quos non excepturi
          quae placeat. Maiores atque in quidem sint.</Text
        >
        <Text p
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro. Maxime
          accusamus delectus adipisci officia velit, nostrum fugit saepe quas quos non excepturi
          quae placeat. Maiores atque in quidem sint.</Text
        >
        <Text p
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro. Maxime
          accusamus delectus adipisci officia velit, nostrum fugit saepe quas quos non excepturi
          quae placeat. Maiores atque in quidem sint.</Text
        >
        <Text p
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro. Maxime
          accusamus delectus adipisci officia velit, nostrum fugit saepe quas quos non excepturi
          quae placeat. Maiores atque in quidem sint.</Text
        >
        <Text p
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro. Maxime
          accusamus delectus adipisci officia velit, nostrum fugit saepe quas quos non excepturi
          quae placeat. Maiores atque in quidem sint.</Text
        >
        <Text p
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro. Maxime
          accusamus delectus adipisci officia velit, nostrum fugit saepe quas quos non excepturi
          quae placeat. Maiores atque in quidem sint.</Text
        >
        <Text p
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro. Maxime
          accusamus delectus adipisci officia velit, nostrum fugit saepe quas quos non excepturi
          quae placeat. Maiores atque in quidem sint.</Text
        >
        <Text p
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro. Maxime
          accusamus delectus adipisci officia velit, nostrum fugit saepe quas quos non excepturi
          quae placeat. Maiores atque in quidem sint.</Text
        >
        <Text p
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro. Maxime
          accusamus delectus adipisci officia velit, nostrum fugit saepe quas quos non excepturi
          quae placeat. Maiores atque in quidem sint.</Text
        >
        <Text p
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro. Maxime
          accusamus delectus adipisci officia velit, nostrum fugit saepe quas quos non excepturi
          quae placeat. Maiores atque in quidem sint.</Text
        >
        <Text p
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro. Maxime
          accusamus delectus adipisci officia velit, nostrum fugit saepe quas quos non excepturi
          quae placeat. Maiores atque in quidem sint.</Text
        >
        <Text p
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro. Maxime
          accusamus delectus adipisci officia velit, nostrum fugit saepe quas quos non excepturi
          quae placeat. Maiores atque in quidem sint.</Text
        >
        <Text p
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro. Maxime
          accusamus delectus adipisci officia velit, nostrum fugit saepe quas quos non excepturi
          quae placeat. Maiores atque in quidem sint.</Text
        >
        <Text p
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro. Maxime
          accusamus delectus adipisci officia velit, nostrum fugit saepe quas quos non excepturi
          quae placeat. Maiores atque in quidem sint.</Text
        >
        <Text p
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro. Maxime
          accusamus delectus adipisci officia velit, nostrum fugit saepe quas quos non excepturi
          quae placeat. Maiores atque in quidem sint.</Text
        >

        <template #footer>
          <div class="flex gap-2 justify-end">
            <Button label="Cancel" light @click="drawerWithFooter = false" />
            <Button label="Save" primary @click="drawerWithFooter = false" />
          </div>
        </template>
      </Drawer>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4"><Badge color="zinc">after-open</Badge> callback</Text>
      <Text p class="mb-4"
        >Use the <code>after-open</code> callback to execute code after the drawer transition
        completes, such as focusing an input field.</Text
      >
      <Button label="Open Drawer (Auto-focus Input)" primary @click="drawerWithAfterOpen = true" />
      <Drawer
        :visible="drawerWithAfterOpen"
        title="Auto-focus Example"
        :after-open="() => focusInputRef?.focus()"
        @close="drawerWithAfterOpen = false"
      >
        <Text p class="mb-4"
          >The input below is automatically focused when the drawer opens using the
          <code>after-open</code> callback.</Text
        >
        <Input
          ref="focusInputRef"
          v-model:value="focusInputVal"
          placeholder="Type here (auto-focused)"
          solid
        />
      </Drawer>
    </section>
  </Card>
</template>
