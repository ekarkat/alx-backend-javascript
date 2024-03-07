import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const class0 = new ClassRoom(19);
  const class1 = new ClassRoom(20);
  const class2 = new ClassRoom(34);
  return [class0, class1, class2];
}
