export default class ProjectModal {
    constructor(bgLink, songTitle, demoLink, centerpieceTitle, centerpieceSynopsis, merchPlans, socialMediaPlans, synopsis = '', merchImg = '') {
        ///Link to the background image
        this.bgLink = bgLink;
        this.songTitle = songTitle;
        this.demoLink = demoLink;
        this.synopsis = synopsis;
        ///The main marketing project
        this.centerpieceTitle = centerpieceTitle;
        this.centerpieceSynopsis = centerpieceSynopsis;
        this.merchPlans = merchPlans;
        this.merchImg = merchImg;
        this.socialMediaPlans = socialMediaPlans
    }
    
    getHtmlTemplate() {
        return `
        <div class="modal-overlay">
            <div class="modal-window">
                <div id="modal-background">
                    <img src="${this.bgLink}">
                </div>
                <div class="modal-titlebar">
                    <div class="titlebar-container">
                        <span class="modal-title">${this.songTitle}</span>
                    </div>
                    <div class="titlebar-container">
                        <i class="fa fa-close close-button modal-close"></i>
                    </div>
                </div>
                <div class="modal-content">
                    <div class="opaque-modal-content">
                        ${this.getDemoHtml()}
                        ${this.getSynopsisTag()}
                        <h3>${this.centerpieceTitle}</h3>
                        <p>&emsp;${this.centerpieceSynopsis}</p>
                        <h3>Merch</h3>
                        <p>${this.merchPlans}.</p>
                        ${this.getMerchImgTag()}
                        <h3>Social Media Campaign</h3>
                        <p>
                            ${this.socialMediaPlans}
                        </p>
                    </div>
                    <div class="see-through"></div>
                </div>
            </div>
        </div>
        `;
    }

    openModal() {
        var navBar = document.getElementsByTagName('nav')[0];
        navBar.classList.add('hide-mobile');
        const modalTemplate = this.getHtmlTemplate();
        document.body.insertAdjacentHTML("afterbegin", modalTemplate);
        document.body.addEventListener("click", e => {
            if (e.target.classList.contains("modal-close")) {
                this.closeModal(e.target);
            }
        });
    }

    closeModal(closeButton) {
        var navBar = document.getElementsByTagName('nav')[0];
        navBar.classList.remove('hide-mobile');
        const modalOverlay = closeButton.parentElement.parentElement.parentElement.parentElement;
        document.body.removeEventListener("click", e => {
            console.log('Class list: ' + e.target.classList);
            if (e.target.classList.contains("modal-close")) {
                this.closeModal(e.target);
            }
        });
        document.body.removeChild(modalOverlay);
    }

    getDemoHtml() {
        //Basically, we have to determine whether the video is Soundcloud or YouTube.
        //Soundcloud embed links will start with https://w.soundcloud.com/
        if (this.demoLink.substring(0, 24) == 'https://w.soundcloud.com') {
            var link = this.demoLink.substring(0, 114); //We strip the link of any weird attributes
            return `
            <iframe class="soundcloud-demo" scrolling="no" frameborder="no" src="${link}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            `;
        }
        return `
        <div class="modal-video-container">
            <iframe class="music-video youtube-embed" src="${this.demoLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        `;
    }
    
    getSynopsisTag() {
        if (this.synopsis == '') return ``;
        return `<p>${this.synopsis}</p>`
    }

    getMerchImgTag() {
        if (this.merchImg == '') {
            return ``;
        }
        return `
            <img class="merch-img" src="${this.merchImg}" alt="mrc-merch.png">
        `
    }
}
console.log('Class imported!');