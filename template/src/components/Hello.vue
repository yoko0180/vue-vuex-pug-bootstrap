<template lang="pug">
  div.hello
    h1 {{ msg }}
    button.btn.btn-default(@click.prevent="offsetPoint(1)") click me {{point}}
    h1 getter {{foobaa}}
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Vue.js Vuex Pug Bootstrap Stylus テンプレート'
    }
  },
  computed: {
    ...mapState(['point']),
    ...mapGetters(['foobaa']),
  },
  methods:{
    ...mapActions(['offsetPoint']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
ul
  list-style-type: none
  padding: 0

li
  display: inline-block;
  margin: 0 10px;

a
  color: #42b983
</style>
