<script setup lang="ts">
import Card from '../../src/components/Card.vue'
import IconButton from '../../src/components/IconButton.vue'
import Text from '../../src/components/Text.vue'
import { HiPencil } from 'vue-icons-plus/hi2'
import { Fa6TrashCan } from 'vue-icons-plus/fa6'
import Badge from '../../src/components/Badge.vue'
</script>

<template>
  <Card title="Card Component" dark-darker title-type="h1">
    <section class="mb-8">
      <Text h5 class="mb-4">Default</Text>
      <Card title="Default Card">
        <Text p>
          This is a default card with standard styling. On mobile devices, it has a block appearance
          (edge-to-edge with no rounded corners). On desktop, it appears as a rounded card with full
          borders.
        </Text>
      </Card>
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4">Title Types</Text>
      <div class="space-y-4">
        <Card title="Title" title-type="title">
          <Text p
            >Card with <Badge color="zinc" class="font-mono">title-type="title"</Badge> - renders as
            h1 with large text</Text
          >
        </Card>

        <Card title="Heading 2" title-type="h2">
          <Text p>Card with <Badge color="zinc" class="font-mono">title-type="h2"</Badge></Text>
        </Card>

        <Card title="Heading 3 (Default)" title-type="h3">
          <Text p
            >Card with <Badge color="zinc" class="font-mono">title-type="h3"</Badge> - this is the
            default</Text
          >
        </Card>

        <Card title="Heading 4" title-type="h4">
          <Text p>Card with <Badge color="zinc" class="font-mono">title-type="h4"</Badge></Text>
        </Card>

        <Card title="Heading 5" title-type="h5">
          <Text p
            >Card with <Badge color="zinc" class="font-mono">title-type="h5"</Badge> - smaller
            heading</Text
          >
        </Card>

        <Card title="Heading 6" title-type="h6">
          <Text p
            >Card with <Badge color="zinc" class="font-mono">title-type="h6"</Badge> - smallest
            heading</Text
          >
        </Card>
      </div>
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4">Dark Darker</Text>
      <Card title="Dark Darker Card" dark-darker>
        <Text p>
          This card uses the <Badge color="zinc" class="font-mono">dark-darker</Badge> prop. In dark
          mode, it has a darker background (bg-dark instead of bg-dark-2).
        </Text>
      </Card>
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4">Disable Block Appearance Mobile</Text>
      <Card title="Rounded on Mobile Too" disable-block-appearance-mobile>
        <Text p>
          This card has
          <Badge color="zinc" class="font-mono">disable-block-appearance-mobile</Badge> enabled. It
          maintains rounded corners and full borders even on mobile devices, instead of the default
          edge-to-edge block appearance.
        </Text>
        <Text p class="text-dark-5 dark:text-gray-400">
          Resize your browser or view on mobile to see the difference!
        </Text>
      </Card>
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4">No Title</Text>
      <Card>
        <Text p no-margin>
          This card has no <Badge color="zinc" class="font-mono">title</Badge> prop, so it renders
          without a header - just the content slot.
        </Text>
      </Card>
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4">Custom Class Override</Text>
      <Card
        title="Custom Styling"
        class="!bg-red-50 dark:!bg-red-500 !border-red-100 dark:!border-red-600"
      >
        <Text p>
          You can pass custom classes to override the card's styling. This card has a custom
          background color applied via the class prop. Note: Use the
          <Badge color="zinc" class="font-mono">!</Badge> (important) modifier to override base
          styles like background colors.
        </Text>
      </Card>
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4">Actions slot</Text>
      <Card title="Actions">
        <template #actions>
          <IconButton :size="32"><HiPencil /></IconButton>
          <IconButton :size="32"><Fa6TrashCan class="text-red-500 dark:text-red-400" /></IconButton>
        </template>
        <Text p
          >This card has an <strong>actions</strong> slot that allows you to add actions to the
          card.</Text
        >
      </Card>
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4">Collapsible</Text>
      <Card title="Collapsible" collapsible>
        <Text p
          >This card has an <Badge color="zinc" class="font-mono">collapsible</Badge> slot that
          allows you to add actions to the card.</Text
        >
      </Card>
    </section>

    <section class="mb-8">
      <Text h5 class="mb-4">Collapsible with actions</Text>
      <Card title="Collapsible with actions" collapsible>
        <template #actions>
          <IconButton :size="32"><HiPencil /></IconButton>
          <IconButton :size="32"><Fa6TrashCan class="text-red-500 dark:text-red-400" /></IconButton>
        </template>
        <Text p
          >This card has an <Badge color="zinc" class="font-mono">collapsible</Badge> slot that
          allows you to add actions to the card.</Text
        >
      </Card>
    </section>
  </Card>
</template>
