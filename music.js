// ======================================
// BIRTHDAY MOMENTS - MUSIC JAVASCRIPT
// ======================================

const birthdayMusic = document.getElementById("birthdayMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");

// Cek elemen musik dan tombol
if (birthdayMusic && musicToggle && musicLabel) {

    // Volume musik
    birthdayMusic.volume = 0.5;

    // Tombol Play dan Pause
    musicToggle.addEventListener("click", async function () {

        if (birthdayMusic.paused) {

            try {
                await birthdayMusic.play();

                musicToggle.classList.add("playing");
                musicToggle.setAttribute("aria-pressed", "true");
                musicLabel.textContent = "Pause Music";

            } catch (error) {

                console.error("Musik gagal diputar:", error);

                musicLabel.textContent = "Play Music";

                alert(
                    "Musik belum bisa diputar. Periksa file birthday.mp3 dan format audionya."
                );
            }

        } else {

            birthdayMusic.pause();

            musicToggle.classList.remove("playing");
            musicToggle.setAttribute("aria-pressed", "false");
            musicLabel.textContent = "Play Music";

        }

    });

    // Jika musik selesai
    birthdayMusic.addEventListener("ended", function () {

        musicToggle.classList.remove("playing");
        musicToggle.setAttribute("aria-pressed", "false");
        musicLabel.textContent = "Play Music";

    });

    // Jika file musik error
    birthdayMusic.addEventListener("error", function () {

        musicToggle.classList.remove("playing");
        musicToggle.setAttribute("aria-pressed", "false");
        musicLabel.textContent = "Music Error";

        console.error(
            "File musik tidak ditemukan atau format tidak didukung."
        );

    });

}