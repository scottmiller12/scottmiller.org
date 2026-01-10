// Research Page JavaScript - Filtering and Search

document.addEventListener('DOMContentLoaded', function() {
    const topicFilter = document.getElementById('topic-filter');
    const typeFilter = document.getElementById('type-filter');
    const yearFilter = document.getElementById('year-filter');
    const searchInput = document.getElementById('search-input');
    const researchList = document.getElementById('research-list');
    const researchCount = document.getElementById('research-count');
    const papers = document.querySelectorAll('.paper-card');
    
    // Initialize count
    updateCount();
    
    // Add event listeners
    if (topicFilter) topicFilter.addEventListener('change', filterPapers);
    if (typeFilter) typeFilter.addEventListener('change', filterPapers);
    if (yearFilter) yearFilter.addEventListener('change', filterPapers);
    if (searchInput) searchInput.addEventListener('input', filterPapers);
    
    function filterPapers() {
        const topicValue = topicFilter ? topicFilter.value : 'all';
        const typeValue = typeFilter ? typeFilter.value : 'all';
        const yearValue = yearFilter ? yearFilter.value : 'all';
        const searchValue = searchInput ? searchInput.value.toLowerCase() : '';
        
        let visibleCount = 0;
        
        papers.forEach(paper => {
            const paperTopic = paper.dataset.topic;
            const paperType = paper.dataset.type;
            const paperYear = paper.dataset.year;
            const paperText = paper.textContent.toLowerCase();
            
            // Check if paper matches all filters
            const topicMatch = topicValue === 'all' || paperTopic === topicValue;
            const typeMatch = typeValue === 'all' || paperType === typeValue;
            
            let yearMatch = true;
            if (yearValue === 'older') {
                yearMatch = parseInt(paperYear) <= 2021;
            } else {
                yearMatch = yearValue === 'all' || paperYear === yearValue;
            }
            
            const searchMatch = searchValue === '' || paperText.includes(searchValue);
            
            // Show or hide paper
            if (topicMatch && typeMatch && yearMatch && searchMatch) {
                paper.classList.remove('hidden');
                visibleCount++;
            } else {
                paper.classList.add('hidden');
            }
        });
        
        updateCount(visibleCount);
    }
    
    function updateCount(count) {
        if (!researchCount) return;
        
        const totalCount = count !== undefined ? count : papers.length;
        const countText = researchCount.querySelector('strong');
        
        if (countText) {
            countText.textContent = totalCount;
        }
    }
    
    // Add sorting functionality
    const sortOptions = document.getElementById('sort-options');
    if (sortOptions) {
        sortOptions.addEventListener('change', function() {
            sortPapers(this.value);
        });
    }
    
    function sortPapers(sortBy) {
        const papersArray = Array.from(papers);
        
        papersArray.sort((a, b) => {
            if (sortBy === 'year-desc') {
                return parseInt(b.dataset.year) - parseInt(a.dataset.year);
            } else if (sortBy === 'year-asc') {
                return parseInt(a.dataset.year) - parseInt(b.dataset.year);
            } else if (sortBy === 'title') {
                const titleA = a.querySelector('.paper-title').textContent;
                const titleB = b.querySelector('.paper-title').textContent;
                return titleA.localeCompare(titleB);
            }
            return 0;
        });
        
        // Re-append papers in new order
        papersArray.forEach(paper => {
            researchList.appendChild(paper);
        });
    }
});
