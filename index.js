var _a, _b, _c;
// Function to generate and display the resume
function generateResume() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Display resume in the output div
    document.getElementById('resumeOutput').innerHTML = "\n        <p contenteditable=\"true\"><strong>Name:</strong> ".concat(name, "</p>\n        <p contenteditable=\"true\"><strong>Email:</strong> ").concat(email, "</p>\n        <p contenteditable=\"true\"><strong>Phone:</strong> ").concat(phone, "</p>\n        <p contenteditable=\"true\"><strong>Degree:</strong> ").concat(degree, "</p>\n        <p contenteditable=\"true\"><strong>Experience:</strong> ").concat(experience, "</p>\n        <p contenteditable=\"true\"><strong>Skills:</strong> ").concat(skills, "</p>\n    ");
    // Show buttons for Share Link and PDF Download
    document.getElementById('downloadPdfButton').style.display = 'inline-block';
    document.getElementById('shareLinkButton').style.display = 'inline-block';
    //Now call the generateShareLink function to create a unique shareable link(name);
    generateShareLink(name);
}
// Function to generate a shareable link
function generateShareLink(username) {
    var resumeURL = "https://".concat(username, ".vercel.app/resume");
    // const uniqueId = new Date().getTime();
    // const resumeURL = `${window.location.origin}/${username}-${uniqueId}-resume`;
    //shareable show on screen by uesing <a>tag
    var shareLinkOutput = document.getElementById('shareLinkOutput');
    shareLinkOutput.innerHTML = "Shareable Link:<a href=\"".concat(resumeURL, "\"target=\"_blank\"> ").concat(resumeURL, "</a>");
}
// Copy share link to clipboard
function copyShareLinkToClipboard() {
    var name = document.getElementById('name').value;
    // const uniqueId = new Date().getTime();
    // const resumeURL =`${window.location.origin}/${name}-${uniqueId}-resume`;
    var resumeURL = "https://".concat(name, ".vercel.app/resume");
    navigator.clipboard.writeText(resumeURL).then(function () {
        alert("Link copied in clipboard :".concat(resumeURL));
    });
}
// Function to download resume as pdf
function downloadResumeAsPdf() {
    window.print(); // Opens the print dialog, which allows saving the document as a PDF
}
// Add event listener to the form to call the generate function on submit
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    generateResume(); // Call the resume generation function
});
// Add event listener to Download PDF button
(_b = document.getElementById('downloadPdfButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', downloadResumeAsPdf);
// Add event listener to Share Link button
(_c = document.getElementById('shareLinkButton')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', copyShareLinkToClipboard);
