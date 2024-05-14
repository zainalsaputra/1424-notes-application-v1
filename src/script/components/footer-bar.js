class footerBar extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
    }

    _updateStyle() {
        this._style.textContent = `
            :host {
                display: block;
            }

            footer {
                bottom: 0;
                padding: 2px;
                width: 100%;
                color: rgb(100 116 139);
                background-color: #000000;
                text-align: end;
                font-weight: 500;
                font-size: 0.9rem;
            }

            footer p {
                color: white;
                font-size: 1.2em;
                font-weight: 700;
                margin-right: 3%;
            }
            
            @media screen and (max-width: 768px) {
                footer {
                    font-size: 0.7em;
                }
            }
            
            @media screen and (max-width: 576px) {
                footer {
                    font-size: 0.6em;
                }
            }
        `;
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = '';
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._emptyContent();
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `
        <footer>
            <p>Notes Application</p>
        </footer>
    `;
    }
}

customElements.define('footer-bar', footerBar);