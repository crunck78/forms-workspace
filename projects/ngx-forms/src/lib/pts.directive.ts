import { Directive, ElementRef } from '@angular/core';
import { CanvasForm, CanvasSpace, Create, Group, Const, Circle } from 'pts';

@Directive({
  selector: '[libPts]'
})
export class PtsDirective {
  space!: CanvasSpace;
  form!: CanvasForm;
  lines: Group[] = [];

  constructor(private canvas: ElementRef<HTMLCanvasElement>) {
    this.initPtsSpace();
    this.drawGraphic();
  }

  initPtsSpace() {
    this.space = new CanvasSpace(this.canvas.nativeElement);
    this.space.setup({ bgcolor: "#2d2d1a", retina: true, resize: true });
    this.form = this.space.getForm();
  }

  drawGraphic() {

    this.space.add({
      start: (bound) => { this.createRandomLines(); },
      resize: (bound) => { this.createRandomLines(); },

      animate: (time, ftime) => {

        // define a range from the pointer
        let range = Circle.fromCenter(this.space.pointer, 100);
        this.form.stroke("#fff").lines(this.lines);

        for (let i = 0, len = this.lines.length; i < len; i++) {

          // check rays and lines intersection with pointer's range
          let inPath = Circle.intersectRay2D(range, this.lines[i]);
          let inLine = Circle.intersectLine2D(range, this.lines[i]);

          if (inPath.length > 1) {
            this.form.stroke("rgba(255,255,255,.15)").line(this.lines[i].concat(inPath[0], inPath[1]));
            this.form.stroke("#fe6").line(this.lines[i]);
            this.form.fillOnly("#fff").points(inPath, 1, "circle");
          }

          if (inLine.length > 0) {
            this.form.stroke("#f03").line(this.lines[i]);
            this.form.fillOnly("#f03").points(inLine, 3, "circle");
          }
        }
      }

    });

    this.space.bindMouse().bindTouch().play();
  }

  createRandomLines() {
    this.lines = [];
    const ps = Create.distributeRandom(this.space.innerBound, 50);
    for (let i = 0, len = ps.length; i < len; i++) {
      this.lines.push(
        new Group(ps[i],
          ps[i].clone().toAngle(Math.random() * Const.pi, Math.random() * this.space.size.y / 2 + 20, true)));
    }
  };

}
