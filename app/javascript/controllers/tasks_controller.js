import { Controller } from "@hotwired/stimulus";

export default class TasksController extends Controller {

  connect() {
    console.log('🚀 ~ file: tasks_controller.js ~ line 7 ~ element', this.element);
  }

  toggleCompleted(event) {
    const id = event.target.dataset.id;
    console.log('🚀 ~ file: tasks_controller.js ~ line 11 ~ id', id);
    const completed = event.target.checked;
    console.log('🚀 ~ file: tasks_controller.js ~ line 12 ~ completed', completed);
  }
}
