
const { Manager } = require('../lib/Manager');

test('Makes new manager', () => {
    const manager = new Manager('Robyn Fenty', 777, 'robyn@fenty.com', 1)

   expect(manager.name).toBe('Robyn Fenty')
   expect(manager.id).toEqual(expect.any(Number));
   expect(manager.email).toEqual(expect.any(String));
})

test('check that methods return same info as their corresponding property values', () => {
    const manager = new Manager('Robyn Fenty', 777, 'robyn@fenty.com', 1)

    expect(manager.getName()).toBe(manager.name);
    expect(manager.getId()).toBe(manager.id);
    expect(manager.getEmail()).toBe(manager.email);
    expect(manager.getRole()).toBe('Manager');


})
