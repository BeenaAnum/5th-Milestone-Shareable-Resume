// Function to generate and display the resume
function generateResume() {
    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Display resume in the output div
    (document.getElementById('resumeOutput') as HTMLElement).innerHTML = `
        <p contenteditable="true"><strong>Name:</strong> ${name}</p>
        <p contenteditable="true"><strong>Email:</strong> ${email}</p>
        <p contenteditable="true"><strong>Phone:</strong> ${phone}</p>
        <p contenteditable="true"><strong>Degree:</strong> ${degree}</p>
        <p contenteditable="true"><strong>Experience:</strong> ${experience}</p>
        <p contenteditable="true"><strong>Skills:</strong> ${skills}</p>
    `;

    // Show buttons for Share Link and PDF Download
    (document.getElementById('downloadPdfButton') as HTMLButtonElement).style.display = 'inline-block';
    (document.getElementById('shareLinkButton') as HTMLButtonElement).style.display = 'inline-block';

    //Now call the generateShareLink function to create a unique shareable link(name);
    generateShareLink(name);
}

// Function to generate a shareable link

function generateShareLink(username: string) {
    const resumeURL = `https://${username}.vercel.app/resume`

    // const uniqueId = new Date().getTime();
    // const resumeURL = `${window.location.origin}/${username}-${uniqueId}-resume`;
    
    //shareable link show on screen by uesing <a>tag
    
    const shareLinkOutput = document.getElementById('shareLinkOutput') as HTMLElement;
    shareLinkOutput.innerHTML = `Shareable Link:<a href="${resumeURL}" target="_blank"> ${resumeURL}</a>`
} 
// Copy share link to clipboard
function copyShareLinkToClipboard(){
    const name =(document.getElementById('name')as HTMLInputElement).value;
    const resumeURL = `https://${name}.vercel.app/resume`

    // const uniqueId = new Date().getTime();
    // const resumeURL =`${window.location.origin}/${name}-${uniqueId}-resume`;

    navigator.clipboard.writeText(resumeURL).then(() => {
      alert(`Link copied in clipboard :${resumeURL}`)
   
    });
}

// Function to download resume as pdf
function downloadResumeAsPdf(){
    window.print(); // Opens the print dialog, which allows saving the document as a PDF
}
   
// Add event listener to the form to call the generate function on submit
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    generateResume(); // Call the resume generation function
});

// Add event listener to Download PDF button
document.getElementById('downloadPdfButton')?.addEventListener('click', downloadResumeAsPdf);

// Add event listener to Share Link button
document.getElementById('shareLinkButton')?.addEventListener('click', copyShareLinkToClipboard );

