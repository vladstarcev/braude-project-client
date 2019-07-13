import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() emitClick: EventEmitter<void> = new EventEmitter<void>();
    handleLoginClick(): void {
        this.emitClick.emit();
    }
}
