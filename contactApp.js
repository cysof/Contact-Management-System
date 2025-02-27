const prompt = require('prompt-sync') ()

/**
 * Prints the information about the contact management system
 * and the menu of what users can do with the system.
 */
function printInfor() {
    console.log("Contact Management Sysment")
    console.log(":::::::::::::::::::::::::::")
    console.log('Program Manu')
    console.log('----------------------------')

    console.log('1. Add Number to Contact')
    console.log('2. Delete Contact from Contacts')
    console.log('3. View contacts')
    console.log('4. Search for single contact')
    console.log('5. Exit the program')
    console.log()
    console.log('----------------------------')

    
}
printInfor()

/**
 * Prompts the user to enter a contact's name, email, and phone number,
 * creates a contact object with the entered information, and adds it
 * to the contacts list.
 */

function addContact() {
    const name = prompt('Enter Name: ')
    const email = prompt('Enter Email: ')
    const phone = prompt('Enter Phone Number: ')

    const contact = {
        name: name,
        email: email,
        phone:  phone,
    }
    contacts.push(contact);
    
}

/**
 * Prompts the user to enter a contact ID,
 * and removes the corresponding contact
 * from the contacts list.
 */
function deleteContact() {
    console.log('contact ID to Delete')
    console.log()
    for (let i = 0; i < contacts.length; i++){
        const contact = contacts[i]
        console.log((i + 1).toString() + ":", contact.name, contact.email)
    }
    const number = parseInt('Enter contac ID')
    if (isNaN(number) || number > contacts.length) {
        console.log('Invalid ID')

        return
    }
    contacts.splice(-1, 1)
    console.log('Contact Removed')
    
}

/**
 * Prints all the contacts in the given list
 * in a formatted way. The name, email and phone
 * numbers are printed out.
 *
 * @param {object[]} contacts - The list of contacts to be printed.
 */
function viewContact(contacts) {
    for (let contact of contacts) {
        console.log("-----------------------------")
        console.log("   LIST OF YOUR CONTACT ")
        console.log("-----------------------------")
        console.log("Name:", contact.name)
        console.log("Email:", contact.email)
        console.log("Contact", contact.phone)
        console.log("-----------------------------")
    }
    
    
}

/**
 * Searches through the contacts list for a contact
 * with a name that includes the given search string.
 *
 * @param {string} searchString - The string to search for in the contacts list.
 */
function searchContact() {
    const searchString = prompt('Search: ').toLowerCase
    const result = [];
    for (let contact of contacts) {
        if (contact.name.toLowerCase().includes(searchString)) result.push(contact)
    }
    viewContact(result);
}


let contacts = [];



let keepgoing = true;


console.log()
while (keepgoing) {
    const number = prompt('Enter Number 1 - 5 to perform operation: ')
    switch (number) {
        case '1':
            console.log('Add number')
            addContact()
            break;
        case '2':
            console.log('Delete  number')
            deleteContact()
            break;
        case '3':
            viewContact(contacts)
            break;
        case '4':
            searchContact()
            break;
        case '5':
            keepgoing = false;
            console.log('Thanks for using my Program :)')
            break;
        
        default:
            console.log("Invalid Input")
            break;
    }
}