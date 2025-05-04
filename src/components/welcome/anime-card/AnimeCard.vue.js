import RatingBadge from '@/components/welcome/anime-card/RatingBadge.vue';
import CardImage from '@/components/welcome/anime-card/CardImage.vue';
import CardOverlay from '@/components/welcome/anime-card/CardOverlay.vue';
import CardDetails from '@/components/welcome/anime-card/CardDetails.vue';
const props = defineProps();
const avgNumber = Number(props.item.rating.averageFormated);
const coverUrl = props.item.cover.default;
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {[typeof RatingBadge, typeof RatingBadge, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(RatingBadge, new RatingBadge({
    average: (__VLS_ctx.avgNumber),
}));
const __VLS_1 = __VLS_0({
    average: (__VLS_ctx.avgNumber),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_3 = {};
__VLS_2.slots.default;
const __VLS_4 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    to: (`${__VLS_ctx.item.slug_url}`),
}));
const __VLS_6 = __VLS_5({
    to: (`${__VLS_ctx.item.slug_url}`),
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "relative group h-96 w-72 rounded-2xl overflow-hidden cursor-pointer" },
});
__VLS_asFunctionalDirective(__VLS_directives.vAutoAnimate)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
/** @type {[typeof CardImage, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(CardImage, new CardImage({
    coverUrl: (__VLS_ctx.coverUrl),
}));
const __VLS_9 = __VLS_8({
    coverUrl: (__VLS_ctx.coverUrl),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {[typeof CardOverlay, ]} */ ;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(CardOverlay, new CardOverlay({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
/** @type {[typeof CardDetails, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(CardDetails, new CardDetails({
    rusName: (__VLS_ctx.item.rus_name),
    engName: (__VLS_ctx.item.eng_name),
    ageLabel: (__VLS_ctx.item.ageRestriction.label),
    typeLabel: (__VLS_ctx.item.type.label),
    ratingText: (`${__VLS_ctx.item.rating.averageFormated} (${__VLS_ctx.item.rating.votesFormated} голосов)`),
    statusLabel: (__VLS_ctx.item.status.label),
}));
const __VLS_15 = __VLS_14({
    rusName: (__VLS_ctx.item.rus_name),
    engName: (__VLS_ctx.item.eng_name),
    ageLabel: (__VLS_ctx.item.ageRestriction.label),
    typeLabel: (__VLS_ctx.item.type.label),
    ratingText: (`${__VLS_ctx.item.rating.averageFormated} (${__VLS_ctx.item.rating.votesFormated} голосов)`),
    statusLabel: (__VLS_ctx.item.status.label),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
var __VLS_7;
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['h-96']} */ ;
/** @type {__VLS_StyleScopedClasses['w-72']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            RatingBadge: RatingBadge,
            CardImage: CardImage,
            CardOverlay: CardOverlay,
            CardDetails: CardDetails,
            avgNumber: avgNumber,
            coverUrl: coverUrl,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=AnimeCard.vue.js.map