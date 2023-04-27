let updatePerson=require('./ex4.js');

test('Test Update Person',()=>{
    let person={
        firstName:"John",
        lastName:"Doe",
        location:{
            address:"Baker Street",
            postalCode:"12345",
            city:"London",            
        }
    }

    let result1= updatePerson(person,"firstName","Joseph");

    expect(result1.firstName).toBe("Joseph");
    expect(person.firstName).toBe("John");
    
})