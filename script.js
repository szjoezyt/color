import Sortable from 'sortablejs';

// --- Data Structure ---
const categories = [
    {
        id: "light-wood",
        name: "浅色木纹",
        color: "#E0CDB3", // Light Beige/Tan
        swatches: [
            { id: "lw01", name: "浅橡木", image: "swatch_light_oak.png" },
            { id: "lw02", name: "白枫木", image: "swatch_white_maple.png" },
            { id: "lw03", name: "米白栓木", image: "swatch_beige_ash.png" },
        ]
    },
    {
        id: "dark-wood",
        name: "深色木纹",
        color: "#6F4E37", // Coffee Brown
        swatches: [
            { id: "dw01", name: "黑胡桃", image: "swatch_black_walnut.png" },
            { id: "dw02", name: "深红木", image: "swatch_dark_mahogany.png" },
            { id: "dw03", name: "烟熏橡木", image: "swatch_smoked_oak.png" },
        ]
    },
    {
        id: "solid-colors",
        name: "纯色系列",
        color: "#BDBDBD", // Medium Grey
        swatches: [
            { id: "sc01", name: "纯白", image: "swatch_solid_white.png" },
            { id: "sc02", name: "天蓝", image: "swatch_sky_blue.png" },
            { id: "sc03", name: "高级灰", image: "swatch_grey.png" },
        ]
    },
    {
        id: "stone-texture",
        name: "石纹系列",
        color: "#A9A9A9", // DarkGray (Kept)
        swatches: [
            { id: "st01", name: "卡拉拉白", image: "swatch_carrara_white.png" },
            { id: "st02", name: "黑金石", image: "swatch_black_gold_stone.png" },
        ]
    },
    {
        id: "metallic",
        name: "金属质感",
        color: "#C0C0C0", // Silver (Kept)
        swatches: [
            { id: "mt01", name: "拉丝银", image: "swatch_brushed_silver.png" },
            { id: "mt02", name: "钛金", image: "swatch_titanium_gold.png" },
        ]
    },
     {
        id: "fabric-texture",
        name: "布纹系列",
        color: "#D3CABE", // Neutral Fabric Beige/Grey
        swatches: [
            { id: "ft01", name: "亚麻灰", image: "swatch_linen_grey.png" },
            { id: "ft02", name: "棉麻米", image: "swatch_cotton_beige.png" },
        ]
    },
     {
        id: "concrete",
        name: "水泥质感",
        color: "#808080", // Gray (Kept)
        swatches: [
            { id: "cn01", name: "清水泥", image: "swatch_plain_concrete.png" },
            { id: "cn02", name: "深灰水泥", image: "swatch_dark_concrete.png" },
        ]
    },
     {
        id: "artistic",
        name: "艺术纹理",
        color: "#CADAE8", // Light Grey-Blue / Subtle Artistic
        swatches: [
            { id: "ar01", name: "抽象水墨", image: "swatch_abstract_ink.png" },
            { id: "ar02", name: "几何图案", image: "swatch_geometric.png" },
        ]
    },
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
        // const selectedSwatchElement = createSwatchElement(swatch, true); // Create selected version with unique instance ID
        // selectedSwatchesContainer.appendChild(selectedSwatchElement);
        // updatePlaceholderVisibility();
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