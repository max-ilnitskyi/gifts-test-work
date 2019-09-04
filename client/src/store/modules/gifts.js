import Vue from 'vue';
import { mockGiftsData } from '@/data';

export default {
  namespaced: true,
  state: {
    // Available gifts list
    giftsList: mockGiftsData,
    // Object with prop - gift id and value - {amount, createdAt}
    selectedGiftsStateById: {}
  },
  getters: {
    selectedAmountById: state => id => {
      const giftState = state.selectedGiftsStateById[id];

      if (!giftState) return 0;

      return giftState.amount;
    },
    // Returns mapped object, with prop - id and value - corresponding object
    giftsById(state) {
      const giftsIdObj = {};

      state.giftsList.forEach(gift => {
        giftsIdObj[gift.id] = gift;
      });

      return giftsIdObj;
    },
    // Returns total number of items in basket
    selectedTotalAmount(state) {
      let totalAmount = 0;

      for (const giftId in state.selectedGiftsStateById) {
        totalAmount += state.selectedGiftsStateById[giftId].amount;
      }

      return totalAmount;
    },
    // Returns total cost of selected items
    totalCost(state, getters) {
      let cost = 0;

      for (const giftId in state.selectedGiftsStateById) {
        const selectedGift = getters.giftsById[giftId];

        if (selectedGift) {
          cost +=
            selectedGift.price * state.selectedGiftsStateById[giftId].amount;
        }
      }
      return cost;
    },
    // Returns all selected items by update time
    selectedGiftsList(state, getters) {
      const selectedListWithUpTime = [];

      for (const giftId in state.selectedGiftsStateById) {
        const selectedGift = getters.giftsById[giftId];

        if (selectedGift) {
          selectedListWithUpTime.push({
            gift: selectedGift,
            createdAt: state.selectedGiftsStateById[giftId].createdAt
          });
        }
      }

      selectedListWithUpTime.sort((a, b) =>
        a.createdAt < b.createdAt ? 1 : -1
      );

      const selectedList = selectedListWithUpTime.map(item => item.gift);

      return selectedList;
    }
  },
  mutations: {
    setSelectedAmount(state, { id, amount, createdAt }) {
      // When amount decrease to 0, remove prop from object
      if (amount === 0) {
        Vue.delete(state.selectedGiftsStateById, id);
        return;
      }

      // Set new or existing prop
      Vue.set(state.selectedGiftsStateById, id, { amount, createdAt });
    }
  },
  actions: {
    trySetSelectedAmount({ commit, state }, payload) {
      // If somthing went wrong
      if (payload.amount < 0) {
        console.log('Amount cannot be less than 0');
        return;
      }

      const giftState = state.selectedGiftsStateById[payload.id];

      if (giftState) {
        payload.createdAt = giftState.createdAt;
      } else {
        payload.createdAt = Date.now();
      }
      commit('setSelectedAmount', payload);
    }
  }
};
