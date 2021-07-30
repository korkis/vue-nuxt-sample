<template>
  <v-row>
    <v-col>
      <div v-for="(group, groupIndex) in groups" :key="`group_${groupIndex}`">
        <h3>{{ group.id }}</h3>
        <div v-for="(item, itemIndex) in group.items" :key="`item_${itemIndex}`">
          <h4>{{ item.id }}</h4>
          coupons:
          <v-select
            v-model="item.selectedCoupon"
            :items="item.coupons"
            item-text="money"
            item-value="seq"
            label="쿠폰선택"
            dense
            solo
            item-disabled="disabled"
            @input="couponChanged($event, item)"
          />
          <v-btn @click="clear(item)">
            선택 초기화
          </v-btn>
        </div>
      </div>
    </v-col>

    <v-btn @click="getSelectedCoupons">
      확인
    </v-btn>

    {{ names }}
    <div v-for="name in names" :key="name">
      {{ name }}
      <v-btn @click="changeNameInItem(name)">
        아이템 안에서 바꾸기
      </v-btn>
    </div>
    <v-text-field v-model="names[0]" type="text" />
    <v-btn @click="changeName">
      이름변경
    </v-btn>
    <v-btn @click="getNames">
      조회
    </v-btn>
    ages: {{ ages }}
    <v-btn @click="changeAge">
      나이 변경
    </v-btn>
    <v-btn @click="changeAge2">
      나이 변경2
    </v-btn>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      names: [],
      ages: {},
      groups: [],
      select: { state: 'Florida', abbr: 'FL' },
      items: [
        { state: 'Florida', abbr: 'FL' },
        { state: 'Georgia', abbr: 'GA' },
        { state: 'Nebraska', abbr: 'NE' },
        { state: 'California', abbr: 'CA' },
        { state: 'New York', abbr: 'NY' }
      ]
    };
  },
  fetch () {
    this.getItems();
  },
  methods: {
    changeAge2 () {
      // this.ages.a = '5';
      this.ages.b = '5';
      // this.$forceUpdate();
    },
    changeAge () {
      this.ages = {
        a: '4',
        b: null
      };
    },
    getNames () {
      this.names = ['사자', '호랑이', '개나리'];
    },
    changeNameInItem (name) {
      name = '고추';
    },
    changeName () {
      this.names[0] = '레몬';
      console.log('this.names', this.names);
      // this.$set(this.names, 0, '레몬');
    },
    clear (item) {
      item.selectedCoupon = 0;
    },
    async couponChanged (e, item) {
      // alert('잘못 선택하셨습니다.');
      // item.selectedCoupon = e;
      console.log('item.selectedCoupon', item.selectedCoupon);
      // debugger;

      const selectedCoupons = this.getSelectedCoupons();
      console.log('selectedCoupons', selectedCoupons);
      for (const couponItem of selectedCoupons) {
        console.log('id', item.id);
        console.log('couponItem.id', couponItem.id);
        console.log('e', e);
        console.log('couponItem.id', couponItem.id);
        if (item.id === couponItem.id) {
          console.log('같을 경우 테스트', item === couponItem);
          console.log('item', item);
          console.log('couponItem', couponItem);
        }
        if (item.id !== couponItem.id && e === couponItem.seq) {
          await this.$nextTick();
          // alert('잘못 입력하셨습니다.');
          item.selectedCoupon = 0;
          // this.$forceUpdate();
          return;
        }
      }
    },
    getSelectedCoupons () {
      const selectedCoupons = [];

      for (const group of this.groups) {
        for (const item of group.items) {
          if (item.selectedCoupon) {
            selectedCoupons.push({
              id: item.id,
              seq: item.selectedCoupon
            });
          }
        }
      }

      console.log('alertSelectedCoupons', selectedCoupons);
      return selectedCoupons;
    },
    getItems () {
      this.groups = [
        {
          id: 'group1',
          items: [
            {
              id: 'item_option1',
              coupons: [
                {
                  seq: 0,
                  money: 0
                },
                {
                  seq: 1,
                  money: 1000
                },
                {
                  seq: 2,
                  money: 2000
                },
                {
                  seq: 3,
                  money: 3000,
                  disabled: true
                }
              ]
            },
            {
              id: 'item_option2',
              coupons: [
                {
                  seq: 0,
                  money: 0
                },
                {
                  seq: 1,
                  money: 1000
                }
              ]
            }
          ]
        },
        {
          id: 'group2',
          items: [
            {
              id: 'item_option3',
              coupons: [
                {
                  seq: 0,
                  money: 0
                },
                {
                  seq: 1,
                  money: 1000
                },
                {
                  seq: 2,
                  money: 2000
                },
                {
                  seq: 3,
                  money: 3000
                }
              ]
            }
          ]
        }
      ];
    }
  }
};
</script>
