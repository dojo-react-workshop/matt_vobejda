    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    const foundAt = [bob, alice].findIndex(({name:{length:l}}) => length > 3);