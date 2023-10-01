import React from 'react';
import RecordModal from './Recorder/RecordModal';
import MediaRecorder from './Recorder/MediaRecorder';
import useScreenRecorder from 'use-screen-recorder';
const ScreenRecoder = () => {
	const [isVideo, setIsVideo] = React.useState(false);
	const [isAudio, setIsAudio] = React.useState(false);
	const { pauseRecording, resetRecording, resumeRecording, startRecording, status, stopRecording, blobUrl } = useScreenRecorder({
		audio: isAudio,
	});

	return (
		<main
			className='flex gap-4 '
			style={{
				width: '1500px',
			}}>
			{status === 'permission-requested' && <RecordModal isVideo={isVideo} isAudio={isAudio} setIsVideo={setIsVideo} setIsAudio={setIsAudio} startRecording={startRecording} />}
			<MediaRecorder isVideo={isVideo} isAudio={isAudio} setIsVideo={setIsVideo} setIsAudio={setIsAudio} pauseRecording={pauseRecording} resetRecording={resetRecording} resumeRecording={resumeRecording} startRecording={startRecording} status={status} stopRecording={stopRecording} blobUrl={blobUrl} />
		</main>
	);
};

export default ScreenRecoder;
