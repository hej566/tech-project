<template>
  <div class="upvote-group">
    <div class="upvote-wrapper" :key="index" v-for="index in numberOfUpVotes">
      <UpVote :selected="selected" @click="toggleAllUpVotes"/>
    </div>
  </div>
</template>

<script>
import UpVote from './UpVote.vue'
import { mapState } from 'vuex'
export default {
  name: 'UpVoteGroup',
  components: {
    UpVote
  },
  props: {
    numberOfUpVotes: Number
  },
  computed: mapState([
    'selected'
  ]),
  methods: {
    toggleAllUpVotes() {
      this.$store.commit('toggle')
    }
  }
}
</script>