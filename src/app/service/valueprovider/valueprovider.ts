import { InjectionToken } from "@angular/core";
import { IValueProvider } from './IValueProvider';


export let valueProvider = new InjectionToken<IValueProvider>('valueprovider');

export let VALUE_CONFIG: IValueProvider = {
    pageSize: 10,
    appicationTitle: 'Employee Management App',
    pageSizeOptions: [10, 20, 30, 40]
}