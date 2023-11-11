import { BaseComponent } from "../baseComponent";

export default class SpecialtyCard extends BaseComponent {
  constructor(title: string, img: string, description: string) {
    const template = `
    
      <div class="card">
        <img src="${img}" class="card-img-top"/>        
        <div class="card-body specialty-card ">
            <h5 class="card-title text-center">${title}</h5>
            <p class="text-wrap">
                ${description}
            </p>                 
        </div>
     </div>   
    `;

    super(template);
  }
}
