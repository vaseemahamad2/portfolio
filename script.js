const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

if (menu && nav) {

    menu.addEventListener("click", () => {

        const isOpen = nav.classList.contains("mobile-open");

        nav.classList.toggle("mobile-open");

        nav.style.display = isOpen ? "" : "flex";
        nav.style.flexDirection = isOpen ? "" : "column";
        nav.style.position = isOpen ? "" : "absolute";
        nav.style.top = isOpen ? "" : "76px";
        nav.style.left = isOpen ? "" : "0";
        nav.style.right = isOpen ? "" : "0";
        nav.style.padding = isOpen ? "" : "20px 7%";
        nav.style.background = isOpen ? "" : "#07111f";

    });


    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 900) {

                nav.classList.remove("mobile-open");
                nav.style.display = "";

            }

        });

    });

}
