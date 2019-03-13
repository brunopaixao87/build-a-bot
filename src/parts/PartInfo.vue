<template>
  <div>
    <h1>{{part.title}}</h1>
    <div>
      {{part.description}}
    </div>
  </div>
</template>

<script>

import parts from '../data/parts';

export default {
  name: 'PartInfo',
  computed: {
    part() {
      const { id, partType } = this.$route.params;
      // + cast string para number
      return parts[partType].find(p => p.id === +id);
    },
  },
};
</script>

<style>

</style>
