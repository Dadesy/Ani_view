import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
const props = defineProps();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['slick-arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-slick-arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['slick-arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-slick-arrow']} */ ;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.ACarousel;
/** @type {[typeof __VLS_components.ACarousel, typeof __VLS_components.aCarousel, typeof __VLS_components.ACarousel, typeof __VLS_components.aCarousel, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    dots: (false),
    arrows: true,
    slidesToShow: (10),
    slidesToScroll: (1),
    responsive: ([
        { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } }
    ]),
}));
const __VLS_2 = __VLS_1({
    dots: (false),
    arrows: true,
    slidesToShow: (10),
    slidesToScroll: (1),
    responsive: ([
        { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } }
    ]),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
{
    const { prevArrow: __VLS_thisSlot } = __VLS_3.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "custom-slick-arrow" },
        ...{ style: {} },
    });
    const __VLS_5 = {}.LeftCircleOutlined;
    /** @type {[typeof __VLS_components.LeftCircleOutlined, typeof __VLS_components.leftCircleOutlined, ]} */ ;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
    const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
}
{
    const { nextArrow: __VLS_thisSlot } = __VLS_3.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "custom-slick-arrow" },
        ...{ style: {} },
    });
    const __VLS_9 = {}.RightCircleOutlined;
    /** @type {[typeof __VLS_components.RightCircleOutlined, typeof __VLS_components.rightCircleOutlined, ]} */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
}
for (const [slide] of __VLS_getVForSourceType((props.sliders))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (slide.id),
        ...{ class: "group px-2 cursor-pointer overflow-visible" },
    });
    const __VLS_13 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
        to: (slide.slug_url),
    }));
    const __VLS_15 = __VLS_14({
        to: (slide.slug_url),
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    __VLS_16.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex flex-col gap-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (slide.cover.default),
        alt: "",
        ...{ class: "object-cover rounded-2xl w-32 h-40 transition-transform filter duration-300 ease-out group-hover:scale-105" },
    });
    const __VLS_17 = {}.ATypography;
    /** @type {[typeof __VLS_components.ATypography, typeof __VLS_components.aTypography, typeof __VLS_components.ATypography, typeof __VLS_components.aTypography, ]} */ ;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
        ...{ class: "truncate" },
    }));
    const __VLS_19 = __VLS_18({
        ...{ class: "truncate" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    __VLS_20.slots.default;
    (slide.rus_name);
    var __VLS_20;
    var __VLS_16;
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['custom-slick-arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-slick-arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-visible']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['w-32']} */ ;
/** @type {__VLS_StyleScopedClasses['h-40']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['filter']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-out']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:scale-105']} */ ;
/** @type {__VLS_StyleScopedClasses['truncate']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            LeftCircleOutlined: LeftCircleOutlined,
            RightCircleOutlined: RightCircleOutlined,
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
//# sourceMappingURL=PopularSlider.vue.js.map