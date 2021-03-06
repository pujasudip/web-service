import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NodeService } from '../../shared/services/node.service';
import { Node } from '../../shared/models/node.model';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

@Component({
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
    node: Node;

    constructor(private nodeService: NodeService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit(): void {
        this.route.params
            .mergeMap((params: Params) => {
                const id = +params['id'];
                return this.nodeService.getNode(id);
            })
            .subscribe((value: Node) => {
                if (!value) {
                    this.router.navigate(['projects']);
                    return;
                }
                this.node = value;
            });
    }

    gotoEditor(isNewProject: boolean): void {
        if (isNewProject) {
            const node = this.nodeService.createNew();
            this.router.navigate(['/projects', node.id, 'editor'], 'editor');
        } else {
            this.router.navigate(['/projects', this.node.id, 'editor']);
        }
    }
}
