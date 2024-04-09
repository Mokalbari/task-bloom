export class ModalFormInteraction {
  constructor() {
    this.openModalBtn = document.querySelector("#openModalBtn");
    this.modalForm = document.querySelector("#modalForm");
    this.initEvent();
  }

  initEvent() {
    openModalBtn.addEventListener("click", () => {
      modalForm.showModal();
    });
  }
}
