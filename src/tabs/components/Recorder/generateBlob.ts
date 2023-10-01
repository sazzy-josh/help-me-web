import axios from 'axios';

export const handleUpload = async (base64data: string | ArrayBuffer) => {
	const recording = {
		file: base64data,
	};
	console.log(base64data);
	console.log('base64data', recording);
	const { data } = await axios.post('https://chrome-extension-y2lb.onrender.com/create', recording);
	console.log(data);
	return data;
};

export const handleVideo = async (blobUrl: string, handleUpload: (base64data: string | ArrayBuffer) => void) => {
	let blob = await fetch(blobUrl).then((r) => r.blob());
	var reader = new FileReader();
	reader.readAsDataURL(blob);
	reader.onloadend = function () {
		var base64data = reader.result;
		const result = handleUpload(base64data);
		return result;
	};
};
