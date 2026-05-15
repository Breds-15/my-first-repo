document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA PARA AMPLIAR IMÁGENES ---
    const modal = document.getElementById("certModal");
    const imgAmpliada = document.getElementById("imgAmpliada");
    const btnCerrar = document.querySelector(".close-modal");
    const certs = document.querySelectorAll(".clickable-cert");

    certs.forEach(cert => {
        cert.onclick = function() {
            modal.style.display = "block";
            imgAmpliada.src = this.src;
        }
    });

    // Cerrar al hacer clic en la (X) o fuera de la imagen
    if(btnCerrar) btnCerrar.onclick = () => modal.style.display = "none";
    if(modal) modal.onclick = () => modal.style.display = "none";

    // --- LÓGICA PARA DESCARGA (Impresión) ---
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // Efecto visual: Las fotos se aclaran al pasar el mouse
    const certImages = document.querySelectorAll('.cert-photo-card img');
    certImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.filter = "brightness(1.2)";
        });
        img.addEventListener('mouseout', () => {
            img.style.filter = "brightness(1)";
        });
    });
});