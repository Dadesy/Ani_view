import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { fetchAnime, fetchEpisodes, fetchDetailEpisode, fetchRelations, fetchSimilar } from '@/views/anime/services/index.js';
import BaseLayout from '@/layout/BaseLayout.vue';
const route = useRoute();
const slug = String(route.params.slug_url);
const anime = ref(null);
const isLoadingAnime = ref(false);
const episodes = ref([]);
const selectedEpisodeId = ref(null);
const isLoadingEpisodes = ref(false);
const episodeDetail = ref(null);
const selectedPlayerId = ref(null);
const isLoadingDetail = ref(false);
const relations = ref(null);
const similars = ref(null);
const errorMessage = ref(null);
async function loadAnime() {
    isLoadingAnime.value = true;
    try {
        const resp = await fetchAnime(slug);
        anime.value = resp.data;
    }
    catch {
        errorMessage.value = 'Не удалось загрузить данные аниме.';
    }
    finally {
        isLoadingAnime.value = false;
    }
}
async function loadRelations() {
    try {
        const resp = await fetchRelations(slug);
        relations.value = resp.data;
    }
    catch {
        errorMessage.value = 'Не удалось загрузить список эпизодов.';
    }
    finally {
    }
}
async function loadSimilars() {
    try {
        const resp = await fetchSimilar(slug);
        similars.value = resp.data;
    }
    catch {
        errorMessage.value = 'Не удалось загрузить список похожих аниме.';
    }
}
async function loadEpisodes() {
    isLoadingEpisodes.value = true;
    try {
        const resp = await fetchEpisodes(slug);
        episodes.value = resp.data;
        selectedEpisodeId.value = resp.data[0]?.id ?? null;
    }
    catch {
        errorMessage.value = 'Не удалось загрузить список эпизодов.';
    }
    finally {
        isLoadingEpisodes.value = false;
    }
}
async function loadEpisodeDetail(id) {
    isLoadingDetail.value = true;
    try {
        const resp = await fetchDetailEpisode(id);
        episodeDetail.value = resp.data;
        selectedPlayerId.value = resp.data.players[0]?.id ?? null;
    }
    catch {
        errorMessage.value = 'Не удалось загрузить детали эпизода.';
    }
    finally {
        isLoadingDetail.value = false;
    }
}
function selectEpisode(id) {
    selectedEpisodeId.value = id;
}
function selectPlayer(id) {
    selectedPlayerId.value = id;
}
onMounted(async () => {
    await loadAnime();
    await loadEpisodes();
    await loadRelations();
    await loadSimilars();
});
watch(selectedEpisodeId, (id) => {
    if (id == null) {
        episodeDetail.value = null;
        selectedPlayerId.value = null;
        return;
    }
    loadEpisodeDetail(id);
}, { immediate: true });
const currentSrc = computed(() => {
    console.log('episodeDetail.value', episodeDetail.value);
    const pl = episodeDetail.value?.players.find((p) => p.id === selectedPlayerId.value);
    if (!pl)
        return '';
    return pl.src.startsWith('//') ? `https:${pl.src}` : pl.src;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
/** @type {[typeof BaseLayout, typeof BaseLayout, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(BaseLayout, new BaseLayout({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_3 = {};
__VLS_2.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col gap-4" },
});
if (__VLS_ctx.errorMessage) {
    const __VLS_4 = {}.AAlert;
    /** @type {[typeof __VLS_components.AAlert, typeof __VLS_components.aAlert, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        type: "error",
        showIcon: true,
        message: (__VLS_ctx.errorMessage),
    }));
    const __VLS_6 = __VLS_5({
        type: "error",
        showIcon: true,
        message: (__VLS_ctx.errorMessage),
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
}
const __VLS_8 = {}.ASkeleton;
/** @type {[typeof __VLS_components.ASkeleton, typeof __VLS_components.aSkeleton, typeof __VLS_components.ASkeleton, typeof __VLS_components.aSkeleton, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    loading: (__VLS_ctx.isLoadingAnime),
    active: true,
    paragraph: true,
    title: (false),
}));
const __VLS_10 = __VLS_9({
    loading: (__VLS_ctx.isLoadingAnime),
    active: true,
    paragraph: true,
    title: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "relative w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden rounded-2xl" },
});
if (__VLS_ctx.anime?.background?.url) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "absolute inset-0 rounded-2xl" },
        ...{ style: ({
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0)), url(${__VLS_ctx.anime.background.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }) },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "relative h-full flex items-center px-6 md:px-12" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-white max-w-3xl space-y-3" },
});
const __VLS_12 = {}.ATypographyTitle;
/** @type {[typeof __VLS_components.ATypographyTitle, typeof __VLS_components.aTypographyTitle, typeof __VLS_components.ATypographyTitle, typeof __VLS_components.aTypographyTitle, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    level: "2",
    ...{ class: "!text-white text-3xl md:text-4xl" },
}));
const __VLS_14 = __VLS_13({
    level: "2",
    ...{ class: "!text-white text-3xl md:text-4xl" },
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
(__VLS_ctx.anime?.rus_name || __VLS_ctx.anime?.name);
var __VLS_15;
const __VLS_16 = {}.ATypographyParagraph;
/** @type {[typeof __VLS_components.ATypographyParagraph, typeof __VLS_components.aTypographyParagraph, typeof __VLS_components.ATypographyParagraph, typeof __VLS_components.aTypographyParagraph, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    ...{ class: "text-sm md:text-base text-gray-200" },
}));
const __VLS_18 = __VLS_17({
    ...{ class: "text-sm md:text-base text-gray-200" },
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
(__VLS_ctx.anime?.summary);
var __VLS_19;
var __VLS_11;
const __VLS_20 = {}.ATypographyTitle;
/** @type {[typeof __VLS_components.ATypographyTitle, typeof __VLS_components.aTypographyTitle, typeof __VLS_components.ATypographyTitle, typeof __VLS_components.aTypographyTitle, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    level: "4",
    ...{ class: "" },
}));
const __VLS_22 = __VLS_21({
    level: "4",
    ...{ class: "" },
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_23.slots.default;
(__VLS_ctx.episodeDetail?.number);
var __VLS_23;
if (__VLS_ctx.episodeDetail?.players) {
    const __VLS_24 = {}.ASelect;
    /** @type {[typeof __VLS_components.ASelect, typeof __VLS_components.aSelect, typeof __VLS_components.ASelect, typeof __VLS_components.aSelect, ]} */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
        ...{ 'onChange': {} },
        ...{ class: "w-[200px]" },
        value: (__VLS_ctx.selectedPlayerId),
        placeholder: "Выберите плеер",
    }));
    const __VLS_26 = __VLS_25({
        ...{ 'onChange': {} },
        ...{ class: "w-[200px]" },
        value: (__VLS_ctx.selectedPlayerId),
        placeholder: "Выберите плеер",
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    let __VLS_28;
    let __VLS_29;
    let __VLS_30;
    const __VLS_31 = {
        onChange: (__VLS_ctx.selectPlayer)
    };
    __VLS_27.slots.default;
    for (const [p] of __VLS_getVForSourceType((__VLS_ctx.episodeDetail.players))) {
        const __VLS_32 = {}.ASelectOption;
        /** @type {[typeof __VLS_components.ASelectOption, typeof __VLS_components.aSelectOption, typeof __VLS_components.ASelectOption, typeof __VLS_components.aSelectOption, ]} */ ;
        // @ts-ignore
        const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
            key: (p.id),
            value: (p.id),
        }));
        const __VLS_34 = __VLS_33({
            key: (p.id),
            value: (p.id),
        }, ...__VLS_functionalComponentArgsRest(__VLS_33));
        __VLS_35.slots.default;
        (p.team.name);
        (p.translation_type.label);
        var __VLS_35;
    }
    var __VLS_27;
}
const __VLS_36 = {}.ARow;
/** @type {[typeof __VLS_components.ARow, typeof __VLS_components.aRow, typeof __VLS_components.ARow, typeof __VLS_components.aRow, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    gutter: (16),
}));
const __VLS_38 = __VLS_37({
    gutter: (16),
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
__VLS_39.slots.default;
const __VLS_40 = {}.ACol;
/** @type {[typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    xs: (24),
    lg: (16),
}));
const __VLS_42 = __VLS_41({
    xs: (24),
    lg: (16),
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_43.slots.default;
const __VLS_44 = {}.ASkeleton;
/** @type {[typeof __VLS_components.ASkeleton, typeof __VLS_components.aSkeleton, typeof __VLS_components.ASkeleton, typeof __VLS_components.aSkeleton, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    loading: (__VLS_ctx.isLoadingDetail),
    active: true,
}));
const __VLS_46 = __VLS_45({
    loading: (__VLS_ctx.isLoadingDetail),
    active: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
__VLS_47.slots.default;
if (__VLS_ctx.episodeDetail) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    if (__VLS_ctx.currentSrc) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "relative w-full h-[500px]" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.iframe)({
            src: (__VLS_ctx.currentSrc),
            frameborder: "0",
            allowfullscreen: true,
            ...{ class: "absolute inset-0 w-full h-full rounded-lg shadow-md" },
        });
    }
}
var __VLS_47;
var __VLS_43;
const __VLS_48 = {}.ACol;
/** @type {[typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    xs: (24),
    lg: (8),
}));
const __VLS_50 = __VLS_49({
    xs: (24),
    lg: (8),
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
__VLS_51.slots.default;
const __VLS_52 = {}.ASkeleton;
/** @type {[typeof __VLS_components.ASkeleton, typeof __VLS_components.aSkeleton, typeof __VLS_components.ASkeleton, typeof __VLS_components.aSkeleton, ]} */ ;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    loading: (__VLS_ctx.isLoadingEpisodes),
    active: true,
    paragraph: "{ rows: 8 }",
    title: "{ width: '60%' }",
}));
const __VLS_54 = __VLS_53({
    loading: (__VLS_ctx.isLoadingEpisodes),
    active: true,
    paragraph: "{ rows: 8 }",
    title: "{ width: '60%' }",
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
__VLS_55.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "h-[500px] overflow-auto" },
});
const __VLS_56 = {}.AList;
/** @type {[typeof __VLS_components.AList, typeof __VLS_components.aList, typeof __VLS_components.AList, typeof __VLS_components.aList, ]} */ ;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    bordered: true,
    ...{ class: "h-full overflow-auto" },
    ...{ style: ({ padding: '10px' }) },
    dataSource: (__VLS_ctx.episodes),
}));
const __VLS_58 = __VLS_57({
    bordered: true,
    ...{ class: "h-full overflow-auto" },
    ...{ style: ({ padding: '10px' }) },
    dataSource: (__VLS_ctx.episodes),
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
__VLS_59.slots.default;
{
    const { renderItem: __VLS_thisSlot } = __VLS_59.slots;
    const [{ item }] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_60 = {}.AListItem;
    /** @type {[typeof __VLS_components.AListItem, typeof __VLS_components.aListItem, typeof __VLS_components.AListItem, typeof __VLS_components.aListItem, ]} */ ;
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
        ...{ 'onClick': {} },
        ...{ class: "group transition-all duration-200 ease-in-out cursor-pointer px-4 py-3 rounded-xl hover:bg-gray-500/50 dark:hover:bg-gray-700" },
        ...{ class: ([
                'cursor-pointer py-2',
                item.id === __VLS_ctx.selectedEpisodeId ? 'bg-gray-400' : ''
            ]) },
    }));
    const __VLS_62 = __VLS_61({
        ...{ 'onClick': {} },
        ...{ class: "group transition-all duration-200 ease-in-out cursor-pointer px-4 py-3 rounded-xl hover:bg-gray-500/50 dark:hover:bg-gray-700" },
        ...{ class: ([
                'cursor-pointer py-2',
                item.id === __VLS_ctx.selectedEpisodeId ? 'bg-gray-400' : ''
            ]) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    let __VLS_64;
    let __VLS_65;
    let __VLS_66;
    const __VLS_67 = {
        onClick: (...[$event]) => {
            __VLS_ctx.selectEpisode(item.id);
        }
    };
    __VLS_63.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex items-center gap-4" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        ...{ class: "w-20 h-20 object-cover rounded-xl shadow-sm" },
        src: (__VLS_ctx.anime?.cover?.default),
        alt: "Обложка серии",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex flex-col justify-center" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "font-semibold text-base" },
    });
    (item.number);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "text-sm" },
    });
    var __VLS_63;
}
var __VLS_59;
var __VLS_55;
var __VLS_51;
var __VLS_39;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "my-10" },
});
const __VLS_68 = {}.ATypographyTitle;
/** @type {[typeof __VLS_components.ATypographyTitle, typeof __VLS_components.aTypographyTitle, typeof __VLS_components.ATypographyTitle, typeof __VLS_components.aTypographyTitle, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({}));
const __VLS_70 = __VLS_69({}, ...__VLS_functionalComponentArgsRest(__VLS_69));
__VLS_71.slots.default;
var __VLS_71;
const __VLS_72 = {}.ACarousel;
/** @type {[typeof __VLS_components.ACarousel, typeof __VLS_components.aCarousel, typeof __VLS_components.ACarousel, typeof __VLS_components.aCarousel, ]} */ ;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
    dots: (false),
    autoplay: (false),
    slidesToShow: (10),
    slidesToScroll: (1),
    responsive: ([
        { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } }
    ]),
}));
const __VLS_74 = __VLS_73({
    dots: (false),
    autoplay: (false),
    slidesToShow: (10),
    slidesToScroll: (1),
    responsive: ([
        { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } }
    ]),
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
__VLS_75.slots.default;
for (const [relation] of __VLS_getVForSourceType((__VLS_ctx.relations))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (relation.media.id),
        ...{ class: "px-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex flex-col items-center gap-2 group" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (relation.media.cover.default),
        alt: "",
        ...{ class: "object-cover rounded-2xl w-32 h-40 transition-transform duration-300 ease-out group-hover:scale-105 shadow" },
    });
    const __VLS_76 = {}.ATypographyText;
    /** @type {[typeof __VLS_components.ATypographyText, typeof __VLS_components.aTypographyText, typeof __VLS_components.ATypographyText, typeof __VLS_components.aTypographyText, ]} */ ;
    // @ts-ignore
    const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
        ...{ class: "truncate text-center max-w-[8rem]" },
    }));
    const __VLS_78 = __VLS_77({
        ...{ class: "truncate text-center max-w-[8rem]" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_77));
    __VLS_79.slots.default;
    (relation.media.rus_name);
    var __VLS_79;
}
var __VLS_75;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "my-10" },
});
const __VLS_80 = {}.ATypographyTitle;
/** @type {[typeof __VLS_components.ATypographyTitle, typeof __VLS_components.aTypographyTitle, typeof __VLS_components.ATypographyTitle, typeof __VLS_components.aTypographyTitle, ]} */ ;
// @ts-ignore
const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({}));
const __VLS_82 = __VLS_81({}, ...__VLS_functionalComponentArgsRest(__VLS_81));
__VLS_83.slots.default;
var __VLS_83;
const __VLS_84 = {}.ACarousel;
/** @type {[typeof __VLS_components.ACarousel, typeof __VLS_components.aCarousel, typeof __VLS_components.ACarousel, typeof __VLS_components.aCarousel, ]} */ ;
// @ts-ignore
const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
    dots: (false),
    autoplay: (false),
    slidesToShow: (10),
    slidesToScroll: (1),
}));
const __VLS_86 = __VLS_85({
    dots: (false),
    autoplay: (false),
    slidesToShow: (10),
    slidesToScroll: (1),
}, ...__VLS_functionalComponentArgsRest(__VLS_85));
__VLS_87.slots.default;
for (const [similar] of __VLS_getVForSourceType((__VLS_ctx.similars))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (similar.id),
        ...{ class: "px-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex flex-col items-center gap-2 group" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (similar.media.cover.default),
        alt: "",
        ...{ class: "object-cover rounded-2xl w-32 h-40 transition-transform duration-300 ease-out group-hover:scale-105 shadow" },
    });
    const __VLS_88 = {}.ATypographyText;
    /** @type {[typeof __VLS_components.ATypographyText, typeof __VLS_components.aTypographyText, typeof __VLS_components.ATypographyText, typeof __VLS_components.aTypographyText, ]} */ ;
    // @ts-ignore
    const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({
        ...{ class: "truncate text-center max-w-[8rem]" },
    }));
    const __VLS_90 = __VLS_89({
        ...{ class: "truncate text-center max-w-[8rem]" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_89));
    __VLS_91.slots.default;
    (similar.media.rus_name);
    var __VLS_91;
}
var __VLS_87;
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[180px]']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:h-[220px]']} */ ;
/** @type {__VLS_StyleScopedClasses['md:h-[260px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:h-[300px]']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['md:px-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
/** @type {__VLS_StyleScopedClasses['!text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[200px]']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[500px]']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-md']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[500px]']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-in-out']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-500/50']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:hover:bg-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-20']} */ ;
/** @type {__VLS_StyleScopedClasses['h-20']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['my-10']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['w-32']} */ ;
/** @type {__VLS_StyleScopedClasses['h-40']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-out']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:scale-105']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['truncate']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-[8rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['my-10']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['w-32']} */ ;
/** @type {__VLS_StyleScopedClasses['h-40']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-out']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:scale-105']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['truncate']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-[8rem]']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            BaseLayout: BaseLayout,
            anime: anime,
            isLoadingAnime: isLoadingAnime,
            episodes: episodes,
            selectedEpisodeId: selectedEpisodeId,
            isLoadingEpisodes: isLoadingEpisodes,
            episodeDetail: episodeDetail,
            selectedPlayerId: selectedPlayerId,
            isLoadingDetail: isLoadingDetail,
            relations: relations,
            similars: similars,
            errorMessage: errorMessage,
            selectEpisode: selectEpisode,
            selectPlayer: selectPlayer,
            currentSrc: currentSrc,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=TheDetail.vue.js.map