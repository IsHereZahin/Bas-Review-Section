document.querySelectorAll('.collapse-button').forEach(button => {
    button.addEventListener('click', function() {
        var dataTableId = this.getAttribute('data-target');
        var dataTable = document.getElementById(dataTableId);
        var headerContainer = this.closest('.header-container');

        // Close all other tables and deactivate their buttons and headers
        document.querySelectorAll('.table-container').forEach(table => {
            if (table.id !== dataTableId) {
                table.style.display = 'none';
                var otherButton = document.querySelector(`.collapse-button[data-target="${table.id}"]`);
                var otherHeader = otherButton.closest('.header-container');
                otherButton.classList.remove('active');
                otherButton.classList.add('inactive');
                otherButton.innerHTML = '<i class="fa fa-chevron-down"></i>';
                otherHeader.classList.remove('active');
            }
        });

        // Toggle the current table and header
        if (dataTable.style.display === 'none' || dataTable.style.display === '') {
            dataTable.style.display = 'block';
            this.classList.remove('inactive');
            this.classList.add('active');
            this.innerHTML = '<i class="fa fa-chevron-up"></i>';
            headerContainer.classList.add('active');
        } else {
            dataTable.style.display = 'none';
            this.classList.remove('active');
            this.classList.add('inactive');
            this.innerHTML = '<i class="fa fa-chevron-down"></i>';
            headerContainer.classList.remove('active');
        }
    });
});
