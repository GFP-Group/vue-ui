<script setup lang="ts">
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import Tabs from '../../src/components/Tabs.vue'
import TabContent from '../../src/components/TabContent.vue'

const demoTabs = [
  { name: 'profile', title: 'Profile' },
  { name: 'password', title: 'Password' },
  { name: 'team', title: 'Team' },
]

const demoTabs2 = [
  { name: 'students', title: 'Students', color: '#23D28F' },
  { name: 'guests', title: 'Guests', color: '#B041FF' },
  { name: 'staff', title: 'Staff', color: '#FF9D00' },
]
</script>

<template>
  <Card title="Tabs" dark-darker title-type="h1">
    <section class="mb-8">
      <Text h4 class="mb-4">Default</Text>
      <Tabs :items="demoTabs">
        <TabContent name="profile" class="mb-30">
          <Text>Profile content</Text>
        </TabContent>
        <TabContent name="password" class="mb-30">
          <Text>Password content</Text>
        </TabContent>
        <TabContent name="team" class="mb-30">
          <Text>Team content</Text>
        </TabContent>
      </Tabs>
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">Custom Colors</Text>
      <Tabs :items="demoTabs2">
        <TabContent name="students" class="mb-30">
          <Text>Students content</Text>
        </TabContent>
        <TabContent name="guests" class="mb-30">
          <Text>Guests content</Text>
        </TabContent>
        <TabContent name="staff" class="mb-30">
          <Text>Staff content</Text>
        </TabContent>
      </Tabs>
    </section>
  </Card>
</template>
