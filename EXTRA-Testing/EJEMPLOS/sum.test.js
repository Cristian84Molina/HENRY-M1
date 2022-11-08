/// it === test
const sum = require('./sum')

it ('should return 8 if adding 3 and 5', () => {
    expect(sum(3, 5)). toBe(8);
    
})