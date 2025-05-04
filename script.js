import Sortable from 'sortablejs';

// --- Data Structure ---
const categories = [
    {
        id: "bz",
        name: "BZ系列",
        color: "#A0A0A0", // Neutral Grey
        swatches: [
            { id: "bz01", name: "BZ板材 01", image: "images/BZ-01.jpg" },
            { id: "bz02", name: "BZ板材 02", image: "images/BZ-02.jpg" },
            { id: "bz03", name: "BZ板材 03", image: "images/BZ-03.jpg" },
            { id: "bz04", name: "BZ板材 04", image: "images/BZ-04.jpg" },
            { id: "bz05", name: "BZ板材 05", image: "images/BZ-05.jpg" },
            { id: "bz06", name: "BZ板材 06", image: "images/BZ-06.jpg" },
            { id: "bz07", name: "BZ板材 07", image: "images/BZ-07.jpg" },
            { id: "bz08", name: "BZ板材 08", image: "images/BZ-08.jpg" },
            { id: "bz09", name: "BZ板材 09", image: "images/BZ-09.jpg" },
            { id: "bz10", name: "BZ板材 10", image: "images/BZ-10.jpg" },
            { id: "bz11", name: "BZ板材 11", image: "images/BZ-11.jpg" },
            { id: "bz12", name: "BZ板材 12", image: "images/BZ-12.jpg" },
            { id: "bz13", name: "BZ板材 13", image: "images/BZ-13.jpg" },
            { id: "bz14", name: "BZ板材 14", image: "images/BZ-14.jpg" },
            { id: "bz16", name: "BZ板材 16", image: "images/BZ-16.jpg" },
            { id: "bz17", name: "BZ板材 17", image: "images/BZ-17.jpg" },
            { id: "bz19", name: "BZ板材 19", image: "images/BZ-19.jpg" },
            { id: "bz21", name: "BZ板材 21", image: "images/BZ-21.jpg" },
            { id: "bz24", name: "BZ板材 24", image: "images/BZ-24.jpg" },
            { id: "bz25", name: "BZ板材 25", image: "images/BZ-25.jpg" },
            { id: "bz28", name: "BZ板材 28", image: "images/BZ-28.jpg" },
            { id: "bz29", name: "BZ板材 29", image: "images/BZ-29.png" },
            { id: "bz30", name: "BZ板材 30", image: "images/BZ-30.png" },
            { id: "bz31", name: "BZ板材 31", image: "images/BZ-31.jpg" },
            { id: "bz32", name: "BZ板材 32", image: "images/BZ-32.jpg" },
            { id: "bz34", name: "BZ板材 34", image: "images/BZ-34.jpg" },
            { id: "bz35", name: "BZ板材 35", image: "images/BZ-35.jpg" },
            { id: "bz36", name: "BZ板材 36", image: "images/BZ-36.jpg" },
            { id: "bz37", name: "BZ板材 37", image: "images/BZ-37.jpg" },
            { id: "bz38", name: "BZ板材 38", image: "images/BZ-38.png" },
            { id: "bz39", name: "BZ板材 39", image: "images/BZ-39.jpg" },
            { id: "bz41", name: "BZ板材 41", image: "images/BZ-41.jpg" },
            { id: "bz43", name: "BZ板材 43", image: "images/BZ-43.jpg" },
            { id: "bz44", name: "BZ板材 44", image: "images/BZ-44.jpg" },
            { id: "bz46", name: "BZ板材 46", image: "images/BZ-46.jpg" },
            { id: "bz47", name: "BZ板材 47", image: "images/BZ-47.jpg" },
            { id: "bz48", name: "BZ板材 48", image: "images/BZ-48.jpg" },
            { id: "bz49", name: "BZ板材 49", image: "images/BZ-49.jpg" },
            { id: "bz50", name: "BZ板材 50", image: "images/BZ-50.jpg" },
            { id: "bz51", name: "BZ板材 51", image: "images/BZ-51.jpg" }
        ]
    },
    {
        id: "cbz",
        name: "CBZ系列",
        color: "#B8A99A", // Muted Brown/Beige
        swatches: [
            { id: "cbz01", name: "CBZ板材 01", image: "images/CBZ01.jpg" },
            { id: "cbz015", name: "CBZ板材 015", image: "images/CBZ015.jpg" },
            { id: "cbz02", name: "CBZ板材 02", image: "images/CBZ02.jpg" },
            { id: "cbz03", name: "CBZ板材 03", image: "images/CBZ03.jpg" },
            { id: "cbz04", name: "CBZ板材 04", image: "images/CBZ04.jpg" },
            { id: "cbz05", name: "CBZ板材 05", image: "images/CBZ05.jpg" },
            { id: "cbz06", name: "CBZ板材 06", image: "images/CBZ06.jpg" },
            { id: "cbz07", name: "CBZ板材 07", image: "images/CBZ07.jpg" },
            { id: "cbz08", name: "CBZ板材 08", image: "images/CBZ08.jpg" },
            { id: "cbz10", name: "CBZ板材 10", image: "images/CBZ10.jpg" },
            { id: "cbz11", name: "CBZ板材 11", image: "images/CBZ11.jpg" },
            { id: "cbz12", name: "CBZ板材 12", image: "images/CBZ12.jpg" },
            { id: "cbz13", name: "CBZ板材 13", image: "images/CBZ13.jpg" },
            { id: "cbz14", name: "CBZ板材 14", image: "images/CBZ14.jpg" },
            { id: "cbz16", name: "CBZ板材 16", image: "images/CBZ16.jpg" },
            { id: "cbz17", name: "CBZ板材 17", image: "images/CBZ17.jpg" }
        ]
    },
    {
        id: "s19",
        name: "19系列",
        color: "#C5D5E2", // Light Blue-Grey
        swatches: [
            { id: "s1901", name: "19系板材 01", image: "images/1901.jpg" },
            { id: "s1902", name: "19系板材 02", image: "images/1902.png" },
            { id: "s1903", name: "19系板材 03", image: "images/1903.jpg" },
            { id: "s1904", name: "19系板材 04", image: "images/1904.jpg" },
            { id: "s1906", name: "19系板材 06", image: "images/1906.jpg" },
            { id: "s1907", name: "19系板材 07", image: "images/1907.jpg" },
            { id: "s1908", name: "19系板材 08", image: "images/1908.jpg" },
            { id: "s1909", name: "19系板材 09", image: "images/1909.jpg" },
            { id: "s1910", name: "19系板材 10", image: "images/1910.jpg" },
            { id: "s1911", name: "19系板材 11", image: "images/1911.jpg" },
            { id: "s1912", name: "19系板材 12", image: "images/1912.jpg" },
            { id: "s1913", name: "19系板材 13", image: "images/1913.jpg" },
            { id: "s1914", name: "19系板材 14", image: "images/1914.jpg" },
            { id: "s1915", name: "19系板材 15", image: "images/1915.jpg" },
            { id: "s1916", name: "19系板材 16", image: "images/1916.jpg" },
            { id: "s1917", name: "19系板材 17", image: "images/1917.jpg" },
            { id: "s1918", name: "19系板材 18", image: "images/1918.jpg" },
            { id: "s1919", name: "19系板材 19", image: "images/1919.jpg" },
            { id: "s1920", name: "19系板材 20", image: "images/1920.png" },
            { id: "s1921", name: "19系板材 21", image: "images/1921.jpg" }
        ]
    },
    {
        id: "s21",
        name: "21系列",
        color: "#D1C4B0", // Light Tan
        swatches: [
            { id: "s2101", name: "21系板材 01", image: "images/2101.jpg" },
            { id: "s2102", name: "21系板材 02", image: "images/2102.jpg" },
            { id: "s2103", name: "21系板材 03", image: "images/2103.jpg" },
            { id: "s2104", name: "21系板材 04", image: "images/2104.jpg" },
            { id: "s2105", name: "21系板材 05", image: "images/2105.jpg" },
            { id: "s2106", name: "21系板材 06", image: "images/2106.jpg" },
            { id: "s2107", name: "21系板材 07", image: "images/2107.jpg" },
            { id: "s2108", name: "21系板材 08", image: "images/2108.jpg" },
            { id: "s2109", name: "21系板材 09", image: "images/2109.jpg" },
            { id: "s2110", name: "21系板材 10", image: "images/2110.jpg" },
            { id: "s2111", name: "21系板材 11", image: "images/2111.jpg" },
            { id: "s2112", name: "21系板材 12", image: "images/2112.jpg" },
            { id: "s2113", name: "21系板材 13", image: "images/2113.jpg" },
            { id: "s2114", name: "21系板材 14", image: "images/2114.jpg" },
            { id: "s2116", name: "21系板材 16", image: "images/2116.jpg" },
            { id: "s2117", name: "21系板材 17", image: "images/2117.jpg" },
            { id: "s2118", name: "21系板材 18", image: "images/2118.jpg" },
            { id: "s2119", name: "21系板材 19", image: "images/2119.jpg" },
            { id: "s2120", name: "21系板材 20", image: "images/2120.jpg" },
            { id: "s2121", name: "21系板材 21", image: "images/2121.jpg" },
            { id: "s2122", name: "21系板材 22", image: "images/2122.jpg" },
            { id: "s2123", name: "21系板材 23", image: "images/2123.jpg" },
            { id: "s2124", name: "21系板材 24", image: "images/2124.jpg" },
            { id: "s2125", name: "21系板材 25", image: "images/2125.jpg" },
            { id: "s2126", name: "21系板材 26", image: "images/2126.jpg" },
            { id: "s2127", name: "21系板材 27", image: "images/2127.jpg" },
            { id: "s2128", name: "21系板材 28", image: "images/2128.jpg" },
            { id: "s2129", name: "21系板材 29", image: "images/2129.jpg" },
            { id: "s2130", name: "21系板材 30", image: "images/2130.jpg" },
            { id: "s2131", name: "21系板材 31", image: "images/2131.jpg" },
            { id: "s2132", name: "21系板材 32", image: "images/2132.jpg" }
        ]
    },
    {
        id: "s24",
        name: "24系列",
        color: "#8A9A8F", // Muted Green-Grey
        swatches: [
            { id: "s2401", name: "24系板材 01", image: "images/2401.png" },
            { id: "s2402", name: "24系板材 02", image: "images/2402.png" },
            { id: "s2403", name: "24系板材 03", image: "images/2403.png" },
            { id: "s2404", name: "24系板材 04", image: "images/2404.png" },
            { id: "s2405", name: "24系板材 05", image: "images/2405.png" },
            { id: "s2406", name: "24系板材 06", image: "images/2406.png" },
            { id: "s2407", name: "24系板材 07", image: "images/2407.png" },
            { id: "s2408", name: "24系板材 08", image: "images/2408.png" },
            { id: "s2409", name: "24系板材 09", image: "images/2409.png" },
            { id: "s2410", name: "24系板材 10", image: "images/2410.png" },
            { id: "s2411", name: "24系板材 11", image: "images/2411.png" },
            { id: "s2412", name: "24系板材 12", image: "images/2412.png" },
            { id: "s2413", name: "24系板材 13", image: "images/2413.png" },
            { id: "s2414", name: "24系板材 14", image: "images/2414.png" },
            { id: "s2415", name: "24系板材 15", image: "images/2415.png" },
            { id: "s2416", name: "24系板材 16", image: "images/2416.png" },
            { id: "s2417", name: "24系板材 17", image: "images/2417.png" },
            { id: "s2418", name: "24系板材 18", image: "images/2418.png" },
            { id: "s2419", name: "24系板材 19", image: "images/2419.jpg" },
            { id: "s2420", name: "24系板材 20", image: "images/2420.png" },
            { id: "s2421", name: "24系板材 21", image: "images/2421.jpg" },
            { id: "s2422", name: "24系板材 22", image: "images/2422.jpg" }
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

// --- State ---
let nextInstanceId = 0; // Counter for unique instance IDs

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
    div.dataset.image = swatch.image; // Store image path for modal

    if (isSelected) {
        div.dataset.instanceId = generateInstanceId(); // Unique ID for this specific instance
    }

    const img = document.createElement('img');
    img.src = swatch.image;
    img.alt = swatch.name;
    img.loading = 'lazy'; // Lazy load images

    const span = document.createElement('span');
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

// Function to handle clicking a swatch in the menu
function handleSwatchClick(swatch, originalElement) {
    const category = categories.find(cat => cat.id === swatch.categoryId);
    if (!category) return;

    // 1. Change Background Color smoothly
    body.style.backgroundColor = category.color; // CSS handles transition

    // 2. Prepare for animation
    const swatchToAdd = { ...swatch }; // Clone swatch data
    animateSwatchToSelection(swatchToAdd, originalElement);
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
function openImageModal(imageSrc) {
    if (imageSrc) {
        modalImage.src = imageSrc;
        imageModal.classList.add('show'); // Use class to trigger display and animation
    }
}

// Function to close the image modal
function closeImageModal() {
    imageModal.classList.remove('show');
    // Optional: Clear src after fade out for slightly better performance
    setTimeout(() => {
        modalImage.src = "";
    }, 300); // Match CSS animation duration
}

// --- Event Listeners ---
// Sidebar controls
toggleAllBtn.addEventListener('click', toggleAllCategories); 

// Modal close listeners
closeModalBtn.addEventListener('click', closeImageModal);
imageModal.addEventListener('click', (event) => {
    // Close if clicked on the background (modal itself), not the image
    if (event.target === imageModal) {
        closeImageModal();
    }
});

// Event delegation for selectedSwatchesContainer (handles image zoom and remove button)
selectedSwatchesContainer.addEventListener('click', (event) => {
    const target = event.target;

    // Check if the remove button was clicked
    if (target.classList.contains('remove-swatch-btn')) {
        event.stopPropagation(); // Prevent modal from opening
        const swatchItemToRemove = target.closest('.swatch-item');
        if (swatchItemToRemove) {
            // Optional: Add a fade-out effect before removing
            swatchItemToRemove.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            swatchItemToRemove.style.opacity = '0';
            swatchItemToRemove.style.transform = 'scale(0.8)';
            setTimeout(() => {
                swatchItemToRemove.remove();
                updatePlaceholderVisibility(); // Update placeholder after removal
                // If SortableJS instance needs update (e.g., re-calculating indices), do it here
            }, 300); // Delay removal until after animation
        }
        return; // Stop further processing for this click
    }

    // Check if an image within a selected swatch was clicked for zoom
    const clickedImage = target.closest('img');
    const swatchItem = target.closest('.swatch-item'); // Ensure click is within a swatch item

    if (clickedImage && swatchItem) {
        openImageModal(clickedImage.src); // Use the clicked image's src
    }
});

// --- Initialization ---
populateMenu();
updatePlaceholderVisibility(); // Initial check

// Initialize SortableJS
new Sortable(selectedSwatchesContainer, {
    animation: 250, // Animation speed in ms
    ghostClass: 'sortable-ghost', // Class name for the drop placeholder
    dragClass: 'sortable-drag', // Class name for the dragging item
    forceFallback: true, // Ensures smooth dragging across containers if needed later
    fallbackOnBody: true, // Attach clone to body to avoid clipping issues
    swapThreshold: 0.65, // Threshold for swapping items
    filter: '.remove-swatch-btn', // Ignore clicks on remove button for starting drag
    preventOnFilter: true // Prevent default action (like drag start) on filtered elements
});
