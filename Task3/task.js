// const sendData = async(url, data) => {
//     const response = await fetch(url, {
//         method: 'POST',
//         body: data,
//     })

//     if (!response.ok) {
//         console.log(response.status)
//         throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`)
//     }

    
// }

// let url = 'https://students.netoservices.ru/nestjs-backend/upload'
// let data = 'C:\py_project\JS\JS_HW_11\Task3\text.txt'

// console.log(sendData(url, data))

// const form = document.querySelector('#form')

// console.log(form)
// let newF = new FormData(form)

// const send = document.querySelector('#form')
// send.addEventListener('submit', async(e) => {
//     e.preventDefault()

//     url = 'https://students.netoservices.ru/nestjs-backend/upload'
//     // console.log('ok')
//     const response = await fetch(url, {
//         method: 'POST',
//         body: new FormData(send)
//     })
    
//     const reader = response.body.g
//     const contentLength = +response.headers.get('Content-Length')
//     while(true) {
//         const {done, value} =await reader.read()
//         if (done) {
//             break
//         }
//         console.log(value.length, contentLength)
//     }
    
// })

const BYTES_IN_MB = 1048576
const form = document.querySelector('#form')
const fileInput = document.querySelector('#file')
const fileDesc = document.querySelector(".input__wrapper-desc");
const progress = document.querySelector('#progress')

const status1 = document.querySelector('.status') 

fileInput.addEventListener('change', function() {
    const file = this.files[0]
    console.log(file.size/BYTES_IN_MB)
    if (file.size > 8 * BYTES_IN_MB) {
        console.log('Файлы до 8мб')
        this.value = null
        fileDesc.textContent = 'Имя файла...'
    }
})

form.addEventListener('submit', function(e) {
    e.preventDefault()
    let fileUpload = fileInput.files[0]
    let sent = new FormData()
    let xhr = new XMLHttpRequest()
    console.log(fileUpload)
    sent.append('file', fileUpload)
    xhr.upload.addEventListener('progress', (e) => {
        let result = e.loaded / e.total
        progress.value = result
        status1.textContent = Math.round(result*100)
        console.log(Math.round(result*100))
    })
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
    xhr.send(sent)
})

// const progress = document.querySelector("#progress");
// const form = document.querySelector("#form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const xhr = new XMLHttpRequest();

//   xhr.upload.addEventListener("progress", (e) => {
//     if(xhr.readyState !== xhr.DONE && xhr.status === 200) {
//         progress.value = (e.loaded / e.total);
//     }
//   });

//   xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
//   const formData = new FormData(form);
//   xhr.send(formData);
// });