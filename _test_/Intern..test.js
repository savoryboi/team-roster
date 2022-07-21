
const { Intern } = require('../lib/Intern');

test('Makes new intern', () => {
    const intern = new Intern('Robyn Fenty', 777, 'robyn@fenty.com', 1)

   expect(intern.name).toBe('Robyn Fenty')
   expect(intern.id).toEqual(expect.any(Number));
   expect(intern.email).toEqual(expect.any(String));
})

test('check that methods return same info as their corresponding property values', () => {
    const intern = new Intern('Robyn Fenty', 777, 'robyn@fenty.com', 1)

    expect(intern.getName()).toBe(intern.name);
    expect(intern.getId()).toBe(intern.id);
    expect(intern.getEmail()).toBe(intern.email);
    expect(intern.getRole()).toBe('Intern');


})
