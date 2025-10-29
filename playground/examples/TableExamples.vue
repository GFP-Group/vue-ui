<script setup lang="ts">
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import Table from '../../src/components/Table.vue'
import TableHead from '../../src/components/TableHead.vue'
import TableBody from '../../src/components/TableBody.vue'
import TableRow from '../../src/components/TableRow.vue'
import TableHeader from '../../src/components/TableHeader.vue'
import TableCell from '../../src/components/TableCell.vue'
import { ref } from 'vue'

const users = ref([
  { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  { name: 'Alice Brown', email: 'alice@example.com', role: 'Editor' },
])
</script>

<template>
  <Card title="Table" dark-darker title-type="h1">
    <section class="mb-8">
      <Text h4 class="mb-4">Basic Table</Text>
      <Text p class="mb-4">A simple table with headers and data rows.</Text>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Role</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow v-for="(user, index) in users" :key="index">
            <TableCell>{{ user.name }}</TableCell>
            <TableCell>{{ user.email }}</TableCell>
            <TableCell>{{ user.role }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  </Card>
</template>
