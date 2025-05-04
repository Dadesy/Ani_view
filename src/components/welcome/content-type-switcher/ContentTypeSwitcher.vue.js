import { ref, watch } from 'vue';
import { ContentType } from '@/components/welcome/content-type-switcher/types';
const emits = defineEmits();
const selectedContentType = ref(ContentType.Popular);
watch(selectedContentType, (newType) => {
    emits('change', newType);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.ARadioGroup;
/** @type {[typeof __VLS_components.ARadioGroup, typeof __VLS_components.aRadioGroup, typeof __VLS_components.ARadioGroup, typeof __VLS_components.aRadioGroup, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    value: (__VLS_ctx.selectedContentType),
}));
const __VLS_2 = __VLS_1({
    value: (__VLS_ctx.selectedContentType),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.ARadioButton;
/** @type {[typeof __VLS_components.ARadioButton, typeof __VLS_components.aRadioButton, typeof __VLS_components.ARadioButton, typeof __VLS_components.aRadioButton, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    value: (__VLS_ctx.ContentType.Popular),
}));
const __VLS_7 = __VLS_6({
    value: (__VLS_ctx.ContentType.Popular),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
var __VLS_8;
const __VLS_9 = {}.ARadioButton;
/** @type {[typeof __VLS_components.ARadioButton, typeof __VLS_components.aRadioButton, typeof __VLS_components.ARadioButton, typeof __VLS_components.aRadioButton, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    value: (__VLS_ctx.ContentType.New),
}));
const __VLS_11 = __VLS_10({
    value: (__VLS_ctx.ContentType.New),
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_12.slots.default;
var __VLS_12;
const __VLS_13 = {}.ARadioButton;
/** @type {[typeof __VLS_components.ARadioButton, typeof __VLS_components.aRadioButton, typeof __VLS_components.ARadioButton, typeof __VLS_components.aRadioButton, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    value: (__VLS_ctx.ContentType.NewEpisodes),
}));
const __VLS_15 = __VLS_14({
    value: (__VLS_ctx.ContentType.NewEpisodes),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
__VLS_16.slots.default;
var __VLS_16;
var __VLS_3;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ContentType: ContentType,
            selectedContentType: selectedContentType,
        };
    },
    __typeEmits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=ContentTypeSwitcher.vue.js.map