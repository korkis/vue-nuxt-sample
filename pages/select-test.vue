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
  </v-row>
</template>

<script>
export default {
  data () {
    return {
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
        if (item.id !== couponItem.id && e === couponItem.seq) {
          await this.$nextTick();
          alert('잘못 입력하셨습니다.');
          item.selectedCoupon = 0;
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
                  money: 3000
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
