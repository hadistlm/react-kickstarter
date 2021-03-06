export const Data = {
    menus: [{
        header: true,
        name: 'Dashboard'
    },
    {
        name: 'Dashboard',
        active: true,
        icon: 'fas fa-tachometer-alt',
        url: "/"
    },
    {
        header: true,
        name: 'Testing Grid'
    },
    {
        dropdown: true,
        name: 'Testing',
        icon: 'fas fa-vials',
        children: [{
            name: 'MUI',
            url: '/testing/mui'
        }, {
            name: 'AG Grid',
            url: '/testing/ag'

        }, {
            name: 'Handsontable',
            url: '/testing/handson'
        }]
    }]
};