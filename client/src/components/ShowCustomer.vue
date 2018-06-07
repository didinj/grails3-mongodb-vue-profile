<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Customer
        <b-link href="#/">(Customer List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{customer.title}}
        </template>
        <template slot="lead">
          Name: {{customer.name}}<br>
          Address: {{customer.address}}<br>
          City: {{customer.city}}<br>
          Postal Code: {{customer.postalCode}}<br>
          Phone: {{customer.phone}}<br>
        </template>
        <hr class="my-4">
        <b-btn variant="success" @click.stop="editcustomer(customer.id)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deletecustomer(customer.id)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ShowCustomer',
  data () {
    return {
      customer: []
    }
  },
  created () {
    axios.get(`http://localhost:8080/customer/` + this.$route.params.id)
    .then(response => {
      this.customer = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    editcustomer (customerid) {
      this.$router.push({
        name: 'EditCustomer',
        params: { id: customerid }
      })
    },
    deletecustomer (customerid) {
      axios.delete('http://localhost:8080/customer/' + customerid)
      .then((result) => {
        this.$router.push({
          name: 'CustomerList'
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
