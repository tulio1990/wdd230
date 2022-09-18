// const options = {month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minutes: 'numeric', seconds: 'numeric'}
// document.getElementById('last-updated').textContent = new Date().toLocaleDateString('en-US', options)

const modified = document.lastModified;
document.getElementById('last-updated').textContent = document.lastModified;