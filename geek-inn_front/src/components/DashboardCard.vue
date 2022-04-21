<template>
  <div class="card-list">
    <span>Tableau de bord</span>
    <span>Nombre total d'utilisateur:{{ allUsers }} </span>
    <span>Nombre d'administrateur: {{ adminUsers }}</span>
    <span
      >Nombre de nouveaux utilisateurs (30 derniers jours):
      {{ lastUsers }}</span
    >
    <span>Nombre total de commentaires: {{ allReviews }}</span>
    <span
      >Nombre de nouveaux commentaires (30 derniers jours):
      {{ lastReviews }}</span
    >
  </div>
</template>
<script>
import {
  countAllUsers,
  countLastUsers,
  countAdminUsers,
  countAllReviews,
  countLastReviews,
} from "@/api.js";
export default {
  name: "DashboardCard",
  data() {
    return {
      allUsers: "",
      lastUsers: "",
      adminUsers: "",
      allReviews: "",
      lastReviews: "",
    };
  },
  mounted() {
    this.countAllUsers();
    this.countLastUsers();
    this.countAdminUsers();
    this.countAllReviews();
    this.countLastReviews();
  },
  methods: {
    countAllUsers: async function () {
      const resAllUsers = await countAllUsers();
      this.allUsers = resAllUsers;
    },
    countLastUsers: async function () {
      const resLastUsers = await countLastUsers();
      this.lastUsers = resLastUsers;
    },
    countAdminUsers: async function () {
      const resAdminUsers = await countAdminUsers();
      this.adminUsers = resAdminUsers;
    },
    countAllReviews: async function () {
      const resAllReviews = await countAllReviews();
      this.allReviews = resAllReviews;
    },
    countLastReviews: async function () {
      const resLastReviews = await countLastReviews();
      this.lastReviews = resLastReviews;
    },
  },
};
</script>
