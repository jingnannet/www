const photos = [
  {
    src: "photos/20230715浙江杭州龙井村.jpg",
    province: "浙江",
    city: "杭州",
    location: "龙井村",
    date: "2023-07-15",
    description: "杭州龙井村茶园风光"
  },
  {
    src: "photos/20231016浙江杭州宝石山西湖苏堤.jpg",
    province: "浙江",
    city: "杭州",
    location: "宝石山、西湖苏堤",
    date: "2023-10-16",
    description: "从宝石山俯瞰西湖苏堤"
  },
  {
    src: "photos/20231016浙江杭州西湖城隍阁.jpg",
    province: "浙江",
    city: "杭州",
    location: "西湖城隍阁",
    date: "2023-10-16",
    description: "西湖城隍阁夜景"
  },
  {
    src: "photos/20240519浙江杭州西湖.jpg",
    province: "浙江",
    city: "杭州",
    location: "西湖",
    date: "2024-05-19",
    description: "西湖春色"
  },
  {
    src: "photos/20241026浙江杭州十里锒铛.jpg",
    province: "浙江",
    city: "杭州",
    location: "十里锒铛",
    date: "2024-10-26",
    description: "十里锒铛古道徒步"
  },
  {
    src: "photos/20241107江苏南京紫金山玄武湖.jpg",
    province: "江苏",
    city: "南京",
    location: "紫金山、玄武湖",
    date: "2024-11-07",
    description: "紫金山俯瞰玄武湖全景"
  },
  {
    src: "photos/20241121江苏苏州吴中十峰.jpg",
    province: "江苏",
    city: "苏州",
    location: "吴中十峰",
    date: "2024-11-21",
    description: "吴中十峰徒步路线"
  },
  {
    src: "photos/20241208江苏镇江南山.jpg",
    province: "江苏",
    city: "镇江",
    location: "南山",
    date: "2024-12-08",
    description: "镇江南山秋色"
  }
];

const provinces = [...new Set(photos.map(p => p.province))];
const cities = [...new Set(photos.map(p => p.city))];
const dates = [...new Set(photos.map(p => p.date.substring(0,7)))];