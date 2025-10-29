<script setup lang="ts">
import Text from '../src/components/Text.vue'
import DarkModeToggle from '../src/components/DarkModeToggle.vue'
import CardExamples from './examples/CardExamples.vue'
import ButtonExamples from './examples/ButtonExamples.vue'
import BlockButtonExamples from './examples/BlockButtonExamples.vue'
import ButtonGroupExamples from './examples/ButtonGroupExamples.vue'
import IconButtonExamples from './examples/IconButtonExamples.vue'
import IconExamples from './examples/IconExamples.vue'
import DropdownExamples from './examples/DropdownExamples.vue'
import TextExamples from './examples/TextExamples.vue'
import BadgeExamples from './examples/BadgeExamples.vue'
import LinkExamples from './examples/LinkExamples.vue'
import InputExamples from './examples/InputExamples.vue'
import DateInputExamples from './examples/DateInputExamples.vue'
import SelectExamples from './examples/SelectExamples.vue'
import RadioGroupExamples from './examples/RadioGroupExamples.vue'
import FieldExamples from './examples/FieldExamples.vue'
import CheckboxExamples from './examples/CheckboxExamples.vue'
import DarkModeToggleExamples from './examples/DarkModeToggleExamples.vue'
import SpinnerExamples from './examples/SpinnerExamples.vue'
import TabsExamples from './examples/TabsExamples.vue'
import TableExamples from './examples/TableExamples.vue'
import PaginationExamples from './examples/PaginationExamples.vue'
import DialogExamples from './examples/DialogExamples.vue'
import DrawerExamples from './examples/DrawerExamples.vue'
import ModalExamples from './examples/ModalExamples.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-1 dark:bg-black md:p-8">
    <div class="absolute top-0 right-0 py-2 px-4">
      <DarkModeToggle />
    </div>
    <div class="max-w-6xl mx-auto space-y-12">
      <!-- Header -->
      <div class="text-center space-y-4">
        <Text h1>GFP Vue UI Playground</Text>
        <Text class="text-dark-5"> Test and develop components in real-time </Text>
      </div>

      <!-- Component Examples -->
      <TextExamples />
      <BadgeExamples />
      <LinkExamples />
      <ButtonExamples />
      <BlockButtonExamples />
      <ButtonGroupExamples />
      <IconButtonExamples />
      <IconExamples />
      <DropdownExamples />
      <InputExamples />
      <DateInputExamples />
      <SelectExamples />
      <RadioGroupExamples />
      <FieldExamples />
      <CheckboxExamples />
      <DarkModeToggleExamples />
      <CardExamples />
      <SpinnerExamples />
      <TabsExamples />
      <TableExamples />
      <PaginationExamples />
      <DialogExamples />
      <DrawerExamples />
      <ModalExamples />
    </div>
  </div>
</template>
