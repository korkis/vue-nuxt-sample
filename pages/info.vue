<template>
  <div>
    <h1>
      Info
    </h1>
    <v-row>
      <v-col>
        Info: {{ info }}
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>env.abc : {{ abc }}</p>
        <p v-for="(a,i) in d" :key="`p_${i}`">
          a : {{ a }}
        </p>

        <p v-for="(a,i) in d" :key="`p2_${i}`">
          a : {{ a }}
        </p>
        <v-btn @click="changeAbc">
          클릭
        </v-btn>
        <v-select
          v-model="selectedItem"
          :items="items"
          label="Outlined style"
          outlined
          @change="selectChanged"
        />
        item: {{ selectedItem }}
        <v-btn @click="changeAr">
          ar 변경
        </v-btn>
        ar: {{ ar }}
        <v-btn @click="alertAr">
          확인
        </v-btn>
        <v-text-field v-model="ar[1]" />
        <p>ob: {{ ob }}</p>

        <v-btn @click="changeOb">
          ob 변경
        </v-btn>
        <v-btn @click="alertOb">
          ob 확인
        </v-btn>
        <v-btn @click="testThis">
          this 확인
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      info: '',
      abc: process.env.abc,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      selectedItem: null,
      ar: [],
      ob: {}
    };
  },
  fetch () {
    console.log('fetch');
  },
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ]
  },
  computed: {
    d () {
      const r = [];
      r.push(this.abc);
      r.push('computed d');
      console.log('computed d');
      return r;
    }
  },
  async mounted () {
    await this.sleep(1000);
    console.log('mounted');

    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 30000);
    });
    this.info = this.$route.currentRoute;
    console.log('$route', this.$route);
  },
  created () {
    console.log('created');
    this.ar = [1, 1];
    this.ob.a = 'a';
    this.ob.b = 'b';
  },
  destroyed () {
    console.log('destroyed');
  },
  methods: {
    changeAr () {
      this.ar[1] = 'a';
      // this.ar = ['b', 'a'];
    },
    selectChanged (e) {
      console.log('selectChanged', e);
    },
    sleep (ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    changeAbc () {
      this.abc = 'TT';
    },
    alertAr () {
      alert(`0: ${this.ar[0]}, 1: ${this.ar[1]}`);
    },
    changeOb () {
      // this.ob.a = 'c';
      this.ob = { d: 'd' };
      this.ob.c = {
        cc: 1
      };
    },
    alertOb () {
      alert(`a: ${this.ob.a}, b: ${this.ob.b}`);
    },
    pp1 (f) {
      f();
    },
    testThis () {
      // const person = {
      //   firstName: 'John',
      //   lastName: 'Doe',
      //   id: 5566,
      //   myFunction () {
      //     return this;
      //   }
      // };

      // const this1 = this;
      // console.log('this', this);
      // const t1 = () => {
      // console.log(this1 === this);
      // this.alertOb();
      // };
      // this.pp1(t1);
    }
  }
};
</script>
