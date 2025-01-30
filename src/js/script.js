// start: Sidebar
const sidebarToggle = document.querySelector('.sidebar-toggle')
const sidebarOverlay = document.querySelector('.sidebar-overlay')
const sidebarMenu = document.querySelector('.sidebar-menu')
const main = document.querySelector('.main')
if(window.innerWidth < 768) {
    main.classList.toggle('active')
    sidebarOverlay.classList.toggle('hidden')
    sidebarMenu.classList.toggle('-translate-x-full')
}
sidebarToggle.addEventListener('click', function (e) {
    e.preventDefault()
    main.classList.toggle('active')
    sidebarOverlay.classList.toggle('hidden')
    sidebarMenu.classList.toggle('-translate-x-full')
})
sidebarOverlay.addEventListener('click', function (e) {
    e.preventDefault()
    main.classList.add('active')
    sidebarOverlay.classList.add('hidden')
    sidebarMenu.classList.add('-translate-x-full')
})

// end: Sidebar

// side bar menu toggle

document.addEventListener('DOMContentLoaded', function() {
    // Handle dropdown toggles
    document.querySelectorAll('.sidebar-dropdown-toggle').forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = item.closest('.group');
            if (parent.classList.contains('selected')) {
                parent.classList.remove('selected');
            } else {
                document.querySelectorAll('.group').forEach(function(group) {
                    group.classList.remove('selected');
                });
                parent.classList.add('selected');
            }
        });
    });

    // Handle link activation
    document.querySelectorAll('.sidebar-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Deactivate all links and remove 'active' class from their parent groups
            document.querySelectorAll('.sidebar-link').forEach(function(i) {
                i.classList.remove('active');
                const parentGroup = i.closest('.group');
                if (parentGroup) {
                    parentGroup.classList.remove('active');
                }
            });
            
            // Activate the clicked link
            link.classList.add('active');

            // Ensure that the parent dropdown (if any) is marked as active
            const parentDropdown = link.closest('.group');
            if (parentDropdown) {
                parentDropdown.classList.add('active');
            }

            // Close all dropdowns except the one containing the active link
            document.querySelectorAll('.group').forEach(function(group) {
                if (!group.contains(link)) {
                    group.classList.remove('selected');
                }
            });

            // Mark the parent dropdown of the active link as selected
            if (parentDropdown) {
                parentDropdown.classList.add('selected');
            }
        });
    });
});

// side bar menu toggle