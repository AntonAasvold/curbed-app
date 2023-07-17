import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';

class CurbedApp extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    #background {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      z-index: 100;
      background: url("../assets/start-page-background.png") no-repeat;
      background-size: cover;
    }

    #outlet {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 200;
    }

    main {
      flex-grow: 1;
    }

    #outlet > .leaving {
      animation: 400ms fadeOut ease-in-out;
    }

    #outlet > .entering {
      animation: 400ms fadeIn ease-in-out;
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  firstUpdated() {
    this.initiateRouter();
  }

    /* ------------------------------------------------------------------------------------ */
  /* Initiate router & define routes */
  initiateRouter() {

    const outletElement = this.shadowRoot.getElementById('outlet')  
    this.router = new Router(outletElement)
    
    this.router.setRoutes([
      {
        path: '/',
        component: 'splash-page',
        action: async () => { await import('./splash-page') },
        animate: true
      },
      {
        path: '/start',
        component: 'start-page',
        action: async () => { await import('./start-page') },
        animate: true
      },
      {
        path: '/share-emotion',
        component: 'share-emotion-page',
        action: async () => { await import('./registration-plate') },
        animate: true
      },
    ]);
  }

  render() {
    return html`
      <div id="outlet"></div>
      <div id="background"></div>
    `;
  }
}

customElements.define('curbed-app', CurbedApp);