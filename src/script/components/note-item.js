import notesData from "../data/notes.js";

class notesItem extends HTMLElement {
    _shadowRoot = null;
    _style = null;
    _note = {
        id: null,
        title: null,
        body: null,
        createdAt: null,
    };

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = '';
    }

    set note(value) {
        this._note = value;

        this.render();
    }

    get note() {
        return this._note;
    }

    _updateStyle() {
        this._style.textContent = `
        :host {
          display: block;
        }

        .grid-wrapper {
          padding-top: 2%;
          display: grid;
        }

        .grid-wrapper .all-notes {
            margin-top: 2px;
            text-align: center;
        }

        hr {
            width: 94%;
            border: 1.8px single black;
        }
      
        .grid-wrapper .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            align-items: center;
            justify-items: center;
            gap: 2em;
            padding: 2em;
        }

        h1 {
            margin: 0 0 -2px;
            letter-spacing: 1px;
        }
        
        .grid-wrapper .grid-container .card {
            background-color: #ffffff00;
            opacity: 0.8;
            border: none;
            border-radius: 0;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            width: 90%;
            height: 90%;
            padding: 1em;
        }

        .grid-wrapper .grid-container .card .date {
          font-size: 0.70em;
          margin-top: -9px;
        }
        
        .grid-wrapper .grid-container .card .desc {
              padding-top: 1em;
              font-size: 0.90em;
          }
    `;
    }

    render() {
        this._emptyContent();
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `

          <div class="grid-wrapper">
            <h1 class="all-notes">All Notes</h1><hr>
            <div class="grid-container">
            ${notesData.map(note => `
                <div class="card">
                    <h4>${note.title}</h4>
                    <p class="date">${new Date(note.createdAt).toLocaleString()}</p>
                    <p class="desc">${note.body}</p>
                </div>
                `).join('')}
            </div><hr>
        </div>
    `;
    }
}

customElements.define('note-item', notesItem);