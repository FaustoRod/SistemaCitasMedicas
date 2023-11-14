import { BaseComponent } from "../baseComponent.ts";

export default class Footer extends BaseComponent {
  constructor() {
    const template = `
         <div class="container-fluid header-bg mt-auto">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <div class="col-12 col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
                    </a>
                    <span class="mb-3 mb-md-0 text-white">© 2023 CITAMED</span>
                </div>
                
                <div class="col-12 col-md-4 text-center">
                    <a class="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">Fausto Emil Rodriguez Villar</a>
                </div>
                
                <ul class="nav col-12 col-md-4 justify-content-center justify-content-md-end list-unstyled d-flex text-white">
                    <li class="ms-3"><a class="text-white" href="#"><i class="fa-brands fa-x-twitter fa-xl"></i></a>
                    </li>
                    <li class="ms-3"><a class="text-white" href="#"><i class="fa-brands fa-instagram fa-xl"></i></a>
                    </li>
                    <li class="ms-3"><a class="text-white" href="#"><i class="fa-brands fa-facebook fa-xl"></i></a></li>
                </ul>
            </footer>
        </div>
            `;

    super(template, "#footer");

    // document.querySelector<HTMLDivElement>("#footer")!.innerHTML =
    //   this.getElement();
  }
}
