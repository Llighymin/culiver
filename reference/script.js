document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    

    const heroTitles = [
        "Weaving New Play",
        "Connecting People",
        "Innovating Technology"
    ];
    let currentSlide = 0;
    const heroTitleElement = document.getElementById('hero-title');
    const slideCounterElement = document.getElementById('slide-counter');
    const slideProgressElement = document.getElementById('slide-progress');

    function updateHeroSlider() {
        currentSlide = (currentSlide + 1) % heroTitles.length;

        heroTitleElement.style.animation = 'none';
        heroTitleElement.offsetHeight; // Trigger reflow
        heroTitleElement.style.animation = '';
        
        heroTitleElement.textContent = heroTitles[currentSlide];
        slideCounterElement.textContent = `0${currentSlide + 1}`;
        
        slideProgressElement.style.animation = 'none';
        slideProgressElement.offsetHeight; // Trigger reflow
        slideProgressElement.style.animation = '';
    }

    setInterval(updateHeroSlider, 5000);


    const tabsContainer = document.getElementById('service-tabs');
    const contentContainer = document.getElementById('service-content');
    const serviceTabs = tabsContainer.querySelectorAll('.service-tab');
    const servicePanels = contentContainer.querySelectorAll('.service-panel');

    tabsContainer.addEventListener('click', (e) => {
        const clickedTab = e.target.closest('.service-tab');
        if (!clickedTab) return;

        const tabName = clickedTab.dataset.tab;

        serviceTabs.forEach(tab => {
            tab.classList.remove('active');
        });
        clickedTab.classList.add('active');

        servicePanels.forEach(panel => {
            if (panel.dataset.tabContent === tabName) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    });


    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-white', 'shadow-md');
            header.classList.remove('bg-white/80');
        } else {
            header.classList.remove('bg-white', 'shadow-md');
            header.classList.add('bg-white/80');
        }
    });
});
