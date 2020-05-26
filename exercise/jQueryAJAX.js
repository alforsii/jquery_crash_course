// Regular
// window.onload = () => {
//     document.getElementById('btn1').addEventListener('click', () => {
//         loadText()
//     })
//     const loadText = () => {
//         let xhr = new XMLHttpRequest()
//         xhr.open('GET', 'sample.txt', true)
//         xhr.onload = function() {
//             if(this.status == 200) {
//                 console.log(this.responseText)
//             }

//         }

//         xhr.send()
//     }
  
// }

//with jQuery
$(document).ready(function(){
    $('#btn1').click(() => {
        loadText()
    })
    $('#btn2').click(() => {
        getPosts()
    })

    const getPosts = () => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
       
        xhr.onload = function() {
            //this doesn't run until on readyState is 4
            if(this.status === 200) {
                const posts = JSON.parse(this.responseText)
                // let output= '';
                $('#response').html('')
                for(let i in posts) {
                    //1.
                    // output += `<div>
                    //     <h5>Title: ${posts[i].title}</h5>
                    //     <p>Body: ${posts[i].body}</p>
                    // </div>
                    // `

                    //2.
                    $('#response').append(`<div>
                    <h5 style='margin:0 auto;'>Title: ${posts[i].title}</h5>
                    <hr>
                    <p>Body: ${posts[i].body}</p>
                </div>
                `).css({ background: '#333', color: '#fff', padding: '10px'})

                }

                // $('#response').append(output)
            }
        }

        xhr.send()
    }

    const loadText = () => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'sample.txt', true)
        // console.log("xhr", this.readyState)

        // xhr.onprogress = function() {
        //     console.log(" xhr.onprogress", this.readyState)
        // }

        xhr.onload = function() {
            // console.log("xhr.onload", this.readyState)
            //this doesn't run until on readyState is 4
            if(this.status === 200) {
                console.log(this.responseText)
            }
        }

        xhr.onreadystatechange = function() {
            //this runs on readyState 1 to 4
            // console.log("xhr.onreadystatechange", this.readyState)
            if( this.readyState == 4 && this.status === 200) {
                console.log(this.responseText)
                $('#response').html('')
                $('#response').append(`<h2>${this.response}</h2>`)
            }
        }

        // xhr.onerror = function() {
        // console.log("xhr.onerror", xhr.onerror)
            
        // }
        xhr.send()
    }
  });