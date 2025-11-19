const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active-tab'));

        // Hide all content
        contents.forEach(c => c.style.display = 'none');

        // Make clicked tab active
        tab.classList.add('active-tab');

        // Show the correct content
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).style.display = 'block';
    });
});
