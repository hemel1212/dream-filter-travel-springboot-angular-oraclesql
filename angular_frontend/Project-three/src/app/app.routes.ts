import { Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { HotelComponent } from './hotel/hotel.component';
import { CustomerComponent } from './customer/customer.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { TourPackageComponent } from './tour-package/tour-package.component';
import { AdminMainLayoutComponent } from './admin/admin-main-layout/admin-main-layout.component';
import { AdminDeshbordComponent } from './admin/admin-deshbord/admin-deshbord.component';
import { HomeMainLayoutComponent } from './home-main-layout/home-main-layout.component';
import { TransportComponent } from './transport/transport.component';
import { TourGuideComponent } from './tour-guide/tour-guide.component';
import { LogInComponent } from './log-in/log-in.component';
import { ChooseTourPackageComponent } from './choose-tour-package/choose-tour-package.component';
import { ChooseTransportComponent } from './choose-transport/choose-transport.component';
import { ChooseHotelComponent } from './choose-hotel/choose-hotel.component';
import { ChooseGuideComponent } from './choose-guide/choose-guide.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';
import { TransportBookingComponent } from './transport-booking/transport-booking.component';

export const routes: Routes = [
    {
        path: '', component: HomeMainLayoutComponent,
        children: [
            { path: '', redirectTo: 'tour-package', pathMatch: 'full' },

            { path: 'customer', component: CustomerComponent },
            { path: 'booking', component: BookingComponent },
            { path: 'hotel-booking', component: HotelBookingComponent },
            { path: 'log-in', component: LogInComponent },
            { path: 'choose-transport', component: ChooseTransportComponent },
            { path: 'choose-hotel', component: ChooseHotelComponent },
            { path: 'choose-tour-package', component: ChooseTourPackageComponent },
            { path: 'choose-guide', component: ChooseGuideComponent },
            { path: 'transport-booking', component: TransportBookingComponent },
            //admin panal
            {
                path: 'admin', component: AdminMainLayoutComponent,
                children: [
                    { path: '', redirectTo: 'admin-deshbord', pathMatch: 'full' },
                    { path: 'admin-deshbord', component: AdminDeshbordComponent },
                    { path: 'tour-package', component: TourPackageComponent },

                    { path: 'itinerary', component: ItineraryComponent },
                    { path: 'transport', component: TransportComponent },
                    { path: 'tour-guide', component: TourGuideComponent },
                    { path: 'hotel', component: HotelComponent },
                    { path: 'customer-history', component: CustomerHistoryComponent },

                ]
            },
            { path: '**', redirectTo: 'itinerary' },
        ]
    },

];
