import { Controller } from "@hotwired/stimulus";

export default class TasksController extends Controller {

  connect() {
    console.log('🚀 ~ file: tasks_controller.js ~ line 7 ~ element', this.element);
  }
}
