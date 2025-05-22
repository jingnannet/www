const photos = [
    {
        src: "2025/上海_20250522090348_36.jpg",
        province: "上海",
        city: "上海",
        year: "2025",
        season: "spring",
        date: "2025年3月15日"
    },
    {
        src: "2025/上海_20250522090348_37.jpg",
        province: "上海",
        city: "上海",
        year: "2025",
        season: "spring",
        date: "2025年3月16日"
    },
    {
        src: "2025/广东广州_20250522090349_41.jpg",
        province: "广东",
        city: "广州",
        year: "2025",
        season: "summer",
        date: "2025年6月20日"
    },
    {
        src: "2025/福建福州_20250522090348_38.jpg",
        province: "福建",
        city: "福州",
        year: "2025",
        season: "autumn",
        date: "2025年9月10日"
    },
    {
        src: "2025/上海_20250522090349_24.jpg",
        province: "上海",
        city: "上海",
        year: "2025",
        season: "spring",
        date: "2025年3月"
    },
    {
        src: "2025/上海_20250522090349_25.jpg",
        province: "上海",
        city: "上海",
        year: "2025",
        season: "spring",
        date: "2025年3月"
    },
    {
        src: "2025/上海_20250522090349_28.jpg",
        province: "上海",
        city: "上海",
        year: "2025",
        season: "spring",
        date: "2025年3月"
    },
    {
        src: "2025/上海_20250522090349_30.jpg",
        province: "上海",
        city: "上海",
        year: "2025",
        season: "spring",
        date: "2025年3月"
    },
    {
        src: "2025/上海_20250522090349_31.jpg",
        province: "上海",
        city: "上海",
        year: "2025",
        season: "spring",
        date: "2025年3月"
    },
    {
        src: "2025/上海_20250522090349_32.jpg",
        province: "上海",
        city: "上海",
        year: "2025",
        season: "spring",
        date: "2025年3月"
    },
    {
        src: "2025/上海_20250522090349_33.jpg",
        province: "上海",
        city: "上海",
        year: "2025",
        season: "spring",
        date: "2025年3月"
    },
    {
        src: "2025/上海_20250522090349_34.jpg",
        province: "上海",
        city: "上海",
        year: "2025",
        season: "spring",
        date: "2025年3月"
    },
    {
        src: "2025/上海_20250522090349_35.jpg",
        province: "上海",
        city: "上海",
        year: "2025",
        season: "spring",
        date: "2025年3月"
    },
    {
        src: "2025/广东广州_20250522090348_44.jpg",
        province: "广东",
        city: "广州",
        year: "2025",
        season: "summer",
        date: "2025年6月"
    },
    {
        src: "2025/广东广州_20250522090349_45.jpg",
        province: "广东",
        city: "广州",
        year: "2025",
        season: "summer",
        date: "2025年6月"
    },
    {
        src: "2025/福建福州_20250522090348_39.jpg",
        province: "福建",
        city: "福州",
        year: "2025",
        season: "autumn",
        date: "2025年9月"
    },
    {
        src: "2025/福建福州_20250522090349_26.jpg",
        province: "福建",
        city: "福州",
        year: "2025",
        season: "autumn",
        date: "2025年9月"
    },
    {
        src: "2025/福建福州_20250522090349_27.jpg",
        province: "福建",
        city: "福州",
        year: "2025",
        season: "autumn",
        date: "2025年9月"
    },
    {
        src: "2025/福建福州_20250522090349_29.jpg",
        province: "福建",
        city: "福州",
        year: "2025",
        season: "autumn",
        date: "2025年9月"
    },
    {
        src: "2025/福建福州_20250522090349_40.jpg",
        province: "福建",
        city: "福州",
        year: "2025",
        season: "autumn",
        date: "2025年9月"
    },
    {
        src: "2025/福建福州_20250522090349_42.jpg",
        province: "福建",
        city: "福州",
        year: "2025",
        season: "autumn",
        date: "2025年9月"
    },
    {
        src: "2025/福建福州_20250522090349_43.jpg",
        province: "福建",
        city: "福州",
        year: "2025",
        season: "autumn",
        date: "2025年9月"
    },
];

const provinces = [...new Set(photos.map(p => p.province))];
const cities = [...new Set(photos.map(p => p.city))];
const years = [...new Set(photos.map(p => p.year))];

// 导出数据
window.photoData = {
    photos,
    provinces,
    cities,
    years
};