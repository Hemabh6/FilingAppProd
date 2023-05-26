import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import {AngularFireAuthGuard,redirectLoggedInTo,redirectUnauthorizedTo} from '@angular/fire/compat/auth-guard';
import { AuthenticationGuard } from './shared/authentication.guard';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['page-login']);
const redirectLoggedInToSendEmail = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  { path: '', redirectTo: '/pages-login', pathMatch: "full" },
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthenticationGuard]},
  { path: 'alerts', component: AlertsComponent ,canActivate: [AuthenticationGuard]},
  { path: 'accordion', component: AccordionComponent,canActivate: [AuthenticationGuard] },
  { path: 'badges', component: BadgesComponent ,canActivate: [AuthenticationGuard]},
  { path: 'breadcrumbs', component: BreadcrumbsComponent ,canActivate: [AuthenticationGuard]},
  { path: 'buttons', component: ButtonsComponent,canActivate: [AuthenticationGuard] },
  { path: 'cards', component: CardsComponent ,canActivate: [AuthenticationGuard]},
  { path: 'carousel', component: CarouselComponent ,canActivate: [AuthenticationGuard]},
  { path: 'charts-apexcharts', component: ChartsApexchartsComponent,canActivate: [AuthenticationGuard] },
  { path: 'charts-chartjs', component: ChartsChartjsComponent,canActivate: [AuthenticationGuard] },
  { path: 'form-editors', component: FormsEditorsComponent,canActivate: [AuthenticationGuard] },
  { path: 'form-elements', component: FormsElementsComponent,canActivate: [AuthenticationGuard] },
  { path: 'form-layouts', component: FormsLayoutsComponent,canActivate: [AuthenticationGuard] },
  { path: 'icons-bootstrap', component: IconsBootstrapComponent,canActivate: [AuthenticationGuard] },
  { path: 'icons-boxicons', component: IconsBoxiconsComponent,canActivate: [AuthenticationGuard] },
  { path: 'icons-remix', component: IconsRemixComponent,canActivate: [AuthenticationGuard] },
  { path: 'list-group', component: ListGroupComponent,canActivate: [AuthenticationGuard] },
  { path: 'modal', component: ModalComponent,canActivate: [AuthenticationGuard] },
  { path: 'pagination', component: PaginationComponent,canActivate: [AuthenticationGuard] },
  { path: 'progress', component: ProgressComponent,canActivate: [AuthenticationGuard] },
  { path: 'spinners', component: SpinnersComponent,canActivate: [AuthenticationGuard] },
  { path: 'tables-data', component: TablesDataComponent,canActivate: [AuthenticationGuard] },
  { path: 'tables-general', component: TablesGeneralComponent,canActivate: [AuthenticationGuard] },
  { path: 'tabs', component: TabsComponent,canActivate: [AuthenticationGuard] },
  { path: 'tooltips', component: TooltipsComponent,canActivate: [AuthenticationGuard] },
  { path: 'pages-blank', component: PagesBlankComponent },
  { path: 'pages-contact', component: PagesContactComponent,canActivate: [AuthenticationGuard] },
  { path: 'pages-error404', component: PagesError404Component },
  { path: 'pages-faq', component: PagesFaqComponent,canActivate: [AuthenticationGuard] },
  { path: 'pages-login', component: PagesLoginComponent},
  { path: 'pages-register', component: PagesRegisterComponent ,canActivate: [AuthenticationGuard]},
  { path: 'user-profile', component: UsersProfileComponent,canActivate: [AuthenticationGuard] },
  {path:'header',component:HeaderComponent,canActivate: [AuthenticationGuard]},
  {path:'sidebar',component:SidebarComponent,canActivate: [AuthenticationGuard]},
  {path:'**',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


