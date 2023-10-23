export class BaseComponent {
  template: string;
  parentContainer?: string;

  constructor(template: string, parentContainer?: string) {
    this.template = template;
    this.parentContainer = parentContainer;
  }

  render() {
    if (this.parentContainer) {
      document.querySelector<HTMLDivElement>(this.parentContainer)!.innerHTML =
        this.getElement();
    }
  }

  getElement() {
    return this.template;
  }
}
