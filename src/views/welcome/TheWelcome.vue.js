import { ref, onMounted, computed } from 'vue';
import BaseLayout from '@/layout/BaseLayout.vue';
import ContentTypeSwitcher from '@/components/welcome/content-type-switcher/ContentTypeSwitcher.vue';
import AnimeCard from '@/components/welcome/anime-card/AnimeCard.vue';
import TheSlider from '@/components/welcome/TheSlider.vue';
import PopularSlider from '@/components/welcome/PopularSlider.vue';
import { ContentType } from '@/components/welcome/content-type-switcher/types';
import { fetchLatestUpdates, fetchTopViews, fetchNewEpisodes, fetchList } from '@/views/welcome/services';
const selectedContentType = ref(ContentType.Popular);
const topViews = ref(null);
const lastUpdates = ref(null);
const newEpisodes = ref(null);
const sliderItems = ref(null);
const isLoadingSlider = ref(true);
const isLoadingContent = ref(true);
const sliderSkeletonCount = 6;
const cardSkeletonCount = 10;
const currentItems = computed(() => itemsMap[selectedContentType.value]?.value ?? []);
const fetchActions = {
    [ContentType.Popular]: async () => {
        const { data } = await fetchTopViews();
        topViews.value = data;
    },
    [ContentType.New]: async () => {
        const { data } = await fetchLatestUpdates();
        lastUpdates.value = data;
    },
    [ContentType.NewEpisodes]: async () => {
        const { data } = await fetchNewEpisodes();
        newEpisodes.value = data;
    }
};
const onContentTypeSelected = async (type) => {
    selectedContentType.value = type;
    isLoadingContent.value = true;
    await fetchActions[type]();
    isLoadingContent.value = false;
};
const fetchContentPage = async () => {
    isLoadingSlider.value = true;
    const { data } = await fetchList();
    sliderItems.value = data.popular;
    isLoadingSlider.value = false;
};
onMounted(async () => {
    await onContentTypeSelected(selectedContentType.value);
    await fetchContentPage();
});
const itemsMap = {
    [ContentType.Popular]: topViews,
    [ContentType.New]: lastUpdates,
    [ContentType.NewEpisodes]: newEpisodes
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {[typeof BaseLayout, typeof BaseLayout, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(BaseLayout, new BaseLayout({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_3 = {};
__VLS_2.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col gap-5" },
});
__VLS_asFunctionalDirective(__VLS_directives.vAutoAnimate)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "relative" },
});
if (__VLS_ctx.isLoadingSlider) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex gap-4 overflow-x-auto py-4" },
    });
    for (const [n] of __VLS_getVForSourceType((__VLS_ctx.sliderSkeletonCount))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div)({
            key: (n),
            ...{ class: "w-full h-80 bg-gray-200 rounded-2xl animate-pulse flex-shrink-0" },
        });
    }
}
else {
    /** @type {[typeof TheSlider, ]} */ ;
    // @ts-ignore
    const __VLS_4 = __VLS_asFunctionalComponent(TheSlider, new TheSlider({
        sliders: (__VLS_ctx.sliderItems),
    }));
    const __VLS_5 = __VLS_4({
        sliders: (__VLS_ctx.sliderItems),
    }, ...__VLS_functionalComponentArgsRest(__VLS_4));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "my-10" },
});
const __VLS_7 = {}.ATypographyTitle;
/** @type {[typeof __VLS_components.ATypographyTitle, typeof __VLS_components.aTypographyTitle, typeof __VLS_components.ATypographyTitle, typeof __VLS_components.aTypographyTitle, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
__VLS_10.slots.default;
var __VLS_10;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "relative" },
});
if (__VLS_ctx.isLoadingSlider) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex gap-4 overflow-x-auto py-4" },
    });
    for (const [n] of __VLS_getVForSourceType((__VLS_ctx.sliderSkeletonCount))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div)({
            key: (n),
            ...{ class: "min-w-[18rem] h-80 bg-gray-200 rounded-2xl animate-pulse flex-shrink-0" },
        });
    }
}
else {
    /** @type {[typeof PopularSlider, ]} */ ;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(PopularSlider, new PopularSlider({
        sliders: (__VLS_ctx.sliderItems),
    }));
    const __VLS_12 = __VLS_11({
        sliders: (__VLS_ctx.sliderItems),
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
}
const __VLS_14 = {}.ATypographyTitle;
/** @type {[typeof __VLS_components.ATypographyTitle, typeof __VLS_components.aTypographyTitle, typeof __VLS_components.ATypographyTitle, typeof __VLS_components.aTypographyTitle, ]} */ ;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
__VLS_17.slots.default;
var __VLS_17;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex w-full items-center justify-center mb-5" },
});
__VLS_asFunctionalDirective(__VLS_directives.vAutoAnimate)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
/** @type {[typeof ContentTypeSwitcher, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(ContentTypeSwitcher, new ContentTypeSwitcher({
    ...{ 'onChange': {} },
}));
const __VLS_19 = __VLS_18({
    ...{ 'onChange': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
let __VLS_21;
let __VLS_22;
let __VLS_23;
const __VLS_24 = {
    onChange: (__VLS_ctx.onContentTypeSelected)
};
var __VLS_20;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-stretch" },
});
__VLS_asFunctionalDirective(__VLS_directives.vAutoAnimate)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
if (__VLS_ctx.isLoadingContent) {
    for (const [n] of __VLS_getVForSourceType((__VLS_ctx.cardSkeletonCount))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div)({
            key: (n),
            ...{ class: "h-80 bg-gray-200 rounded-2xl overflow-hidden animate-pulse" },
        });
    }
}
else {
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.currentItems))) {
        /** @type {[typeof AnimeCard, ]} */ ;
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(AnimeCard, new AnimeCard({
            key: (item.id),
            item: (item),
        }));
        const __VLS_26 = __VLS_25({
            key: (item.id),
            item: (item),
        }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    }
}
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-5']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-x-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-80']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['animate-pulse']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['my-10']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-x-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['min-w-[18rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-80']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['animate-pulse']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-3']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:grid-cols-5']} */ ;
/** @type {__VLS_StyleScopedClasses['items-stretch']} */ ;
/** @type {__VLS_StyleScopedClasses['h-80']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['animate-pulse']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            BaseLayout: BaseLayout,
            ContentTypeSwitcher: ContentTypeSwitcher,
            AnimeCard: AnimeCard,
            TheSlider: TheSlider,
            PopularSlider: PopularSlider,
            sliderItems: sliderItems,
            isLoadingSlider: isLoadingSlider,
            isLoadingContent: isLoadingContent,
            sliderSkeletonCount: sliderSkeletonCount,
            cardSkeletonCount: cardSkeletonCount,
            currentItems: currentItems,
            onContentTypeSelected: onContentTypeSelected,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=TheWelcome.vue.js.map