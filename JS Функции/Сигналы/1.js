const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];

const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
];

const b = _.get(emails, '');
console.log(b);


const getFreeDomainsCount = (emails) => {
    const r = emails.map((string) => string.split('@'));
    /*
    for (const [, string] of r) {
        console.log(string);
        
    }
    */
    const email = r.map(([, domain]) => domain);
    const freeEmail = email.filter((string) => 
        string === 'yandex.ru' || string === 'gmail.com' || string == 'hotmail.com')
    console.log(freeEmail);

    const cb = (acc, string) => {
        if (_.has(acc, string)) {
            acc[string] += 1;
        } else {
            acc[string] = 1;
        }
        return acc;
    }
    
    const result = freeEmail.reduce(cb, {});
    console.log(result);
    
    
    
    
    //console.log(r);
    //  console.log(email);
    
    
}

getFreeDomainsCount(emails);
// может можно как то с помощью map или filter сделать удобное хранилище.
// reduce в конце, чтобы посчитать кол-во.


// BEGIN ОБЯЗАТЕЛЬНО ПОСМОТРЕТЬ
const getFreeDomainsCount = (emails) => emails
  .map((email) => {
    const [, domain] = email.split('@');
    return domain;
  })
  .filter((domain) => freeEmailDomains.includes(domain))
  .reduce((acc, domain) => {
    const count = get(acc, domain, 0) + 1;
    return { ...acc, [domain]: count };
  }, {});

export default getFreeDomainsCount;
// END

