import {
  FETCH_POST_LIST,
  FETCH_POST,
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  DESTROY_ACCESS_TOKEN,
  DESTROY_MY_INFO,
} from './mutations-types'
import api from '@/api'
import Cookies from 'js-cookie'

export default {
  [FETCH_POST_LIST] (state, posts) {
    state.posts = posts;
  },
  [FETCH_POST] (state, post) {
    state.post = post;
  },
  [SET_ACCESS_TOKEN] (state, accessToken) {
    if (accessToken) {
      state.accessToken = accessToken;
      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;  // axios 호출 시 기본 헤더 설정
      Cookies.set('accessToken', accessToken);
    }
  },
  [SET_MY_INFO] (state, me) {
    if (me) {
      state.me = me;
    }
  },
  [DESTROY_ACCESS_TOKEN] (state) {
    state.accessToken = '';
    delete api.defaults.headers.common.Authorization;
    Cookies.remove('accessToken');
  },
  [DESTROY_MY_INFO] (state) {
    state.me = null;
  }
}
