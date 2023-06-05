import axios from 'axios';
const ROOT_URL = 'https://project-nerve-backend.onrender.com/api';

async function getSignedRequest(file) {
    const fileName = encodeURIComponent(file.name);
    // hit our own server to get a signed s3 url
    const response = await axios.get(`${ROOT_URL}/sign-s3?file-name=${fileName}&file-type=${file.type}`);
    console.log('response from getSignedRequest inside it: ', response);
    return response;
    // me when I need to be typing in order to make myself look cool because I'm a programmer. 
}

// return a promise that uploads file directly to S3
// note how we return the passed in url here rather than any return value
// since we already know what the url will be - just not that it has been uploaded
function uploadFileToS3(signedRequest, file, url) {
    return new Promise((fulfill, reject) => {
        console.log(`file type: ${typeof (file)}`);
        console.log(`file type: ${file.type}`);
        // axios.put(signedRequest, file, { headers: { 'Content-Type': file.type } }).then((response) => {
        //     fulfill(url);
        // }).catch((error) => {
        //     reject(error);
        // });
        fetch(signedRequest, {
            method: 'PUT',
            headers: {
                'Content-Type': file.type
            },
            body: file
        }).then((response) => {
            fulfill(url);
        }).catch((error) => {
            reject(error);
        })
    });
}

export default function uploadImage(file) {
    // returns a promise so you can handle error and completion in your component
    return getSignedRequest(file).then((response) => {
        return uploadFileToS3(response.data.signedRequest, file, response.data.url);
    });
}
