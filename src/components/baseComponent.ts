export class BaseComponent {
  template: string;

  constructor(template: string) {
    this.template = template;
  }

  getElement() {
    return this.template;
  }
}
