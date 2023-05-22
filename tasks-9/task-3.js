function moveDivs() {
    const $divs = $("h3 + div");
    if ($divs.length > 0) {
        $divs.each(function () {
            $(this).insertBefore($(this).prev("h3"));
        });
        moveDivs();
    }
}
moveDivs();