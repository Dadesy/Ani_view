import ListItem from './ListItem.vue';
const props = defineProps({
    rusName: { type: String, required: true },
    engName: { type: String, required: true },
    ageLabel: { type: String, required: true },
    typeLabel: { type: String, required: true },
    ratingText: { type: String, required: true },
    statusLabel: { type: String, required: true }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "absolute inset-0 p-4 flex flex-col justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
    ...{ class: "text-white text-xl font-bold mb-1" },
});
(__VLS_ctx.rusName);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "text-gray-200 text-sm mb-2" },
});
(__VLS_ctx.engName);
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "text-gray-300 text-xs space-y-1" },
});
/** @type {[typeof ListItem, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(ListItem, new ListItem({
    label: "Возраст:",
    value: (__VLS_ctx.ageLabel),
}));
const __VLS_1 = __VLS_0({
    label: "Возраст:",
    value: (__VLS_ctx.ageLabel),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {[typeof ListItem, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(ListItem, new ListItem({
    label: "Тип:",
    value: (__VLS_ctx.typeLabel),
}));
const __VLS_4 = __VLS_3({
    label: "Тип:",
    value: (__VLS_ctx.typeLabel),
}, ...__VLS_functionalComponentArgsRest(__VLS_3));
/** @type {[typeof ListItem, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(ListItem, new ListItem({
    label: "Рейтинг:",
    value: (__VLS_ctx.ratingText),
}));
const __VLS_7 = __VLS_6({
    label: "Рейтинг:",
    value: (__VLS_ctx.ratingText),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {[typeof ListItem, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(ListItem, new ListItem({
    label: "Статус:",
    value: (__VLS_ctx.statusLabel),
}));
const __VLS_10 = __VLS_9({
    label: "Статус:",
    value: (__VLS_ctx.statusLabel),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-0']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-opacity']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:opacity-100']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-1']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ListItem: ListItem,
        };
    },
    props: {
        rusName: { type: String, required: true },
        engName: { type: String, required: true },
        ageLabel: { type: String, required: true },
        typeLabel: { type: String, required: true },
        ratingText: { type: String, required: true },
        statusLabel: { type: String, required: true }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        rusName: { type: String, required: true },
        engName: { type: String, required: true },
        ageLabel: { type: String, required: true },
        typeLabel: { type: String, required: true },
        ratingText: { type: String, required: true },
        statusLabel: { type: String, required: true }
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=CardDetails.vue.js.map