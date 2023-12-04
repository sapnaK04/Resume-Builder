function generateResume() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    document.getElementById('outputFullName').innerText = `Full Name: ${fullName}`;
    document.getElementById('outputEmail').innerText = `Email: ${email}`;
    document.getElementById('outputPhone').innerText = `Phone: ${phone}`;
    document.getElementById('outputEducation').innerText = `Education:\n${education}`;
    document.getElementById('outputExperience').innerText = `Work Experience:\n${experience}`;
    document.getElementById('outputSkills').innerText = `Skills: ${skills}`;

    document.getElementById('resumeOutput').classList.remove('hidden');
}
