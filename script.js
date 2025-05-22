document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const modal = document.querySelector('.modal');
    const modalImg = document.getElementById('modal-image');
    const caption = document.querySelector('.caption');
    const closeBtn = document.querySelector('.close');
    
    // 初始化下拉菜单
    const provinceSelect = document.getElementById('province');
    const citySelect = document.getElementById('city');
    const yearSelect = document.getElementById('year');
    const seasonSelect = document.getElementById('season');
    const searchInput = document.getElementById('search');
    
    // 填充下拉菜单选项
    window.photoData.provinces.forEach(province => {
        const option = document.createElement('option');
        option.value = province;
        option.textContent = province;
        provinceSelect.appendChild(option);
    });
    
    window.photoData.cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
    
    window.photoData.years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    });
    
    // 渲染图片
    function renderPhotos(photos) {
        gallery.innerHTML = '';
        photos.forEach(photo => {
            const imgContainer = document.createElement('div');
            const img = document.createElement('img');
            img.src = photo.src;
            img.alt = `${photo.date} ${photo.province} ${photo.city}`;
        img.dataset.date = photo.date;
        img.dataset.province = photo.province;
        img.dataset.city = photo.city;
            img.addEventListener('click', openModal);
            imgContainer.appendChild(img);
            gallery.appendChild(imgContainer);
        });
    }
    
    // 筛选图片
    function filterPhotos() {
        const province = provinceSelect.value;
        const city = citySelect.value;
        const year = yearSelect.value;
        const season = seasonSelect.value;
        const searchTerm = searchInput.value.toLowerCase();
        
        let filtered = window.photoData.photos;
        
        if (province) filtered = filtered.filter(p => p.province === province);
        if (city) filtered = filtered.filter(p => p.city === city);
        if (year) filtered = filtered.filter(p => p.year === year);
        if (season) filtered = filtered.filter(p => p.season === season);
        if (searchTerm) {
            filtered = filtered.filter(p => 
                p.province.toLowerCase().includes(searchTerm) || 
                p.city.toLowerCase().includes(searchTerm) || 
                p.date.toLowerCase().includes(searchTerm)
            );
        }
        
        renderPhotos(filtered);
    }
    
    // 打开大图模态框
    function openModal(e) {
        modal.style.display = 'block';
        modalImg.src = e.target.src;
        caption.textContent = `${e.target.dataset.date} ${e.target.dataset.province} ${e.target.dataset.city}`;
    }
    
    // 关闭模态框
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // 监听筛选条件变化
    provinceSelect.addEventListener('change', filterPhotos);
    citySelect.addEventListener('change', filterPhotos);
    yearSelect.addEventListener('change', filterPhotos);
    seasonSelect.addEventListener('change', filterPhotos);
    searchInput.addEventListener('input', filterPhotos);
    
    // 随机选择12张图片
    function getRandomPhotos(photos, count) {
        const shuffled = [...photos].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    
    // 初始渲染
    renderPhotos(getRandomPhotos(window.photoData.photos, 12));
});