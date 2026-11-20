/* =====================================
   BIRTHDAY MOMENTS
   GALLERY LIGHTBOX
===================================== */

// Ambil semua gambar gallery
const galleryImages = document.querySelectorAll(".gallery-image");

// Buat elemen lightbox
const lightbox = document.createElement("div");
lightbox.className = "lightbox";

lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Tutup foto">
        &times;
    </button>

    <div class="lightbox-content">
        <img src="" alt="">
        <p class="lightbox-caption"></p>
    </div>
`;

// Masukkan lightbox ke halaman
document.body.appendChild(lightbox);

// Ambil elemen lightbox
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector(".lightbox-caption");
const closeButton = lightbox.querySelector(".lightbox-close");


// =====================================
// FUNGSI MEMBUKA FOTO
// =====================================

function openLightbox(image) {

    // Ambil sumber foto
    lightboxImage.src = image.src;

    // Ambil deskripsi foto
    lightboxImage.alt = image.alt;

    // Ambil caption dari gallery
    const galleryItem = image.closest(".gallery-item");
    const caption = galleryItem
        ? galleryItem.querySelector(".gallery-caption p")
        : null;

    lightboxCaption.textContent = caption
        ? caption.textContent
        : image.alt;

    // Tampilkan lightbox
    lightbox.classList.add("active");

    // Cegah halaman belakang ikut scroll
    document.body.classList.add("lightbox-open");
}


// =====================================
// FUNGSI MENUTUP FOTO
// =====================================

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.classList.remove("lightbox-open");

    // Bersihkan gambar setelah animasi
    setTimeout(() => {
        if (!lightbox.classList.contains("active")) {
            lightboxImage.src = "";
        }
    }, 300);
}


// =====================================
// EVENT KLIK FOTO
// =====================================

galleryImages.forEach((image) => {

    image.style.cursor = "zoom-in";

    image.addEventListener("click", () => {
        openLightbox(image);
    });

});


// =====================================
// TOMBOL CLOSE
// =====================================

closeButton.addEventListener("click", closeLightbox);


// =====================================
// KLIK AREA LUAR FOTO
// =====================================

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


// =====================================
// TOMBOL ESCAPE
// =====================================

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        lightbox.classList.contains("active")
    ) {
        closeLightbox();
    }

});