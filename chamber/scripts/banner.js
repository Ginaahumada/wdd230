
const today = new Date().getDay();
const showBanner = today >= 1 && today <= 3;

    if (showBanner) {
        document.getElementById('banner').style.display = 'block';
    }

    function closedBanner() {
        document.getElementById('banner').style.display = 'none';
    }