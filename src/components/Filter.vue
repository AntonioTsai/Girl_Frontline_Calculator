<template>
  <div class="filter">
    <el-row type="flex">
      <el-col :span="6">
        <label>隊長等級</label>
        <el-input-number v-model="captainLevel" @change="handleCaptainLevel" :min="1" :max="100"></el-input-number>
      </el-col>
      <el-col :span="6">
        <label>後勤隊伍</label>
        <el-input-number v-model="teamNumber" @change="handleTeamNumber" :min="1" :max="4"></el-input-number>
      </el-col>
      <el-col :span="12">
        <label class="vertical-center">資源</label>
        <div class="inline-div">
          <el-checkbox-group v-model="resourceFilter" @change="handleResourceFilter">
            <el-checkbox-button v-for="res in resources" :label="res.label" :key="res.label">{{ res.title }}</el-checkbox-button>
          </el-checkbox-group>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const resources = [
  {
    label: 'human_resource',
    title: '人力',
  },
  {
    label: 'ammo',
    title: '彈藥',
  },
  {
    label: 'ration',
    title: '口糧',
  },
  {
    label: 'component',
    title: '零件',
  },
];

export default {
  data() {
    return {
      captainLevel: 1,
      teamNumber: 1,
      resources,
      resourceFilter: [
        'human_resource',
        'ammo',
        'ration',
        'component',
      ],
    };
  },
  methods: {
    handleCaptainLevel(val) {
      // eslint-disable-next-line
      console.log(`Checkbox Group Changed!\nval = ${val}`);
      this.$store.commit({
        type: 'updateCaptainLevel',
        level: val,
      });
    },
    handleTeamNumber(val) {
      // eslint-disable-next-line
      console.log(`Checkbox Group Changed!\nval = ${val}`);
      this.$store.commit({
        type: 'updateTeamNumber',
        number: val,
      });
    },
    handleResourceFilter(val) {
      // eslint-disable-next-line
      console.log(`Checkbox Group Changed!\nval = ${val}`);
      this.$store.commit({
        type: 'updateResourceFilter',
        filter: val,
      });
    },
  },
  created() {
    this.captainLevel = this.$store.state.captainLevel;
    this.teamNumber = this.$store.state.teamNumber;
    this.resourceFilter = this.$store.state.resourceFilter;
  },
};
</script>

<style>
label.vertical-center {
  vertical-align: -webkit-baseline-middle;
}

.inline-div {
  display: inline-block;
}
</style>

