<template>
  <q-layout view="lHr lpR lfr">
    <q-header class="bg-primary text-white custom-header">
      <q-toolbar>
        <q-toolbar-title>AGUNG DERMAWAN</q-toolbar-title>
        <q-tabs align="left">
          <q-route-tab to="/" label="Weather" />
          <q-route-tab to="/task" label="Task" />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-primary text-white custom-footer">
      <q-toolbar>
        <q-toolbar-title>
          UAS PRAKTIKUM PBK (223510719)
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
</script>

<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
  background-size: cover;
  display: flex;
  flex-direction: column;
}
.bg-image {
  background-image: url('../assets/bg.jpg'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#app {
  display: flex;
  flex-direction: column;
}

.q-page-container {
  flex: 1;
}

.custom-header {
  height: 60px; 
  min-height: 60px;
}

.custom-footer {
  height: 40px; 
  min-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.q-toolbar {
  padding: 0 40px !important; 
  background-color: #1976d2 !important;
  color: #ffffff !important;
}

.q-toolbar__title:first-child {
  padding-left: 20px !important; 
}

.q-tab {
  padding: 0 10px !important; 
  min-height: 40px !important; 
  font-size: 0.8em !important; 
}

.q-footer {
  text-align: center;
  background-color: #1976d2 !important;
  color: #ffffff !important;
  font-size: 0.8em !important; 
}
</style>
