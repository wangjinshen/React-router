
import Home from '../contentais/home/index'
import Login from "../contentais/login/index"
import Business from './../contentais/home/business/index';
import Finance from './../contentais/home/finance/index';
import Tissue from './../contentais/home/tissue/index';
import Statistics from './../contentais/home/statistics/index';
import Order from './../contentais/home/order/index';
import UserHome from './../contentais/home/userHome/index';
import Loans from './../contentais/home/order/loans/index';
import Transfer from './../contentais/home/order/transfer/index';
import Insurance from './../contentais/home/order/insurance/index';
const RouteConfig = [
    {
        title: "首页",
        path: "/Home",
        component: Home,
        children: [
            {
                key:"1",
                title: "首页",
                path: "/Home/one",
                component: UserHome,
            },
            {
                key:"sub1",
                title: "订单管理",
                path: "/Home/order",
                component: Order,
                children: [
                    {
                        key:"2",
                        title: "贷款订单",
                        path: "/Home/order/loans",
                        component: Loans,
                    },
                    {
                        key:"3",
                        title: "转单订单",
                        path: "/Home/order/transfer",
                        component: Transfer,
                    },
                    {
                        key:"4",
                        title: "保险订单",
                        path: "/Home/order/insurance",
                        component: Insurance,
                    }
                ]
            },
            {
                key:"5",
                title: "财务管理",
                path: "/Home/finance",
                component: Finance,
            }
            ,
            {
                key:"6",
                title: "组织架构",
                path: "/Home/tissue",
                component: Tissue,
            },
            {
                key:"7",
                title: "数据统计",
                path: "/Home/statistics",
                component: Statistics,
            },
            {
                key:"8",
                title: "商务管理",
                path: "/Home/business",
                component: Business,
            }
        ]
    },
    {
        title: "登陆",
        path: "/Login",
        component: Login,
    }
]
export default RouteConfig;