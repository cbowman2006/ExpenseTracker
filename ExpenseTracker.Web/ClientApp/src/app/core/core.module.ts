import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";


@NgModule({
    imports: [SharedModule, RouterModule],
    declarations: [NavMenuComponent, FooterComponent],
    providers: [],
    exports: [NavMenuComponent, FooterComponent]
})

export class CoreModule { }