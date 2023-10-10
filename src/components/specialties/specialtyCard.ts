import { BaseComponent } from "../baseComponent";

export default class SpecialtyCard extends BaseComponent {
  constructor(title: string, img: string, description: string) {
    const template =
      /*html */
      `
    <div class="col-12 col-lg-3">
      <div class="card">
        <img
         src="${img}"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p>
                  ${description}
                </p>                 
              </div>
            </div>
    </div>    
    `;

    super(template);
  }
}
