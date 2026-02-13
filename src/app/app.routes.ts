import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Modding } from './pages/modding/modding';
import { Repairs } from './pages/repairs/repairs';
import { Restoration } from './pages/restoration/restoration';
import { Battery } from './pages/battery/battery';
import { Services } from './pages/services/services';
import { Thankyou } from './pages/thankyou/thankyou';

export const routes: Routes = [

    {path: '', component: Home},
    {path: 'about', component: About},
    {path: 'contact', component: Contact},
    {path: 'modding', component: Modding},
    {path: 'restoration', component: Restoration},
    {path: 'repairs', component: Repairs},
    {path: 'battery', component: Battery},
    {path: 'services', component: Services},
    {path: 'thankyou', component: Thankyou},

];
