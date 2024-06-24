<template>
  <q-page class="column items-center justify-center q-pa-md bg-image">
    <div class="tasks-section">
      <q-select
        v-model="selectedTask"
        :options="tasks"
        label="Select Task"
        emit-value
        map-options
        style="min-width: 250px;"
      />
      <q-btn @click="openTaskInNewTab" label="Go to Task" color="primary" />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const tasks = ref([
  { label: "Tugas 1", value: "https://github.com/agungdermawan09/agung-dermawan.git?authuser=0" },
  {
    label: "Tugas 2",
    value: "https://github.com/agungdermawan09/agung-dermawan.git?authuser=0",
  },
  { label: "Tugas 3", value: "https://github.com/agungdermawan09/T_4.git?authuser=0" },
  {
    label: "Tugas 4",
    value: "https://github.com/agungdermawan09/tugas5.git?authuser=0",
  },
  { label: "Tugas 5", value: "https://github.com/agungdermawan09/tugas_6.git?authuser=0" },
  { label: "Tugas 6", value: "https://github.com/agungdermawan09/tugas_6.git?authuser=0" },
]);

const selectedTask = ref(null);

const openTaskInNewTab = () => {
  if (selectedTask.value) {
    window.open(selectedTask.value, "_blank");
  }
};
</script>

<style scoped>
.tasks-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px; 
  background-color: #14ffe4; 
  padding: 100px; 
  border-radius: 10px;
  font-size: 1.5em; 
}

.q-btn {
  font-size: 1em !important; 
  padding: 20px 50px; 
}

.q-select {
  font-size: 1.2em !important; 
}
</style>
