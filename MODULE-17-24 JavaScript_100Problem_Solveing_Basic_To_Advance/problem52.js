// Problem 02 : Notification Generator
// Function Name Must be sendNotification()

// As you know, an email consists of 2 parts, one is ``username'' and the other is ``domain name''.For example (zihad.ph@gmail.com)where (zihad.ph) is the username, (gmail.com) is the domain name.You need to create a function that takes an email as input.The function will create a notification message using the ``username'' and ``domain name'' parts of the email.
// The function will return a new string in which to create the message for the notification using the `username` and `domain name` parts of the email.Take a look below to see what the output will be.

// Input:
// The input will be a string, which will be an email(Ex:-, zihad@gmail.com).
// The @character will be once time in the string.It will be between userName and DomainName.

// Output:
// zihad.ph@gmail.com The output for this email will be exactly like this.
// zihad.ph sent you an email from gmail.com

// Challenge:
// If the input is not a valid email.That is email does not contain(@ ) then a  error message  will be returned "Invalid Email".

// Hints : You can use split(), indexOf() method.

// SAMPLE INPUT                                                    SAMPLE OUTPUT
// zihad@gmail.com                                                zihad sent you an email from gmail.com
// farhan34@yahoo.com                                             farhan34 sent you an email from yahoo.com
// nadim.naem5@outlook.com                                         nadim.naem5 sent you an email from outlook.com
// fahim234.hotmail.com                                            Invalid Email
// sadia8icloud.com                                                Invalid Email

function sendNotification(email) {
    if (typeof email !== 'string' || !email.includes('@') ){
        return 'Invalid Email';
    }
    const divided = email.split('@');

    const parts1 = divided[0];
    const parts2 = divided[1];

    return `${parts1} sent you an email from ${parts2}`;
    
}

const result = sendNotification('sadia8icloud.com');
console.log(result);
