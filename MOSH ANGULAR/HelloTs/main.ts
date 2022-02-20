let message;
message = "abc";
let endWithC = (<string>message).endsWith("c");

let ball1 = function (name) {
  console.log(name);
};

const ball2 = (name) => {
  console.log(name);
};

const ball3 = (name) => console.log(name);

const ball4 = (name) => console.log(name);

// Imagine you're working at Facebook and your job is to implement the "Like" functionality.

// When a user clicks the "Like" button below a post, the button is highlighted (to indicate that it is selected)
// and the number of likes is increased.

// You're going to implement this feature in Angular and for that you'll need to create a component.
// This component is a TypeScript class that encapsulates the data for rendering the like button
// (eg: the number of likes, and whether the button is in the on/off state).
// It also responds to user actions. So, when the user clicks the "Like" button,
// the number of likes should be increased and the button should be in the "selected/on" state.
// If the user clicks the button again, the number of likes should be decreased and the button should be in the "unselected" state.

// export class LikeComponent {
//   likesCount: number;
//   isSelected: boolean;

//   constructor(likesCount: number, isSelected: boolean) {
//     this.likesCount = likesCount;
//     this.isSelected = isSelected; // This is repetitive.
//   }
// }

//assume this is "like.component.ts" file
export class LikerComponent { // For a shorter and more cleaner code
  constructor(private _likesCount: number, private _isSelected: boolean) {
  }
  onClick(){
      // if(this.isSelected) {
      //   this.likesCount--;
      //   this.isSelected = false;
      // } else {
      //     this.likesCount++;
      //     this.isSelected = true;
      // }
      this._likesCount += (this._isSelected) ? -1 : +1;
      this._isSelected = !this._isSelected;
  }
  get likesCount() {
    return this._likesCount;
  }

  get isSelected() {
    return this._isSelected;
  }
}

//Then go open another file named "main.ts"
import { LikeComponent } from './like.component';

let component = new LikeComponent(10, true);
// component.likesCount = 2;
// component.isSelected = false;
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);
