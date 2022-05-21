# CelerCore Payments

Celer Core Payments is a library with payments.

## Installation

Use the package manager [npm](https://pip.pypa.io/en/stable/) to install celercore/payments.

```bash
npm i @celercore/payments
```

## Usage

```javascript
const { Lvlup } = require('@celercore/payments')

const lvlup = new Lvlup({
    token: "YOUR_TOKEN",
    sandbox: true
})

lvlup.createPayment({
    amount: "5",
    redirectUrl: "https://example.com/redirect",
    webhookUrl: "https://example.com/webhook"
})
```

## Payment operators
- [x] [PayPal](https://paypal.com/)
- [x] [Lvlup](https://lvlup.pro/)
- [ ] [Hotpay](https://hotpay.pl/)
- [ ] [CashBill](https://www.cashbill.pl/)
- [ ] [MicroSMS](https://microsms.pl/)
- [ ] [Paybylink](https://paybylink.pl/)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
