
/** @type Array<{ id: number, name: string, email: string }> */
const users = [
    { id: 1,  name: "Ava Davis", email: "ava.davis@email.com" },
    { id: 2,  name: "Emma Johnson", email: "emma.johnson@email.com" },
    { id: 3,  name: "Isabella Martinez", email: "isabella.martinez@email.com" },
    { id: 4,  name: "James Thomas", email: "james.thomas@email.com" },
    { id: 5,  name: "Liam Wilson", email: "liam.wilson@email.com" },
    { id: 6,  name: "Mason Taylor", email: "mason.taylor@email.com" },
    { id: 7,  name: "Noah Smith", email: "noah.smith@email.com" },
    { id: 8,  name: "Olivia Brown", email: "olivia.brown@email.com" },
    { id: 9,  name: "Sophia Anderson", email: "sophia.anderson@email.com" },
    { id: 10, name: "William Jackson", email: "william.jackson@email.com" }
];

/**
 * @returns {Promise< Array< { name: string, email: string } > >}
 */
export async function getUsers() {
    return users;
}

/**
 * Removes the user with the given id. Returns the removed user or `null` if not found.
 * @param {string} id
 * @returns {Promise< null|{ id: number, name: string, email: string } >}
 */
export async function removeUser( id ) {
    const index = users.findIndex( u => u.id == id );
    return index < 0 ? null : users.splice( index, 1 );
}
