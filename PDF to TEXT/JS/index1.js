
const input = document.getElementById('upload_file');
const openFile = document.getElementById('drop_area');

const viewer = document.querySelector('.pdf-viewer');
let currentPDF = {}

function resetCurrentPDF() {
	currentPDF = {
		file: null,
		countOfPages: 0,
		currentPage: 1,
		zoom: 1.5
	}
}


openFile.addEventListener('click', () => {
	input.click();
});

input.addEventListener('change', event => {
	const openFile = event.target.files[0];
	if (openFile.type == 'application/pdf') {
		const reader = new FileReader();
		reader.readAsDataURL(openFile);
		reader.onload = () => {
			loadPDF(reader.result);
			zoomButton.disabled = false;
		}
	}
	else {
		alert("The file you are trying to open is not a pdf file!");
	}
});

