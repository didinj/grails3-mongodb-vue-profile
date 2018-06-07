import Vue from 'vue'
import Router from 'vue-router'
import CustomerList from '@/components/CustomerList'
import CreateCustomer from '@/components/CreateCustomer'
import ShowCustomer from '@/components/ShowCustomer'
import EditCustomer from '@/components/EditCustomer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CustomerList',
      component: CustomerList
    },
    {
      path: '/show-customer/:id',
      name: 'ShowCustomer',
      component: ShowCustomer
    },
    {
      path: '/add-customer',
      name: 'CreateCustomer',
      component: CreateCustomer
    },
    {
      path: '/edit-customer/:id',
      name: 'EditCustomer',
      component: EditCustomer
    }
  ]
})
