import axios from 'axios';

export const handleUpload = async (base64data: string | ArrayBuffer) => {
	const data = {
		file: base64data,
	};
	const res = await axios.post('https://chrome-extension-y2lb.onrender.com/', data);
	console.log(res);
};

export const handleVideo = async (blobUrl: string, handleUpload: (base64data: string | ArrayBuffer) => void) => {
	let blob = await fetch(blobUrl).then((r) => r.blob());
	var reader = new FileReader();
	reader.readAsDataURL(blob);
	reader.onloadend = function () {
		var base64data = reader.result;
		handleUpload(base64data);
	};
};
