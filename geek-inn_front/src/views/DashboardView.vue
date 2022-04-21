<template>
  <div class="dashboard">
    <dashboard-card></dashboard-card>
  </div>
</template>
<script>
import DashboardCard from "@/components/DashboardCard.vue";
export default {
  name: "DashboardView",
  components: { DashboardCard },
  props: {},
};
</script>
<style>
.dashboard {
  min-height: 600px;
}
</style>
