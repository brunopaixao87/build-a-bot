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
  props: {
    partType: { type: String },
    id: {
      type: [Number, String],
      validator(valeu) {
        return Number.isInteger(Number(valeu));
      },
    },
  },
  computed: {
    part() {
      // parametro via route const { id, partType } = this.$route.params;
      const { id, partType } = this;
      // + cast string para number
      return parts[partType].find(p => p.id === +id);
    },
  },
};
</script>

<style>

</style>
