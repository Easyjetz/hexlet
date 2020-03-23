function getValue() {
    return this.value;
  };
  
  function exchangeTo(currency) {
    const quantity = this.value;
    const currentCurrency = this.currency;
  
    if (currency === 'eur' && currentCurrency === 'usd') {
      const value = quantity * 0.7;
      return new Money(value, currency);
    } else if (currency === 'usd' && currentCurrency === 'eur') {
      const value = quantity * 1.2;
      return new Money(value, currency);
    }
  };
  
  function add(money) {
    
    let coefficient = 0;
    let value = money.value;
    const currencyMoney = money.currency;
    const currentCurrency = this.currency;
    
    currencyMoney == 'usd' ? coefficient = 0.7 : coefficient = 1.2;
   

    console.log(coefficient);

    if (currencyMoney != currentCurrency) {
        value = value * coefficient;
    }
  
    
    return new Money(value + this.value, currentCurrency);
  }

  function format() {
    if (this.currency == 'eur') {
        return `€${this.value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    } 
    return `$${this.value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  }
  
  
  function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
    this.getValue = getValue;
    this.exchangeTo = exchangeTo;
    this.add = add;
    this.format = format;
  };
  
  const money1 = new Money(1);
  const money2 = new Money(200, 'eur');
  const money4 = money1.add(money2);
  console.log(money4.format());

  money10 = new Money(10.20);
  console.log(money10.format());


// BEGIN
const rates = {
    usd: {
      eur: 0.7,
    },
    eur: {
      usd: 1.2,
    },
  };
  
  export default function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
  }
  
  Money.prototype.format = function format() {
    // bad design (pass undefined the function), but it is js
    return this.getValue().toLocaleString(undefined, { style: 'currency', currency: this.getCurrency() });
  };
  
  Money.prototype.getValue = function getValue() {
    return this.value;
  };
  
  Money.prototype.getCurrency = function getCurrency() {
    return this.currency;
  };
  
  Money.prototype.exchangeTo = function exchangeTo(newCurrency) {
    const currency = this.getCurrency();
    if (currency === newCurrency) {
      return new Money(this.getValue(), currency);
    }
    const newValue = this.getValue() * rates[currency][newCurrency];
    return new Money(newValue, newCurrency);
  };
  
  Money.prototype.add = function add(money) {
    const convertedMoney = money.exchangeTo(this.getCurrency());
    const additionalValue = convertedMoney.getValue();
    return new Money(this.getValue() + additionalValue, this.getCurrency());
  };
  // END