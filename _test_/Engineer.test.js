
const { Engineer } = require('../lib/Engineer');

test('Makes new engineer', () => {
    const engineer = new Engineer('Robyn Fenty', 777, 'robyn@fenty.com', 1)

   expect(engineer.name).toBe('Robyn Fenty')
   expect(engineer.id).toEqual(expect.any(Number));
   expect(engineer.email).toEqual(expect.any(String));
})

test('check that methods return same info as their corresponding property values', () => {
    const engineer = new Engineer('Robyn Fenty', 777, 'robyn@fenty.com', 1)

    expect(engineer.getName()).toBe(engineer.name);
    expect(engineer.getId()).toBe(engineer.id);
    expect(engineer.getEmail()).toBe(engineer.email);
    expect(engineer.getRole()).toBe('Engineer');


})
