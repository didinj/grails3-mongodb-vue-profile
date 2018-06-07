<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Customer
        <b-link href="#/">(Customer List)</b-link>
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Customer Name">
          <b-form-input id="name" :state="state" v-model.trim="customer.name"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Customer Address">
            <b-form-textarea id="address"
                       v-model="customer.address"
                       placeholder="Enter something"
                       :rows="2"
                       :max-rows="6">{{customer.address}}</b-form-textarea>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Customer City">
          <b-form-input id="city" :state="state" v-model.trim="customer.city"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Customer Postal Code">
          <b-form-input id="postalCode" :state="state" v-model.trim="customer.postalCode"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Phone">
          <b-form-input id="phone" :state="state" v-model.trim="customer.phone"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Save</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'CreateCustomer',
  data () {
    return {
      customer: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:8080/customer`, this.customer)
      .then(response => {
        this.$router.push({
          name: 'ShowCustomer',
          params: { id: response.data.id }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>
