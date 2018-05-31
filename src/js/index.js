
class App {
	
  static init() {
    App.box = document.getElementsByClassName('content')[0];

    App.box.addEventListener("dragstart", App.dragstart);
    App.box.addEventListener("dragend", App.dragend);

    const containers = document.getElementsByClassName('module');

    for(const container of containers) {
      container.addEventListener("dragover", App.dragover);
      container.addEventListener("dragenter", App.dragenter);
      container.addEventListener("dragleave", App.dragleave);
      container.addEventListener("drop", App.drop);
    }
  }

  static dragstart() {
    this.className += " content-targeted";
    setTimeout(() => this.className="content-invisible", 0);
  }

  static dragend() {
    this.className = "content";
  }

  static dragover(e) {
    e.preventDefault();
  }

  static dragenter(e) {
    e.preventDefault();
    this.className += " module-hovered";
  }

  static dragleave() {
    this.className = "module";
  }

  static drop() {
    this.className = "module";
    this.append(App.box);
  }

}

document.addEventListener("DOMContentLoaded", App.init);