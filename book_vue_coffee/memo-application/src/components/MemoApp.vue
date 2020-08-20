<template>
  <div class="memo-app">
    <memo-form v-on:addMemo="addMemo"/>
    <ul class="memo-list">
      <memo v-for="memo in memos"
            :key="memo.id"
            :memo="memo"
            @deleteMemo="deleteMemo"
            @updateMemo="updateMemo"
            :editingId="editingId"
            @setEditingId="SET_EDITING_ID"
            @resetEditingId="RESET_EDITING_ID"/>
    </ul>
  </div>
</template>

<script>
import MemoForm from "./MemoForm";
import Memo from "./Memo";
import { mapActions, mapState, mapMutations } from 'vuex';
import { RESET_EDITING_ID, SET_EDITING_ID } from "../store/mutations-types";

export default {
  name: "MemoApp",
  created() {
    this.fetchMemos();
  },
  components: {
    MemoForm,
    Memo
  },
  methods: {
    ...mapActions([
      'fetchMemos',
      'addMemo',
      'deleteMemo',
      'updateMemo'
    ]),
    ...mapMutations([
      RESET_EDITING_ID,
      SET_EDITING_ID
    ])
  },
  computed: {
    ...mapState([
      'memos',
      'editingId'
    ])
  }
};
</script>

<style scoped>
.memo-list {
  padding: 20px 0;
  margin: 0;
}
</style>
