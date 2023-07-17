import { LitElement, html, css } from 'lit';
import './registration-plate';

export class StartPage extends LitElement {

  static get properties() {
    return {
      /* -------------------------------------------------- */
      /* Private reactive properties */
      test: { attribute: false, type: Object },
    };
  }

  constructor() {
    super();
  }

  firstUpdated() {

  }

  static styles = css`
    #page-container {

    }

    #header-container {
      height: 30vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    #center-container {
      height: 40vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    #footer-container {
      height: 30vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      //background-color: #134a8d;
    }

    #links-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 10px;
      //background-color: #c345a8;
    }

    #logo {
      font-family: "PermanentMarker";
      font-size: 60px;
      color: rgba(255, 184, 0, 1);
      text-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
    }

    #logo-subtitle {
      font-family: "PermanentMarker";
      font-size: 15px;
      color: rgba(255, 255, 255, 1);
      text-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
    }

    .links {
      font-family: "PermanentMarker";
      font-size: 22px;
      color: rgba(255, 184, 0, 1);
      text-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
    }
  `;

  render() {
    return html`
      <div id="page-container">
        <div id="header-container">
          <span id="logo">CURBED</span>
          <span id="logo-subtitle">FREE YOUR INNER ROAD RAGE</span>
        </div>
        <div id="center-container">
          <registration-plate></registration-plate>
        </div>
        <div id="footer-container">
          <div id="links-container">
            <span class="links">SHARE YOUR EMOTIONS</span>
            <span class="links">VEHICLE LOOKUP</span>
            <span class="links">STATISTICS</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('start-page', StartPage);