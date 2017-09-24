<template lang="pug">
  div.hello
    h1 {{ msg }}
    button.btn.btn-default(@click.prevent="offsetPoint(1)") click me {{point}}
    h1 getter {{foobaa}}
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Vue.js Vuex Pug Bootstrap テンプレート'
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
<style scoped>
h1, h2 {
  font-weight: normal;
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
