// Import the core angular services.
import { Component } from "@angular/core";

// Import the application components and services.


interface Friend {
	id: number;
	name: string;
	avatar: string;
}

@Component({
	selector: "app-dropdown",
	//styleUrls: ['./demo.css'],
	//directives: [ HtmlDropdownComponent ],

	// I our view, notice that we are providing a TemplateRef as a child element of the
	// HtmlDropdownComponent. The dropdown component will query for this template and
	// then use it to render both the option items as well as the root item.
	template:
	`
		<p>
			<strong>Best Friend</strong>: {{ bestFriend?.name || "None - selected" }}
			&mdash;
			<a (click)="clearSelection()">Clear selection</a>
		</p>

		<html-dropdown
			[items]="friends"
			[(value)]="bestFriend"
			placeholder="Select a Friend">

			<ng-template let-friend="item">
				<span class="name">
					{{ friend.name }}
				</span><img src="https://www.carstickers.com/prodimages/5847_india_country_flag_decal_sticker_small.png" style="height=20px;width:20px;" />

			</ng-template>

		</html-dropdown>
	`
})
export class AppDropdwonComponent {

	// I hold the friend that is selected as the best friend.
	public bestFriend: Friend;

	// I hold the collection of friends.
	public friends: Friend[];


	// I initialize the component.
	constructor() {

		this.bestFriend = null;
		this.friends = [
			{
				id: 1,
				name: "8765-0989-0989",
				avatar: "https://cdn3.iconfinder.com/data/icons/finalflags/256/India-Flag.png"
			},
			{
				id: 2,
				name: "1234-5434-6543",
				avatar: "kim-avatar.jpg"
			},
			{
				id: 3,
				name: "8765-8976-9836",
				avatar: "sarah-avatar.jpg"
			},
			{
				id: 4,
				name: "4387-6547-8760",
				avatar: "tricia-avatar.jpg"
			}
		];

	}


	// ---
	// PUBLIC METHODS.
	// ---


	// I clear the best-friend selection.
	public clearSelection() : void {

		this.bestFriend = null;

	}

}
