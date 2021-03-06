import { Component } from '@angular/core';
import { Path } from '../shared/models/path.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SplitPanelLoginComponent } from '../split-panel-login/split-panel-login.component';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';

@Component({
    selector: 'app-main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
    paths: Path[];

    constructor(private modalService: NgbModal,
                private userService: UserService) {
        this.paths = [
            {title: 'Home', url: 'home'},
            {title: 'Projects', url: 'projects'},
            {title: 'Debug', url: 'debug'},
            {title: 'Demo', url: 'demo'}
        ];
    }

    onClick(): void {
        this.modalService
            .open(SplitPanelLoginComponent, {size: 'lg'});
    }

    get currentUser(): User {
        return this.userService.currentUser;
    }

    logout(): void {
        this.userService.logout();
    }
}
