const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const sectionEl = document.getElementById("main-section")


              
            
function addToMain(){
    
    let htmlToGoInSection = ""     
    
    for(let i = 0 ; i < posts.length ; i++){
    htmlToGoInSection += ` 
                
              <div class="container">  
                <div class="user-info">
                    <img src="${posts[i].avatar}" class="profile-avatar" id="avatar">
                    <div class="user-details">
                        <p><span class="bold" id="name">${posts[i].name}</span></p>
                        <p id="location">${posts[i].location}</p>
                    </div>    
                </div>
                   
                <img src="${posts[i].post}" class="post" id="post" >
                
                <div class="post-info">
                  <div class="post-btns">
                        <button class="like-btn"></button>
                        <button class="comment-btn"></button>
                        <button class="dm-btn"></button>
                  </div> 
                    <p class="likes"><span class="bold"> <span id="likes">${posts[i].likes}</span>,495 Likes</span></p>
                    <p class="comment"><span class="bold" id="username"> ${posts[i].username} </span><span id="comment">${posts[i].comment}</span></p>   
                </div>  
              <div>  
                
               `
               
               
    }
    
    sectionEl.innerHTML = htmlToGoInSection
    
}    

addToMain()        


