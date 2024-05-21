const ModalWindow = {
    init() {
        document.body.addEventListener("click", e => {
            if (e.target.classList.contains("modal__close")) {
                this.closeModal(e.target);
            }
        });
    },

    getHtmlTemplate(modalOptions) {
        return `
            <div class="modal__overlay">
                <div class="modal__window">
                    <div class="modal__titlebar">
                        <span class="modal__title">${modalOptions.title}</span>
                    </div>
                    <div class="modal__content">
                        <p>${modalOptions.content}</p>
                        <div class="modal__center">
                        <button class="modal__close modal__button">Okay!</button>
                    </div>
                    </div>
                </div>
            </div>
        `;
    },

    openModal(modalOptions = {}) {
        modalOptions = Object.assign({
            title: 'Modal Title',
            content: 'Modal Content'
        }, modalOptions);

        const modalTemplate = this.getHtmlTemplate(modalOptions);
        document.body.insertAdjacentHTML("afterbegin", modalTemplate);
    },

    closeModal(closeButton) {
        const modalOverlay = closeButton.parentElement.parentElement.parentElement.parentElement;
        document.body.removeChild(modalOverlay);
    },
};

document.addEventListener("DOMContentLoaded", () => {
    ModalWindow.init();
    ModalWindow.openModal({
        title: 'READ ME',
        content: '&emsp;Welcome to the GAMEPLAN site. GAMEPLAN includes future Saadin Dassum releases and marketing plans. By accessing this section of the site, you are agreeing not to share it or the content within, including any unreleased material linked to by the site. All intellectual property on this site belongs to Saadin Dassum. For any inquiries, please get in touch with Saadin Dassum.<br><br>&emsp;Other than that, Desktop users, make sure your volume\'s on, and feel free to explore!'
    });
});