class headerBar extends HTMLElement {
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

            nav {
                display: flex;
                width: 100%;
                background-color: #7AB2B2;
                justify-content: start;
                padding: 8px 0px 3px;
                position: fixed;
                z-index: 1;
                box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
            }
            
            nav .logo img {
                width: 250px;
                margin: 0 0 0 35px;
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
        <nav>
            <div class="logo">
                <img src="src/public/logo.png" alt="logo" />
            </div>
        </nav>
    `;
    }
}

customElements.define('header-bar', headerBar);