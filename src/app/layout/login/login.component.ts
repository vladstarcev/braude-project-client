import { Component, OnInit, Output, EventEmitter, Input, HostBinding } from "@angular/core";
import { trigger, transition, style, animate, animateChild, group, query } from "@angular/animations";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  animations: [
    trigger('animateModal', [
        transition('* <=> *', [
            query('@animateOverlay', animateChild())
        ]),
      ]),
      trigger("animateOverlay", [
        transition('void => *', [
            style({
                opacity: '1'
              }),
            animate(300)
        ]),
        transition('* => void', [
            animate(200, style({opacity: '0'}))
        ])
      ]),
      trigger("animateDialog", [
          transition('void => *', [
              style({
                  transform: 'scale3d(.5, .5, .5)',
                  opacity: '1'
                }),
              animate(300)
          ]),
          transition('* => void', [
              animate(200, style({transform: 'scale3d(.0, .0, .0)', opacity: '0'}))
          ])
  ])
]
})
export class LoginComponent {
    @Input() isModalOpen: boolean;
    @Output() emitCloseClick: EventEmitter<void> = new EventEmitter<void>();
  @HostBinding('@animateModal')
  @Input() get animateModal() {
      return this.isModalOpen ? 'in' : undefined;
  }

  handleCloseClick(): void {
    this.emitCloseClick.emit();
  }
}
