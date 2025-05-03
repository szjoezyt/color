document.addEventListener('DOMContentLoaded', () => {
    const colors = [
        { name: "深海蓝", hex: "#001f3f" },
        { name: "森林绿", hex: "#2ECC40" },
        { name: "火焰红", hex: "#FF4136" },
        { name: "阳光黄", hex: "#FFDC00" },
        { name: "经典黑", hex: "#111111" },
        { name: "纯净白", hex: "#FFFFFF" },
        { name: "高贵紫", hex: "#B10DC9" },
        { name: "活力橙", hex: "#FF851B" },
        { name: "天空蓝", hex: "#7FDBFF" },
        { name: "优雅灰", hex: "#AAAAAA" },
        { name: "玫瑰粉", hex: "#F012BE" },
        { name: "橄榄绿", hex: "#3D9970" },
        { name: "海军蓝", hex: "#0074D9" },
        { name: "石灰绿", hex: "#01FF70" },
        { name: "酒红色", hex: "#85144b" },
        { name: "水鸭蓝", hex: "#39CCCC" }
    ];

    const paletteContainer = document.getElementById('color-palette');
    const selectedColorNameEl = document.getElementById('selected-color-name');
    const selectedColorHexEl = document.getElementById('selected-color-hex');
    const body = document.body;

    let currentSelectedSwatch = null;

    colors.forEach(color => {
        const swatch = document.createElement('div');
        swatch.classList.add('color-swatch');
        swatch.style.backgroundColor = color.hex;
        swatch.dataset.colorName = color.name;
        swatch.dataset.colorHex = color.hex;
        swatch.setAttribute('title', `${color.name} (${color.hex})`); // Tooltip on hover

        swatch.addEventListener('click', () => {
            // Update displayed info
            selectedColorNameEl.textContent = color.name;
            selectedColorHexEl.textContent = color.hex;
            selectedColorNameEl.style.backgroundColor = getContrastingTextColor(color.hex) === '#000000' ? '#eee' : '#444';
            selectedColorNameEl.style.color = getContrastingTextColor(color.hex);
            selectedColorHexEl.style.backgroundColor = getContrastingTextColor(color.hex) === '#000000' ? '#ddd' : '#555';
            selectedColorHexEl.style.color = getContrastingTextColor(color.hex);

            // Change body background (subtly or based on color)
            // Let's make the background a lighter version of the selected color
            body.style.backgroundColor = lightenHexColor(color.hex, 0.85); // Lighten by 85%

             // Update selected state visually
            if (currentSelectedSwatch) {
                currentSelectedSwatch.classList.remove('selected');
            }
            swatch.classList.add('selected');
            currentSelectedSwatch = swatch;

            // Adjust body text color based on new background
            body.style.color = getContrastingTextColor(body.style.backgroundColor);
            // Adjust header/footer visibility if needed
            const header = document.querySelector('header');
            const footer = document.querySelector('footer');
            header.style.backgroundColor = `rgba(${getContrastingTextColor(body.style.backgroundColor) === '#000000' ? '255, 255, 255, 0.8' : '51, 51, 51, 0.8'})`;
            header.style.color = getContrastingTextColor(body.style.backgroundColor);
            footer.style.backgroundColor = `rgba(${getContrastingTextColor(body.style.backgroundColor) === '#000000' ? '51, 51, 51, 0.9' : '220, 220, 220, 0.9'})`;
            footer.style.color = getContrastingTextColor(body.style.backgroundColor) === '#000000' ? '#f4f4f4' : '#333';
             // Adjust header h1 color specifically if needed
            header.querySelector('h1').style.color = getContrastingTextColor(body.style.backgroundColor) === '#000000' ? '#0056b3' : '#7FDBFF'; // Example adjustment

        });

        paletteContainer.appendChild(swatch);
    });

    // Function to determine contrasting text color (black or white)
    function getContrastingTextColor(hexColor) {
        if (!hexColor) return '#000000'; // Default to black

        // Handle RGB format from style.backgroundColor
         if (hexColor.startsWith('rgb')) {
            const rgb = hexColor.match(/\d+/g);
            if (!rgb || rgb.length < 3) return '#000000';
             const r = parseInt(rgb[0]);
             const g = parseInt(rgb[1]);
             const b = parseInt(rgb[2]);
             const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
             return luminance > 0.5 ? '#000000' : '#FFFFFF';
        }


        // Handle hex format
        const R = parseInt(hexColor.slice(1, 3), 16);
        const G = parseInt(hexColor.slice(3, 5), 16);
        const B = parseInt(hexColor.slice(5, 7), 16);
        const luminance = (0.299 * R + 0.587 * G + 0.114 * B) / 255;
        return luminance > 0.5 ? '#000000' : '#FFFFFF'; // Return black for light backgrounds, white for dark
    }

    // Function to lighten a hex color
    function lightenHexColor(hex, percent) {
        hex = hex.replace(/^#/, '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        const newR = Math.min(255, Math.floor(r + (255 - r) * percent));
        const newG = Math.min(255, Math.floor(g + (255 - g) * percent));
        const newB = Math.min(255, Math.floor(b + (255 - b) * percent));

        return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
    }

     // Set initial contrast for default background
     body.style.color = getContrastingTextColor(body.style.backgroundColor);
     const header = document.querySelector('header');
     const footer = document.querySelector('footer');
     header.style.backgroundColor = `rgba(${getContrastingTextColor(body.style.backgroundColor) === '#000000' ? '255, 255, 255, 0.8' : '51, 51, 51, 0.8'})`;
     header.style.color = getContrastingTextColor(body.style.backgroundColor);
     footer.style.backgroundColor = `rgba(${getContrastingTextColor(body.style.backgroundColor) === '#000000' ? '51, 51, 51, 0.9' : '220, 220, 220, 0.9'})`;
     footer.style.color = getContrastingTextColor(body.style.backgroundColor) === '#000000' ? '#f4f4f4' : '#333';
     header.querySelector('h1').style.color = getContrastingTextColor(body.style.backgroundColor) === '#000000' ? '#0056b3' : '#7FDBFF';


});

