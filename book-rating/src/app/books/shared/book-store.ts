import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class BookStore {
    #http = inject(HttpClient);
    #apiBaseUrl = 'https://api.angular.schule';
}