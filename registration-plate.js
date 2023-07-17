import { LitElement, html, css } from 'lit';

export class RegistrationPlate extends LitElement {

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
    #registration-plate {
      width: 250px;
      height: 70px;
      display: flex;
      flex-direction: row;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.4);
    }

    #registration-plate-input {
      height: 70;
      width: 100%;
      border: 0px;
      border-radius: 0 5px 5px 0;
      text-align: center;
      letter-spacing: 3px;
      padding-top: 13px;

      font-family: "DIN1451";
      font-size: 45px;

      background: #ffffff;
    }

    #registration-plate-input::nth-child(4) {
      letter-spacing: 5px;
    }

    #country-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 5px 0 0 5px;
      width: 35px;
      height: 70px;
      background-color: #006796;
    }

    #eu-logo {
      padding-top: 5px;
      width: 25px;
      //transform: scale(0.1, 0.1);
    }

    #country {
      padding-top: 6px;
      font-family: "DIN1451";
      font-size: 20px;
      color: #ffffff;
    }
  `;

  render() {
    return html`
      <div id="registration-plate">
      <div id="country-container">
        <svg id="eu-logo" xmlns="http://www.w3.org/2000/svg" viewBox="2.013 2 233.492 231.957">
          <path fill="#FC0" d="M118.76 2l-3.77 11.598h-12.22l9.88 7.17-3.77 11.636 9.879-7.171 9.878 7.17-3.768-11.634 9.84-7.171h-12.182L118.76 2zM68.38 15.5l-3.768 11.635h-12.22l9.878 7.17-3.768 11.599 9.84-7.171 9.88 7.17-3.77-11.597 9.879-7.171H72.15L68.38 15.5zm100.759 0l-3.77 11.635h-12.22l9.88 7.17-3.77 11.599 9.879-7.171 9.879 7.17-3.77-11.597 9.879-7.171h-12.22L169.139 15.5zM31.465 52.416l-3.768 11.598H15.513l9.842 7.17-3.77 11.599 9.879-7.171 9.879 7.17-3.77-11.597 9.879-7.171h-12.22l-3.767-11.598zm174.553 0l-3.77 11.598h-12.182l9.842 7.134-3.77 11.634 9.879-7.171 9.879 7.17-3.77-11.597 9.879-7.171h-12.22l-3.767-11.597zM17.965 102.795l-3.77 11.598H2.014l9.842 7.17-3.77 11.599 9.916-7.172 9.842 7.172-3.77-11.598 9.879-7.171h-12.22l-3.767-11.598zm201.553 0l-3.768 11.598h-12.184l9.842 7.17-3.77 11.599 9.879-7.172 9.879 7.172-3.77-11.562 9.879-7.208h-12.22l-3.767-11.597zM31.465 153.173l-3.768 11.598H15.513l9.842 7.172-3.77 11.635 9.879-7.172 9.879 7.172-3.77-11.635 9.879-7.172h-12.22l-3.767-11.598zm174.553 0l-3.77 11.598h-12.182l9.842 7.172-3.77 11.635 9.879-7.172 9.879 7.172-3.77-11.635 9.879-7.172h-12.22l-3.767-11.598zM68.38 190.052l-3.77 11.635h-12.22l9.879 7.17-3.768 11.599 9.878-7.171 9.842 7.17-3.77-11.597 9.879-7.171H72.15l-3.77-11.635zm100.758 0l-3.77 11.635h-12.22l9.88 7.135-3.77 11.634 9.879-7.171 9.879 7.17-3.77-11.633 9.879-7.135h-12.22l-3.767-11.635zm-50.38 13.5l-3.768 11.635h-12.22l9.879 7.135-3.77 11.635 9.879-7.172 9.878 7.172-3.768-11.635 9.84-7.135h-12.182l-3.767-11.635z"/>
        </svg>
        <span id="country">S</span>
      </div>
      <input id="registration-plate-input" type="text" VALUE="NTG11D"/>
      </div>
    `;
  }
}

customElements.define('registration-plate', RegistrationPlate);