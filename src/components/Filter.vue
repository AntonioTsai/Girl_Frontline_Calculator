<template>
  <div class="filter">
    <el-row>
      <el-col :span="6">
        <label>隊長等級</label>
        <el-input-number v-model="captainLevel" :min="1" :max="100"></el-input-number>
      </el-col>
      <el-col :span="6">
        <label>後勤隊伍</label>
        <el-input-number v-model="teamNumber" :min="1" :max="4"></el-input-number>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

export default {
  data() {
    return {
      captainLevel: 1,
      teamNumber: 1,
    };
  },
};
</script>

<style>

</style>

