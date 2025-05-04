const props = defineProps({
    coverUrl: { type: String, required: true }
});
const bgStyle = { backgroundImage: `url(${props.coverUrl})` };
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div)({
    ...{ class: "absolute inset-0 bg-cover bg-center transition-transform filter duration-300 ease-out group-hover:scale-110 group-hover:blur-sm" },
    ...{ style: (__VLS_ctx.bgStyle) },
});
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-center']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['filter']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-out']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:scale-110']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:blur-sm']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            bgStyle: bgStyle,
        };
    },
    props: {
        coverUrl: { type: String, required: true }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        coverUrl: { type: String, required: true }
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=CardImage.vue.js.map