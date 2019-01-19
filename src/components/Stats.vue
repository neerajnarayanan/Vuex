<template>
  <div class="Stats">
   <h1>This is another Component</h1>
   <p>There are a total of {{countLinks}} links</p>
   <button v-on:click="removeAllElements">Removeall</button>
  </div>
</template>

<script>

import { mapGetters,mapMutations,mapActions } from 'vuex';  

export default {
  name: "Stats",
  computed: {
    ...mapGetters ([
       'countLinks'
    ])
  },
  methods: {
    ...mapMutations([
      'REMOVE_ALL'
    ]),
    ...mapActions([
      'removeall'
    ]),
    removeAllElements:function() {
      this.removeall().then(res => {
        console.log(res);
      })
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
