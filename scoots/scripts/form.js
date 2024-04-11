document.getElementById('start-date').addEventListener('change', function() {
    document.getElementById('end-date').min = this.value;
});