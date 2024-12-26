export const routesAdmin = Object.fromEntries(
    Object.entries({
        admin: '',
        adminProduct: 'product',
        adminListProduct: 'listproduct',
        adminCategory: 'category',
        adminListCategory: 'listcategory',
        adminListConfirmOrder: 'confirmorder',
        adminListCancelOrder: 'cancelorder',
        adminListBill: 'bill',
        adminRevenue: 'revenue',
        adminProfile: 'profile',
        adminChangePass: 'changepass',
    }).map(([key, value]) => [key, `/admin/${value}`]),
);

export const routesUser = Object.fromEntries(
    Object.entries({
        userListBill: 'bill',
        userProfile: 'profile',
        userChangePass: 'changepass',
    }).map(([key, value]) => [key, `/user/${value}`]),
);

const routes = {
    home: '/',
    product: '/product/:slug',
    cart: '/cart',
    order: '/order',
    login: '/login',
    signup: '/signup',
    ...routesAdmin,
    ...routesUser,
};

export default routes;
