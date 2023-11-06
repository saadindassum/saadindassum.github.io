export default class ProjectModal {
    constructor(/*thisDoc, */banner, songTitle, boldHook, synopsis, marketingPlans, demoLink) {
        // this.thisDoc = this.thisDoc;
        this.banner = banner;
        this.songTitle = songTitle;
        this.boldHook = boldHook;
        this.synopsis = synopsis;
        this.marketingPlans = marketingPlans;
        this.demoLink = demoLink;
    }
    
    getHtmlTemplate() {
        return `
            <div class="modal__overlay">
                <div class="modal__window">
                    <div class="modal__titlebar">
                        <span class="modal__title">${this.songTitle}</span>
                    </div>
                    <div class="modal__content">
                        <p>&emsp;<strong>${this.boldHook}<strong> ${this.synopsis}</p>
                        <div class="modal__center">
                        <button class="modal__close modal__button">Okay!!!</button>
                    </div>
                    <div class="modal__content">
                    <p>${this.marketingPlans}</p>
                    <div class="modal__center">
                    <button class="modal__close modal__button">Okay!!!</button>
                    <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1657573143%3Fsecret_token%3Ds-DHgQraL7Cht&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sd-demos" title="SD Demos" target="_blank" style="color: #cccccc; text-decoration: none;">SD Demos</a> · <a href="https://soundcloud.com/sd-demos/the-mercy-of-the-moon-2025/s-DHgQraL7Cht" title="${this.songTitle}" target="_blank" style="color: #cccccc; text-decoration: none;">The Mercy Of The Moon (2023)</a></div>
                </div>
                </div>
            </div>
        `;
    }

    openModal() {
        const modalTemplate = this.getHtmlTemplate();
        document.body.insertAdjacentHTML("afterbegin", modalTemplate);
        document.body.addEventListeneraddEventListener("click", e => {
            if (e.target.classList.contains("modal__close")) {
                closeModal(e.target);
            }
        });
    }

    closeModal(closeButton) {
        const modalOverlay = closeButton.parentElement.parentElement.parentElement.parentElement;
        document.body.removeChild(modalOverlay);
        document.body.removeEventListeneraddEventListener("click", e => {
            if (e.target.classList.contains("modal__close")) {
                closeModal(e.target);
            }
        });
    }
}