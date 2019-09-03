import Vue from 'vue';
import { mockGiftsData } from '@/data';

export default {
  namespaced: true,
  state: {
    // Available gifts list
    giftsList: mockGiftsData,
    // Object with prop - gift id and value - selected amount
    selectedGiftsAmountById: {}
  },
  getters: {
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

      for (const giftId in state.selectedGiftsAmountById) {
        totalAmount += state.selectedGiftsAmountById[giftId];
      }

      return totalAmount;
    },
    // TODO: total cost
    // Returns all selected items
    selectedGiftsList(state, getters) {
      const selectedList = [];

      for (const giftId in state.selectedGiftsAmountById) {
        const selectedGift = getters.giftsById[giftId];

        if (selectedGift) selectedList.push(selectedGift);
      }

      return selectedList;
    }
  },
  mutations: {
    setSelectedAmount(state, { id, amount }) {
      // When amount decrease to 0, remove prop from object
      if (amount === 0) {
        Vue.delete(state.selectedGiftsAmountById, id);
        return;
      }

      // Set new or existing prop
      Vue.set(state.selectedGiftsAmountById, id, amount);
    }
  },
  actions: {
    trySetSelectedAmount({ commit }, payload) {
      // If somthing went wrong
      if (payload.amount < 0) {
        console.log('Amount cannot be less than 0');
        return;
      }
      commit('setSelectedAmount', payload);
    }
  }
};
