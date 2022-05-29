import { Controller } from "@hotwired/stimulus";

export default class TasksController extends Controller {

  connect() {
    console.log('🚀 ~ file: tasks_controller.js ~ line 7 ~ element', this.element);
  }

  toggleCompleted(event) {
    const id = event.target.dataset.id;
    const completed = event.target.checked;
    const csrfToken = document.querySelector("[name='csrf-token']").content

    fetch(`/tasks/${id}/toggle`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify({ completed })
    })
    .then(response => response.json())
    .then(console.log)
  }
}
