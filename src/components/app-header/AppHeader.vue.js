import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();
const optionsList = ref([]);
const selectedItem = ref(null);
const isSearching = ref(false);
let searchTimeout;
function onSearch(value) {
    clearTimeout(searchTimeout);
    optionsList.value = [];
    if (!value) {
        isSearching.value = false;
        return;
    }
    isSearching.value = true;
    searchTimeout = window.setTimeout(async () => {
        try {
            const resp = await axios.get('https://api.cdnlibs.org/api/anime', {
                params: {
                    q: value,
                    'fields[]': ['rate_avg', 'rate', 'releaseDate']
                }
            });
            optionsList.value = resp.data.data;
        }
        catch (e) {
            console.error('Ошибка поиска аниме:', e);
        }
        finally {
            isSearching.value = false;
        }
    }, 500);
}
async function onSelect(item) {
    await router.push({ name: 'animeDetail', params: { slug_url: item.slug_url } });
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.ALayoutHeader;
/** @type {[typeof __VLS_components.ALayoutHeader, typeof __VLS_components.aLayoutHeader, typeof __VLS_components.ALayoutHeader, typeof __VLS_components.aLayoutHeader, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "h-16 flex items-center px-4 justify-between" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "h-16 flex items-center px-4 justify-between" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    to: "/",
    ...{ class: "text-2xl font-semibold text-white" },
}));
const __VLS_7 = __VLS_6({
    to: "/",
    ...{ class: "text-2xl font-semibold text-white" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
var __VLS_8;
const __VLS_9 = {}.ASelect;
/** @type {[typeof __VLS_components.ASelect, typeof __VLS_components.aSelect, typeof __VLS_components.ASelect, typeof __VLS_components.aSelect, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    ...{ 'onSearch': {} },
    ...{ 'onSelect': {} },
    value: (__VLS_ctx.selectedItem),
    showSearch: true,
    allowClear: true,
    placeholder: "Поиск...",
    ...{ class: "mx-auto w-96 focus:w-80 transition-all duration-300" },
    filterOption: (false),
    loading: (__VLS_ctx.isSearching),
}));
const __VLS_11 = __VLS_10({
    ...{ 'onSearch': {} },
    ...{ 'onSelect': {} },
    value: (__VLS_ctx.selectedItem),
    showSearch: true,
    allowClear: true,
    placeholder: "Поиск...",
    ...{ class: "mx-auto w-96 focus:w-80 transition-all duration-300" },
    filterOption: (false),
    loading: (__VLS_ctx.isSearching),
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
let __VLS_13;
let __VLS_14;
let __VLS_15;
const __VLS_16 = {
    onSearch: (__VLS_ctx.onSearch)
};
const __VLS_17 = {
    onSelect: (__VLS_ctx.onSelect)
};
__VLS_12.slots.default;
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.optionsList))) {
    const __VLS_18 = {}.ASelectOption;
    /** @type {[typeof __VLS_components.ASelectOption, typeof __VLS_components.aSelectOption, typeof __VLS_components.ASelectOption, typeof __VLS_components.aSelectOption, ]} */ ;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
        key: (item.id),
        value: (item),
    }));
    const __VLS_20 = __VLS_19({
        key: (item.id),
        value: (item),
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_21.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex items-center gap-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (item.cover.thumbnail),
        alt: "обложка",
        ...{ class: "w-8 h-8 rounded" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (item.rus_name);
    var __VLS_21;
}
var __VLS_12;
const __VLS_22 = {}.AAvatar;
/** @type {[typeof __VLS_components.AAvatar, typeof __VLS_components.aAvatar, ]} */ ;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({
    icon: "user",
    ...{ class: "ml-4 text-white/80" },
}));
const __VLS_24 = __VLS_23({
    icon: "user",
    ...{ class: "ml-4 text-white/80" },
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['h-16']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['w-96']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:w-80']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-8']} */ ;
/** @type {__VLS_StyleScopedClasses['h-8']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white/80']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            optionsList: optionsList,
            selectedItem: selectedItem,
            isSearching: isSearching,
            onSearch: onSearch,
            onSelect: onSelect,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=AppHeader.vue.js.map