import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $('.open-modal');
		this.modal = $('.modal');
		this.closeModalButton = $('.modal__close');
		this.events();
	}

	events() {
		// clicking the modal button event
		this.openModalButton.click(this.openModal.bind(this));
		// clicking the close button event
		this.closeModalButton.click(this.closeModal.bind(this));
		// pushing any key event
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(event) {
		if(event.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass('modal--visible');
		return false; // to stop browser from moving to the top of the page
	}

	closeModal() {
		this.modal.removeClass('modal--visible');
	}
}

export default Modal;