var filterTriggerBtn = document.querySelector('.cd-filter-trigger-btn');
var filter = document.querySelector('.cd-filter');
var filterGal = document.querySelector('.cd-gallery');
var filterCloseBtn = document.querySelector('.cd-filter .cd-close');

// Toggle filter visibility on button click
if (filterTriggerBtn) {
    filterTriggerBtn.addEventListener('click', function(event) {
        event.preventDefault();
        filter.classList.toggle('filter-is-visible');
        filterGal.classList.toggle('filter-is-visible');
        filter.classList.toggle('hide');
        filterGal.classList.toggle('hide');
    });
}

// Close filter when the close button is clicked
if (filterCloseBtn) {
    filterCloseBtn.addEventListener('click', function(event) {
        event.preventDefault();
        filter.classList.remove('filter-is-visible');
        filterGal.classList.remove('filter-is-visible');
        filter.classList.remove('hide');
        filterGal.classList.remove('hide');
    });
}

// Close filter when clicking outside of it
document.addEventListener('click', function(event) {
    if (!filter.contains(event.target) && !filterTriggerBtn.contains(event.target)) {
        filter.classList.remove('filter-is-visible');
        filterGal.classList.remove('filter-is-visible');
        filter.classList.remove('hide');
        filterGal.classList.remove('hide');
    }
});