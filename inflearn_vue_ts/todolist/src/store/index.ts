import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { State, Item } from './store.interface';
import AxiosService from '@/service/axios.service';
import { AxiosResponse } from 'axios';

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: [],
  },
  // State의 값을 변경하기 위한 것
  mutations: {
    // TODO add
    addItem(state, item: Item) {
      state.todoList.push(item);
    },
    // TODO change status
    changeStatus(state, {id, status}: {id: number, status: 'active' | 'clear'}) {
      state.todoList[id].status = status;
    },
    // TODO remove
    remoteItem(state, id: number) {
      state.todoList.splice(id, 1);
    },
    setTodoList(state, todoList: Item[]) {
      state.todoList = todoList;
    },
  },
  // 비지니스 로직이 들어가는 부분
  actions: {
    async initData({commit}) {
      const response: AxiosResponse<{todoList: Item[]}> = await AxiosService.instance.get('/data.json');
      commit('setTodoList', response.data.todoList);
    },
  },
  getters: {
    allTodoList: (state) => state.todoList,
    activeTodoList: (state) => {
      return state.todoList.filter((item: Item) => item.status === 'active');
    },
    clearTodoList: (state) => {
      return state.todoList.filter((item: Item) => item.status === 'clear');
    },
  },
};



export default new Vuex.Store(store);
