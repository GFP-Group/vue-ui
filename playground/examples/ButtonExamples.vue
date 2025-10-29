<script setup lang="ts">
import { BsArrowDownCircleFill } from 'vue-icons-plus/bs'
import Button from '../../src/components/Button.vue'
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
</script>

<template>
  <Card class="p-8" title="Buttons" dark-darker title-type="h1">
    <Text h4 class="mb-4">Types</Text>
    <div class="flex gap-2 mb-6 items-start flex-wrap">
      <Button label="Default" />
      <Button label="Primary" primary />
      <Button label="Success" success />
      <Button label="Danger" danger />
      <Button label="Warning" warning />
      <Button label="Light" light />
    </div>

    <Text h4>Sizes</Text>
    <div class="flex gap-2 mb-6 items-start flex-wrap">
      <Button label="Size xs" size="xs" />
      <Button label="Size sm" size="sm" />
      <Button label="Size md" size="md" />
      <Button label="Size lg" size="lg" />
      <Button label="Size xl" size="xl" />
    </div>

    <Text h4>Loading</Text>
    <div class="flex gap-2 mb-6 items-start flex-wrap">
      <Button label="Default" loading label-loading="Loading..." />
      <Button label="Primary" primary loading label-loading="Loading..." />
      <Button label="Success" success loading label-loading="Loading..." />
      <Button label="Danger" danger loading label-loading="Loading..." />
      <Button label="Warning" warning loading label-loading="Loading..." />
      <Button label="Light" light loading label-loading="Loading..." />
    </div>

    <Text h4 class="mb-4 mt-10">With Icons</Text>
    <Text h5 class="mb-3">Prefix Icon</Text>
    <div class="flex gap-2 mb-6 items-start flex-wrap">
      <Button label="Icon Prefix" size="xs">
        <template #prefix>
          <BsArrowDownCircleFill size="11" />
        </template>
      </Button>
      <Button label="Icon Prefix" size="sm">
        <template #prefix>
          <BsArrowDownCircleFill size="13" />
        </template>
      </Button>

      <Button label="Icon Prefix">
        <template #prefix>
          <BsArrowDownCircleFill size="17" />
        </template>
      </Button>

      <Button label="Icon Prefix" size="lg">
        <template #prefix>
          <BsArrowDownCircleFill size="19" class="mr-1" />
        </template>
      </Button>

      <Button label="Icon Prefix" size="xl">
        <template #prefix>
          <BsArrowDownCircleFill size="22" class="mr-1" />
        </template>
      </Button>
    </div>

    <Text h5 class="mb-3">Suffix Icon</Text>
    <div class="flex gap-2 mb-6 items-start flex-wrap">
      <Button label="Icon Suffix" size="xs">
        <template #suffix>
          <BsArrowDownCircleFill size="11" />
        </template>
      </Button>

      <Button label="Icon Suffix" size="sm">
        <template #suffix>
          <BsArrowDownCircleFill size="13" />
        </template>
      </Button>

      <Button label="Icon Suffix">
        <template #suffix>
          <BsArrowDownCircleFill size="17" />
        </template>
      </Button>

      <Button label="Icon Suffix" size="lg">
        <template #suffix>
          <BsArrowDownCircleFill size="19" class="mr-1" />
        </template>
      </Button>

      <Button label="Icon Suffix" size="xl">
        <template #suffix>
          <BsArrowDownCircleFill size="22" class="mr-1" />
        </template>
      </Button>
    </div>
  </Card>
</template>
