// console.log("Before");
// getUser(1, (user)=>{
//     console.log("User", user);
// });
// console.log("After");

console.log("Before");
getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos) => {
        console.log("Repos", repos);
    });
});
console.log("After");

function getUser(id, callback) {
    setTimeout(()=> {
        console.log("Reading a user from a database.....");
        callback ({id: id, gitHubUsername: "mohammed"})
    }, 2000);    
}

function getRepositories(username, callback) {
    setTimeout(()=>{
        console.log("Calling GitHub API....");
        callback(["repo1", "repo2", "repo3"])    
    }, 2000);
}

// CALL BACK HELL--ASYNCHRONOUS
console.log("Previous");
getPlayer(1, (player) => {
    getRepositories(player.gitHubUsername, (repos) => {
        getCommits(repo, (commits) => {

        });
    });
});
console.log("Next");

//SYNCHRONOUS
console.log("Previous");
const player = getPlayer(1);
const repos = getRepositories(user.gitHubUsername);
const commits = getCommits(repos[0]); 
console.log("After");