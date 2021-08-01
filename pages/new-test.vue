<template>
  <div>
    Hello world
    <v-row>
      <v-col
        cols="12"
        sm="3"
      >
        <v-select
          v-model="selectedItem"
          :items="items"
          solo
          color="brown "
        />
        <v-btn @click="changeItem">
          클릭
        </v-btn>
        total: {{ total }}
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        {{ myData }}
      </v-col>
      <v-col>
        <v-btn @click="clickMyData">
          배열요소변경
        </v-btn>
        <v-btn @click="clickMyDataObject">
          배열안의Object 변경
        </v-btn>
        <v-btn @click="clickMyDataObject2">
          배열안의 새로운 Object 생성
        </v-btn>
        <v-btn @click="clickMyDataObjectKeyValue">
          배열안의 새로운 Object에 key-value 생성
        </v-btn>
        <v-btn @click="clickMyDataObjectKeyValuePlus">
          배열안의 새로운 Object에 key-value 더하기
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedItem: null,
      items: [],
      myData: {}
    };
  },
  fetch () {
    this.items = ['Foo', 'Bar', 'Fizz', 'Buzz'];
    this.myData = {
      ages1: [
        10, 20, 30,
        {
          a: 1
        }
      ],
      ages2: [
        10, 20, 30
      ]
    };
  },
  computed: {
    total () {
      return this.selectedItem ? this.selectedItem : '';
    }
  },
  methods: {
    clickMyDataObjectKeyValuePlus () {
      this.myData.ages1[3].b++;
    },
    clickMyDataObjectKeyValue () {
      // 변경 안됨
      // this.myData.ages1[3].b = 10;
      // this.myData.ages1[3] = { ...this.myData.ages1[3], b: 10 };
      // this.myData.ages1[3] = Object.assign({}, this.myData.ages1[3], { b: 10 });

      // 변경됨
      this.myData.ages1.splice(3, 1, { ...this.myData.ages1[3], b: 10 });
      // this.$set(this.myData.ages1[3], 'b', 10);

      console.log('this.myData', this.myData);
    },
    clickMyDataObject2 () {
      // this.myData.ages1[3] = b = 'c';
      this.myData.ages1.push({
        b: 1
      });
      console.log('this.myData', this.myData);
    },
    clickMyDataObject () {
      this.myData.ages1[4].b++;
      console.log('this.myData', this.myData);
    },
    clickMyData () {
      // this.myData.ages[0] = 100;
      this.myData.ages1.splice(1, 1, 100);
      console.log('this.myData', this.myData);
    },
    changeItem () {
      this.selectedItem = 'Buzz';
    }
  }
};
</script>
