'use strict';

let zlib = require('zlib');
const axios = require("axios");

class Lvlup {
    constructor({token = "", sandbox = true}) {
        this.baseUrl = `https://api${sandbox ? '.sandbox' : ''}.lvlup.pro/v4/`
        this.token = token

        if (!token) throw new Error("[Lvlup] A token is required")
    }

    async createPayment({amount, redirectUrl, webhookUrl}) {
        const data = {
            method: 'post',
            url: `${this.baseUrl}wallet/up`,
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            },
            data: {
                amount,
                redirectUrl,
                webhookUrl
            }
        }
        try {
            const response = await axios(data)
            return response.data
        } catch (e) {
            return e.response.data
        }
    }

    async checkPayment(paymentId) {
        const data = {
            method: 'get',
            url: `${this.baseUrl}wallet/up/${paymentId}`,
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            }
        }
        try {
            const response = await axios(data)
            return response.data
        } catch (e) {
            return e.response.data
        }
    }

    async getPayments() {
        const data = {
            method: 'get',
            url: `${this.baseUrl}payments`,
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            }
        }
        try {
            const response = await axios(data)
            return response.data
        } catch (e) {
            return e.response.data
        }
    }
}

module.exports = {Lvlup: Lvlup}
