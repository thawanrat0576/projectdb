import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import BuyTicket from '@/components/BuyTicket'
import NewEvent from '@/components/NewEvent'
import PaymentEvent from '@/components/PaymentEvent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/buyticket',
      name: 'Buy',
      component: BuyTicket
    },
    {
      path: '/newevent',
      name: 'Event',
      component: NewEvent
    },
    {
      path: '/payment',
      name: 'Payment',
      component: PaymentEvent
    },
  ]
})
