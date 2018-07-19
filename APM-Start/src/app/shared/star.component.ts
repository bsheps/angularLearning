import { Component, OnChanges, Input } from "../../../node_modules/@angular/core";
import { NgOnChangesFeature } from "../../../node_modules/@angular/core/src/render3";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
    onClick(): void{
        console.log(`The rating ${this.rating} was clicked`);
    }
}
