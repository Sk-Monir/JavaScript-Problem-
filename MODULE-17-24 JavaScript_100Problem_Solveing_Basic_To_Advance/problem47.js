// Problem-02: Good Name, Bad Name
// Function Name Must be checkName()

// সালমান ভাই দেখতে পেলেন যে যাদে র নামের শেষে a, y, i, e, o, u, w থাকে তাদের কে আসলে ক্ষেপান ো
// যায় না । যমন Tonoy, utsho, Roide, shanto এসব ধরনে র নাম গুল োকে ব্যাংগ করে উচ্চারন করা যায় না ।

// Input: ত োমার ফাংশনটি ইনপুট নেবে একটি নাম । ইনপুট টি হবে একটি স্ট্রি ং । যে খানে character গুল ো
// ছ োট হাতে র বা বড় হাতে র হতে পারে ।

// Output: ফাংশনটি আউটপুট হিসেবে রিটার্ন করবে একটি স্ট্রি ং । যার ভ্যালুহবে Good Name অথবা Bad Name

// Challenge 📢 : ইনপুট হিসেবে স্ট্রি ং টাইপের বাইরে অন্য যে ক োন কি ছুদি লে এটা শুধুমাত্র “invalid” রিটার্ন করবে ।

// (স্ট্রি ং এ আউটপুট হবে)
// SAMPLE INPUT                 SAMPLE OUTPUT
// Salman                       Bad Name
// RAFEE                        Good Name
// Jhankar                      Bad Name
// 199                          invalid
// ["Rashed"]                   invalid

function checkName(name) {
    if (typeof name !== 'string') {
        return 'invalid'
    } else {
        const lastChar = ['a','y', 'i','e','o','u','w'];
        const nameLastChar = name[name.length - 1].toLowerCase();
        if (lastChar.includes(nameLastChar)) {
            return 'Good Name';
        }
        else {
            return 'bad Name';
        }
    }
}

const result = checkName('RAFEE');
console.log(result)
