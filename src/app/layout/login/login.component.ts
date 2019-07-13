import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    animations: [
        trigger('host', [
            transition(':leave', [
                query('@overlay, @dialog', [
                    animateChild()
                ])
            ]),
            transition(':enter', [
                query('@overlay, @dialog', [
                    animateChild()
                ])
            ]),
        ]),
        trigger('dialog', [
            transition(':leave', [
                style({
                    transform: 'scale(1)'
                }),
                animate('100ms ease-out', style({
                    transform: 'scale(1.2)'
                })),
                animate('300ms ease-in', style({
                    transform: 'scale(0)'
                }))
            ]),
            transition(':enter', [
                style({
                    transform: 'scale(0.5)'
                }),
                animate('200ms ease-out', style({
                    transform: 'scale(1.2)'
                })),
                animate('100ms ease-out', style({
                    transform: 'scale(1)'
                }))
            ]),
        ]),
        trigger('overlay', [
            transition(':leave', [
                style({
                    opacity: 1,
                }),
                animate('230ms ease-in', style({
                    opacity: 0,
                }))
            ]),
            transition(':enter', [
                style({
                    opacity: 0,
                }),
                animate('230ms ease-in', style({
                    opacity: 1,
                }))
            ]),
        ])
    ]
})
export class LoginComponent {
    @Output() emitCloseClick: EventEmitter<void> = new EventEmitter<void>();
    @HostBinding('@host') host;

    handleCloseClick(): void {
        this.emitCloseClick.emit();
    }
}
