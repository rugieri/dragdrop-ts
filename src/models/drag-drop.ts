// Drag & Drop Interfaces


  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndhandler(event: DragEvent): void;
  }
  
  export interface DragTarget {
    dragOverHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
    dragLeaveHandler(event: DragEvent): void;
    
  }


