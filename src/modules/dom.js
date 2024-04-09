export class ModalDomReference {
  constructor() {
    this.openModalBtn = document.querySelector("#openModalBtn");
    this.closeModalBtn = document.querySelector("#closeModalBtn");
    this.modalForm = document.querySelector("#modalForm");
  }
}

export class ModalEvents extends ModalDomReference {
  constructor() {
    super();
    this.initEvent();
    this.closeModal();
  }

  initEvent() {
    this.openModalBtn.addEventListener("click", () => {
      this.modalForm.showModal();
    });
  }

  closeModal() {
    this.closeModalBtn.addEventListener("click", () => {
      this.modalForm.close();
    });
  }
}
