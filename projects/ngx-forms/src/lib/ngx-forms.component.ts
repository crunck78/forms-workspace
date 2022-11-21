import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CanvasForm, CanvasSpace, Create, Group, Const, Circle } from 'pts';

@Component({
  selector: 'lib-ngx-forms',
  templateUrl: './ngx-forms.component.html',
  styleUrls: ['./ngx-forms.component.scss']
})
export class NgxFormsComponent implements OnInit, AfterViewInit {

  @ViewChild('cnv') canvas!: ElementRef<HTMLCanvasElement>;
  space!: CanvasSpace;
  form!: CanvasForm;
  lines: Group[] = [];

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
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
      start: (bound) => { this.createLines(); },
      resize: (bound) => { this.createLines(); },

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

    // this.space.add({
    //   start: this.setUpDraw.bind(this),
    //   animate: this.graphic.bind(this),
    // });
    // this.space.play();
  }

  setUpDraw(bound: any) {
    console.log(bound);
  }

  graphic(time: any, ftime: any) {
    console.log(time, ftime);
  }

  onResize() {
    this.redraw();
  }

  redraw() {
    this.space.removeAll();
    this.initPtsSpace();
    this.drawGraphic();
  }



  // function to create random lines
  createLines() {
    this.lines = [];
    const ps = Create.distributeRandom(this.space.innerBound, 50);
    for (let i = 0, len = ps.length; i < len; i++) {
      this.lines.push(
        new Group(ps[i],
          ps[i].clone().toAngle(Math.random() * Const.pi, Math.random() * this.space.size.y / 2 + 20, true)));
    }
  };

}
