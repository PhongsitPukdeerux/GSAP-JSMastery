import gsap from "gsap";

const tabs = document.querySelectorAll('.tab');
const indicator = document.querySelector('.indicator');
const tabRow = document.querySelector('.tab-row');

const updateIndicator = (target) => {
    const tabBounds = target.getBoundingClientRect();
    console.log("🚀 ~ updateIndicator ~ tabBounds:", tabBounds)
    const rowBounds = tabRow.getBoundingClientRect();
    console.log("🚀 ~ updateIndicator ~ rowBounds:", rowBounds)

    const width = tabBounds.width;
    const offset = tabBounds.left - rowBounds.left;

    gsap.to(indicator, {
        x: offset,
        width: width,
        ease: 'back.out(1)',
        duration: 0.4
    })
}

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'))
        tab.classList.add('active');
        updateIndicator(tab);
    })
})