function readMore() {
    let more = document.querySelector(".more");
    let more_btn = document.querySelector(".more-btn");

    if(more.style.display === "none") {
        more.style.display = "inline";
        more_btn.innerHTML = "Скрыть";
    } else {
        more.style.display = "none";
        more_btn.innerHTML = "Показать еще...";
    }
}
