import http from './http-common'
import moment from 'moment'

class CovidDataService {
    getAll() {
        return http.get('/all')
    }
    getSpecificCountry(country) {
        return http.get(`/countries/${country}`)
    }
    getCountries() {
        return http.get('/countries')
    }
}

export default new CovidDataService