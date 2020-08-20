<template>
    <div>
        {{message}}
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch, Emit, Inject} from 'vue-property-decorator';

    @Component
    export default class Children extends Vue {
        @Inject() readonly message!: string; // 초기화 되지 않은 것이 의도적으로 알려준다
    }
</script>