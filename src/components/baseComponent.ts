export class BaseComponent {
  template: string;

  constructor(template: string, parentContainer?: string) {
    this.template = template;
    if (parentContainer) {
      document.querySelector<HTMLDivElement>(parentContainer)!.innerHTML =
        this.getElement();
    }
  }

  getElement() {
    return this.template;
  }
}
