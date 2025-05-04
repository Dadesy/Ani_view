import { computed } from 'vue';
import colors from 'tailwindcss/colors';
const props = defineProps({
    average: { type: Number, required: true }
});
const badgeStyle = computed(() => {
    const r = props.average;
    if (r <= 2) {
        return { backgroundColor: colors.red[500], borderColor: colors.red[500] };
    }
    if (r <= 4) {
        return { backgroundColor: colors.orange[500], borderColor: colors.orange[500] };
    }
    if (r <= 6) {
        return { backgroundColor: colors.yellow[500], borderColor: colors.yellow[500] };
    }
    if (r <= 8) {
        return { backgroundColor: colors.lime[500], borderColor: colors.lime[500] };
    }
    return { backgroundColor: colors.green[500], borderColor: colors.green[500] };
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.ABadge;
/** @type {[typeof __VLS_components.ABadge, typeof __VLS_components.aBadge, typeof __VLS_components.ABadge, typeof __VLS_components.aBadge, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    count: (__VLS_ctx.average),
    numberStyle: (__VLS_ctx.badgeStyle),
}));
const __VLS_2 = __VLS_1({
    count: (__VLS_ctx.average),
    numberStyle: (__VLS_ctx.badgeStyle),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
var __VLS_5 = {};
var __VLS_3;
// @ts-ignore
var __VLS_6 = __VLS_5;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            badgeStyle: badgeStyle,
        };
    },
    props: {
        average: { type: Number, required: true }
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        average: { type: Number, required: true }
    },
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=RatingBadge.vue.js.map