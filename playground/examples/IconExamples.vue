<script setup lang="ts">
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import {
  GfpPulpitIcon,
  GfpHoodIcon,
  GfpPlaqueIcon,
  GfpPulpitDraftIcon,
  GfpRegaliaScanIcon,
  GfpTeddyIcon,
  GfpFrameIcon,
  GfpStagePhotographyIcon,
  GfpStudioPhotographyIcon,
  GfpDeferCeremonyIcon,
  GfpColorsIcon,
  GfpGownIcon,
} from '../../src/components/icons'
</script>

<template>
  <Card class="p-8" title="Custom Icons" dark-darker title-type="h1">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <div
        class="rounded-lg border border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between items-center gap-2"
      >
        <GfpPulpitIcon class="w-10 h-10 text-black dark:text-white" />
        <Text class="text-xs text-dark-5" no-margin>GfpPulpitIcon</Text>
      </div>
      <div
        class="rounded-lg border border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between items-center gap-2"
      >
        <GfpHoodIcon class="w-10 h-10 text-black dark:text-white" />
        <Text class="text-xs text-dark-5" no-margin>GfpHoodIcon</Text>
      </div>
      <div
        class="rounded-lg border border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between items-center gap-2"
      >
        <GfpPlaqueIcon class="w-10 h-10 text-black dark:text-white" />
        <Text class="text-xs text-dark-5" no-margin>GfpPlaqueIcon</Text>
      </div>
      <div
        class="rounded-lg border border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between items-center gap-2"
      >
        <GfpPulpitDraftIcon class="w-10 h-10 text-black dark:text-white" />
        <Text class="text-xs text-dark-5" no-margin>GfpPulpitDraftIcon</Text>
      </div>
      <div
        class="rounded-lg border border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between items-center gap-2"
      >
        <GfpRegaliaScanIcon class="w-10 h-10 text-black dark:text-white" />
        <Text class="text-xs text-dark-5" no-margin>GfpRegaliaScanIcon</Text>
      </div>
      <div
        class="rounded-lg border border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between items-center gap-2"
      >
        <GfpTeddyIcon class="w-10 h-10 text-black dark:text-white" />
        <Text class="text-xs text-dark-5" no-margin>GfpTeddyIcon</Text>
      </div>
      <div
        class="rounded-lg border border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between items-center gap-2"
      >
        <GfpFrameIcon class="w-10 h-10 text-black dark:text-white" />
        <Text class="text-xs text-dark-5" no-margin>GfpFrameIcon</Text>
      </div>
      <div
        class="rounded-lg border border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between items-center gap-2"
      >
        <GfpStagePhotographyIcon class="w-10 h-10 text-black dark:text-white" />
        <Text class="text-xs text-dark-5" no-margin>GfpStagePhotographyIcon</Text>
      </div>
      <div
        class="rounded-lg border border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between items-center gap-2"
      >
        <GfpStudioPhotographyIcon class="w-10 h-10 text-black dark:text-white" />
        <Text class="text-xs text-dark-5" no-margin>GfpStudioPhotographyIcon</Text>
      </div>
      <div
        class="rounded-lg border border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between items-center gap-2"
      >
        <GfpDeferCeremonyIcon class="w-10 h-10 text-black dark:text-white" />
        <Text class="text-xs text-dark-5" no-margin>GfpDeferCeremonyIcon</Text>
      </div>
      <div
        class="rounded-lg border border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between items-center gap-2"
      >
        <GfpColorsIcon class="w-10 h-10" />
        <Text class="text-xs text-dark-5" no-margin>GfpColorsIcon</Text>
      </div>
      <div
        class="rounded-lg border border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between items-center gap-2"
      >
        <GfpGownIcon class="w-10 h-10 text-black dark:text-white" />
        <Text class="text-xs text-dark-5" no-margin>GfpGownIcon</Text>
      </div>
    </div>
  </Card>
</template>
