// 初始化页面
window.onload = function() {
  // 获取DOM元素
  const provinceSelect = document.getElementById('province');
  const citySelect = document.getElementById('city');
  const seasonSelect = document.getElementById('season');
  const searchInput = document.getElementById('search');
  const gallery = document.getElementById('gallery');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const caption = document.getElementById('caption');
  const closeBtn = document.querySelector('.close');

  // 填充省份下拉菜单
  provinces.forEach(province => {
    const option = document.createElement('option');
    option.value = province;
    option.textContent = province;
    provinceSelect.appendChild(option);
  });

  // 初始化城市下拉菜单
  updateCities(provinceSelect.value);
  
  // 省份变化时更新城市下拉菜单
  provinceSelect.addEventListener('change', function() {
    updateCities(this.value);
    filterPhotos();
  });

  // 填充年份下拉菜单
  const years = [...new Set(photos.map(p => new Date(p.date).getFullYear()))].sort((a,b) => b-a);
  const yearSelect = document.getElementById('year');
  years.forEach(year => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  });

  // 填充季节下拉菜单
  updateSeasons();

  // 年份变化时更新季节下拉菜单
  yearSelect.addEventListener('change', function() {
    updateSeasons();
    filterPhotos();
  });

  // 渲染图片库
  renderGallery(photos);

  // 添加事件监听器
  provinceSelect.addEventListener('change', filterPhotos);
  citySelect.addEventListener('change', filterPhotos);
  seasonSelect.addEventListener('change', filterPhotos);
  searchInput.addEventListener('input', filterPhotos);
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // 点击模态框外部关闭
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
};

// 渲染图片库
function renderGallery(photosToRender) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  photosToRender.forEach(photo => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.description;
    img.dataset.province = photo.province;
    img.dataset.city = photo.city;
    img.dataset.date = photo.date;
    img.dataset.location = photo.location;
    img.dataset.description = photo.description;
    
    img.addEventListener('click', function() {
      const modal = document.getElementById('modal');
      const modalImg = document.getElementById('modal-img');
      const caption = document.getElementById('caption');
      
      modalImg.src = this.src;
      const date = new Date(this.dataset.date);
      const formattedDate = `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`;
      caption.innerHTML = 
        `<p>${formattedDate} ${this.dataset.province} ${this.dataset.city} ${this.dataset.location}</p>`;
      modal.style.display = 'block';
    });
    
    item.appendChild(img);
    gallery.appendChild(item);
  });
}

// 更新城市下拉菜单
function updateCities(province) {
  const citySelect = document.getElementById('city');
  citySelect.innerHTML = '<option value="">城市</option>';
  
  if (!province) return;
  
  const provinceCities = [...new Set(photos
    .filter(p => p.province === province)
    .map(p => p.city))];
    
  provinceCities.forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });
}

// 筛选图片
function getSeasonFromDate(dateStr) {
  const month = parseInt(dateStr.substring(5, 7));
  if (month >= 3 && month <= 5) return '春季';
  if (month >= 6 && month <= 8) return '夏季';
  if (month >= 9 && month <= 11) return '秋季';
  if (month === 12 || month === 1 || month === 2) return '冬季';
  return '未知季节';
}

function updateSeasons() {
  const year = document.getElementById('year').value;
  const seasonSelect = document.getElementById('season');
  seasonSelect.innerHTML = '<option value="">季节</option>';
  
  if (!year) return;
  
  const seasons = ['春季', '夏季', '秋季', '冬季'];
  seasons.forEach(season => {
    const option = document.createElement('option');
    option.value = season;
    option.textContent = season;
    seasonSelect.appendChild(option);
  });
}

function filterPhotos() {
  const year = document.getElementById('year').value;
  const province = document.getElementById('province').value;
  const city = document.getElementById('city').value;
  const season = document.getElementById('season').value;
  const searchText = document.getElementById('search').value.toLowerCase();

  const filtered = photos.filter(photo => {
    const photoYear = new Date(photo.date).getFullYear();
    return (!year || photoYear.toString() === year) &&
           (!province || photo.province === province) &&
           (!city || photo.city === city) &&
           (!season || getSeasonFromDate(photo.date) === season) &&
           (!searchText || 
            photo.location.toLowerCase().includes(searchText) || 
            photo.description.toLowerCase().includes(searchText));
  });

  renderGallery(filtered);
}