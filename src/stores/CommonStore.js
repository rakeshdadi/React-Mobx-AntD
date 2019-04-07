import { observable } from 'mobx';

class CommonStore {
    @observable ordersList = [
        {
            orderNumber : '#1234',
            status: 'on_hold',
            date: '04/2019',
            name : 'ksjdsk',
            strips: '15Rxs'
        },
        {
            orderNumber : '#2546',
            status: 'in_process',
            date: '02/2019',
            name : 'sdmsd,smd',
            strips: '3Rxs'   
        }
    ];

    @observable orderStatus = 'on_hold';
}

export default new CommonStore();
