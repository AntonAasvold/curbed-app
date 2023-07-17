import { LitElement, html, css } from 'lit';

export class SplashPage extends LitElement {

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
      setTimeout(() => {
        document.location.href = '/start';
      }, 1500);
  }

  static styles = css`
    #page-container {
      min-height: calc(100vh + 1px);
      min-width: 100vw;
    }

    #background-container {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0px;
    }
  `;

  render() {
    return html`
      <div id="page-container">
        <div id="background-container"></div>
        <p>Splash Page</p>
      </div>
    `;
  }
}

customElements.define('splash-page', SplashPage);