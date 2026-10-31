interface RegistrationData {
    firstName: string,
    lastName: string,
    street: string,
    city: string,
    state: string,
    zipCode: string,
    phoneNumber: string,
    ssn: string,
    username: string,
    password: string
}


const createRegistrationData = (): RegistrationData => {
    return {
        firstName: 'John',
        lastName: 'Doe',
        street: '1234 Main St',
        city: 'Atlanta',
        state: 'Georgia',
        zipCode: '30301',
        phoneNumber: '4045550123',
        ssn: '123456789',
        username: `qauser${Date.now()}`,
        password: 'Test@12345',
    };
};

export {
    createRegistrationData,
    RegistrationData
};