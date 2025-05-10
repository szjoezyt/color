// --- Data Structure ---
const categories = [
    {
        id: "bz",
        name: "BZ-standard color\n9*1220*2440mm",
        color: "#A0A0A0", // Neutral Grey
        swatches: [
            { id: "bz01", name: "BZ-01", image: "images/BZ-01.jpg" },
            { id: "bz02", name: "BZ-02", image: "images/BZ-02.jpg" },
            { id: "bz03", name: "BZ-03", image: "images/BZ-03.jpg" },
            { id: "bz04", name: "BZ-04", image: "images/BZ-04.jpg" },
            { id: "bz05", name: "BZ-05", image: "images/BZ-05.jpg" },
            { id: "bz06", name: "BZ-06", image: "images/BZ-06.jpg" },
            { id: "bz07", name: "BZ-07", image: "images/BZ-07.jpg" },
            { id: "bz08", name: "BZ-08", image: "images/BZ-08.jpg" },
            { id: "bz09", name: "BZ-09", image: "images/BZ-09.jpg" },
            { id: "bz10", name: "BZ-10", image: "images/BZ-10.jpg" },
            { id: "bz11", name: "BZ-11", image: "images/BZ-11.jpg" },
            { id: "bz12", name: "BZ-12", image: "images/BZ-12.jpg" },
            { id: "bz13", name: "BZ-13", image: "images/BZ-13.jpg" },
            { id: "bz14", name: "BZ-14", image: "images/BZ-14.jpg" },
            { id: "bz16", name: "BZ-16", image: "images/BZ-16.jpg" },
            { id: "bz17", name: "BZ-17", image: "images/BZ-17.jpg" },
            { id: "bz19", name: "BZ-19", image: "images/BZ-19.jpg" },
            { id: "bz21", name: "BZ-21", image: "images/BZ-21.jpg" },
            { id: "bz24", name: "BZ-24", image: "images/BZ-24.jpg" },
            { id: "bz25", name: "BZ-25", image: "images/BZ-25.jpg" },
            { id: "bz28", name: "BZ-28", image: "images/BZ-28.jpg" },
            { id: "bz29", name: "BZ-29", image: "images/BZ-29.png" },
            { id: "bz30", name: "BZ-30", image: "images/BZ-30.png" },
            { id: "bz31", name: "BZ-31", image: "images/BZ-31.jpg" },
            { id: "bz32", name: "BZ-32", image: "images/BZ-32.jpg" },
            { id: "bz34", name: "BZ-34", image: "images/BZ-34.jpg" },
            { id: "bz35", name: "BZ-35", image: "images/BZ-35.jpg" },
            { id: "bz36", name: "BZ-36", image: "images/BZ-36.jpg" },
            { id: "bz37", name: "BZ-37", image: "images/BZ-37.jpg" },
            { id: "bz38", name: "BZ-38", image: "images/BZ-38.png" },
            { id: "bz39", name: "BZ-39", image: "images/BZ-39.jpg" },
            { id: "bz41", name: "BZ-41", image: "images/BZ-41.jpg" },
            { id: "bz43", name: "BZ-43", image: "images/BZ-43.jpg" },
            { id: "bz44", name: "BZ-44", image: "images/BZ-44.jpg" },
            { id: "bz46", name: "BZ-46", image: "images/BZ-46.jpg" },
            { id: "bz47", name: "BZ-47", image: "images/BZ-47.jpg" },
            { id: "bz48", name: "BZ-48", image: "images/BZ-48.jpg" },
            { id: "bz49", name: "BZ-49", image: "images/BZ-49.jpg" },
            { id: "bz50", name: "BZ-50", image: "images/BZ-50.jpg" },
            { id: "bz51", name: "BZ-51", image: "images/BZ-51.jpg" }
        ]
    },
    {
        id: "cbz",
        name: "CBZ-pure color\n8*1220*2440mm",
        color: "#B8A99A", // Muted Brown/Beige
        swatches: [
            { id: "cbz01", name: "CBZ01", image: "images/CBZ01.jpg" },
            { id: "cbz015", name: "CBZ15", image: "images/CBZ15.jpg" },
            { id: "cbz02", name: "CBZ02", image: "images/CBZ02.jpg" },
            { id: "cbz03", name: "CBZ03", image: "images/CBZ03.jpg" },
            { id: "cbz04", name: "CBZ04", image: "images/CBZ04.jpg" },
            { id: "cbz05", name: "CBZ05", image: "images/CBZ05.jpg" },
            { id: "cbz06", name: "CBZ06", image: "images/CBZ06.jpg" },
            { id: "cbz07", name: "CBZ07", image: "images/CBZ07.jpg" },
            { id: "cbz08", name: "CBZ08", image: "images/CBZ08.jpg" },
            { id: "cbz10", name: "CBZ10", image: "images/CBZ10.jpg" },
            { id: "cbz11", name: "CBZ11", image: "images/CBZ11.jpg" },
            { id: "cbz12", name: "CBZ12", image: "images/CBZ12.jpg" },
            { id: "cbz13", name: "CBZ13", image: "images/CBZ13.jpg" },
            { id: "cbz14", name: "CBZ14", image: "images/CBZ14.jpg" },
            { id: "cbz16", name: "CBZ16", image: "images/CBZ16.jpg" },
            { id: "cbz17", name: "CBZ17", image: "images/CBZ17.jpg" }
        ]
    },
    {
        id: "s19",
        name: "19-color\n12*1225*2800mm",
        color: "#C5D5E2", // Light Blue-Grey
        swatches: [
            { id: "s1901", name: "1901", image: "images/1901.jpg" },
            { id: "s1902", name: "1902", image: "images/1902.png" },
            { id: "s1903", name: "1903", image: "images/1903.jpg" },
            { id: "s1904", name: "1904", image: "images/1904.jpg" },
            { id: "s1906", name: "1906", image: "images/1906.jpg" },
            { id: "s1907", name: "1907", image: "images/1907.jpg" },
            { id: "s1908", name: "1908", image: "images/1908.jpg" },
            { id: "s1909", name: "1909", image: "images/1909.jpg" },
            { id: "s1910", name: "1910", image: "images/1910.jpg" },
            { id: "s1911", name: "1911", image: "images/1911.jpg" },
            { id: "s1912", name: "1912", image: "images/1912.jpg" },
            { id: "s1913", name: "1913", image: "images/1913.jpg" },
            { id: "s1914", name: "1914", image: "images/1914.jpg" },
            { id: "s1915", name: "1915", image: "images/1915.jpg" },
            { id: "s1916", name: "1916", image: "images/1916.jpg" },
            { id: "s1917", name: "1917", image: "images/1917.jpg" },
            { id: "s1918", name: "1918", image: "images/1918.jpg" },
            { id: "s1919", name: "1919", image: "images/1919.jpg" },
            { id: "s1920", name: "1920", image: "images/1920.png" },
            { id: "s1921", name: "1921", image: "images/1921.jpg" }
        ]
    },
    {
        id: "s21",
        name: "21-color\n12*1225*2800mm",
        color: "#D1C4B0", // Light Tan
        swatches: [
            { id: "s2101", name: "2101", image: "images/2101.jpg" },
            { id: "s2102", name: "2102", image: "images/2102.jpg" },
            { id: "s2103", name: "2103", image: "images/2103.jpg" },
            { id: "s2104", name: "2104", image: "images/2104.jpg" },
            { id: "s2105", name: "2105", image: "images/2105.jpg" },
            { id: "s2106", name: "2106", image: "images/2106.jpg" },
            { id: "s2107", name: "2107", image: "images/2107.jpg" },
            { id: "s2108", name: "2108", image: "images/2108.jpg" },
            { id: "s2109", name: "2109", image: "images/2109.jpg" },
            { id: "s2110", name: "2110", image: "images/2110.jpg" },
            { id: "s2111", name: "2111", image: "images/2111.jpg" },
            { id: "s2112", name: "2112", image: "images/2112.jpg" },
            { id: "s2113", name: "2113", image: "images/2113.jpg" },
            { id: "s2114", name: "2114", image: "images/2114.jpg" },
            { id: "s2116", name: "2116", image: "images/2116.jpg" },
            { id: "s2117", name: "2117", image: "images/2117.jpg" },
            { id: "s2118", name: "2118", image: "images/2118.jpg" },
            { id: "s2119", name: "2119", image: "images/2119.jpg" },
            { id: "s2120", name: "2120", image: "images/2120.jpg" },
            { id: "s2121", name: "2121", image: "images/2121.jpg" },
            { id: "s2122", name: "2122", image: "images/2122.jpg" },
            { id: "s2123", name: "2123", image: "images/2123.jpg" },
            { id: "s2124", name: "2124", image: "images/2124.jpg" },
            { id: "s2125", name: "2125", image: "images/2125.jpg" },
            { id: "s2126", name: "2126", image: "images/2126.jpg" },
            { id: "s2127", name: "2127", image: "images/2127.jpg" },
            { id: "s2128", name: "2128", image: "images/2128.jpg" },
            { id: "s2129", name: "2129", image: "images/2129.jpg" },
            { id: "s2130", name: "2130", image: "images/2130.jpg" },
            { id: "s2131", name: "2131", image: "images/2131.jpg" },
            { id: "s2132", name: "2132", image: "images/2132.jpg" }
        ]
    },
    {
        id: "s24",
        name: "24-color\n12*1225*2800mm",
        color: "#8A9A8F", // Muted Green-Grey
        swatches: [
            { id: "s2401", name: "2401", image: "images/2401.png" },
            { id: "s2402", name: "2402", image: "images/2402.png" },
            { id: "s2403", name: "2403", image: "images/2403.png" },
            { id: "s2404", name: "2404", image: "images/2404.png" },
            { id: "s2405", name: "2405", image: "images/2405.png" },
            { id: "s2406", name: "2406", image: "images/2406.png" },
            { id: "s2407", name: "2407", image: "images/2407.png" },
            { id: "s2408", name: "2408", image: "images/2408.png" },
            { id: "s2409", name: "2409", image: "images/2409.png" },
            { id: "s2410", name: "2410", image: "images/2410.png" },
            { id: "s2411", name: "2411", image: "images/2411.png" },
            { id: "s2412", name: "2412", image: "images/2412.png" },
            { id: "s2413", name: "2413", image: "images/2413.png" },
            { id: "s2414", name: "2414", image: "images/2414.png" },
            { id: "s2415", name: "2415", image: "images/2415.png" },
            { id: "s2416", name: "2416", image: "images/2416.png" },
            { id: "s2417", name: "2417", image: "images/2417.png" },
            { id: "s2418", name: "2418", image: "images/2418.png" },
            { id: "s2419", name: "2419", image: "images/2419.jpg" },
            { id: "s2420", name: "2420", image: "images/2420.png" },
            { id: "s2421", name: "2421", image: "images/2421.jpg" },
            { id: "s2422", name: "2422", image: "images/2422.jpg" }
        ]
    }
];

// --- DOM Elements ---
const categoryMenu = document.getElementById('category-menu');
const selectedSwatchesContainer = document.getElementById('selected-swatches');
const animationClone = document.getElementById('animation-clone');
const body = document.body;
const selectionPlaceholder = document.getElementById('selection-placeholder');
const toggleAllBtn = document.getElementById('toggle-all-btn'); 
const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModalBtn = document.querySelector('.close-modal');
const exportPdfBtn = document.getElementById('export-pdf-btn'); // Added for PDF export

// --- State ---
let nextInstanceId = 0; // Counter for unique instance IDs
let touchStartTime = 0; // 新增：记录触摸开始时间

// --- Functions ---
// Function to create a unique instance ID
function generateInstanceId() {
    return `instance-${nextInstanceId++}`;
}

// Function to create a swatch element
function createSwatchElement(swatch, isSelected = false) {
    const div = document.createElement('div');
    div.classList.add('swatch-item');
    div.dataset.id = swatch.id; // Original swatch ID
    div.dataset.image = swatch.image; // Store small image path for initial display

    if (isSelected) {
        div.dataset.instanceId = generateInstanceId(); // Unique ID for this specific instance
        // Store big image path
        const bigImagePath = swatch.image.replace('images', 'imagesbig');
        div.dataset.bigImage = bigImagePath;
        div.dataset.count = '1'; // Add initial count data attribute

        // Add count display element
        const countSpan = document.createElement('span');
        countSpan.classList.add('swatch-count');
        countSpan.textContent = 'x1';
        div.appendChild(countSpan);
    }

    const img = document.createElement('img');
    img.src = swatch.image;
    img.alt = swatch.name;
    img.loading = 'lazy'; // Lazy load images

    const span = document.createElement('span');
    span.classList.add('swatch-name'); // 添加类名以便于识别
    span.textContent = swatch.name;

    div.appendChild(img);
    div.appendChild(span);

    if (!isSelected) {
        // Listener for adding to selection (only for menu items)
        div.addEventListener('click', () => handleSwatchClick(swatch, div));
    } else {
        // Add remove button for selected items
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-swatch-btn');
        removeBtn.innerHTML = '&times;'; // 'X' symbol
        removeBtn.title = '删除'; // Tooltip
        // Event listener added via delegation later
        div.appendChild(removeBtn);
    }

    return div;
}

// Function to populate the category menu
function populateMenu() {
    categoryMenu.innerHTML = ''; // Clear existing menu items if any
    const fragment = document.createDocumentFragment();
    
    categories.forEach(category => {
        const details = document.createElement('details');
        details.dataset.categoryId = category.id; // Add identifier
        const summary = document.createElement('summary');

        // Add color indicator
        const colorIndicator = document.createElement('span');
        colorIndicator.classList.add('category-color-indicator');
        colorIndicator.style.backgroundColor = category.color;
        summary.appendChild(colorIndicator);

        // Add category name wrapped in a span for flex layout
        const nameSpan = document.createElement('span');
        nameSpan.classList.add('category-name'); // Add class for styling
        nameSpan.textContent = category.name;
        summary.appendChild(nameSpan);

        details.appendChild(summary);

        const swatchList = document.createElement('div');
        swatchList.classList.add('swatch-list', 'menu');

        category.swatches.forEach(swatch => {
            // Add categoryId to swatch object for later reference during click
            const swatchWithCategory = { ...swatch, categoryId: category.id };
            const swatchElement = createSwatchElement(swatchWithCategory, false);
            swatchList.appendChild(swatchElement);
        });

        details.appendChild(swatchList);
        categoryMenu.appendChild(details);
    });
}

// Function to handle swatch click (from menu)
function handleSwatchClick(swatch, originalElement) {
    // Check if the swatch is already in the selected area
    const existingSwatch = selectedSwatchesContainer.querySelector(`[data-id="${swatch.id}"]`);

    if (existingSwatch) {
        // Swatch already exists, increment count
        let currentCount = parseInt(existingSwatch.dataset.count || '1', 10);
        currentCount++;
        existingSwatch.dataset.count = currentCount;

        const countSpan = existingSwatch.querySelector('.swatch-count');
        if (countSpan) {
            countSpan.textContent = `x${currentCount}`;
        } else {
             // Should not happen if createSwatchElement is used, but as a fallback
             const newCountSpan = document.createElement('span');
             newCountSpan.classList.add('swatch-count');
             newCountSpan.textContent = `x${currentCount}`;
             existingSwatch.appendChild(newCountSpan);
        }
         // Optional: Add a visual feedback (e.g., pulse animation)
         existingSwatch.classList.add('pulse');
         setTimeout(() => {
             existingSwatch.classList.remove('pulse');
         }, 300);



    } else {
        // Swatch does not exist, add it
        const category = categories.find(cat => cat.id === swatch.categoryId);
        if (!category) return;

        // 1. Change Background Color smoothly
        body.style.backgroundColor = category.color; // CSS handles transition

        // 2. Prepare for animation
        const swatchToAdd = { ...swatch, categoryId: category.id }; // Clone swatch data and add categoryId
        animateSwatchToSelection(swatchToAdd, originalElement);
    }
}

// Function to animate the swatch to the selection area
function animateSwatchToSelection(swatch, originalElement) {
    const startRect = originalElement.getBoundingClientRect();
    const endRectTarget = selectedSwatchesContainer.getBoundingClientRect();

    // Simplified Target Calculation: Aim for the top-left of the container + padding
    // The grid layout will place it correctly once added.
    const containerStyle = getComputedStyle(selectedSwatchesContainer);
    const containerPaddingTop = parseFloat(containerStyle.paddingTop);
    const containerPaddingLeft = parseFloat(containerStyle.paddingLeft);

    // Use a fixed target size similar to selected items for animation consistency
    const targetWidth = 100;
    const targetHeight = 130;

    // Adjust target slightly inwards from the container padding edge
    const targetX = endRectTarget.left + containerPaddingLeft + 10; // Add small offset
    const targetY = endRectTarget.top + containerPaddingTop + 10; // Add small offset


    // Configure the clone for animation
    animationClone.innerHTML = originalElement.innerHTML; // Copy content
    animationClone.style.width = `${startRect.width}px`;
    animationClone.style.height = `${startRect.height}px`;
    animationClone.style.left = `${startRect.left}px`;
    animationClone.style.top = `${startRect.top}px`;
    animationClone.style.opacity = '1';
    animationClone.style.transition = 'none';
    animationClone.style.pointerEvents = 'none';
    animationClone.style.zIndex = '1000';

    animationClone.offsetHeight; // Force reflow

    const transitionSpeedValue = getComputedStyle(document.documentElement).getPropertyValue('--transition-speed').trim();
    animationClone.style.transition = `left ${transitionSpeedValue} ease-in-out, top ${transitionSpeedValue} ease-in-out, width ${transitionSpeedValue} ease-in-out, height ${transitionSpeedValue} ease-in-out, opacity calc(${transitionSpeedValue} * 0.8) ease-in-out ${transitionSpeedValue}*0.1`;
    animationClone.style.left = `${targetX}px`;
    animationClone.style.top = `${targetY}px`;
    animationClone.style.width = `${targetWidth}px`;
    animationClone.style.height = `${targetHeight}px`;
    animationClone.style.opacity = '0';

    // 3. Add the actual item to the selection area *after* a short delay
    setTimeout(() => {
        const selectedSwatchElement = createSwatchElement(swatch, true); // Create selected version with unique instance ID
        selectedSwatchesContainer.appendChild(selectedSwatchElement);
        updatePlaceholderVisibility();
        const animDuration = parseFloat(transitionSpeedValue.replace('s', '')) * 1000 || 400;
        setTimeout(() => {
           animationClone.style.opacity = '0';
           animationClone.style.transition = 'none';
        }, animDuration);
    }, 100); // Slightly increased delay to let animation progress more
}

// Function to update placeholder visibility
function updatePlaceholderVisibility() {
    if (selectedSwatchesContainer.children.length > 0) {
        selectionPlaceholder.style.display = 'none';
    } else {
        selectionPlaceholder.style.display = 'block';
    }
}

// Function to Toggle All Categories (Replaces Expand/Collapse)
function toggleAllCategories() {
    const allDetails = categoryMenu.querySelectorAll('details');
    if (allDetails.length === 0) return;

    // Check the state of the first details element to decide action
    const isFirstOpen = allDetails[0].open;

    // If the first is open, assume we want to collapse all. Otherwise, expand all.
    // This handles mixed states by collapsing first.
    if (isFirstOpen) {
        allDetails.forEach(details => details.open = false);
    } else {
        allDetails.forEach(details => details.open = true);
    }
}

// Function to open the image modal
function openImageModal(swatchElement) {
    const bigImageSrc = swatchElement.dataset.bigImage;
    if (bigImageSrc) {
        modalImage.src = bigImageSrc;
        imageModal.classList.add('show'); // Use class to trigger display and animation
    }
}

// Function to close the image modal
function closeImageModal() {
    imageModal.classList.remove('show');
    // Optional: Clear src after fade out for slightly better performance
    setTimeout(() => {
        modalImage.src = "";
         // Reset image scale and position when modal closes
        modalImage.style.transform = 'scale(1) translate(0, 0)';
        modalImage.style.transformOrigin = 'center center';       
    }, 300); // Match CSS animation duration
}

// Function to get Beijing Time as a string
function getBeijingDateTimeString() {
    const now = new Date();
    const beijingTimeOffset = 8 * 60; // Beijing is UTC+8
    const localTimeOffset = now.getTimezoneOffset(); // in minutes
    const utc = now.getTime() + (localTimeOffset * 60000);
    const beijingDate = new Date(utc + (beijingTimeOffset * 60000));

    const year = beijingDate.getFullYear();
    const month = (beijingDate.getMonth() + 1).toString().padStart(2, '0');
    const day = beijingDate.getDate().toString().padStart(2, '0');
    const hours = beijingDate.getHours().toString().padStart(2, '0');
    const minutes = beijingDate.getMinutes().toString().padStart(2, '0');
    const seconds = beijingDate.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} Beijing Time`;
}

// Function to export selected swatches to PDF
async function exportToPdf() {
    const selectedSwatches = Array.from(selectedSwatchesContainer.querySelectorAll('.swatch-item'));

    if (selectedSwatches.length === 0) {
        alert('Please select at least one swatch to export.');
        return;
    }

    // 使用全局变量jspdf，通过UMD方式引入
    const doc = new jspdf.jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 10;
    const imageWidth = 40; // Approximate width for each image
    const imageHeight = 30; // Approximate height for each image
    const textHeight = 10;   // 增加文本高度，确保名称能完整显示
    const itemSpacing = 5;  // Spacing between items
    const itemsPerRow = Math.floor((pageWidth - 2 * margin) / (imageWidth + itemSpacing));
    const itemHeight = imageHeight + textHeight + itemSpacing; // 每个项目（图片+文字）的总高度

    let totalQuantity = 0;
    const summaryItems = [];
    const imageLoadPromises = [];
    
    // 收集所有色板信息并加载图片
    for (let i = 0; i < selectedSwatches.length; i++) {
        const swatchElement = selectedSwatches[i];
        // 使用添加的类名来获取名称span
        const nameSpan = swatchElement.querySelector('.swatch-name');
        const imageName = nameSpan ? nameSpan.textContent : swatchElement.dataset.id || 'Unknown';
        const imageSrc = swatchElement.dataset.image;
        const quantity = parseInt(swatchElement.dataset.count || '1', 10);

        // ======= 这里插入面积解析和计算代码 =======
        let area = 0;
        for (const cat of categories) {
            if (cat.swatches.some(s => s.id === swatchElement.dataset.id)) {
                const size = parseSizeFromCategoryName(cat.name); // 解析分类名
                if (size) {
                    area = calcArea(size.width, size.length); // 只用宽和长
                }
                break;
            }
        }
        const totalSwatchArea = area * quantity;
        // ===========================================

        totalQuantity += quantity;
        summaryItems.push({
            name: imageName,
            quantity: quantity,
            area: area, // 单件面积（平方米）
            totalArea: totalSwatchArea // 总面积（平方米）
        });
        // 加载图片
        const imageLoadPromise = loadImageData(imageSrc)
            .then(imgData => {
                return {
                    imgData,
                    name: imageName,
                    quantity: quantity
                };
            })
            .catch(() => {
                return {
                    imgData: null,
                    name: imageName,
                    quantity: quantity
                };
            });

        imageLoadPromises.push(imageLoadPromise);
    }

    // 等待所有图片加载完成
    const imageResults = await Promise.all(imageLoadPromises);
    
    // 计算总页数和内容布局
    const rows = Math.ceil(imageResults.length / itemsPerRow);
    const imageContentHeight = rows * itemHeight + margin * 3;
    const summaryHeight = summaryItems.length * textHeight + margin * 4 + textHeight * 2; // 包含标题和总计
    
    // 决定布局策略 - 优先尝试将所有内容放在一页中
    let currentPage = 1;
    let totalPages;
    let useCompactLayout = false;
    
    // 检查是否所有内容能放在一页中
    if (imageContentHeight + summaryHeight <= pageHeight - margin * 3) {
        totalPages = 1;
        useCompactLayout = true;
    } else {
        // 检查图片是否需要多页
        const imagePages = Math.ceil(imageContentHeight / (pageHeight - margin * 3));
        // 检查摘要是否需要单独一页
        const needSeparateSummaryPage = summaryHeight > pageHeight - margin * 3 - 30 || imagePages > 0;
        totalPages = imagePages + (needSeparateSummaryPage ? 1 : 0);
        
        // 如果总页数仍为1，启用紧凑布局
        if (totalPages === 1) {
            useCompactLayout = true;
        }
    }
    
    // 开始生成PDF页面
    // 添加标题
    doc.setFontSize(16);
    doc.text('Selected Swatches', pageWidth / 2, margin, { align: 'center' });
    
    // 绘制所有图片及其名称
    let y = margin * 2.5;
    let x = margin;
    let rowCount = 0;
    
    imageResults.forEach((item, index) => {
        // 计算行索引
        if (index > 0 && index % itemsPerRow === 0) {
            rowCount++;
            x = margin;
            y += itemHeight;
            
            // 检查是否需要分页
            if (!useCompactLayout && y + itemHeight > pageHeight - margin * 3) {
                // 添加页码
                addPageNumber(doc, currentPage, totalPages, pageWidth, pageHeight);
                
                // 创建新页面
                doc.addPage();
                currentPage++;
                y = margin * 2.5;
                doc.setFontSize(16);
                doc.text('Selected Swatches (Continued)', pageWidth / 2, margin, { align: 'center' });
            }
        }
        
        // 添加图片
        if (item.imgData) {
            doc.addImage(item.imgData, 'JPEG', x, y, imageWidth, imageHeight);
        } else {
            doc.setFontSize(10);
            doc.text('Image Error', x + imageWidth / 2, y + imageHeight / 2, { align: 'center' });
        }
        
        // 添加名称和数量 - 确保名称清晰显示
        doc.setFontSize(9);  // 使用小一些的字体以确保适合宽度
        doc.text(item.name, x + imageWidth / 2, y + imageHeight + 5, { align: 'center' });
        doc.text(`x${item.quantity}`, x + imageWidth / 2, y + imageHeight + 10, { align: 'center' });
        
        x += imageWidth + itemSpacing;
    });
    
    // 移动到摘要部分
    y += itemHeight;
    
    // 检查是否需要为摘要添加新页面
    if (!useCompactLayout && y + summaryHeight > pageHeight - margin * 3) {
        // 添加页码
        addPageNumber(doc, currentPage, totalPages, pageWidth, pageHeight);
        
        // 创建新页面
        doc.addPage();
        currentPage++;
        y = margin * 2;
    }
    
    // 摘要标题
    doc.setFontSize(14);
    doc.text('Order Summary', margin, y);
    y += textHeight;
    
    // 添加分隔线
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += textHeight;
    
    // 列出所有项目
    doc.setFontSize(10);
    let totalArea = 0;
    summaryItems.forEach(item => {
        totalArea += item.totalArea;
    });
    summaryItems.forEach(item => {
        // 检查是否需要新页面
        if (y + textHeight > pageHeight - margin * 3) {
            // 添加页码
            addPageNumber(doc, currentPage, totalPages, pageWidth, pageHeight);
            
            // 创建新页面
            doc.addPage();
            currentPage++;
            totalPages++; // 意外情况下增加总页数
            y = margin * 2;
            
            // 继续摘要标题
            doc.setFontSize(14);
            doc.text('Order Summary (Continued)', margin, y);
            y += textHeight;
            doc.setLineWidth(0.5);
            doc.line(margin, y, pageWidth - margin, y);
            y += textHeight;
            doc.setFontSize(10);
        }
        
        // 新增：显示面积，保留3位小数
        const areaStr = item.area > 0 ? `（面积: ${(item.totalArea).toFixed(3)}㎡）` : '';
        doc.text(`${item.name}: ${item.quantity}${areaStr}`, margin + 5, y);
        y += textHeight;
    });
    
    // 总计分隔线
    y += textHeight / 2;
    doc.setLineWidth(0.2);
    doc.line(margin, y, pageWidth - margin, y);
    y += textHeight;
    
    // 总计数量
    doc.setFontSize(12);
    doc.text(`Total Quantity: ${totalQuantity}`, margin + 5, y);
    y += textHeight;

    // 新增：总面积统计
    doc.setFontSize(12);
    doc.text(`Total Area: ${totalArea.toFixed(3)}㎡`, margin + 5, y);
    
    // 添加北京时间日期
    const dateTimeString = getBeijingDateTimeString();
    doc.setFontSize(8);
    doc.text(dateTimeString, pageWidth - margin, pageHeight - margin, { align: 'right' });
    
    // 添加页码到最后一页
    addPageNumber(doc, currentPage, totalPages, pageWidth, pageHeight);
    
    // 保存PDF
    doc.save('selected_swatches.pdf');
}

// 添加页码的辅助函数
function addPageNumber(doc, currentPage, totalPages, pageWidth, pageHeight) {
    doc.setFontSize(10);
    doc.text(`${currentPage}/${totalPages}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
}

// Function to load image data
function loadImageData(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            const dataURL = canvas.toDataURL('image/jpeg');
            resolve(dataURL);
        };
        img.onerror = reject;
        img.src = src;
    });
}

// Function to handle remove or decrement
function handleRemoveOrDecrement(swatchElement) {
    const currentCount = parseInt(swatchElement.dataset.count || '1', 10);
    if (currentCount > 1) {
        // Decrement count
        swatchElement.dataset.count = currentCount - 1;
        const countSpan = swatchElement.querySelector('.swatch-count');
        if (countSpan) {
            countSpan.textContent = `x${currentCount - 1}`;
        }
    } else {
        // Remove the swatch
        swatchElement.remove();
        updatePlaceholderVisibility();
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize SortableJS
    if (window.Sortable) {
        new Sortable(selectedSwatchesContainer, {
            animation: 150,
            ghostClass: 'sortable-ghost',
            onEnd: () => {
                // Update instance IDs after sorting
                const swatchItems = selectedSwatchesContainer.querySelectorAll('.swatch-item');
                swatchItems.forEach((item, index) => {
                    item.dataset.instanceId = generateInstanceId();
                });
            }
        });
    } else {
        console.error('SortableJS library not loaded.');
    }

    // Initialize other event listeners
    modalImage.addEventListener('wheel', (event) => {
        event.preventDefault();
        const currentScale = parseFloat(modalImage.style.transform.match(/scale\(([0-9.]+)\)/)[1]) || 1;
        const delta = event.deltaY > 0 ? -0.1 : 0.1;
        const newScale = Math.min(Math.max(currentScale + delta, 1), 3);
        modalImage.style.transform = `scale(${newScale})`;
    }, { passive: false });

    toggleAllBtn.addEventListener('click', toggleAllCategories);
    closeModalBtn.addEventListener('click', closeImageModal);
    imageModal.addEventListener('click', (event) => {
        // 只有当点击的是模态窗口背景（而不是图片）时才关闭
        if (event.target === imageModal) {
            closeImageModal();
        }
    });

    selectedSwatchesContainer.addEventListener('touchstart', (event) => {
        touchStartTime = event.timeStamp;
    }, { passive: true });

    selectedSwatchesContainer.addEventListener('touchend', (event) => {
        const touchEndTime = event.timeStamp;
        const touchDuration = touchEndTime - touchStartTime;

        if (touchDuration < 300) { // 短时间触摸视为点击
            // 检查是否触摸的是删除按钮
            const target = event.changedTouches[0].target;
            const removeButton = target.closest('.remove-swatch-btn');
            
            if (removeButton) {
                // 如果触摸的是删除按钮，则执行删除/减少数量的操作
                event.preventDefault(); // 防止默认行为
                const swatchElement = removeButton.closest('.swatch-item');
                if (swatchElement) {
                    handleRemoveOrDecrement(swatchElement);
                }
                return;
            }
            
            // 检查是否触摸的是图片或色板项
            const swatchItem = target.closest('.swatch-item');
            const touchedImage = target.tagName === 'IMG';
            
            // 如果是触摸图片或色板项（而不是删除按钮），则打开图片模态窗口
            if (swatchItem && (touchedImage || target.classList.contains('swatch-name'))) {
                event.preventDefault(); // 防止默认行为（如选择文本）
                openImageModal(swatchItem);
            }
        }
    }, { passive: false }); // 改为非被动，因为我们需要调用preventDefault

    selectedSwatchesContainer.addEventListener('click', (event) => {
        // 检查是否点击的是删除按钮
        const removeButton = event.target.closest('.remove-swatch-btn');
        if (removeButton) {
            // 如果点击的是删除按钮，则执行删除/减少数量的操作
            const swatchElement = removeButton.closest('.swatch-item');
            if (swatchElement) {
                handleRemoveOrDecrement(swatchElement);
            }
            return; // 防止触发图片查看功能
        }
        
        // 检查是否点击的是图片或色板项
        const swatchItem = event.target.closest('.swatch-item');
        const clickedImage = event.target.tagName === 'IMG';
        
        // 如果是点击图片或色板项（而不是删除按钮），则打开图片模态窗口
        if (swatchItem && (clickedImage || event.target.classList.contains('swatch-name'))) {
            openImageModal(swatchItem);
        }
    });

    exportPdfBtn.addEventListener('click', exportToPdf);

    // Populate menu and update placeholder visibility
    populateMenu();
    updatePlaceholderVisibility();
});

// 辅助函数：从分类名解析尺寸
function parseSizeFromCategoryName(categoryName) {
    // 匹配类似 9*1220*2440mm
    const match = categoryName.match(/(\\d+(?:\\.\\d+)?)\\*(\\d+(?:\\.\\d+)?)\\*(\\d+(?:\\.\\d+)?)/);
    if (match) {
        return {
            thickness: parseFloat(match[1]),
            width: parseFloat(match[2]),
            length: parseFloat(match[3])
        };
    }
    return null;
}

// 辅助函数：计算面积（平方米）
function calcArea(width, length) {
    return (width / 1000) * (length / 1000);
}
