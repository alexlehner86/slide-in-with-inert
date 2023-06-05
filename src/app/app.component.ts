import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public isFormVisible = false;

    public toggleForm(): void {
        this.isFormVisible = !this.isFormVisible;
    }
}
