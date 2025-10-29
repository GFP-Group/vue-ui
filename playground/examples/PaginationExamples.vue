<script setup lang="ts">
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import Pagination from '../../src/components/Pagination.vue'
import { ref } from 'vue'

const page = ref(1)
const totalItems = ref(248)
const pageSize = ref(25)
const onChange = (p: number) => console.log('page change ->', p)
</script>

<template>
  <Card title="Pagination" dark-darker title-type="h1">
    <section class="mb-8">
      <Text h4 class="mb-4">Default - From total-pages</Text>

      <div
        class="bg-faint p-3 inline-flex rounded mb-4 font-mono dark:bg-dark-3 dark:text-white/80 text-sm"
      >
        total-pages = 10<br />
        max-visible = 5
      </div>

      <Pagination
        v-model:current-page="page"
        :total-pages="10"
        :max-visible="5"
        align="left"
        @change="onChange"
      />
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">Align</Text>
      <Text p>Right (default)</Text>
      <Pagination
        v-model:current-page="page"
        :total-pages="10"
        :max-visible="5"
        align="right"
        @change="onChange"
      />

      <Text p class-name="mt-10">Left</Text>
      <Pagination
        v-model:current-page="page"
        :total-pages="10"
        :max-visible="5"
        align="left"
        @change="onChange"
      />

      <Text p class-name="mt-10">Center</Text>
      <Pagination
        v-model:current-page="page"
        :total-pages="10"
        :max-visible="5"
        align="center"
        @change="onChange"
      />
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">From totalItems / pageSize</Text>
      <div
        class="bg-faint p-3 inline-flex rounded mb-4 font-mono dark:bg-dark-3 dark:text-white/80 text-sm"
      >
        total-items = totalItems (248)<br />
        page-size = pageSize (25)<br />
        max-visible = 5<br />
      </div>
      <Pagination
        v-model:current-page="page"
        :total-items="totalItems"
        :page-size="pageSize"
        :max-visible="5"
        align="left"
        @change="onChange"
      />
    </section>
  </Card>
</template>
