import { IPageData} from '../page-data'
import * as remove from './order-delete.apis'
import * as edit from './order-edit.apis'
import * as view from './order-view.apis'

class OrderPageData implements IPageData {
    public name = 'entry_detail'
    public url = '/datacatalog/projects/uat-env-1/locations/US/entryGroups/@bigquery/entries/cHJvamVjdHMvdWF0LWVudi0xL2RhdGFzZXRzL2ZhY2lsaXRpZXNfZXovdGFibGVzL2J1c2luZXNzX2ludmVudG9yaWVzXzE?project=uat-env-1'
    public apis = [].concat(
        edit.apis,
        view.apis,
        remove.apis)

    public constructor(url?: string) {
        if (url) {
            this.url = url
        }
    }
}

export { OrderPageData }
