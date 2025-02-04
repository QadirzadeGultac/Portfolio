document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".main-button button");
    const sections = document.querySelectorAll(".about-me > div");

    // İlk olaraq "Home" bölməsini göstər, digərlərini gizlət
    sections.forEach(section => section.classList.add("dis-none"));
    sections[0].classList.remove("dis-none"); 

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            // Bütün bölmələri gizlət
            sections.forEach(section => section.classList.add("dis-none"));

            // Seçilmiş bölməni göstər
            sections[index].classList.remove("dis-none");

            // Bütün düymələrdən aktiv sinifi sil
            buttons.forEach(btn => btn.classList.remove("select"));

            // Aktiv olan düyməyə sinif əlavə et
            button.classList.add("select");

            // Bütün ikonları düzəlt
            buttons.forEach(btn => {
                let whiteIcon = btn.querySelector("img:first-child");
                let greyIcon = btn.querySelector("img:last-child");

                if (whiteIcon && greyIcon) {
                    whiteIcon.classList.add("dis-none");
                    greyIcon.classList.remove("dis-none");
                }
            });

            // Aktiv olan düymənin ikonlarını dəyiş
            let activeWhiteIcon = button.querySelector("img:first-child");
            let activeGreyIcon = button.querySelector("img:last-child");

            if (activeWhiteIcon && activeGreyIcon) {
                activeWhiteIcon.classList.remove("dis-none");
                activeGreyIcon.classList.add("dis-none");
            }
        });
    });
});
