const Employee = require('../lib/Employee');

test('Makes new employee', () => {
    const employee = new Employee('Robyn Fenty', 777, 'robyn@fenty.com')

   expect(employee.name).toBe('Robyn Fenty')
   expect(employee.id).toEqual(expect.any(Number));
   expect(employee.email).toEqual(expect.any(String));
})

test('check that methods return same info as their corresponding property values', () => {
    const employee = new Employee('Robyn Fenty', 777, 'robyn@fenty.com')

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');


})
