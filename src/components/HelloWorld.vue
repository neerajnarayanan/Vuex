<template>
  <div class="hello">
    <div class="left"> 
      {{title}}
      <form @submit.prevent="addLink">
        <input type="text" placeholder="Add a link" v-model="newLink"/>
      </form>
      <ul>
        <li v-for="(link,index) in links" v-bind:key="index">
          {{link}}
          <button v-on:click="removeLinks(index)">Remove</button>
        </li>
      </ul>
    </div>
    <div class="right">
      <Stats/>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations,mapActions} from 'vuex';  
import  Stats from '@/components/Stats.vue';

export default {
  name: "HelloWorld",
  components: {
    Stats
  },
  data() {
    return {
      newLink:''
    }
  },
  computed: {
    ...mapState ([
       'title',
       'links'
    ])
  },
  methods: {
    ...mapMutations([
      'ADD_LINK'
    ]),
    ...mapActions([
      'removeLink'
    ]),
    addLink:function() {
      this.ADD_LINK(this.newLink);
      this.newLink = '';
    },
    removeLinks:function(index) {
      this.removeLink(index);
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
