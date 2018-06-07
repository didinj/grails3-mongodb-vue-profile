<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Customer List
        <b-link href="#/add-customer">(Add Customer)</b-link>
      </h2>
      <b-table striped hover :items="customers" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'CustomerList',
  data () {
    return {
      fields: {
        name: { label: 'Name', sortable: true, 'class': 'text-center' },
        city: { label: 'City', sortable: true },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      customers: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:8080/customer`)
    .then(response => {
      this.customers = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    details (customer) {
      this.$router.push({
        name: 'ShowCustomer',
        params: { id: customer.id }
      })
    }
  }
}
</script>
