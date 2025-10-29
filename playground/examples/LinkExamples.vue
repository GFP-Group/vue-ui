<script setup lang="ts">
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import Link from '../../src/components/Link.vue'
</script>

<template>
  <Card title="Link" dark-darker title-type="h1">
    <section class="mb-8">
      <Text h4 class="mb-4">Default (hover to underline)</Text>
      <Text p class="mb-4">Basic link with hover underline effect.</Text>
      <Link href="#">This is a link</Link>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">With underline prop</Text>
      <Text p class="mb-4"
        >Link with permanent underline using the <code>underline</code> prop.</Text
      >
      <Link href="#" underline>This link is always underlined</Link>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">External link</Text>
      <Text p class="mb-4"
        >Links starting with http:// or https:// automatically open in a new tab.</Text
      >
      <Link href="https://github.com">Visit GitHub</Link>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">Router navigation</Text>
      <Text p class="mb-4"
        >Use the <code>to</code> prop for router navigation (requires Vue Router to be
        installed).</Text
      >
      <div class="flex flex-col gap-2">
        <Link to="/dashboard">Go to Dashboard</Link>
      </div>
    </section>
  </Card>
</template>
